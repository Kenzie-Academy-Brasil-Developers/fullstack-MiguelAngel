import { styled } from "styled-components";

export const CardContactStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: #f0f0f0;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;
  margin-bottom: 12px;

  div:first-child {
    flex: 1;
    padding-right: 16px;

    h2 {
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 8px;
    }

    p {
      font-size: 16px;
      margin: 0;
    }
  }

  div:last-child {
    display: flex;
    gap: 8px;
  }

  button {
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    color: #fff;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
  }

  button:first-child {
    background-color: #007bff;
  }

  button:first-child:hover {
    background-color: #0056b3;
  }

  button:last-child {
    background-color: #dc3545;
  }

  button:last-child:hover {
    background-color: #b3001e;
  }
`;
