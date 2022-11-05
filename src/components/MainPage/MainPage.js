import * as M from "./MainPageStyle";
import { Link } from "react-router-dom";
import Charge1 from "../../Images/baseImg/Charge1.jpg";
import Charge2 from "../../Images/baseImg/Charge2.jpg";
import Money from "../../Images/baseImg/Money.jpg";
import { useState, useRef } from "react";

function MainPage() {
  let [isOnclick, setIsOnclick] = useState(-1);
  let [playerState, setPlayerState] = useState(Charge1);
  let [AttObject, setAttObject] = useState([]);
  let [money, setMoney] = useState(0);
  let [attLevel, setattLevel] = useState(1);
  let attlocation = useRef();
  let tRandom = -500;

  let baseImgLink = "../../Images/resource/";
  let imgLink = "";

  const getRandom = (min, max) => Math.random() * (max - min) + min;

  const click = () => {
    imgLink = baseImgLink + attLevel.toString() + ".jpg";
    setIsOnclick(isOnclick * -1);

    if (isOnclick === 1) {
      setPlayerState(Charge2);
      setAttObject(
        AttObject.concat(
          <M.AttObject img={imgLink} ref={attlocation}></M.AttObject>
        )
      );

      for (let i = 0; i <= 90; i++) {
        setTimeout(() => {
          tRandom = tRandom + getRandom(-150, 150);
          attlocation.current.style.left = `${20 + i * 1.2}%`;
          attlocation.current.style.top = `${tRandom}%`;
          attlocation.current.style.transform = `rotate(${getRandom(
            33,
            99
          )}deg)`;

          if (i >= 90) {
            attlocation.current.style.opacity = `${1 - i * 0.11}`;
          }
        }, 1.2 * i);
      }
      attlocation.current.style.display = "none";

      setMoney(
        parseInt(
          (money += getRandom(2 * attLevel, (3 + attLevel / 2) * attLevel))
        )
      );
    } else {
      setPlayerState(Charge1);
    }
  };

  document.onclick = click;

  const LinkStyle = {
    display: "flex",
    width: "30%",
    height: "25%",
    borderRadius: "2rem",
    margin: "2rem 0rem 0rem 2rem",
  };

  return (
    <M.container>
      <M.main>
        <Link to="/Store" style={LinkStyle}>
          <M.storeButton></M.storeButton>
        </Link>
        <M.moneyDiv>
          <M.moneyImg img={Money}></M.moneyImg>: {money}
        </M.moneyDiv>
        <M.player img={playerState}></M.player>
        <M.attLine>{AttObject}</M.attLine>
      </M.main>
    </M.container>
  );
}

export default MainPage;
