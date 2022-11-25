import { ReactNode } from "react";
import { ButtonType } from "../../types";
import { StyledButton } from "./styles";

interface IProps {
  children: ReactNode;
  type?: ButtonType;
  hasOpacity: boolean;
  isDisable: boolean;
  handleTotal?: () => void;
}

export const Button = ({ children,  type, hasOpacity, isDisable, handleTotal }: IProps) => {
  return (
    <StyledButton type={type} hasOpacity={hasOpacity} disabled={isDisable} onClick={handleTotal}>
      {children}
    </StyledButton>
  );
};