import { evaluate } from "mathjs";

export const evaluateData = (data) => {
  try {
    const result = evaluate(data);
    return result.toString();
  } catch (error) {
    return "Error";
  }
};
