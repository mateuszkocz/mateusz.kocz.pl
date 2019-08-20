import React from "react"
import { Link } from "gatsby"
import SwaggedLayout from "../components/swagged-layout"

const Success = () => (
  <SwaggedLayout title="Message sent">
    <h1>Message sent successfully.</h1>
    <p>Thanks! Be in touch shortly.</p>
    <p>Meanwhile, <Link to="/">go back to the home page</Link>.</p>
  </SwaggedLayout>
)

export default Success
