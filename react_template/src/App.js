/* eslint-disable */

import { useState } from "react";

/* └-> 주석처리로 하면 warning은 따로 안나오고 error창만 뜨게 된다.  */
const App = () => {
  /* ---------------------------------------------------------------- */
  const [stNum1, chStNum1] = useState(setRandomNum())
  const [stNum2, chStNum2] = useState(setRandomNum())
  const [stResult, chStResult] = useState("")
  const [stPoint, chStPoint] = useState("")
  /* ---------------------------------------------------------------- */
  function setRandomNum() {
    return Math.floor(Math.random() * 10)
  }//setRandomNum
  const checkResult = e => {
    e.preventDefault();
  }//checkResult
  /* ---------------------------------------------------------------- */
  return (
    <form onSubmit={checkResult}>
      <p>
        <span>{stNum1}</span>
        +
        <span>{stNum2}</span>
        =
        <input type="text" size="1" />
      </p>
      <hr />
      <p className="result">
        ★결과★ : {stResult}
      </p>
      <hr />
      <p>
        ★점수★ : {stPoint}
      </p>
    </form>
  );
};
export default App;