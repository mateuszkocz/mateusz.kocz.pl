import React from "react"
import { Link } from "gatsby"
import { OutboundLink } from 'gatsby-plugin-google-analytics'
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
      Check out my <OutboundLink href="https://radiatingstar.com/">blog</OutboundLink>,
      {" "}<OutboundLink href="https://github.com/mateuszkocz">code on GitHub</OutboundLink>,
      {" "}<OutboundLink href="https://stackoverflow.com/users/1382409/mateusz-kocz">
      a&nbsp;profile on StackOverflow</OutboundLink>
      {" "}and a <OutboundLink href="https://www.linkedin.com/in/mateuszkocz/">CV on
      LinkedIn</OutboundLink>. Or <Link to="/contact">contact me</Link>.
    </p>
  </Layout>
)

export default IndexPage
