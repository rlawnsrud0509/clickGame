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
  let [JpLevel, setJpLevel] = useState(1);
  let [treeLevel, setTreeLevel] = useState(1);
  let attlocation = useRef();
  let tRandom = -500;
  let rotateSum = 0;

  let [attImgLink, setAttImgLink] = useState("");
  let [treeImgLink, setTreeImgLink] = useState("");

  const getRandom = (min, max) => Math.random() * (max - min) + min;

  const click = () => {
    //장풍, 나무 레벨올랐을때 이미지 새로고침
    setAttImgLink(require(`../../Images/resource/${JpLevel}.jpg`));
    setTreeImgLink(require(`../../Images/tree/${treeLevel}.jpg`));

    setIsOnclick(isOnclick * -1);
    setAttLevel(attLevel + 1);
    if (attLevel % 10 === 0) {
      setJpLevel(JpLevel + 1);
    }

    //사람 이미지 변경코드
    if (isOnclick === 1) {
      setPlayerState(Charge2);
      setAttObject(
        AttObject.concat(
          <M.AttObject src={attImgLink} ref={attlocation}></M.AttObject>
        )
      );

      //장풍투사체 날아가는 코드
      for (let i = 0; i <= 90; i++) {
        setTimeout(() => {
          tRandom += tRandom = getRandom(-80, -120) + i * 2;
          rotateSum += getRandom(4, 8);
          attlocation.current.style.left = `${15 + i * 1.2}%`;
          attlocation.current.style.top = `${tRandom}%`;
          attlocation.current.style.transform = `rotate(${rotateSum}deg)`;

          if (i >= 80) {
            attlocation.current.style.opacity = `${1 - i * 0.11}`;
          }
        }, 7.5 * i);
      }
      setTimeout(() => {
        setPlayerState(Charge1);
      }, 100);
      attlocation.current.style.display = "none";

      //클릭 시 돈올리기
      setMoney(
        parseInt(
          (money +=
            getRandom(
              2 * attLevel * (1 + JpLevel / 4),
              (4000000 + attLevel / 2) * attLevel
            ) *
            (1 + JpLevel / 4))
        )
      );
      //사람이미지 변경코드
    } else {
      setPlayerState(Charge2);
      setAttObject(
        AttObject.concat(
          <M.AttObject src={attImgLink} ref={attlocation}></M.AttObject>
        )
      );

      //장풍투사체 날아가는 코드
      for (let i = 0; i <= 90; i++) {
        setTimeout(() => {
          tRandom += tRandom = getRandom(-80, -120) + i * 2;
          rotateSum += getRandom(4, 8);
          attlocation.current.style.left = `${15 + i * 1.2}%`;
          attlocation.current.style.top = `${tRandom}%`;
          attlocation.current.style.transform = `rotate(${rotateSum}deg)`;

          if (i >= 80) {
            attlocation.current.style.opacity = `${1 - i * 0.11}`;
          }
        }, 7.5 * i);
      }
      setTimeout(() => {
        setPlayerState(Charge1);
      }, 100);

      //돈올리기
      setMoney(
        parseInt(
          (money +=
            getRandom(
              2 * attLevel * (1 + JpLevel / 4),
              (4000000 + attLevel / 2) * attLevel
            ) *
            (1 + JpLevel / 4))
        )
      );
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
          <M.tree src={treeImgLink}></M.tree>
        </M.attLine>
      </M.main>
    </M.container>
  );
}

export default MainPage;
