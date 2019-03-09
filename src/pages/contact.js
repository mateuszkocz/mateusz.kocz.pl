import React from "react"
import styled, {css} from 'styled-components'
import Layout from "../components/layout"

const Label = styled.label`
  span {
    display: block;
  }
`

const inputsStyles = css`
  display: block;
  width: 100%;
  border: none;
  border-bottom: 1px solid #a1a1a1;
  padding: .5rem 0;
  font-size: 1rem;
  
  &:invalid, &:focus {
    outline: none;
  }
  
  &:focus {
    border-bottom-color: black;
  }
`

const Input = styled.input`
  ${inputsStyles};
`

const TextArea = styled.textarea`
  ${inputsStyles};
`

const SubmitButton = styled.button`
  margin-right: 1rem;
  margin-bottom: 1.5rem;
  border: 1px solid currentColor;
  background: none;
  font-size: inherit;
  padding: 1rem;
  line-height: 1;
`

const Contact = () => (
  <Layout title="Contact">
    <h1>Contact</h1>
    <form
      name="contact-form"
      method="post"
      action="/success"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="bot-field"/>
      <p>
        <Label>
          <span>Your name</span>
          <Input type="text" name="name" required placeholder="Who are you?" autoFocus/>
        </Label>
      </p>
      <p>
        <Label>
          <span>Your email</span>
          <Input type="email" name="email" required placeholder="How to reach you?"/>
        </Label>
      </p>
      <p>
        <Label>
          <span>Message</span>
          <TextArea name="message" required placeholder="What's up?" rows="5"/>
        </Label>
      </p>
      <p>
        <SubmitButton type="submit">Send</SubmitButton>
        <a href="/">Back home</a>.
      </p>
    </form>
  </Layout>
)

export default Contact
