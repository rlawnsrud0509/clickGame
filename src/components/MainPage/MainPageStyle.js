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

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const main = styled.div`
  position: relative;
  display: flex;
  width: 1000px;
  height: 600px;
  background-size: cover;
  border: 5px solid black;
  border-radius: 0.5rem;
  z-index: 0;
  background-color: white;
  background-image: url("../../Images/baseImg/background.jpg");
  background-size: cover;
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
  left: 15%;
  position: absolute;
  display: flex;
  width: 100px;
  height: 100px;
  opacity: 1;
  transition-duration: 0.05s;
  transform: rotate(${Math.random(0 - 360) + 360});

  background-size: cover;
  z-index: 2;
  background: none;
`;

export const moneyDiv = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
  width: 60%;
  height: 20%;
  margin: 2rem 0rem 0rem 2rem;
  font-size: 40px;
  font-weight: 600;
`;

export const moneyImg = styled.div`
  width: 20%;
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

  transition-timing-function: ease-out;
  transition-duration: 0.05s;
`;

export const storeContainer = styled.div`
  display: flex;
  position: absolute;
  z-index: 5;
  flex-wrap: wrap;
  width: 1000px;
  height: 600px;
  opacity: 1;
  flex-direction: column;
  font-size: 40px;
  justify-content: center;
  align-items: center;

  background-color: white;
  border-radius: 0.5rem;
`;

export const storeDiv = styled.div`
  display: flex;
  width: 900px;
  height: 70%;
  align-items: center;
  margin-top: 5%;
`;

export const upgradeDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 80%;
  margin-top: 1%;
  margin-bottom: 1%;
  margin-left: 6.3%;
  font-size: 30px;
  background-color: white;
  text-align: center;
  padding: 0.8rem;
  justify-content: center;
  align-content: center;
`;

export const upgradeButton = styled.button`
  display: flex;
  width: 80%;
  height: 15%;
  border: 3px solid black;
  border-radius: 1rem;
  font-weight: 600;
  font-size: 20px;
  margin-left: 2.25rem;
  margin-bottom: 0;
  background-color: white;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  :hover {
    cursor: pointer;
  }

  :active {
    transition-duration: 0.05s;
    background-image: none;
    border-color: white;
    background-color: black;
  }
`;

export const backButton = styled.div`
  display: flex;
  width: 20%;
  height: 20%;
  position: absolute;
  top: 5%;
  left: 3%;

  border: 5px solid black;
  border-radius: 1.5rem;
  justify-content: center;
  align-items: center;
  font-weight: 600;

  :hover {
    cursor: pointer;
  }

  :active {
    transition-duration: 0.15s;
    background-image: none;
    border-color: white;
    background-color: black;
  }
`;

export const storeMoneyDiv = styled.div`
  position: absolute;
  display: flex;
  left: 70%;
  top: 0%;
  flex-direction: row;
  text-align: center;
  align-items: center;
  width: 60%;
  height: 30%;
  font-size: 40px;
  font-weight: 600;
`;

export const storeMoneyImg = styled.div`
  width: 15%;
  height: 55%;

  background: url(${(props) => props.img});
  background-size: cover;
`;
