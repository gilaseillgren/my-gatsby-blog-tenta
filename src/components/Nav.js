import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import { NavWrapper } from "../elements"

function toggleNav() {
  var x = document.getElementById("nav-list");
  if (x.style.display !== "block") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

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
      <Link to="/" className="toggle" onClick={toggleNav}>:::</Link>  
      <Link to="/" className="brand">
        <img src={data.logo.publicURL} alt="My Logo" />
      </Link>
      <div className="right" id="nav-list">
        <Link to="/" className="link">Home</Link>  
        <Link to="/" className="link">About us</Link>  
        <Link to="/" className="link">Contact</Link>  
      </div>
      </div>
    </NavWrapper>
  )
}
