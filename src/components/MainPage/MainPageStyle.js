import styled from "styled-components";
import Upgrade from "../../Images/Upgrade.jpg";

export const container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const main = styled.div`
  position: relative;
  display: flex;
  width: 1000px;
  height: 600px;
  background-size: cover;
  border: 5px solid black;
  border-radius: 0.5rem;
`;

export const storeButton = styled.button`
  display: flex;
  width: 100%;
  height: 100%;
  background: url(${Upgrade});
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

export const player = styled.div`
  position: absolute;
  width: 15%;
  height: 30%;
  top: 45%;
  left: 10%;
  background-image: url(${(props) => props.img});
  background-size: cover;
`;

export const attLine = styled.div`
  position: absolute;
  width: 60%;
  height: 1%;
  top: 62%;
  left: 15%;
  background-color: gray;
`;

export const AttObject = styled.div`
  position: absolute;
  display: flex;
  border: 3px solid black;
  width: 50px;
  height: 50px;
  opacity: 0.1;
`;
