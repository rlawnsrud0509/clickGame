import * as M from "./MainPageStyle";
import Charge1 from "../../Images/baseImg/Charge1.jpg";
import Charge2 from "../../Images/baseImg/Charge2.jpg";
import Money from "../../Images/baseImg/Money.jpg";
import jpUpgrade from "../../Images/baseImg/jpUpgrade.jpg";
import treeUpgrade from "../../Images/baseImg/treeUpgrade.jpg";
import critUpgrade from "../../Images/baseImg/criticalPlus.jpg";
import { useState, useRef } from "react";

function MainPage() {
  let [isOnclick, setIsOnclick] = useState(-1);
  let [playerState, setPlayerState] = useState(Charge1);
  let [AttObject, setAttObject] = useState([]);
  let [money, setMoney] = useState(0);
  let [attLevel, setAttLevel] = useState(1);
  let [CriticalRate, setCriticalRate] = useState(3);
  let [treeLevel, setTreeLevel] = useState(1);
  let [attMoney, setAttMoney] = useState(500);
  let [CriticalMoney, setCriticalMoney] = useState(1000);
  let [treeMoney, setTreeMoney] = useState(10000);
  let [displayStore, setDisplayStore] = useState();
  let [toggleStore, setToggleStore] = useState(-1);
  let attlocation = useRef();
  let tRandom = -500;

  let [attImgLink, setAttImgLink] = useState("");
  let [treeImgLink, setTreeImgLink] = useState("");

  const setCrit = () => {};

  const getRandom = (min, max) => Math.random() * (max - min) + min;

  const click = () => {
    setAttImgLink(require(`../../Images/resource/${attLevel}.jpg`));
    setTreeImgLink(require(`../../Images/tree/${treeLevel}.jpg`));

    setIsOnclick(isOnclick * -1);

    if (isOnclick === 1) {
      //크리티컬함수
      setCriticalRate(CriticalRate + 0.15 + 0.005 * CriticalRate);
      setMoney(money - CriticalMoney);
      setCriticalMoney(CriticalMoney + 0.05 * CriticalMoney);
      console.log("크리티컬 : ", CriticalMoney, CriticalRate, "\n");

      //장풍함수
      setAttLevel(attLevel);
      setMoney(money - attMoney);
      setAttMoney(attMoney + 0.045 * attMoney);
      console.log("공격 : ", attMoney, attLevel, "\n");

      //나무함수
      setTreeLevel(treeLevel);
      setMoney(money - treeMoney);
      setTreeMoney(treeMoney + 10000 + 0.25 * treeMoney);
      console.log("나무 : ", treeMoney, treeLevel, "\n");

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
          <b>장풍 강화</b>
          <p style={{ fontSize: "20px" }}>
            나뭇잎을 사용하여 장풍을 강화할 수 있습니다.
          </p>
          <M.storeDiv>
            <M.upgradeDiv>
              장풍 레벨업
              <p style={{ fontSize: "10px" }}>
                새로운 장풍을 획득 할 수 있습니다.
              </p>
              <img src={jpUpgrade}></img>
              <M.upgradeButton>클릭!</M.upgradeButton>
            </M.upgradeDiv>
            <M.upgradeDiv>
              크리티컬 확률
              <p style={{ fontSize: "10px" }}>
                크리티컬 확률을 증가시킬수 있습니다.
              </p>
              <img src={critUpgrade}></img>
              <M.upgradeButton onClick={setCrit}>클릭!</M.upgradeButton>
            </M.upgradeDiv>
            <M.upgradeDiv>
              나무에 물 주기
              <p style={{ fontSize: "10px" }}>
                나무를 성장시켜 나뭇잎 획득개수를 증가시킬수 있습니다.
              </p>
              <img src={treeUpgrade}></img>
              <M.upgradeButton>클릭!</M.upgradeButton>
            </M.upgradeDiv>
          </M.storeDiv>
        </M.storeContainer>
      );
    }
  }

  document.onclick = click;

  return (
    <M.container>
      <M.main>
        <M.storeButton onClick={showStore}></M.storeButton>
        {displayStore}
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
