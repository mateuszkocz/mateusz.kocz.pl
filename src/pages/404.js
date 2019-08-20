import React from "react"
import { Link } from "gatsby"
import SwaggedLayout from "../components/swagged-layout"

const NotFoundPage = () => (
  <SwaggedLayout title="404">
    <h1>Not Found.</h1>
    <p>
      Yes, it's 404.
    </p>
    <p>
      It's not what you're looking for.
      <Link to="/">Go to the home page</Link>.
    </p>
  </SwaggedLayout>
)

export default NotFoundPage
