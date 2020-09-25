import styled from "styled-components"

/* Create a styled div element */
export const ContainerWrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr repeat(12, minmax(auto, 4.2rem)) 1fr;
  grid-template-rows: 4rem 65vh 5rem auto auto;
  gap: 0 2rem;
  background-color: black;

  @media ${props => props.theme.breakpoints.tablet} {
    grid-template-columns: 0rem repeat(6,1fr) 0rem;
    grid-gap: 0 0rem;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    grid-template-columns: 0rem repeat(6,1fr) 0rem;
    grid-gap: 0 0rem;
  }
`
