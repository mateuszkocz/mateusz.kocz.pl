import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <h1>Hi, I'm Mateusz and I'm a software developer.</h1>
    <p>
      I create web applications in JavaScript and TypeScript. I&nbsp;mostly
      use React. Sometimes I&nbsp;also write some Angular and server-side
      Express code.
    </p>
    <p>
      Check out my <a href="https://radiatingstar.com/">blog</a>,
      {" "}<a href="https://github.com/mateuszkocz">code on GitHub</a>,
      {" "}<a href="https://stackoverflow.com/users/1382409/mateusz-kocz">
      a&nbsp;profile on StackOverflow</a>
      {" "}and a <a href="https://www.linkedin.com/in/mateuszkocz/">CV on
      LinkedIn</a>. Or <Link to="/contact">contact me</Link>.
    </p>
  </Layout>
)

export default IndexPage
