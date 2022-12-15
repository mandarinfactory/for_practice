/* eslint-disable */
/* └-> 주석처리로 하면 warning은 따로 안나오고 error창만 뜨게 된다.  */

import { useState } from "react";

const App = () => {
  const setNum = () => {
    return Math.floor(Math.random() * 10)
  }//setNum_function
  /* ---------------------------------------------------------------- */
  const [stNum1, chStNum1] = useState(setNum());
  const [stNum2, chStNum2] = useState(setNum());
  const [resultNum, chResultNum] = useState('결과!!!!!!!');
  const theResultNum = event => {
    event.preventDefault();
    let userNum = parseInt(document.querySelector('.user_num').value);
    /*  chResultNum((stNum1 + stNum2 === userNum) ? :) */
    if (stNum1 + stNum2 === userNum) {
      location.reload();
      /* chStNum1(setNum())
      chStNum2(setNum()) */
    } else {
      document.querySelector('.user_num').value = '';
    }
  }//theResultNum
  /* ---------------------------------------------------------------- */
  return (
    <form onSubmit={theResultNum}>
      <input type="text" readOnly defaultValue={stNum1} size="1" />
      +
      <input type="text" readOnly defaultValue={stNum2} size="1" />
      =
      <input className="user_num" type="text" size="1" />
      <button style={{ display: 'none' }}>결과보자미!</button>
      <p className="result">{chResultNum}</p>
    </form>
  );
};
export default App;