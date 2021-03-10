import React from "react"
import { Link } from "gatsby"
import SEO from "./seo"
import { OutboundLink } from "gatsby-plugin-google-analytics"

const Layout = ({ children, title = "" }) => (
  <>
    <SEO title={title} />
    <main className="my-0 mx-auto min-h-screen sm:py-4 sm:px-0 md:px-12 py-4 px-12 flex flex-col justify-center align-middle">
      <section className="content my-auto mx-auto text-4xl leading-snug max-w-prose">{children}</section>
      <aside className="star relative my-0 mx-auto pt-4 px-4 pb-0 text-sm">
        <aside className="absolute bottom-0 w-48 text-gray-400 right-full text-right">
          <OutboundLink href="https://github.com/mateuszkocz/mateusz.kocz.pl">
            Source on GitHub
          </OutboundLink>
        </aside>
        <Link to="/" className="border-b border-current">
          ★
        </Link>
        <aside className="absolute bottom-0 w-48 text-gray-400 left-full">
          Warsaw, {new Date().getFullYear()}
        </aside>
      </aside>
    </main>
  </>
)

export default Layout
