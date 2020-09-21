import styled from "styled-components";

import LogoPNG from "../../../assets/images/logo.png";
import HomePNG from "../../../assets/images/home-icon.png";

export const Wrapper = styled.header`
  display: none;

  @media (min-width: 992px) {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 4rem;

    padding: 2.5rem 2rem;

    width: 100%;
  }
`;

export const HomeIcon = styled.img.attrs(() => ({
  src: HomePNG,
  alt: "Home icon",
}))``;

export const Logo = styled.img.attrs(() => ({
  src: LogoPNG,
  alt: "Pokemon playground logo",
}))`
  height: 80px;
`;
