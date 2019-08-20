import React from "react"
import styled from "styled-components"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { MDXRenderer } from "gatsby-plugin-mdx"
import HeaderWithBackLink from "../components/header-with-back-link"

const Article = styled.article`
  font-size: 70%;
  line-height: 1.5;
  color: ${({ theme: { fontColor } }) => fontColor};

  pre {
    line-height: 0;
    margin: 1.5rem 0;
  }

  code {
    font-size: 70%;
  }

  a {
    color: ${({ theme: { startColor } }) => startColor};
    &:hover {
      color: ${({ theme: { endColor } }) => endColor};
    }
  }

  .gatsby-highlight-code-line {
    background-color: #feb;
    display: block;
    margin-right: -1em;
    margin-left: -1em;
    padding-right: 1em;
    padding-left: 0.75em;
    border-left: 0.25em solid ${({ theme: { startColor } }) => startColor};
  }
`

const HeadingLink = styled(Link)`
  && {
    border-bottom-color: transparent;
    &:hover {
      border-bottom-color: currentColor;
    }
  }
`

const TodayILearnedPost = ({
  data: {
    post: {
      frontmatter: { title },
      body,
    },
  },
  path,
  location: {
    state: { category },
  },
}) => (
  <Layout title={title}>
    <HeaderWithBackLink to={"/today-i-learned" + (category ? `/${category}` : "")}>
      <h1>
        <HeadingLink to={path}>{title}</HeadingLink>
      </h1>
    </HeaderWithBackLink>
    <Article>
      <MDXRenderer>{body}</MDXRenderer>
    </Article>
  </Layout>
)

export default TodayILearnedPost

export const query = graphql`
  query Post($id: String!) {
    post: mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
      body
    }
  }
`
