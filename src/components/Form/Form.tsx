import { useState, useEffect } from "react";
import { useInput } from "../../hooks/useInput";
import { IOption } from "../../types";
import { Button } from "../Button/Button";
import { CustomSelect } from "../CustomSelect/CustomSelect";
import { Input } from "../Input/Input";
import { StyledForm, FormTitle, FormSubtitle, FormTotal } from "./styles";


export const Form = () => {
  const options: IOption[] = [
    {
      value: 10,
      label: "10%",
    },
    {
      value: 15,
      label: "15%",
    },
    {
      value: 20,
      label: "20%",
    },
  ];

  const bill = useInput();
  const personsAmount = useInput();
  const [total, setTotal] = useState(0);
  const [tips, setTips] = useState<IOption>(options[0]);
  const [isDisable, setDisable] = useState(true);

  const handleTotal = () => {
    const billTotalSum = (100 + tips.value) * +bill.value / 100 ;
    const countPersonsTips = +billTotalSum / +personsAmount.value;

    setTotal(countPersonsTips);
  };

  const onChange = (newValue: IOption | null) => {
    if (newValue) {
      setTips(newValue);
    }
  };

    useEffect(() => {
    (bill.value && personsAmount.value !== "") ? setDisable(false):setDisable(true);
  }, [bill.value, personsAmount.value]);


  return (
    <StyledForm>
      <FormTitle>Welcome to App</FormTitle>
      <FormSubtitle>Let’s go calculate your tips</FormSubtitle>
      <Input {...bill} placeholder="Enter bill" type="number" />
      <Input {...personsAmount}  placeholder="Enter persons" type="number"  />
      <CustomSelect value={tips} options={options} onChange={onChange} isSearchable={false} />
      <FormTotal> Total: {total.toFixed(2)}$ </FormTotal>
      <Button type="submit" hasOpacity={isDisable} isDisable={isDisable} handleTotal={handleTotal} >
        Ohhhoooo 🍻
      </Button>
    </StyledForm>
  );
};