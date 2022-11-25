import styled from "styled-components";

export const StyledButton = styled.button<{ hasOpacity: boolean }>`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 35px;
  background-color: #2ed2c9;
  border: none;
  color: white;
  opacity: ${({ hasOpacity }) => (hasOpacity ? 0.5 : 1)};
  :disabled {
    cursor: not-allowed;
  }
  
`;