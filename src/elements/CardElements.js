import styled from "styled-components"

export const CardWrapper = styled.div`
  margin: 1em;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.colors.dark4};
  position: relative;

  p {
    max-height: 88px;
    overflow: hidden;
    color: ${props => props.theme.colors.light3};
  }
  h2 {
    color: ${props => props.theme.colors.light2};
  }

  .date {
    position: absolute;
    top: -16px;
    padding: 8px 18px;
    background-color: ${props => props.theme.colors.light2};
    font-style: italic;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    margin: 2em 1em;
  }
`
