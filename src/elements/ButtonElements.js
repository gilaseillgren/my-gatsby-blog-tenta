import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

/* We are styling a LINK component */
export const ButtonWrapper = styled(props => <Link {...props} />)`
  padding: 0.4rem;
  color: ${props => props.theme.colors.light1};
  font-weight: 700;
  font-size: 0.875rem;
  width: fit-content;
  transition: filter 0.3s ease;
  text-decoration: none;
  width: 100%;
  text-align: center;

  &:hover,
  &:focus {
    filter: brightness(110%);
  }
`
