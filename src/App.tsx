import React from "react";
import { BrowserRouter as Routes } from "react-router-dom";
import { GlobalStyle } from "styles/globalStyles";
import { AppRoute } from "routes";

function App() {
  return (
    <Routes>
      <GlobalStyle />
      <AppRoute />
    </Routes>
  );
}

export default App;
