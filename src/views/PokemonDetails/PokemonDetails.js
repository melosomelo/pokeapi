import React, { useState, useEffect } from "react";
import { useParams, useHistory, withRouter } from "react-router-dom";

import Pokeballs from "../../components/Pokeballs/Pokeballs";
import PokeStat from "../../components/PokeStat/PokeStat";
import DetailSectionData from "../../containers/DetailSectionData/DetailSectionData";
import axios from "../../axios";
import capitalize from "../../util/capitalize";
import mountEvolutionChain from "../../util/mountEvolutionChain";

import {
  Wrapper,
  BaseStatsCard,
  Details,
  BaseStatsWrapper,
  DetailSection,
  EvolutionLink,
  EvolutionChainWrapper,
} from "./styles";

function PokemonDetails(props) {
  const { name } = useParams(); //pokemon's name
  const history = useHistory();

  const [loading, setLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState({});

  useEffect(() => {
    (async () => {
      let response, data;
      //first we get the base stats from the pokemon
      response = await axios.get(`/pokemon/${name}`);
      data = response.data;
      setPokemonData(data); //setting the base stats
      //we need to make other API calls to get other important data
      //we want to get the evolution chain, in order to do that, we need to make a get request to its species
      response = await axios.get(`/pokemon-species/${name}`);
      data = response.data;
      //getting the evolution chain
      response = await axios.get(data.evolution_chain.url);
      data = response.data; //the actual evolution chain

      //we need to treat this data in order that it's easier to work with it.
      const treatedEvolutionChain = mountEvolutionChain(data.chain);
      /* We still need to get the data for each pokemon of the chain in order to 
      render their images correctly */

      const finalEvolutionChain = [];
      for (let pokemon of treatedEvolutionChain) {
        //we don't need to make a request for the data that we already have
        if (pokemon.name === pokemonData.name) {
          finalEvolutionChain.push({
            name: pokemonData.name,
            image: pokemonData.sprites.front_default,
          });
          continue;
        }

        const { data } = await axios.get(`/pokemon/${pokemon.name}`);
        finalEvolutionChain.push({
          name: data.name,
          image: data.sprites.front_default,
        });
      }
      //setting all the data we need
      setPokemonData((prevState) => ({
        ...prevState,
        evolutionChain: finalEvolutionChain,
      }));
      setLoading(false);
    })();
  }, [name, pokemonData.name, pokemonData.sprites?.front_default]);

  if (loading) {
    return (
      <Pokeballs
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
    );
  }

  return (
    <Wrapper>
      <BaseStatsCard>
        <h1 style={{ fontWeight: "bold", marginBottom: "2.5rem" }}>
          {capitalize(pokemonData.name)}
        </h1>
        <img
          src={pokemonData.sprites.front_default}
          alt={pokemonData.name}
          style={{
            marginBottom: "2rem",
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "210px",
            marginBottom: "3rem",
          }}
        >
          <PokeStat name="height" value={pokemonData.height} />
          <PokeStat name="weight" value={pokemonData.weight} />
        </div>
        <h2 style={{ marginBottom: "1.5rem" }}>Base stats</h2>
        <BaseStatsWrapper>
          {pokemonData.stats.map((statObj) => (
            <PokeStat
              style={{
                marginBottom: "1rem",
              }}
              key={statObj.stat.name}
              name={statObj.stat.name}
              value={statObj.base_stat}
            />
          ))}
        </BaseStatsWrapper>
      </BaseStatsCard>
      <Details>
        <DetailSection>
          <h2>Abilities</h2>
          <DetailSectionData
            values={pokemonData.abilities}
            acessPoint="ability"
          />
        </DetailSection>

        <DetailSection>
          <h2>Evolution Chain</h2>
          <EvolutionChainWrapper>
            {pokemonData.evolutionChain.map((pokemon) => (
              <EvolutionLink
                onClick={() => {
                  history.push(`/pokemon/${pokemon.name}`);
                }}
                key={pokemon.name}
                isCurrentPokemon={pokemon.name === pokemonData.name}
              >
                <img src={pokemon.image} alt={pokemon.name} />
                <h4>{capitalize(pokemon.name)}</h4>
              </EvolutionLink>
            ))}
          </EvolutionChainWrapper>
        </DetailSection>

        <DetailSection>
          <h2>Moves</h2>
          <DetailSectionData
            values={pokemonData.moves.slice(0, 5)}
            acessPoint="move"
          />
        </DetailSection>
      </Details>
    </Wrapper>
  );
}

export default withRouter(PokemonDetails);
