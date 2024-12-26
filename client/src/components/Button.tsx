import styled from "styled-components";

const ButtonWrapper = styled.button`
  outline: 0;
  border: 0;
`;

export const Button = ({ children }) => {
  return <ButtonWrapper>{children}</ButtonWrapper>;
};
