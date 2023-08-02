import { styled } from "styled-components";

export const ModalUpdate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);

  div {
    background-color: #f0f0f0;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    width: 400px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .closeModalContact {
      align-self: flex-end;
      padding: 4px 8px;
      border: none;
      background-color: #f0f0f0;
      font-size: 18px;
      cursor: pointer;
      transition: box-shadow 0.2s ease-in-out;
    }

    .closeModalContact:hover {
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    label {
      font-size: 16px;
    }

    input {
      width: 100%;
      padding: 8px;
      font-size: 14px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }

    p {
      font-size: 14px;
      color: red;
      margin: 0;
    }

    button[type="submit"] {
      padding: 10px 15px;
      border: none;
      border-radius: 5px;
      color: #fff;
      background-color: #007bff;
      cursor: pointer;
    }
  }
`;
