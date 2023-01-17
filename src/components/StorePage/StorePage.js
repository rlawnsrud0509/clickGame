import * as M from "../MainPage/MainPageStyle";
import jpUpgrade from "../../Images/baseImg/jpUpgrade.jpg";
import treeUpgrade from "../../Images/baseImg/treeUpgrade.jpg";
import critUpgrade from "../../Images/baseImg/criticalPlus.jpg";
import Money from "../../Images/baseImg/Money.jpg";
import { useState } from "react";

function StorePage() {
  let [attLevel, setAttLevel] = useState(1);
  let [JpLevel, setJpLevel] = useState(1);
  let [CriticalRate, setCriticalRate] = useState(3);
  let [treeLevel, setTreeLevel] = useState(1);
  let [attMoney, setAttMoney] = useState(150);
  let [CriticalMoney, setCriticalMoney] = useState(1000);
  let [treeMoney, setTreeMoney] = useState(10000);
  let [money, setMoney] = useState(0);

  function uploadCrit() {
    localStorage.setItem("CritcalRate", CriticalRate);
    localStorage.setItem("money", money);
  }

  function uploadJp() {
    localStorage.setItem("attLevel", attLevel);
    localStorage.setItem("JpLevel", JpLevel);
    localStorage.setItem("money", money);
  }

  function uploadTree() {
    localStorage.setItem("treeLevel", treeLevel);
    localStorage.setItem("money", money);
  }

  const setCrit = () => {
    if (money >= CriticalMoney) {
      setMoney(money - CriticalMoney);
      setCriticalRate(CriticalRate + 0.0025 + 0.01 * CriticalRate);
      setCriticalMoney(CriticalMoney + 0.05 * CriticalMoney);
      uploadCrit();
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
      uploadJp();
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
      uploadTree();
      setTreeMoney(treeMoney + 10000 + 0.25 * treeMoney);
    }
  };

  return (
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
          <p style={{ fontSize: "10px" }}>새로운 장풍을 획득 할 수 있습니다.</p>
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
        <M.backButton>뒤로가기</M.backButton>
      </M.storeDiv>
    </M.storeContainer>
  );
}

export default StorePage;
