import styled from "styled-components"

/* Create a styled footer element */
export const FooterWrapper = styled.footer`
  grid-column: 2 / span 12;
  padding: 1rem 1rem 0 1rem;
  justify-content: center;
  align-items: flex-start;
  background-color: ${props => props.theme.colors.dark4};
  border-radius: 2rem 2rem 0 0;

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
    border-radius: 0;
    padding: 2rem 0 0 0;
  }
`

export const FooterContentWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;

  p {
    text-align: left;
    flex: 0 0 100%;
  }
`

export const FooterSocialIcons = styled.div`
  margin: 1rem;

  img {
    height: 17px;
    padding: 0 0.4rem;
    transition: filter 0.3s ease;
  }

  img:hover,
  img:focus {
    filter: brightness(50%);
  }
`
