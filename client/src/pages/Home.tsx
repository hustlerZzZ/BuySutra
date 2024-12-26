import { FaUserCircle } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa6";
import styled from "styled-components";

export default function Home() {
  const Container = styled.div`
    padding: 1rem;
    width: 100%;
  `;
  const Topbar = styled.div`
    display: flex;
    justify-content: space-between;
  `;
  const TopBarItems = styled.div`
    display: flex;
    gap: 3rem;
  `;
  const DateContainer = styled.div`
    display: flex;
    gap: 7px;
    align-items: center;
    font-weight: 500;
  `;
  const Date = styled.span``;
  const BreadCrumb = styled.div``;
  const AccountContainer = styled.div`
    display: flex;
    gap: 12px;
  `;
  const UserName = styled.span`
    font-weight: 600;
  `;
  const UserLocation = styled.span`
    font-weight: 400;
    color: #a5a6a8;
    font-size: 12px;
  `;
  const UserDetails = styled.div`
    display: flex;
    flex-direction: column;
  `;
  return (
    <Container>
      <Topbar>
        <BreadCrumb>Home {">"} Store</BreadCrumb>
        <TopBarItems>
          <DateContainer>
            <FaCalendar size={20} color="#a5a6a8" />
            <Date>Tuesday, October 18</Date>
          </DateContainer>

          <AccountContainer>
            <FaUserCircle size={30} color="#a5a6a8" />
            <UserDetails>
              <UserName>Prince Pal</UserName>
              <UserLocation>Delhi, India</UserLocation>
            </UserDetails>
          </AccountContainer>
        </TopBarItems>
      </Topbar>
      
    </Container>
  );
}
