import styled from "styled-components";

export const Wrapper = styled.main`
  width: 90%;
  margin-left: auto;
  margin-right: auto;

  text-align: center;
`;

export const PokemonTypeButton = styled.button`
  padding: 1.5rem 3rem;

  border-radius: 10px;

  font-size: 1.8rem;
  font-weight: bold;
  color: white;

  background-color: ${(props) => props.bgColor};

  width: 168px;

  cursor: pointer;
`;

export const TypesGrid = styled.div`
  margin-top: 3rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1rem;
  row-gap: 2rem;
  justify-items: center;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width: 992px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(5, 1fr);
  }
  @media (min-width: 1500px) {
    grid-template-columns: repeat(6, 1fr);
  }
`;

export const DamageRelation = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;

  & h2 {
    margin-bottom: 1rem;
  }
`;
