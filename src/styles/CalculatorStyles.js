import { Box, Card, Button, TextField } from "@mui/material";
import { styled } from "@mui/system";

// Container for the calculator
export const CalculatorContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  backgroundColor: "#f9f9f9",
  padding: "16px",
});

// Card for calculator layout
export const CalculatorCard = styled(Card)({
  padding: "20px",
  width: "300px",
  borderRadius: "20px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  backgroundColor: "#fff",
});

// Display input field
export const DisplayField = styled(TextField)({
  marginBottom: "16px",
  "& .MuiInputBase-input": {
    fontSize: "1.8rem",
    textAlign: "right",
    padding: "12px",
    borderRadius: "12px",
  },
});

// Button container with grid layout
export const ButtonContainer = styled(Box)({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "10px",
});

// Calculator buttons
export const CalculatorButton = styled(Button)(({ theme, variantType }) => ({
  height: "60px",
  fontSize: "1.4rem",
  fontWeight: "bold",
  borderRadius: "50%",
  backgroundColor:
    variantType === "number" ? theme.palette.primary.main : "#fff",
  color: variantType === "number" ? "#fff" : "#000",
  border: "1px solid #ccc",
  "&:hover": {
    backgroundColor:
      variantType === "number" ? theme.palette.primary.dark : "#f0f0f0",
  },
}));
