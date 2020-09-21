import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import { NavWrapper } from "../elements"

export const Nav = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "myblog-logo.png" }) {
        publicURL
      }
    }
  `)

  return (
    <NavWrapper>

      <div className="navbar">
      <Link to="/" className="toggle"><i className="fas fa-ellipsis-h"></i></Link>  
      <Link to="/" className="brand">
        <img src={data.logo.publicURL} alt="My Logo" />
      </Link>
      <div className="right">
        <Link to="/" className="link">Home</Link>  
        <Link to="/" className="link">About us</Link>  
        <Link to="/" className="link">Contact</Link>  
      </div>
      </div>
    </NavWrapper>
  )
}
