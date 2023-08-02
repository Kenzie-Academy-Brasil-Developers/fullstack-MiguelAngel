import { styled } from "styled-components";

export const ButtonLogin = styled.button`
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
  background-color: #3498db;

  &:hover {
    background-color: #2980b9;
    cursor: pointer;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 5px rgba(52, 152, 219, 0.7);
  }

  &:active {
    background-color: #2471a3;
  }
`;

export const ButtonCadastro = styled.button`
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
  background-color: #3498db;

  &:hover {
    background-color: #2980b9;
    cursor: pointer;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 5px rgba(52, 152, 219, 0.7);
  }

  &:active {
    background-color: #2471a3;
  }
`;
