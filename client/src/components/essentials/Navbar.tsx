import {  NavLink } from "react-router-dom";
import Logo from "../Logo.tsx";
import styled from "styled-components";
import { Button } from "../Button.tsx";

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  width: 100%;
  padding: 1rem;
`;

const UlWrapper = styled.ul`
  display: flex;
  align-items: center;
  position: absolute;
  justify-content: center;
  left: 36%;
  border-radius: 3rem;
  padding: 1rem 2rem;
  backdrop-filter: blur(10px);

  background-color: #78cee444;
`;

const LinkWrapper = styled.li`
  padding: 0 20px;
  list-style: none;
`;
const Links = styled(NavLink)`
  text-decoration: none;
  color: #1d1d1d;
  &.active {
    font-weight: 600;
  }
  &:hover {
    text-decoration: underline;

  }
`;

export default function Navbar() {
  return (
    <Nav>
      <Logo />

      <UlWrapper>
        <LinkWrapper>
          <Links to="/">Home</Links>
        </LinkWrapper>
        <LinkWrapper>
          <Links to="/products">Products</Links>
        </LinkWrapper>
        <LinkWrapper>
          <Links to="/products">Categories</Links>
        </LinkWrapper>
        <LinkWrapper>
          <Links to="/about">About Us</Links>
        </LinkWrapper>
        <LinkWrapper>
          <Links to="/contact">Contact Us</Links>
        </LinkWrapper>
      </UlWrapper>

      <div>
        <Button>Join Us</Button>
      </div>
    </Nav>
  );
}
