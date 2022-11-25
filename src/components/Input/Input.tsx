import { ChangeEvent } from "react";
import { StyledInput } from "./styles";

interface IProps {
    placeholder: string;
    type: string;
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ placeholder, type, value, onChange, }: IProps) => {
  return (
    <StyledInput
      placeholder={placeholder}
      type={type}
      value={parseInt(value)}
      onChange={onChange}
    />
  );
};
