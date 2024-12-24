import styled from "styled-components";

const Span = styled.span`
  font-size: 1.3rem;
  font-weight: 600;

`;

const Img = styled.img`
  height: 4rem;
  margin-right: 2rem;
`;
const Wrapper = styled.div`
  display: flex;
align-items: center;
`;

export default function Logo() {
  return (
    <Wrapper>
      <Img src="/logo.jpg" alt="logo" />
      <Span>ShopWave</Span>
    </Wrapper>
  );
}
