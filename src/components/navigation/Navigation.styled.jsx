import {NavLink } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    padding:20px;
    width: 500px;
    margin-top: 30px;
    margin-left:auto;
    margin-right: auto;
    border-radius: 4px;
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
`

export const LinkStyle = styled(NavLink)`
  color: black;
  text-decoration: none;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 22px;
  font-weight: bold;
  transition: all 500ms ease;
  &.active {
    color: #1651B8;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #1651B8;
  }
`;