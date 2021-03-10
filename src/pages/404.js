import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const NotFoundPage = () => (
  <Layout title="404">
    <h1 className="mt-4 mb-0">Not Found. Yes, it's 404.</h1>
    <p>
      It's not what you're looking for.
    </p>
    <p>
      <Link to="/">Go to the home page</Link>.
    </p>
  </Layout>
)

export default NotFoundPage
