import styled, { keyframes } from "styled-components";

import closeSVG from "../../../assets/images/close-icon.svg";

const expand = keyframes`
    from {
        transform: scale(0);
    } 
    to {
        transform: scale(1);
    }

`;

export const OuterWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.25);
  width: 100%;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentWrapper = styled.div`
  width: 90%;
  max-width: 530px;

  padding: 2rem;

  background-color: white;
  border-radius: 10px;

  box-shadow: 9px -9px #ff3838;

  animation: ${expand} 300ms ease-in;

  position: relative;
`;

export const CloseIcon = styled.img.attrs(() => ({
  src: closeSVG,
  alt: "Close icon",
}))`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;
