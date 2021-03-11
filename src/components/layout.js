import React from "react"
import { Link } from "gatsby"
import SEO from "./seo"
import { OutboundLink } from "gatsby-plugin-google-analytics"

const Layout = ({ children, title = "" }) => (
  <>
    <SEO title={title} />
    <main className="my-0 mx-auto min-h-screen pb-12 pt-4 px-12 flex flex-col justify-center align-middle">
      <section className="content my-auto mx-auto py-8 text-4xl text-main leading-snug max-w-prose space-y-8">{children}</section>
      <aside className="relative my-0 mx-auto pt-4 px-4 pb-0 text-sm text-main">
        <aside className="absolute bottom-0 w-48 text-gray-500 right-full text-right">
          <OutboundLink href="https://github.com/mateuszkocz/mateusz.kocz.pl">
            Source on GitHub
          </OutboundLink>
        </aside>
        <Link to="/" className="border-none">
          ★
        </Link>
        <aside className="absolute bottom-0 w-48 text-gray-500 left-full">
          Warsaw, {new Date().getFullYear()}
        </aside>
      </aside>
    </main>
  </>
)

export default Layout
