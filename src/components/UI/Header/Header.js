import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Context as AuthContext } from "../../../Context/AuthContext";

import Button from "../../Button/Button";

import { Wrapper, HomeIcon } from "./styles";

function Header() {
  const { authenticated, onLogout } = useContext(AuthContext);
  return (
    <Wrapper>
      <Link to="/">
        <HomeIcon />
      </Link>
      {!authenticated ? (
        <Link to="/login">
          <Button>Login</Button>
        </Link>
      ) : (
        <Button onClick={onLogout}>Logout</Button>
      )}
    </Wrapper>
  );
}

export default Header;
