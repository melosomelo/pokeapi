import styled from "styled-components";

import CloseSVG from "../../assets/images/close-icon.svg";

export const Wrapper = styled.article`
  text-align: center;
`;

export const Pill = styled.div`
  font-size: 1.8rem;

  padding: 1rem 1.5rem;

  background-color: #eeeeee;

  cursor: pointer;

  margin: 8px;

  &.selected {
    color: white;
    background-color: #ff3838;
  }
`;

export const PillsWrapper = styled.div`
  width: 80%;
  margin-left: auto;
  margin-right: auto;

  margin-bottom: 1.5rem;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media (min-width: 992px) {
    justify-content: flex-start;
    width: 95%;
  }
`;

export const PillDetail = styled.div`
  position: relative;

  border-radius: 15px;

  width: 95%;
  margin-left: auto;
  margin-right: auto;

  background-color: #eeeeee;

  max-height: 0;

  overflow: hidden;

  &.expanded {
    transition: max-height 700ms ease-out;
    padding: 2.5rem;
    max-height: 500px;
  }

  @media (min-width: 992px) {
    text-align: left;
  }
`;

export const CloseDetailIcon = styled.img.attrs(() => ({
  src: CloseSVG,
  alt: "Close icon",
}))`
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
`;
