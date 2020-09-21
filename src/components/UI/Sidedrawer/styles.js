import styled from "styled-components";

import CloseSVG from "../../../assets/images/close-icon.svg";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  border-right: 3px solid #eeeeee;

  padding-top: 75px;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;

  height: 100vh;
  width: 280px;

  background-color: white;
  transform: translateX(-100%);

  transition: all 400ms ease-in;
  &.show {
    transform: translateX(0);
  }

  @media (min-width: 992px) {
    display: none;
  }
`;

export const CloseIcon = styled.img.attrs(() => ({
  src: CloseSVG,
  alt: "close icon",
}))`
  position: absolute;
  right: 8px;
  top: 8px;

  width: 50px;
`;
