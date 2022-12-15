/* eslint-disable */
/* └-> 주석처리로 하면 warning은 따로 안나오고 error창만 뜨게 된다.  */

import { useState } from "react";

const App = () => {
  /* ----------------------------------------------------------------------- */
  const setNum = () => {
    return Math.floor(Math.random() * 10)
  }//setNum_function 
  /* └->  항상 먼저 function을 우선적으로 써줘야 scope에 오류가 나지 않는다! 
  단, arrow function이 아닌 function () {~}꼴로 써주면 아래 써도 오류가 나지 않는다.
  */
 /* ----------------------------------------------------------------------- */
 const [stNum1, chStNum1] = useState(setNum())
 const [stNum2, chStNum2] = useState(setNum())
 const [stResultNum, chStResultNum] = useState('결과!!!')
 const resultNum = event => {
  event.preventDefault();
  let userNum = parseInt(document.querySelector('.user_num').value)
  /* └-> 아래에서 이미 <form onSubmit~>을 썼기때문에 parameter가 아닌 event로써 
  쓰이므로 preventDefault가 쓰일수 있다! */
/*   if (stNum1 + stNum2 === userNum) {
    chStResultNum('정답입니다!!!!!!ㅊㅊㅊ')
  } else {
    chStResultNum('오답입니다!!!!!!멍청아') 
  }//if-else --> 이거 안쓰려고 react쓰는거임!!!!!!!! */
  chStResultNum((stNum1 + stNum2 === userNum) ? '정답입니다!!!!!!ㅊㅊㅊ' : '오답입니다!!!!!!멍청아');
  /* └-> react에서는 if문 보다는 3항 연산자를 더 많이 사용한다!!!!!!!!!! */
 }
  /* ----------------------------------------------------------------------- */
  return (
    <form onSubmit={resultNum}>
    {/*
   └-> 제대로 된 HTML element가 아니므로 querySelector 할수없어서 'on-'을 써야한다! 
   'on-'을 쓰게되면, 해당함수 (여기서는 resultNum) 에서 parameter가 아닌 event이고(event-binding) 
   쓰지 않는다면, 그 반대로 parameter로만 쓰인다.
  */}
    <input type="text" readOnly defaultValue={stNum1} size="1" />
    +
    <input type="text" readOnly defaultValue={stNum2} size="1" />
    =
    <input className="user_num" type="text" size="1" />
    <button style={{display : 'none'}}>결과보기!</button>
    {/* react에서 inline-style은 {{}}로 묶어서 {{display : 'none'}} 꼴로 적어야한다. */}
    <p className="result">{stResultNum}</p>
    </form>
    /* HTML공간! */
    );//return(JSX)
    /* ----------------------------------------------------------------------- */
  };//component
export default App;