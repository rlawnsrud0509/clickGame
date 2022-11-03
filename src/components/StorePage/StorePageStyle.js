import styled from "styled-components";

export const container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const main = styled.div`
  display: flex;
  width: 1000px;
  height: 600px;
  background-color: black;
  justify-content: center;
  align-items: center;

  background-color: gray;
  background-size: cover;
  border: 5px solid black;
  border-radius: 0.5rem;
`;

export const upgradeList = styled.button`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  overflow-x: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const upgradeButton = styled.div`
  width: 20%;
  height: 40%;
  border-radius: 3px solid black;
  border-radius: 0.5rem;
`;
