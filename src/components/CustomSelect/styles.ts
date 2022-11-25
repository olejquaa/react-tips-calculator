import { StylesConfig } from "react-select";
import { IOption } from "../../types";

export const styles: StylesConfig<IOption> = {
  singleValue: (baseStyles) => ({
    ...baseStyles,
    marginLeft: 42,
    textAlign: "center",
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 18,
    color: "#756C6C",
  }),
 
  control: (baseStyles) => ({
    ...baseStyles,
    height: 50,
    borderRadius: 30,
    border: "none",
    display: "flex",
    justifyContent: "space-around",
    textAlignLast: "center",
   
  }),
  
  indicatorSeparator: (baseStyles) => ({
    ...baseStyles,
    width: 0,

  }),
  
  valueContainer: (baseStyles) => ({
    ...baseStyles,
    fontFamily: "Montserrat",

  })
};