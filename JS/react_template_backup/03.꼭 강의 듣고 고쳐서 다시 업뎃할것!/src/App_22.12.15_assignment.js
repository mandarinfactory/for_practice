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
    /* chResultNum((stNum1 + stNum2 === userNum) ? location.reload() : document.querySelector('.user_num').value = '') */
    if (stNum1 + stNum2 === userNum) {
      document.querySelector('span:first-child').innerText = chStNum1(setNum())
      document.querySelector('span:nth-child(2)').innerText = chStNum2(setNum())
      document.querySelector('.user_num').value = '';
      chResultNum('정답입니다!!!!!!ㅊㅊㅊ')
    } else {
      document.querySelector('.user_num').value = '';
      chResultNum('오답입니다!!!!!!멍청아')
    }//if-else
  }//theResultNum
  /* ---------------------------------------------------------------- */
  return (
    <form onSubmit={theResultNum}>
      <span>{stNum1}</span>
      +
      <span>{stNum2}</span>
      =
      <input className="user_num" type="text" size="1" />
      <button style={{ display: 'none' }}>결과보자미!</button>
      <p className="result">{resultNum}</p>
    </form>
  );
};
export default App;