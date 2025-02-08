import { Typography } from "@mui/material";
import React, { useState } from "react";
import {
  ButtonContainer,
  CalculatorButton,
  CalculatorCard,
  CalculatorContainer,
  DisplayField,
} from "../styles/CalculatorStyles";
import { buttonData, operators } from "../utils/calculatorUtils";
import { evaluateData } from "../helpers/calcHelper";

const Calculator = () => {
  const [value, setValue] = useState("");

  const handleOperation = (variable) => {
    value !== "Error"
      ? variable === "="
        ? setValue(evaluateData(value))
        : variable === "Del"
        ? setValue((prv) => prv.slice(0, -1))
        : variable === "AC"
        ? setValue("")
        : operators.includes(variable) && value.length === 0
        ? setValue("")
        : operators.includes(variable) &&
          operators.includes(value[value.length - 1])
        ? setValue(value.replace(value[value.length - 1], variable))
        : setValue((prv) => prv + variable)
      : setValue("");
  };

  const isNumber = (val) => !isNaN(val) || val === "00";
  return (
    <CalculatorContainer>
      <CalculatorCard>
        <Typography variant="h5" align="center" gutterBottom>
          Calculator
        </Typography>

        <DisplayField
          variant="outlined"
          fullWidth
          value={value}
          InputProps={{ readOnly: true }}
        />

        <ButtonContainer>
          {buttonData.map((data, index) => (
            <CalculatorButton
              key={index}
              variantType={isNumber(data) ? "number" : "operator"}
              onClick={() => handleOperation(data)}
            >
              {data}
            </CalculatorButton>
          ))}
        </ButtonContainer>
      </CalculatorCard>
    </CalculatorContainer>
  );
};

export default Calculator;
