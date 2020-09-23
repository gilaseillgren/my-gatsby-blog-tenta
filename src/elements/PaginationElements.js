import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export const PaginationWrapper = styled.div`
  grid-column: 2 / span 12;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: -3rem 0 6rem 0;

  a:nth-child(1) {
    color: ${props =>
      props.isFirst ? props.theme.colors.dark3 : props.theme.colors.dark1};
    pointer-events: ${props => (props.isFirst ? "none" : "auto")};
    cursor: ${props => (props.isFirst ? "default" : "pointer")};
  }

  a:nth-child(2) {
    color: ${props =>
    props.isLast ? props.theme.colors.dark3 : props.theme.colors.dark1};
    pointer-events: ${props => (props.isLast ? "none" : "auto")};
    cursor: ${props => (props.isLast ? "default" : "pointer")};
  }


  a {
    background-color: ${props => props.theme.colors.light2};
    width: 50px;
    font-size: 1.8em;
    height: 50px;
    text-align: center;
    border-radius: 31px;
    padding: 16px 10px;
  }
  a:hover {
    text-decoration: none;
  }

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
  }
`

export const PaginationElement = styled(props => <Link {...props} />)`
  font-size: 0.875rem;
  line-height: 1.125rem;
  font-weight: 400;
  text-decoration: none;
  margin: 0 2rem;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`
