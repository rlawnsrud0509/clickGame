import * as M from "./MainPageStyle";
import { Link } from "react-router-dom";
import Charge1 from "../../Images/Charge1.jpg";
import Charge2 from "../../Images/Charge2.jpg";
import { useState } from "react";

function MainPage() {
  let [isOnclick, setIsOnclick] = useState(-1);
  let [playerState, setPlayerState] = useState(Charge1);
  let AttObject = <M.AttObject></M.AttObject>;

  const click = () => {
    setIsOnclick(isOnclick * -1);
    if (isOnclick === 1) {
      setPlayerState(Charge2);
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
        <M.player img={playerState}></M.player>
        <M.attLine></M.attLine>
      </M.main>
    </M.container>
  );
}

//장풍경로에 div만들어놓고 position apsolute줘서 left값으로 이동하게끔함.
//랜덤함수돌려서 실시간으로 top +/- 해서 y값 바꾸면 됨.

export default MainPage;
