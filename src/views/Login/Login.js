import React, { useContext } from "react";
import { Redirect } from "react-router-dom";

import Button from "../../components/Button/Button";
import { Context as AuthContext } from "../../Context/AuthContext";

import PokeballSVG from "../../assets/images/pokeball.svg";

import { LoginCard, FormGroup } from "./styles";

function Login() {
  //event listeners

  const { onLogin, authenticated } = useContext(AuthContext);

  const onFormSubmit = (event) => {
    event.preventDefault();
    onLogin(); //loggin in the user
  };

  if (authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <main>
      <LoginCard onSubmit={onFormSubmit}>
        <img
          src={PokeballSVG}
          alt="A pokeball"
          style={{
            width: "40px",
            marginBottom: "1.5rem",
          }}
        />
        <FormGroup>
          <label htmlFor="username">Username</label>
          <input name="username" id="username" />
        </FormGroup>
        <FormGroup>
          <label htmlFor="password">Password</label>
          <input name="password" id="password" type="password" />
        </FormGroup>
        <Button
          type="submit"
          style={{
            marginBottom: "1rem",
            marginTop: "1rem",
          }}
        >
          Go
        </Button>
      </LoginCard>
    </main>
  );
}

export default Login;
