import React from "react"
import { Link } from "gatsby"
import SEO from "./seo"
import { OutboundLink } from "gatsby-plugin-google-analytics"

const Layout = ({ children, title = "" }) => (
  <>
    <SEO title={title} />
    {/* TODO: text was #444 instead of gray-800. */}
    {/* TODO: `sm` needs max-width 80%. */}
    {/* TODO: `md` needs max-width 60%. */}
    <main className="my-0 mx-auto min-h-screen py-4 px-12 flex flex-col justify-center text-4xl text-gray-800 sm:py-4 sm:px-0">
      <section className="content my-auto mx-0">{children}</section>
      {/* TODO: text size should be 50%. */}
      <aside className="star relative my-0 mx-auto pt-4 px-4 pb-0 text-xs">
        <aside className="omake omake-right right-full text-right">
          <OutboundLink href="https://github.com/mateuszkocz/mateusz.kocz.pl">
            Source on GitHub
          </OutboundLink>
        </aside>
        <Link to="/" className="border-b border-current">
          ★
        </Link>
        <aside className="omake omake-left left-full">
          Warsaw, {new Date().getFullYear()}
        </aside>
      </aside>
    </main>
  </>
)

export default Layout
