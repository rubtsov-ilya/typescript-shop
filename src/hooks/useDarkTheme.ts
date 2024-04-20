import { useContext } from "react";
import { darkThemeContext } from "../providers/DarkThemeProvider";
import { IValue } from "../interfaces/DarkThemeValue.interface";

const useDarkTheme = (): IValue => {
  const context = useContext(darkThemeContext);
  if (!context) {
    throw new Error("useDarkTheme is null");
  }
  return context;
};
export default useDarkTheme;
