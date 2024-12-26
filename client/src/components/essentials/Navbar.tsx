import { Link } from "react-router-dom";
import Logo from "../Logo.tsx";
import styled from "styled-components";
import { Button } from "../Button.tsx";

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const UlWrapper = styled.ul`
  display: flex;
  align-items: center;
`;

const LinkWrapper = styled.li`
  padding: 0 20px;
  list-style: none;
`;

export default function Navbar() {
  return (
    <Nav>
      <Logo />

      <UlWrapper>
        <LinkWrapper>
          <Link to="/">Home</Link>
        </LinkWrapper>
        <LinkWrapper>
          <Link to="/">Products</Link>
        </LinkWrapper>
        <LinkWrapper>
          <Link to="/">Categories</Link>
        </LinkWrapper>
        <LinkWrapper>
          <Link to="/">About Us</Link>
        </LinkWrapper>
        <LinkWrapper>
          <Link to="/">Contact Us</Link>
        </LinkWrapper>
      </UlWrapper>

      <div>
        <Button>Join Us</Button>
      </div>
    </Nav>
  );
}
