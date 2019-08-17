import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const TodayILearnedPost = ({
  data: {
    post: {
      frontmatter: { title },
    },
  },
}) => (
  <Layout>
    <h1>{title}</h1>
  </Layout>
)

export default TodayILearnedPost

export const query = graphql`
  query Post($id: String!) {
    post: mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
  }
`
