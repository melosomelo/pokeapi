import styled from "styled-components";

export const Wrapper = styled.main`
  margin-top: 3rem;

  width: 95%;
  margin-left: auto;
  margin-right: auto;

  text-align: center;
`;

export const PokemonName = styled.h2`
  max-width: 200px;
  padding: 1.5rem;

  border-radius: 10px;

  color: #ff3838;
  font-weight: bold;

  cursor: pointer;

  &:hover {
    color: white;
    background-color: #ff3838;
  }
`;

export const NamesGrid = styled.div`
  margin-top: 3rem;
  margin-bottom: 50px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1rem;
  justify-items: center;

  max-width: 1800px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 576px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(5, 1fr);
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(6, 1fr);
  }
`;
