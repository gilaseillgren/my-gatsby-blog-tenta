import styled from "styled-components"

/* Create a styled header element */
export const FeatureImageWrapper = styled.header`
  grid-column: 1 / span 14;
  grid-row: 1 / 4;
  overflow: hidden;
  position: relative;

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
  }
`
