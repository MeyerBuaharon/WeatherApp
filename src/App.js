import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import { ThemeProvider } from "styled-components";

import { GlobalStyles } from "./globalStyles";
import { lightTheme, darkTheme } from "./shared/theme";
import { useDarkMode } from "./shared/useDarkMode";
import Toggle from "./shared/components/Toggle";

const App = () => {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <BrowserRouter>
        <NavigationBar theme={theme} toggleTheme={toggleTheme} />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
