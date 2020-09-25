import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { LandingWrapper, LandingBox, P, H2 } from "../elements"

export const LandingSection = ({ fixed }) => {
    /* Get the profile pic img */
    const data = useStaticQuery(graphql`
    query {
      imageSharp(fixed: { originalName: { eq: "alien-profile.png" } }) {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
  `)

  return <LandingWrapper>
            <LandingBox>
                <H2>The planet is threatened</H2>
                <P>Never in all their history have men been able truly to conceive of the world as one: a single sphere, a globe, having the qualities of a globe, a round earth in which all the directions eventually meet, in which there is no center because every point, or none, is center — an equal earth which all men occupy as equals. The airman’s earth, if free men make it, will be truly round: a globe in practice, not in theory.</P>
            </LandingBox>
            <LandingBox>
            <Img
                fixed={fixed ? fixed : data.imageSharp.fixed}
            />
            </LandingBox>
        </LandingWrapper>
}