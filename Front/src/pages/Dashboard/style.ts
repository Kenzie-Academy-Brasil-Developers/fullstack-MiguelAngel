import { styled } from "styled-components";

export const MainPag = styled.div`
  display: flex;
  flex-direction: column;
  .box-conteiner {
    display: flex;
    align-items: center;
    justify-content: center;
    ul {
      margin-top: 3rem;
      display: flex;
      flex-wrap: wrap;
      width: 1000px;
      gap: 1.5rem;

      align-content: flex-start;
      justify-content: center;
    }
  }
`;
