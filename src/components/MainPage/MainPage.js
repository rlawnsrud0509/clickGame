import * as M from "./MainPageStyle";
import Charge1 from "../../Images/baseImg/Charge1.jpg";
import Charge2 from "../../Images/baseImg/Charge2.jpg";
import Money from "../../Images/baseImg/Money.jpg";
import jpUpgrade from "../../Images/baseImg/jpUpgrade.jpg";
import treeUpgrade from "../../Images/baseImg/treeUpgrade.jpg";
import critUpgrade from "../../Images/baseImg/criticalPlus.jpg";
import StorePage from "../StorePage/StorePage";
import { useState, useRef } from "react";

function MainPage() {
  let [isOnclick, setIsOnclick] = useState(-1);
  let [playerState, setPlayerState] = useState(Charge1);
  let [AttObject, setAttObject] = useState([]);
  let [money, setMoney] = useState(0);
  let [togStore, setTogStore] = useState(0);
  let [attLevel, setAttLevel] = useState(1);
  let [JpLevel, setJpLevel] = useState(1);
  let [treeLevel, setTreeLevel] = useState(0);
  let [attMoney, setAttMoney] = useState(150);
  let [CriticalMoney, setCriticalMoney] = useState(3);
  let [treeMoney, setTreeMoney] = useState(10000);
  let attlocation = useRef([]);
  let treeRef = useRef();
  let [clicks, setClicks] = useState(0);
  let [randCrit, setRandCrit] = useState(0);
  let [CriticalRate, setCriticalRate] = useState(3);
  let tRandom = -500;
  let rotateSum = 0;
  let [attImgLink, setAttImgLink] = useState("");
  let [treeImgLink, setTreeImgLink] = useState("");

  const getRandom = (min, max) => Math.random() * (max - min) + min;

  const showStore = () => {
    setTogStore(1);
  };
  const closeStore = () => {
    setTogStore(0);
  };

  const setCrit = () => {
    if (money >= CriticalMoney) {
      setMoney(money - CriticalMoney);
      setCriticalRate(CriticalRate + 0.0025 + 0.01 * CriticalRate);
      setCriticalMoney(CriticalMoney + 0.05 * CriticalMoney);
      console.log("크리티컬 : ", CriticalMoney, CriticalRate, "\n");
    }
    if (CriticalRate >= 50) {
      setCriticalRate(50);
      setCriticalMoney();
    }
  };

  const setJp = () => {
    if (money >= attMoney) {
      setAttLevel((cur) => cur + 1);
      setMoney(money - attMoney);
      setAttMoney(attMoney + 20 + 5 * attLevel + 0.025 * attMoney);
      console.log("공격 : ", attMoney, attLevel, JpLevel, "\n");
    }

    if (attLevel % 1000 === 0) {
      setJpLevel(JpLevel + 1);
    }
  };

  const setTree = () => {
    if (money >= treeMoney) {
      setTreeLevel(treeLevel);
      setMoney(money - treeMoney);
      setTreeMoney(treeMoney + 10000 + 0.55 * treeMoney);
    }
  };

  const click = () => {
    // if (AttObject.length >= 30) {
    //   setAttObject(AttObject.splice(10, 1));
    // }

    console.log(AttObject);
    console.log(clicks);
    setRandCrit(getRandom(0, 1000));

    setClicks(clicks + 1);
    //장풍, 나무 레벨올랐을때 이미지 새로고침
    setAttImgLink(require(`../../Images/resource/${JpLevel}.jpg`));
    setTreeImgLink(require(`../../Images/tree/${treeLevel + 1}.jpg`));

    setIsOnclick(isOnclick * -1);
    //사람 이미지 변경코드
    if (isOnclick === 1) {
      setPlayerState(Charge2);
      setAttObject(
        AttObject.concat(
          <M.AttObject
            id={clicks}
            src={attImgLink}
            ref={(el) => (attlocation.current[clicks] = el)}
          ></M.AttObject>
        )
      );

      //돈올리기
      setMoney(
        parseInt(
          (money +=
            getRandom(
              2 * attLevel * (1 + JpLevel / 4),
              (4 + attLevel / 2) * attLevel
            ) *
            (1 + JpLevel / 4))
        )
      );

      //나뭇잎 주는거

      if (parseInt(CriticalRate * 10) >= randCrit) {
        setMoney(
          parseInt(
            (money +=
              getRandom(
                (4 + attLevel / 2) * (1 + JpLevel / 4),
                (4 + attLevel / 2) * (1 + JpLevel / 4) * 2
              ) *
              (1 + treeLevel / 5) *
              10)
          )
        );
      } else {
        setMoney(
          parseInt(
            (money += getRandom(
              (4 + attLevel / 2) * (1 + JpLevel / 4),
              (4 + attLevel / 2) * (1 + JpLevel / 4) * 2
            )) *
              (1 + treeLevel / 5)
          )
        );
      }

      //장풍투사체 날아가는 코드
      for (let i = 0; i <= 90; i++) {
        setTimeout(() => {
          tRandom += tRandom = getRandom(-50, -130) + i * 2;
          rotateSum += getRandom(4, 8);
          attlocation.current[clicks].style.left = `${15 + i * 1.2}%`;
          attlocation.current[clicks].style.top = `${tRandom}%`;
          attlocation.current[
            clicks
          ].style.transform = `rotate(${rotateSum}deg)`;

          if (parseInt(CriticalRate * 10) >= randCrit) {
            attlocation.current[clicks].style.transform = "scale(2)";
            attlocation.current[clicks].style.filter = `hue-rotate(${i * 4})`;
          }

          if (i >= 80) {
            attlocation.current[clicks].style.opacity = `${1 - i * 0.11}`;
          }
        }, 7.5 * i);
        treeRef.current.style.transform = "scale(1.1)";
        setTimeout(() => {
          treeRef.current.style.transform = "scale(1)";
        }, 10);
      }

      setTimeout(() => {
        setPlayerState(Charge1);
      }, 25);

      //사람이미지 변경코드
    } else {
      setPlayerState(Charge2);
      setAttObject(
        AttObject.concat(
          <M.AttObject
            src={attImgLink}
            ref={(el) => (attlocation.current[clicks] = el)}
          ></M.AttObject>
        )
      );

      //나뭇잎 주는거

      if (parseInt(CriticalRate * 10) >= randCrit) {
        setMoney(
          parseInt(
            (money +=
              getRandom(
                (4 + attLevel / 2) * (1 + JpLevel / 4),
                (4 + attLevel / 2) * (1 + JpLevel / 4) * 2
              ) *
              (1 + treeLevel / 5) *
              10)
          )
        );
      } else {
        setMoney(
          parseInt(
            (money += getRandom(
              (4 + attLevel / 2) * (1 + JpLevel / 4),
              (4 + attLevel / 2) * (1 + JpLevel / 4) * 2
            )) *
              (1 + treeLevel / 5)
          )
        );
      }

      //장풍투사체 날아가는 코드
      for (let i = 0; i <= 90; i++) {
        setTimeout(() => {
          tRandom += tRandom = getRandom(-40, -130) + i * 2;
          rotateSum += getRandom(4, 8);
          attlocation.current[clicks].style.left = `${15 + i * 1.2}%`;
          attlocation.current[clicks].style.top = `${tRandom}%`;
          attlocation.current[
            clicks
          ].style.transform = `rotate(${rotateSum}deg)`;

          if (parseInt(CriticalRate * 10) >= randCrit) {
            attlocation.current[clicks].style.transform = "scale(2)";
            attlocation.current[clicks].style.filter = `hue-rotate(${i * 4})`;
          }

          if (i >= 80) {
            attlocation.current[clicks].style.opacity = `${1 - i * 0.11}`;
          }
        }, 7.5 * i);
        treeRef.current.style.transform = "scale(1.1)";
        setTimeout(() => {
          treeRef.current.style.transform = "scale(1)";
        }, 30);
      }
      setTimeout(() => {
        setPlayerState(Charge1);
      }, 25);
    }
  };

  //화면클릭 시 위 click변수안에있는코드 실행하기
  // document.onclick = click;

  //기본 페이지 구성
  return (
    <M.container>
      {togStore && (
        <M.storeContainer>
          <M.storeMoneyDiv>
            <M.storeMoneyImg img={Money}></M.storeMoneyImg>: {parseInt(money)}
          </M.storeMoneyDiv>

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
              <M.upgradeButton onClick={setJp}>
                {parseInt(attMoney)}
              </M.upgradeButton>
            </M.upgradeDiv>
            <M.upgradeDiv>
              크리티컬 확률
              <p style={{ fontSize: "10px" }}>
                크리티컬 확률을 증가시킬수 있습니다.
              </p>
              <img src={critUpgrade}></img>
              <M.upgradeButton onClick={setCrit}>
                {parseInt(CriticalMoney)}
              </M.upgradeButton>
            </M.upgradeDiv>
            <M.upgradeDiv>
              나무에 물 주기
              <p style={{ fontSize: "10px" }}>
                나무를 성장시켜 나뭇잎 획득개수를 증가시킬수 있습니다.
              </p>
              <img src={treeUpgrade}></img>
              <M.upgradeButton onClick={setTree}>
                {parseInt(treeMoney)}
              </M.upgradeButton>
            </M.upgradeDiv>
            <M.backButton onClick={closeStore}>뒤로가기</M.backButton>
          </M.storeDiv>
        </M.storeContainer>
      )}
      <M.main onClick={click}>
        <M.storeButton onClick={showStore}></M.storeButton>
        <M.moneyDiv>
          <M.moneyImg img={Money}></M.moneyImg>: {parseInt(money)}
        </M.moneyDiv>
        <M.player img={playerState}></M.player>
        <M.attLine>
          {AttObject}
          <M.tree ref={treeRef} src={treeImgLink}></M.tree>
        </M.attLine>
      </M.main>
    </M.container>
  );
}

export default MainPage;
