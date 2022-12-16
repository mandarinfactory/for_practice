/* eslint-disable */

import { useState } from "react";

/* └-> 주석처리로 하면 warning은 따로 안나오고 error창만 뜨게 된다.  */
const App = () => {
  /* ---------------------------------------------------------------- */
  let [stNum1, chStNum1] = useState(setRandomNum())
  let [stNum2, chStNum2] = useState(setRandomNum())
  let [stResult, chStResult] = useState("")
  let [stPoint, chStPoint] = useState("")
  /* ---------------------------------------------------------------- */
  function setRandomNum() {
    return Math.floor(Math.random() * 10);
  }//setRandomNum
  const checkResult = e => {
    e.preventDefault();
    let userNum = parseInt(document.querySelector('input').value);
    if (stNum1 + stNum2 === userNum) {
      chStResult('정답');
      chStPoint(++stPoint)
      /* 
      stPoint++로 출력하면 '0'출력된후 --> 한번더 클릭해야 '1'이 출력되므로 ++stPoint로 해야한다. 
      또한, react에서는 가급적이면 증감연산자를 지양한다!!!!!!!
      */
    } else {
      chStResult('오답');
      chStPoint(--stPoint)
    }//if-else
  }//checkResult
  /* ---------------------------------------------------------------- */
  return (
    <form onSubmit={checkResult}>
      <p>
        <span>{stNum1}</span>
        +
        <span>{stNum2}</span>
        =
        <input className="" type="text" size="1" />
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