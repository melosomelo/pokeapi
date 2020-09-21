import styled from "styled-components";

import LogoPNG from "../../assets/images/logo.png";

export const Wrapper = styled.main`
  margin-top: 4rem;

  text-align: center;
  width: 95%;

  margin-left: auto;
  margin-right: auto;

  /* This is just a bit of styling I thought looked nice */
  & p {
    max-width: 530px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const Logo = styled.img.attrs(() => ({
  src: LogoPNG,
  alt: "Pokemon playground logo",
}))`
  width: 90%;
  max-width: 422px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 4rem;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 95%;
  max-width: 450px;

  margin-left: auto;
  margin-right: auto;
  margin-bottom: 3rem;

  & button {
    margin-bottom: 1.5rem;
  }

  @media (min-width: 576px) {
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 0;
  }
`;
