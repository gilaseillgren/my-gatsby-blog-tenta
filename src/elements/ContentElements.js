import styled from "styled-components"

export const ContentWrapper = styled.main`
  border: 4px solid ${props => props.theme.colors.main3};
  grid-column: 3 / span 10;
  grid-row: 4 / span 5;
  background-color: black;
  padding: ${props =>
    `${props.theme.spacings.xLarge} ${props.theme.spacings.xxLarge}`};

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    padding: ${props =>
      `${props.theme.spacings.medium} ${props.theme.spacings.large}`};
  }
`
