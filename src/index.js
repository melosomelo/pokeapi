import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { LoadingProvider } from "./Context/LoadingContext";
import { AuthProvider } from "./Context/AuthContext";
import GlobalStyle from "./styles";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <LoadingProvider>
          <GlobalStyle />
          <App />
        </LoadingProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
