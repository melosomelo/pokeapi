import React from "react";

import Pokeball from "../../assets/images/pokeball.png";

import { Wrapper } from "./styles";

function Pokeballs({ style }) {
  return (
    <Wrapper {...{ style }}>
      <img src={Pokeball} alt="Pokeball" />
      <img
        style={{
          animationDelay: "400ms",
        }}
        src={Pokeball}
        alt="Pokeball"
      />
      <img
        style={{
          animationDelay: "800ms",
        }}
        src={Pokeball}
        alt="Pokeball"
      />
    </Wrapper>
  );
}

export default Pokeballs;
