import * as S from "./StartPageStyle";
import { Link } from "react-router-dom";

function StartPage() {
  const LinkStyle = {
    display: "flex",
    width: "30%",
    height: "25%",
    borderRadius: "2rem",
    marginTop: "20rem",
  };

  return (
    <S.container>
      <S.main>
        <Link to="/Main" style={LinkStyle}>
          <S.playButton></S.playButton>
        </Link>
      </S.main>
    </S.container>
  );
}

export default StartPage;
