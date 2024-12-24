import Logo from "../Logo.tsx";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default function Navbar() {
  return (
    <Nav>
      <Logo />
    </Nav>
  );
}
