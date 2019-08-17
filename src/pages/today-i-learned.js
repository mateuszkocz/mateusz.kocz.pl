import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"

const TodayILearned = ({
  data: {
    tilPosts: { edges: tilPosts },
  },
  pageContext: { category },
}) => {
  return (
    <Layout>
      <h1>Today I Learned</h1>
      {category && <h2>{category}</h2>}
      <ul>
        {tilPosts.map(
          ({
            node: {
              id,
              frontmatter: { category, title },
              fields: { path, categoryPath },
            },
          }) => (
            <li key={id}>
              <Link to={path}>
                <h3>{title}</h3>
              </Link>
              <Link to={categoryPath}>{category}</Link>
            </li>
          )
        )}
      </ul>
    </Layout>
  )
}

export default TodayILearned

export const query = graphql`
  query TodayILearnedPosts($categoryRegex: String = "//") {
    tilPosts: allMdx(
      filter: { frontmatter: { category: { regex: $categoryRegex } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            category
            title
          }
          fields {
            path
            categoryPath
          }
        }
      }
    }
  }
`
