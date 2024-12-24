import Logo from "../Logo.tsx";
import styled from "styled-components";
import { GoSearch } from "react-icons/go";

const Nav = styled.nav`
  display: flex;
  padding: 1rem;
  
  flex-direction: column;
  width: 20rem;
  background-color: #f9fafa;
  border-radius: 7px;
`;
const SearchBar = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;
  border-radius: 5px;
  height: 2.5rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 10px;




`;
const SearchInput = styled.input`
border: none;
outline: none;
padding: 5px 1rem;

`;

export default function Navbar() {
  return (
    <Nav>
      <Logo />
      <SearchBar>
      <GoSearch />

      <SearchInput type="text" placeholder="Search" />
      </SearchBar>
    </Nav>
  );
}
