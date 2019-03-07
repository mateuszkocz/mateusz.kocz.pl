import React from "react"
import styled, { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  html, body, #___gatsby, #___gatsby > * {
    height: 100%;
    margin: 0;
    padding: 0;
    line-height: 1.4;
  }
`

const Main = styled.main`
  position: relative;
  margin: 0 auto;
  padding: 1rem;
  max-width: 800px;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 2rem;

  h1 {
    margin: 0;
    font-size: inherit;
    font-weight: normal;
  }

  p {
    margin: 2rem 0 0;
  }

  a {
    color: inherit;
    text-decoration: none;
    border-bottom: 1px solid;
    padding-bottom: 1px;
  }
`

const Star = styled.aside`
  position: absolute;
  width: 100%;
  bottom: 1rem;
  text-align: center;
  font-size: 1.5rem;
  span {
    cursor: pointer;
  }
`

const IndexPage = () => (
  <Main>
    <GlobalStyles/>
    <h1>Hi, I'm Mateusz and I'm a software developer.</h1>
    <p>
      I create web applications in JavaScript and Typescript. I&nbsp;mostly use
      React.
      Sometimes I&nbsp;also write some Angular and server side Express code.
    </p>
    <p>
      Check out my <a href="https://radiatingstar.com/">blog</a>,
      {" "}<a href="https://github.com/mateuszkocz">code on GitHub</a>,
      {" "}<a href="https://stackoverflow.com/users/1382409/mateusz-kocz">profile
      on StackOverflow</a>
      {" "}and a <a href="https://www.linkedin.com/in/mateuszkocz/">CV on
      LinkedIn</a>.
    </p>
    <Star>
      <span>★</span>
    </Star>
  </Main>
)

export default IndexPage
