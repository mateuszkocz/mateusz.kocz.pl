import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

const PostHeading = styled.h3`
  margin: 0;
  font-weight: inherit;
  display: inline;
`

const PostsList = styled.ul`
  padding-left: 0;
  margin-top: 2rem;
`

const PostItem = styled.li`
  margin: 1em 0;
  font-size: 1.2rem;
`

const CategoryLink = styled(Link)`
  transform: rotate(90deg);
  margin-left: 1rem;
  font-size: 1rem;
  && {
    color: ${({ theme }) => theme.dimmedColor};
    -webkit-background-clip: initial;
    -webkit-text-fill-color: initial;
  }
`

const NavLinks = styled.nav`
  font-size: 1rem;
  && {
    margin-top: 0;
  }
`

const TodayILearned = ({
  data: {
    tilPosts: { edges: tilPosts },
  },
  pageContext: { category },
}) => {
  return (
    <Layout title={"Today I Learned" + category ? " in " + category : ""}>
      <h1>Today I Learned {category && <span>in #{category}</span>}</h1>
      <NavLinks>
        {category && <span><Link to="/today-i-learned">Show all</Link> or{" "}</span>}
        <Link to="/">Back home</Link>
      </NavLinks>
      <PostsList>
        {tilPosts.map(
          ({
            node: {
              id,
              frontmatter: { category, title },
              fields: { path, categoryPath },
            },
          }) => (
            <PostItem key={id}>
              <PostHeading>
                <Link to={path}>{title}</Link>
              </PostHeading>
              <CategoryLink to={categoryPath}>#{category}</CategoryLink>
            </PostItem>
          )
        )}
      </PostsList>
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
