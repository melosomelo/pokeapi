import React from "react";
import { Wrapper, StatName, StatValue } from "./styles";

function PokeStat({ name, value, style }) {
  return (
    <Wrapper {...{ style }}>
      <StatName>{name}</StatName>
      <StatValue>{value}</StatValue>
    </Wrapper>
  );
}

export default PokeStat;
