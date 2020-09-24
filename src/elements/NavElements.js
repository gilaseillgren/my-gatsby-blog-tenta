import styled from "styled-components"

export const NavWrapper = styled.nav`
  grid-column: 1 / span 14;
  grid-row: 1 / 2;
  display: grid;
  justify-content: stretch;
  align-items: center;
  background-color: none;
  z-index: 1;

  /* Responsive menu */
  @media ${props => props.theme.breakpoints.mobile} {
    grid-column: 1 / span 8;

    .navbar {
      background-color: black;
    }
    .navbar.active {
      div {
        display: list-item;
      }
    }
    .brand {
        float: right;
        text-align: right;
      }
    }

  .navbar {
    background-color: none;
    .toggle,
    .brand {
      display: inline-block;
      text-decoration: none;
    }
    .link {
      font-weight: 700;
      display: block;
      width: 100%;
      text-align: center;
      padding: 1.3em 1rem 1rem 1rem;
      text-decoration: none;
      color: white;
      &:hover,
      &:active {
        text-decoration: underline;
      }
    }
    .brand img {
      width: 10em;
      text-align: center;
      padding: 0.5rem;
      margin: 10px;
    }
    .toggle {
    font-size: 20px;
    font-weight:900;
    padding: 6px 10px 10px 9px;
    width: 40px;
    height: 40px;
    border-radius: 25px;
    color: white;
    vertical-align: middle;
    border: 2px solid white;
    background-color: rgb(0 0 255 / 0%);
    margin: 20px;
    }
  }

  @media ${props => props.theme.breakpoints.minMobile} {
    .navbar {
      display: flex;
      .left,
      .right {
        display: flex !important;
        flex: 1;
      }
      .link {
        width: auto;
      }
      .right {
        justify-content: flex-end;
      }
      .toggle {
        display: none;
      }
    }
  }

  .navbar {
    div {
      display: none;
      @media ${props => props.theme.breakpoints.minMobile} {
        display: flex;
      }
    }
  }

`
