import styled from "styled-components";

export default styled.button`
  cursor: pointer;

  min-width: 180px;

  border: ${(props) => (props.secondaryStyle ? "3px solid #ff3838" : "none")};
  border-radius: 20px;

  padding: 1rem 3rem;

  background-color: ${(props) => (props.secondaryStyle ? "white" : "#ff3838")};

  color: ${(props) => (props.secondaryStyle ? "black" : "white")};
  font-size: 2rem;
`;
