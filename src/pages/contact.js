import React from "react"
import Layout from "../components/layout"

const Contact = () => (
  <Layout>
    <form
      name="contact-form"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="bot-field"/>
      <label>
        Your Name: <input type="text" name="name"/>
      </label>
      <button type="submit">Send</button>
    </form>
  </Layout>
)

export default Contact
