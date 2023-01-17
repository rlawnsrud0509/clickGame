import StartPage from "./components/StartPage/StartPage";
import MainPage from "./components/MainPage/MainPage";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<StartPage />}></Route>
      <Route path="/Main" element={<MainPage />}></Route>
    </Routes>
  );
}

export default App;
