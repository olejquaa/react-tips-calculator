import Select from "react-select";
import { IOption } from "../../types";
import { styles } from "./styles";

interface IProps {
  options: IOption[];
  value: IOption;
  isSearchable: boolean;
  onChange: (newValue: IOption | null) => void;
}

export const CustomSelect = (props: IProps) => {
  return <Select {...props} isMulti={false} styles={styles} />;
};