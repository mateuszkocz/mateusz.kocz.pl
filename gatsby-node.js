const _ = require("lodash")
const path = require("path")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const todayILearnedTemplate = path.resolve(
    "src/components/today-i-learned.component.js"
  )
  const { errors, data } = await graphql`
    query TodayILearnedPosts {
      tilPosts: allMdx {
        edges {
          node {
            frontmatter {
              title
              date
              category
            }
          }
        }
      }
      categories: allMdx {
        group(field: frontmatter___category) {
          fieldValue
        }
      }
    }
  `
  if (errors) {
    reporter.panicOnBuild("Error while getting #til posts.")
    return
  }

  const categories = data.categories.group
  categories.forEach(({ fieldValue }) => {
    createPage({
      path: `/tags/${_.kebabCase(fieldValue)}`,
      component: todayILearnedTemplate,
      context: {
        category: fieldValue,
      },
    })
  })
}
