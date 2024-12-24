import { Outlet } from "react-router-dom";
import Navbar from "./essentials/Navbar.tsx";
import Footer from "./essentials/Footer.tsx";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  padding: 1rem;
  
`;

export default function Layout() {
  return (
    <Wrapper>
      <Navbar />
      <div>
        <Outlet />
        <Footer />
      </div>
    </Wrapper>
  );
}
