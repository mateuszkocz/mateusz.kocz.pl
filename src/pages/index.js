import React from "react"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import Layout from "../components/layout"

// Regarding those <span>s: Safari can't properly display the text in block
// elements with -webkit-text-fill-color. Only inline content works.

const IndexPage = () => (
  <Layout>
    <h1 className="">
      <span>
        Hi, I'm Mateusz. I'm a&nbsp;software developer and a&nbsp;team lead.
      </span>
    </h1>
    <p>
      <span>
        I manage a web team and work on JavaScript and TypeScript apps using
        React and Nest. I'm interested in constant improvement of my craft.
        Currently, I'm studying software architecture and design patterns.
      </span>
    </p>
    <p>
      <span>
        Check out my <OutboundLink
        href="https://radiatingstar.com/">blog</OutboundLink>,
        {" "}<OutboundLink href="https://github.com/mateuszkocz">code on
        GitHub</OutboundLink>, a&nbsp;<OutboundLink
        href="https://stackoverflow.com/users/1382409/mateusz-kocz">
        profile on Stack Overflow</OutboundLink>
        {" "}and a&nbsp;<OutboundLink
        href="https://www.linkedin.com/in/mateuszkocz/">CV
        on LinkedIn</OutboundLink>.
      </span>
    </p>
  </Layout>
)

export default IndexPage
