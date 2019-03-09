import React from "react"
import Layout from "../components/layout"

const Contact = () => (
  <Layout title="Contact">
    <form
      name="contact-form"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="bot-field"/>
      <label>
        Your Name:
        <input type="text" name="name" required/>
      </label>
      <label>
        Email:
        <input type="email" name="email" required/>
      </label>
      <label>
        Message:
        <textarea name="message" required/>
      </label>
      <button type="submit">Send</button>
    </form>
  </Layout>
)

export default Contact
