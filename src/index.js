import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { AuthProvider } from "./Context/AuthContext";
import GlobalStyle from "./styles";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <GlobalStyle />
        <App />
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
//test comment 2
