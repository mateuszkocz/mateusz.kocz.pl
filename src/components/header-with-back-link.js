import React from 'react';
import styled from "styled-components"
import { Link } from "gatsby"

const Header = styled.header`
  position:relative;
`

const BackLink = styled(Link)`
  position:absolute;
  top: .5rem;
  left: -40px;
  display: block;
  width: 26px;
  height: 26px;
  border-bottom: none !important;
  padding: 0 !important;
  border-radius: 26px;
  border: 1px solid ${props => props.theme.startColor} !important;
  transition: transform 150ms;
  
  &:hover {
    transform: translateX(-8px);
  }

  // Arrow.
  &:before {
    content: "";
    position:relative;
    top: 8px;
    left: 10px;
    display:block;
    width: 8px;
    height: 8px;
    border-width: 0 0 2px 2px;
    border-radius: 1px;
    border-color: ${props => props.theme.startColor};
    border-style: solid;
    transform: rotate(45deg);
  }
  
  // Mask behind the link to avoid jumping when the looses hover due to the
  // movement animation.
  &:after {
    content: "";
    position: absolute;
    right: 0;
    top: -5%;
    width: 100%;
    height: 110%;
    background: transparent;
  }
  
  &:hover :after {
    transform: translateX(8px);
  }
`

const HeaderWithBackLink = ({to, children}) => (
  <Header>
    <BackLink to={to}/>
    {children}
  </Header>
)

export default HeaderWithBackLink
