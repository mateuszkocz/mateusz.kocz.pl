import React from "react"
import { Link } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import Layout from "../components/layout"

// Regarding those <span>s: Safari can't properly display the text in block
// elements with -webkit-text-fill-color. Only inline content works.

const IndexPage = () => (
  <Layout>
    <h1>
      <span>
        Hi, I'm Mateusz and I'm a software developer.
      </span>
    </h1>
    <p>
      <span>
        I create web applications in JavaScript and TypeScript. I&nbsp;mostly
        use React. Sometimes I&nbsp;also write some Angular and server-side
        Express code.
      </span>
    </p>
    <p>
      <span>
        Check out my <OutboundLink
        href="https://radiatingstar.com/">blog</OutboundLink>,
        {" "}<OutboundLink href="https://github.com/mateuszkocz">code on
        GitHub</OutboundLink>, a&nbsp;<OutboundLink
        href="https://stackoverflow.com/users/1382409/mateusz-kocz">
        profile on StackOverflow</OutboundLink>
        {" "}and a&nbsp;<OutboundLink
        href="https://www.linkedin.com/in/mateuszkocz/">CV
        on LinkedIn</OutboundLink>. Or <Link to="/contact">contact me</Link>.
      </span>
    </p>
  </Layout>
)

export default IndexPage
