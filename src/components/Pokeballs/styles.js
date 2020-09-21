import styled, { keyframes } from "styled-components";

const GoUp = keyframes`
    to{
        transform: translateY(-48px);
    }
`;

export const Wrapper = styled.div`
  width: 100px;

  margin-left: auto;
  margin-right: auto;

  display: flex;
  justify-content: space-between;

  & img {
    animation-name: ${GoUp};
    animation-duration: 400ms;
    animation-direction: alternate;
    animation-iteration-count: infinite;
    animation-timing-function: cubic-bezier(0, -0.01, 0.32, 1.24);
  }
`;
