import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Pokeballs from "../../components/Pokeballs/Pokeballs";
import Button from "../../components/Button/Button";

import axios from "../../axios";
import { Wrapper, PokemonName, NamesGrid } from "./styles";

function Pokemons() {
  const [pokemonsNames, setPokemonsNames] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      //fetching pokemons' names
      const {
        data: { results },
      } = await axios.get("/pokemon", {
        params: {
          limit: 40,
        },
      });
      setPokemonsNames(results);
    })();
  }, []);

  //event listeners

  const onButtonClick = async () => {
    const offset = pokemonsNames.length;
    setLoading(true);
    const {
      data: { results },
    } = await axios.get("/pokemon", {
      params: {
        limit: 40,
        offset,
      },
    });
    setPokemonsNames((prevState) => [...prevState, ...results]);
    setLoading(false);
  };

  if (!pokemonsNames) {
    return <Pokeballs />;
  }
  const names = pokemonsNames.map((pokemon) => (
    <Link
      key={pokemon.name}
      to={`/pokemon/${pokemon.name}`}
      style={{ textDecoration: "none" }}
    >
      <PokemonName>
        {/*capitalizing the name */}
        {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
      </PokemonName>
    </Link>
  ));
  return (
    <Wrapper>
      <h1 style={{ marginBottom: "2rem" }}>All Pokemons</h1>
      <p style={{ maxWidth: "330px", marginLeft: "auto", marginRight: "auto" }}>
        Click a name to see the pokemon's details!
      </p>
      <NamesGrid>{names}</NamesGrid>
      {loading ? (
        <Pokeballs style={{ marginBottom: "100px" }} />
      ) : (
        <Button
          onClick={onButtonClick}
          style={{
            marginBottom: "100px",
          }}
        >
          Load more
        </Button>
      )}
    </Wrapper>
  );
}

export default Pokemons;
