const _ = require("lodash")
const path = require("path")

const slugifyCategory = category => _.lowerCase(_.kebabCase(category))

const tilPath = "/today-i-learned"

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (
    node.internal.type === "File" &&
    node.sourceInstanceName === "today-i-learned"
  ) {
    createNodeField({ node, name: "slug", value: node.relativeDirectory })
  } else if (node.internal.type === "Mdx" && typeof node.slug === "undefined") {
    const fileNode = getNode(node.parent)
    const slug = fileNode.fields.slug
    const category = slugifyCategory(node.frontmatter.category)
    createNodeField({
      node,
      name: "path",
      value: `${tilPath}/${category}/${slug}`,
    })
    createNodeField({
      node,
      name: "categoryPath",
      value: `${tilPath}/${category}`,
    })
  }
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const todayILearnedIndexTemplate = path.resolve(
    "src/pages/today-i-learned.js"
  )
  const todayILearnedPostTemplate = path.resolve(
    "src/templates/today-i-learned-post.js"
  )
  const { errors, data } = await graphql(`
    query TodayILearnedPosts {
      tilPosts: allMdx {
        edges {
          node {
            id
            fields {
              path
            }
          }
        }
      }
      categories: allMdx {
        group(field: frontmatter___category) {
          fieldValue
          edges {
            node {
              fields {
                categoryPath
              }
            }
          }
        }
      }
    }
  `)

  if (errors) {
    reporter.panicOnBuild("Error while getting #til posts.")
    return
  }

  const categories = data.categories.group
  categories.forEach(
    ({
      fieldValue,
      edges: [
        {
          node: {
            fields: { categoryPath },
          },
        },
      ],
    }) =>
      createPage({
        path: categoryPath,
        component: todayILearnedIndexTemplate,
        context: {
          category: fieldValue,
          categoryRegex: `/${fieldValue}/`,
        },
      })
  )

  const tilPosts = data.tilPosts.edges
  tilPosts.forEach(({ node: { id, fields: { path } } }) =>
    createPage({
      path,
      component: todayILearnedPostTemplate,
      context: {
        id,
      },
    })
  )
}
