import styled from "styled-components";
import Start from "../../Images/Start.jpg";

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
  background-color: black;
  background-size: cover;
  border: 5px solid black;
  border-radius: 0.5rem;
`;

export const storeButton = styled.button`
  display: flex;
  width: 20%;
  height: 20%;
  background: url(${Start});
  background-size: cover;
  border: 5px solid black;
  border-radius: 2rem;
`;
