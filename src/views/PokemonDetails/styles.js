import styled from "styled-components";

export const Wrapper = styled.main`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 100px;
  margin-top: 4rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 992px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
  }
`;

export const BaseStatsCard = styled.section`
  background-color: #f8f8f8;

  border-radius: 15px;

  box-shadow: 7px 7px 4px rgba(0, 0, 0, 0.25);

  width: 95%;
  max-width: 350px;

  margin-left: auto;
  margin-right: auto;
  margin-bottom: 4rem;

  padding: 4rem 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 992px) {
    margin: 0;
  }
`;

export const BaseStatsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export const Details = styled.section`
  @media (min-width: 992px) {
    margin-left: 7rem;
  }
`;

export const DetailSection = styled.article`
  text-align: center;

  margin-bottom: 1.5rem;

  & h2 {
    margin-bottom: 2rem;
  }

  @media (min-width: 992px) {
    text-align: left;
  }
`;

export const EvolutionChainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 992px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const EvolutionLink = styled.div.attrs((props) => ({
  className: props.isCurrentPokemon ? "selected" : null,
}))`
  cursor: pointer;

  margin-bottom: 1.5rem;
  padding: 1rem 2.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: #eeeeee;

  border-radius: 15px;

  &.selected {
    color: white;
    background-color: #ff3838;
  }

  & h4 {
    font-weight: normal;
  }

  @media (min-width: 992px) {
    margin-right: 1.5rem;
  }
`;
