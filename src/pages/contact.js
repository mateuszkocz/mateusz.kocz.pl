import React, { useEffect, useState } from "react"
import styled, { css } from "styled-components"
import Layout from "../components/layout"
import { Link, navigate } from "gatsby"

const Label = styled.label`
  margin: 2rem 0 0;
  display: block;
`

const inputsStyles = css`
  display: block;
  width: 100%;
  border: none;
  border-bottom: 1px solid ${props => props.theme.dimmedColor};
  padding: .5rem 0;
  font-family: inherit;
  font-size: 1rem;
  
  ${props => props.disabled && css`
    cursor: not-allowed;
    opacity: .5;
  `};
  
  &:required {
    box-shadow: none
  }
  
  &:invalid, &:focus {
    outline: none;
  }
  
  &:focus {
    border-bottom-color: currentColor;
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
  padding: 1rem;
  background: none;
  font-size: inherit;
  color: inherit;
  line-height: 1;
  cursor: ${props => props.disabled ? "not-allowed" : "pointer"};
`

const isWindowAvailable = () => typeof window !== "undefined"
const withWindow = (callback, defaultValue) => isWindowAvailable() ? callback(window) : defaultValue

const getOnlineStatus = () => withWindow(window => window.navigator.onLine, true)
const addWindowEvent = (event, listener) => withWindow(window => window.addEventListener(event, listener))
const removeWindowEvent = (event, listener) => withWindow(window => window.removeEventListener(event, listener))

const useOnline = callback =>
  useEffect(() => {
    const listener = () => callback(getOnlineStatus())
    addWindowEvent("online", listener)
    addWindowEvent("offline", listener)
    return () => {
      removeWindowEvent("online", listener)
      removeWindowEvent("offline", listener)
    }
  }, [callback])

const encode = (data) =>
  Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")

const getValuesFromForm = form =>
  Array
    .from(form)
    .filter(({ name, value }) => name && value)
    .reduce((acc, { name, value }) => ({ ...acc, [name]: value, }), {})

const handleSubmit = e => {
  e.preventDefault()
  const form = e.target
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encode({
      "form-name": form.getAttribute("name"),
      ...getValuesFromForm(form),
    }),
  })
    .then(() => navigate(form.getAttribute("action")))
    .catch(error => alert(error))
}

const Contact = () => {
  const [online, setOnlineStatus] = useState(getOnlineStatus())
  useOnline(setOnlineStatus)

  return (
    <Layout title="Contact">
      <h1>Contact</h1>
      {
        !online &&
        <p>You're offline so the form won't work. Check your network.</p>
      }
      <form
        name="contact-form"
        method="POST"
        action="/success?no-cache=1"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="bot-field"/>
        <Label>
          <span>Your name</span>
          <Input
            type="text"
            name="name"
            required
            placeholder="Who are you?"
            autoFocus
            disabled={!online}
          />
        </Label>
        <Label>
          <span>Your email</span>
          <Input
            type="email"
            name="email"
            required
            placeholder="How to reach you?"
            disabled={!online}
          />
        </Label>
        <Label>
          <span>Message</span>
          <TextArea
            name="message"
            required
            placeholder="What's up?"
            rows="5"
            disabled={!online}
          />
        </Label>
        <p>
          <SubmitButton type="submit " disabled={!online}>Send</SubmitButton>
          <Link to="/">Back home</Link>.
        </p>
      </form>
    </Layout>
  )
}

export default Contact
