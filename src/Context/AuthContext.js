import React, { createContext, useState } from "react";
import { useHistory } from "react-router-dom";
import jwt from "jsonwebtoken";

const Context = createContext();

function AuthProvider({ children }) {
  const history = useHistory();
  const [authenticated, setAuthenticated] = useState(false);

  function onLogin() {
    const token = jwt.sign(
      {
        username: "theonlyuser",
      },
      "somesupersecretsecret",
      { expiresIn: "10min" }
    );
    localStorage.setItem("token", JSON.stringify(token));
    setAuthenticated(true);
    history.push("/");
  }

  function onLogout() {
    localStorage.removeItem("token");
    setAuthenticated(false);
  }

  return (
    <Context.Provider
      value={{ authenticated, setAuthenticated, onLogin, onLogout }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, AuthProvider };
