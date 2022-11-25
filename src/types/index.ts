export type ButtonType = "submit";
export type OptionValueType = 10 | 15 | 20;

export interface IOption {
  value: OptionValueType;
  label: string;
  isSearchable?: boolean;
}