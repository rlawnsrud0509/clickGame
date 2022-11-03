import * as M from "./MainPageStyle";
import { Link } from "react-router-dom";

function MainPage() {

  return (
    <M.container>
      <M.main>
        <Link to="/Store" >
          <M.storeButton></M.storeButton>
        </Link>
      </M.main>
    </M.container>
  );
}

export default MainPage;
