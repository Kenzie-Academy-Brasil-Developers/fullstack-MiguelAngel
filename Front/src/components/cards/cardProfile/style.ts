import { styled } from "styled-components";

export const StyledCardUsuario = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 25px;

  .cardProfile {
    background-color: #f0f0f0;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

export const DivCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 20px;
  max-width: 400px;
  margin: 0 auto;

  h1 {
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
  }

  h2 {
    font-size: 18px;
    margin: 0;
  }

  span {
    font-size: 14px;
    color: #555555;
  }
`;

export const DivButton = styled.div`
  display: flex;
  justify-content: center;
`;
