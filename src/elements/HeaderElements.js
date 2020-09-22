import styled from "styled-components"

export const HeaderWrapper = styled.div`
grid-column: 1 / span 14;
height: 100%;
grid-row: 2 / span 1;
z-index: 1;
text-align: center;
display: table;

h1 {
    display: table-cell;
    vertical-align: middle;
    font-weight: 900;
    color: white;
    text-align: center;
    font-size: 4em;
    text-shadow: 0px 0px 6px rgba(150, 150, 150, 1);
}

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    padding: ${props =>
      `${props.theme.spacings.medium} ${props.theme.spacings.large}`};
  }
`
