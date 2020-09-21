import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import Button from "../../Button/Button";
import { Context as AuthContext } from "../../../Context/AuthContext";

import LogoPNG from "../../../assets/images/logo.png";

import { Wrapper, CloseIcon } from "./styles";

function Sidedrawer({ show, closeSidedrawer }) {
  const history = useHistory();
  const { authenticated, onLogout } = useContext(AuthContext);
  //event listeners
  const onLinkClick = (event) => {
    closeSidedrawer();
    const targetURL = event.target.getAttribute("data-target");
    history.push(`/${targetURL}`);
  };

  return (
    <Wrapper className={show ? "show" : null}>
      <CloseIcon onClick={closeSidedrawer} />
      <img
        data-target=""
        onClick={onLinkClick}
        src={LogoPNG}
        alt="Logo"
        style={{
          width: "80%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      />
      <div
        style={{
          marginTop: "7rem",
          textAlign: "center",
        }}
      >
        <Button
          onClick={onLinkClick}
          data-target="pokemons"
          secondaryStyle
          style={{
            marginBottom: "2rem",
          }}
        >
          Pokemons
        </Button>
        <Button secondaryStyle data-target="types" onClick={onLinkClick}>
          Types
        </Button>
      </div>
      {!authenticated ? (
        <Button
          data-target="login"
          onClick={onLinkClick}
          style={{
            position: "absolute",
            bottom: "130px",
          }}
        >
          Login
        </Button>
      ) : (
        <Button
          onClick={() => {
            closeSidedrawer();
            onLogout();
            history.push("/");
          }}
          style={{
            position: "absolute",
            bottom: "130px",
          }}
        >
          Logout
        </Button>
      )}
    </Wrapper>
  );
}

export default Sidedrawer;
