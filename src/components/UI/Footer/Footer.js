import React from "react";
import Pokeball from "../../../assets/images/pokeball.png";
import { Wrapper } from "./styles";

function Footer() {
  return (
    <Wrapper>
      <img
        src={Pokeball}
        alt="Pokeball"
        style={{
          width: "26px",
          height: "26px",
        }}
      />
    </Wrapper>
  );
}

export default Footer;
