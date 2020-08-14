import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";

const App = () => {
  return (
    <BrowserRouter>
      <NavigationBar />
    </BrowserRouter>
  );
};

export default App;
