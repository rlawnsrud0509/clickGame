import styled from "styled-components";
import Upgrade from "../../Images/baseImg/Upgrade.jpg";

export const container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: black;
  z-index: -4;
`;

export const main = styled.div`
  position: relative;
  display: flex;
  width: 1000px;
  height: 600px;
  background-size: cover;
  border: 5px solid black;
  border-radius: 0.5rem;
  background-color: white;
  z-index: 0;
`;

export const storeButton = styled.button`
  display: flex;
  width: 30%;
  height: 20%;
  background: url(${Upgrade});
  background-size: cover;
  border: 5px solid black;
  border-radius: 2rem;
  margin: 2rem 0rem 0rem 2rem;
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
  z-index: -1;
`;

export const attLine = styled.div`
  position: absolute;
  width: 53%;
  height: 1%;
  top: 60%;
  left: 15%;
  background-color: white;
  z-index: -2;
`;

export const AttObject = styled.img`
  top: -500%;
  left: 20%;
  position: absolute;
  display: flex;
  width: 50px;
  height: 50px;
  opacity: 1;
  transition-duration: 0.05s;

  background-size: cover;
  z-index: 2;
  background: none;
`;

export const moneyDiv = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
  width: 30%;
  height: 20%;
  margin: 2rem 0rem 0rem 2rem;
  font-size: 60px;
  font-weight: 600;
`;

export const moneyImg = styled.div`
  width: 40%;
  height: 110%;

  background: url(${(props) => props.img});
  background-size: cover;
`;

export const tree = styled.img`
  position: absolute;
  top: -2500%;
  left: 120%;
  display: flex;
  width: 30%;
  height: 300px;

  background-size: cover;
`;
