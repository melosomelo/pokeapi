import styled from "styled-components";

export const LoginCard = styled.form`
  width: 95%;
  max-width: 340px;
  background-color: #f8f8f8;

  border-radius: 15px;
  border: 1px solid #b7b7b7;

  box-shadow: 7px 7px 4px rgba(0, 0, 0, 0.25);

  padding: 3rem 2.5rem;

  text-align: center;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 2.5rem;
`;
