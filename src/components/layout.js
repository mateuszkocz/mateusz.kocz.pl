import React from "react"
import styled, { createGlobalStyle, ThemeProvider } from "styled-components"
import SEO from "./seo"

const theme = {
  fontColor: '#444',
  dimmedColor: '#a1a1a1',
}

const GlobalStyles = createGlobalStyle`
  body, #___gatsby, #___gatsby > * {
    min-height: 100vh;
  }
  
  html, body {
    margin: 0;
    padding: 0;
    line-height: 1.4;
    font-family: 'Source Sans Pro', sans-serif;
  }
`

const Main = styled.main`
  margin: 0 auto;
  padding: 1rem 3rem;
  min-height: 100vh;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: center;

  font-size: 2rem;
  color: ${props => props.theme.fontColor};
  
  @media (min-width: 34rem) {
    padding: 1rem 0;
    max-width: 80%;
  }

  @media (min-width: 50rem) {
    max-width: 60%;
  }

  h1 {
    margin: 1rem 0 0;
    font-size: inherit;
    font-weight: inherit;
  }

  p {
    margin: 2rem 0 0;
  }

  a {
    border-bottom: 1px solid;
    padding-bottom: 1px;
    text-decoration: none;
    color: inherit;
  }
`

const Content = styled.section`
  margin: auto 0;
`

const Star = styled.aside`
  margin: 0 auto;
  padding-top: 1rem;
  font-size: 50%;
  color: ${props => props.theme.dimmedColor};

  span {
    cursor: pointer;
  }
`

const Layout = ({children, title = ''}) => (
  <>
    <GlobalStyles/>
    <SEO title={title}/>
    <ThemeProvider theme={theme}>
      <Main>
        <Content>
          {children}
        </Content>
        <Star>
          <span>★</span>
        </Star>
      </Main>
    </ThemeProvider>
  </>
)

export default Layout
