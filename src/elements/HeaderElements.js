import styled from "styled-components"

export const HeaderWrapper = styled.div`
grid-column: 1 / span 14;
height: 100%;
grid-row: 2 / span 1;
z-index: 1;
text-align: center;
display: table;

h1 {
    letter-spacing: 5px;
    display: table-cell;
    vertical-align: middle;
    font-weight: 900;
    color: white;
    text-align: center;
    font-size: 3.5em;
    text-shadow: 0px 0px 6px rgba(150, 150, 150, 1);
}

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;

    h1 {
        letter-spacing: 5px;
        font-size: 2.5em;
        line-height: 1.5em;
    }
  }

  @media ${props => props.theme.breakpoints.mobile} {
    padding: ${props =>
      `${props.theme.spacings.medium} ${props.theme.spacings.large}`};
  }
`
