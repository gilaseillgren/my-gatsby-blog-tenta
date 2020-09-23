import styled from "styled-components"

export const ContentWrapper = styled.main`
  grid-column: 2 / span 12;
  grid-row: 6 / span 7;
  background-color: black;
  padding: ${props => `${props.theme.spacings.xxLarge}`};    
  display: grid;
  grid-template-columns: auto auto auto;

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
    grid-template-columns: auto auto;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    padding: ${props =>
      `${props.theme.spacings.medium} ${props.theme.spacings.large}`};
    grid-template-columns: auto;
  }
`
