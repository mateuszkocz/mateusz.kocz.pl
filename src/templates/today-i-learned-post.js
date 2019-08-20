import React from "react"
import styled from "styled-components"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { MDXRenderer } from "gatsby-plugin-mdx"

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

const Header = styled.header`
  position:relative;
`

const BackLink = styled(Link)`
  position:absolute;
  top: .5rem;
  left: -40px;
  display: block;
  width: 26px;
  height: 26px;
  border-bottom: none !important;
  padding: 0 !important;
  border-radius: 26px;
  border: 1px solid ${props => props.theme.startColor} !important;
  transition: transform 150ms;
  
  &:hover {
    transform: translateX(-8px);
  }

  // Arrow.
  &:before {
    content: "";
    position:relative;
    top: 8px;
    left: 10px;
    display:block;
    width: 8px;
    height: 8px;
    border-width: 0 0 2px 2px;
    border-radius: 1px;
    border-color: ${props => props.theme.startColor};
    border-style: solid;
    transform: rotate(45deg);
  }
  
  // Mask behind the link to avoid jumping when the looses hover due to the
  // movement animation.
  &:after {
    content: "";
    position: absolute;
    right: 0;
    top: -5%;
    width: 100%;
    height: 110%;
    background: transparent;
  }
  
  &:hover :after {
    transform: translateX(8px);
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
    <Header>
      <BackLink to={"/today-i-learned" + (category ? `/${category}` : "")} />
      <h1>
        <HeadingLink to={path}>{title}</HeadingLink>
      </h1>
    </Header>
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
