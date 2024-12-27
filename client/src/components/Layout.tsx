import { Outlet } from "react-router-dom";
import Navbar from "./essentials/Navbar.tsx";
import Footer from "./essentials/Footer.tsx";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: auto 1fr auto;
 
`;

export default function Layout() {
  return (
    <Wrapper>
      <Navbar />
      <Outlet />
      <Footer />
    </Wrapper>
  );
}
