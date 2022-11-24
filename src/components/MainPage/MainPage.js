import * as M from "./MainPageStyle";
import Charge1 from "../../Images/baseImg/Charge1.jpg";
import Charge2 from "../../Images/baseImg/Charge2.jpg";
import Money from "../../Images/baseImg/Money.jpg";
import StorePage from "../StorePage/StorePage";
import { useState, useRef } from "react";

function MainPage() {
  let [isOnclick, setIsOnclick] = useState(-1);
  let [playerState, setPlayerState] = useState(Charge1);
  let [AttObject, setAttObject] = useState([]);
  let [money, setMoney] = useState(0);
  let [attLevel, setAttLevel] = useState(1);
  let [JpLevel, setJpLevel] = useState(1);
  let [treeLevel, setTreeLevel] = useState(1);
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

  const click = () => {
    console.log(clicks);
    setRandCrit(getRandom(0, 1000));

    setClicks(clicks + 1);
    //장풍, 나무 레벨올랐을때 이미지 새로고침
    setAttImgLink(require(`../../Images/resource/${JpLevel}.jpg`));
    setTreeImgLink(require(`../../Images/tree/${treeLevel}.jpg`));

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
                4 * attLevel * 2 * (10 + (JpLevel * 2) / 4),
                (8 + attLevel) * attLevel
              ) *
              (2 + JpLevel / 2)) //크리티컬시 추가 나뭇잎
          )
        );
      } else {
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
            attlocation.current[clicks].style.transform = "scale(3)";
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
                4 * attLevel * 2 * (10 + (JpLevel * 2) / 4),
                (8 + attLevel) * attLevel
              ) *
              (2 + JpLevel / 2)) //크리티컬시 추가 나뭇잎
          )
        );
      } else {
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
            attlocation.current[clicks].style.transform = "scale(3)";
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
  document.onclick = click;

  //기본 페이지 구성
  return (
    <M.container>
      <M.main>
        <M.storeButton></M.storeButton>
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
