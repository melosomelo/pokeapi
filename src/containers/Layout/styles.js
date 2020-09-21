import styled from "styled-components";

import MenuIconSVG from "../../assets/images/menu-icon.svg";

export const MenuIcon = styled.img.attrs(() => ({
  src: MenuIconSVG,
  alt: "Menu icon.",
}))`
  z-index: 1;

  width: 60px;

  margin-left: 10px;
  margin-top: 10px;

  @media (min-width: 992px) {
    display: none;
  }
`;
