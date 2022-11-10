import * as M from "./MainPageStyle";
import Charge1 from "../../Images/baseImg/Charge1.jpg";
import Charge2 from "../../Images/baseImg/Charge2.jpg";
import Money from "../../Images/baseImg/Money.jpg";
import { useState, useRef } from "react";

function MainPage() {
  let [isOnclick, setIsOnclick] = useState(-1);
  let [playerState, setPlayerState] = useState(Charge1);
  let [AttObject, setAttObject] = useState([]);
  let [money, setMoney] = useState(0);
  let [attLevel, setAttLevel] = useState(1);
  let [treeLevel, setTreeLevel] = useState(1);
  let [displayStore, setDisplayStore] = useState();
  let [toggleStore, setToggleStore] = useState(-1);
  let attlocation = useRef();
  let tRandom = -501;

  let [attImgLink, setAttImgLink] = useState("");
  let [treeImgLink, setTreeImgLink] = useState("");

  const getRandom = (min, max) => Math.random() * (max - min) + min;

  const click = () => {
    setAttImgLink(require(`../../Images/resource/${attLevel}.jpg`));
    setTreeImgLink(require(`../../Images/tree/${treeLevel}.jpg`));

    console.log(attImgLink + "\n" + treeImgLink);
    setIsOnclick(isOnclick * -1);

    if (isOnclick === 1) {
      setPlayerState(Charge2);
      setAttObject(
        AttObject.concat(
          <M.AttObject src={attImgLink} ref={attlocation}></M.AttObject>
        )
      );

      for (let i = 0; i <= 90; i++) {
        setTimeout(() => {
          tRandom = tRandom + getRandom(-150, 150);
          attlocation.current.style.left = `${20 + i * 1.2}%`;
          attlocation.current.style.top = `${tRandom}%`;
          attlocation.current.style.transform = `rotate(${getRandom(
            -133,
            99
          )}deg)`;

          if (i >= 90) {
            attlocation.current.style.opacity = `${1 - i * 0.11}`;
          }
        }, 0.5 * i);
      }
      attlocation.current.style.display = "none";

      setMoney(
        parseInt(
          (money += getRandom(2 * attLevel, (3 + attLevel / 2) * attLevel))
        )
      );
    } else {
      setPlayerState(Charge1);
      setAttObject(
        AttObject.concat(
          <M.AttObject src={attImgLink} ref={attlocation}></M.AttObject>
        )
      );

      for (let i = 0; i <= 90; i++) {
        setTimeout(() => {
          tRandom = tRandom + getRandom(-150, 150);
          attlocation.current.style.left = `${20 + i * 1.2}%`;
          attlocation.current.style.top = `${tRandom}%`;
          attlocation.current.style.transform = `rotate(${getRandom(
            -133,
            99
          )}deg)`;

          if (i >= 90) {
            attlocation.current.style.opacity = `${1 - i * 0.11}`;
          }
        }, 0.5 * i);
      }
      attlocation.current.style.display = "none";

      setMoney(
        parseInt(
          (money += getRandom(2 * attLevel, (3 + attLevel / 2) * attLevel))
        )
      );
    }
  };

  function showStore() {
    setToggleStore(toggleStore * -1);

    if (toggleStore === 1) {
      setDisplayStore(
        <M.storeContainer>
          <M.storeDiv>
            <M.upgradeButton></M.upgradeButton>
          </M.storeDiv>
        </M.storeContainer>
      );
    }
  }

  document.onclick = click;

  return (
    <M.container>
      <M.main>
        <M.storeButton onClick={showStore}>{displayStore}</M.storeButton>
        <M.moneyDiv>
          <M.moneyImg img={Money}></M.moneyImg>: {money}
        </M.moneyDiv>
        <M.player img={playerState}></M.player>
        <M.attLine>
          {AttObject}
          <M.tree src={treeImgLink}></M.tree>
        </M.attLine>
      </M.main>
    </M.container>
  );
}

export default MainPage;
