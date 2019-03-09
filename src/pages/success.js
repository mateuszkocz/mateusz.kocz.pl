import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const Success = () => (
  <Layout title="Message sent">
    <h1>Message sent successfully.</h1>
    <p>Thanks! Be in touch shortly.</p>
    <p>Meanwhile, <Link to="/">go back to the home page</Link>.</p>
  </Layout>
)

export default Success
