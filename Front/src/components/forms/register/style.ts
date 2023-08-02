import { styled } from "styled-components";

export const ModalRegister = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;

  .modal-content {
    background-color: #ffffff;
    padding: 24px;
    border-radius: 8px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 20rem;
    width: 20rem;
    border: solid 2px var(--color-shadow);
    border-radius: 1rem;
    background: linear-gradient(135deg, #e67e22, #3498db);
    position: relative;
  }
  form {
    display: flex;
    flex-direction: column;
    height: 90%;
    justify-content: space-evenly;
    width: 80%;
    background: linear-gradient(135deg, #e67e22, #3498db);
  }
  form > p {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #2980b9;
    cursor: pointer;
    font-weight: bold;
    text-decoration: underline;

    &:hover {
      color: #2471a3;
    }
  }

  .closeModal {
    position: absolute;
    right: 0.75rem;
    top: 0.75rem;
  }

  /* Estilo para o input */
  input {
    padding: 8px 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
    transition: border-color 0.2s ease-in-out;

    &:focus {
      outline: none;
      border-color: #3498db; /* Cor da borda ao focar no input */
    }
  }

  /* Estilo para a label */
  label {
    font-size: 14px;
    color: #333;
    margin-bottom: 8px;
  }

  /* Estilo para o título h2 */
  h2 {
    font-size: 24px;
    color: #333;
    margin-bottom: 16px;
    text-align: center;
  }
`;
