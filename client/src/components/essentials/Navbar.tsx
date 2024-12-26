import Logo from "../Logo.tsx";
import styled from "styled-components";
import { GoHomeFill, GoSearch } from "react-icons/go";
import { Link } from "react-router-dom";
import { AiFillProduct } from "react-icons/ai";
import { IoChatbox } from "react-icons/io5";
import { MdContactPage, MdLiveHelp } from "react-icons/md";
import { FaGear } from "react-icons/fa6";
import { HiOutlineLogin } from "react-icons/hi";

const Nav = styled.nav`
  display: flex;
  padding: 1rem;

  flex-direction: column;
  width: 18rem;
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
  background: #fff;
  padding-left: 1rem;
`;
const SearchInput = styled.input`
  border: none;
  outline: none;
  padding: 3px 1rem;
`;
const NavContainer = styled.div`
  margin-top: 2rem;
`;
const NavTitle = styled.div`
  font-size: 12px;
  color: #ababac;
`;
const NavItems = styled.div`
  margin: 1rem;
  color: #a5a6a8;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
const NavItem = styled.div`
  display: flex;
  align-items: center;
`;

const NavItemName = styled(Link)`
  margin-left: 1rem;
  text-decoration: none;
  color: #a5a6a8;
`;
const Wrapper = styled.div`
height: 100%;
  display:  flex;
  flex-direction: column;
  justify-content: space-between;

`
export default function Navbar() {
  return (
    <Nav>
      <Logo />
      <SearchBar>
        <GoSearch />

        <SearchInput type="text" placeholder="Search" />
      </SearchBar>
<Wrapper>
<NavContainer>
        <NavTitle>MENU</NavTitle>
        <NavItems>
          <NavItem>
            <GoHomeFill size={22} />
            <NavItemName to="/">Home</NavItemName>
          </NavItem>
          <NavItem>
            <AiFillProduct size={22} />
            <NavItemName to="/products">Products</NavItemName>
          </NavItem><NavItem>
            <IoChatbox size={22} />
            <NavItemName to="/About">About us</NavItemName>
          </NavItem>
          <NavItem>
            <MdContactPage size={22} />
            <NavItemName to="/contact">Contact us</NavItemName>
          </NavItem>
        </NavItems>
      </NavContainer>
      <NavContainer>

        <NavTitle>OTHERS</NavTitle>
        <NavItems>
          <NavItem>
            <MdLiveHelp size={20} />
            <NavItemName to="/">Get Help</NavItemName>
          </NavItem>
          <NavItem>
            <FaGear size={20} />
            <NavItemName to="/products">Settings</NavItemName>
          </NavItem><NavItem>
            <HiOutlineLogin  size={20} />
            <NavItemName to="/About">Log out</NavItemName>
          </NavItem>
         
        </NavItems>
      </NavContainer>
</Wrapper>
     
    </Nav>
  );
}
