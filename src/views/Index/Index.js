import React from "react";
import { Link } from "react-router-dom";

import Button from "../../components/Button/Button";

import { Wrapper, Logo, ButtonsWrapper } from "./styles";

function Index() {
  return (
    <Wrapper>
      <Logo />
      <p style={{ fontSize: "2.5rem", marginBottom: "2.5rem" }}>
        Welcome to the pokemon playground!
      </p>
      <ButtonsWrapper>
        <Link to="/pokemons">
          <Button secondaryStyle>Pokemons</Button>
        </Link>
        <Link to="/types">
          <Button secondaryStyle>Types</Button>
        </Link>
      </ButtonsWrapper>
      <p style={{ marginBottom: "2rem" }}>
        You need to be logged in in order to be able to enjoy every corner of
        this site!
      </p>
      <p>
        Not logged in? <Link to="/login">Click here.</Link>
      </p>
    </Wrapper>
  );
}

export default Index;
