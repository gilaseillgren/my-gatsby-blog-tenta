import styled from "styled-components"

export const LandingWrapper = styled.section`    
    grid-column: 2 / span 12;
    grid-row: 4 / span 4;
    background-color: black;
    padding: 6rem 6rem 8rem 6rem;   
    display: inline-flex;

  @media ${props => props.theme.breakpoints.tablet} {
    grid-row: 4 / span 2;

      div:nth-child(1) {
          h2, p {
            text-align: center;
          }
      }
      div:nth-child(2) {
          display: none;
      }
  }

  @media ${props => props.theme.breakpoints.mobile} {
  }
`
export const LandingBox = styled.div`

  h2 {
      color: ${props => props.theme.colors.light2};
      font-weight: 900;
      margin-bottom: 1rem;
  }

  p {
      color: ${props => props.theme.colors.light3};
      text-align: left;
  }

  img {
      
    left: inherit !important;
    right: 0;
    max-width: 200px;
    height: auto !important;
  }

`
