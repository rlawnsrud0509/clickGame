import styled from "styled-components";
import mainJPG from "../../Images/baseImg/mainJPG.jpg";
import Start from "../../Images/baseImg/Start.jpg";

export const container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: black;
`;

export const main = styled.div`
  display: flex;
  width: 1000px;
  height: 600px;
  background-color: black;
  justify-content: center;
  align-items: center;
  background-image: url(${mainJPG});
  background-size: cover;
  border: 5px solid black;
  border-radius: 0.5rem;
`;

export const playButton = styled.button`
  display: flex;
  width: 100%;
  height: 100%;
  background: url(${Start});
  background-size: cover;
  border: 5px solid black;
  border-radius: 2rem;
  opacity: 0.4;

  transition-timing-function: ease-out;
  transition-duration: 0.15s;

  :hover {
    cursor: pointer;
    opacity: 1;
  }

  :active {
    transition-duration: 0.5s;
    background-image: none;
    border-color: white;
    background-color: black;
  }
`;
