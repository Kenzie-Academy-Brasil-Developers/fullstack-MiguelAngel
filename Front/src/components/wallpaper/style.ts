import { styled } from "styled-components";

export const DivImgBackground = styled.div`
  z-index: -1;
  position: fixed;
  top: 101px;
  height: calc(100vh - 101px);
  width: 100vw;
  img {
    height: 100%;
    width: 100%;
  }
`;
