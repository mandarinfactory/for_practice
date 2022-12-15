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
 const resultNum = () => {

 }
  /* ----------------------------------------------------------------------- */
  return (
    <form onSubmit={resultNum}>
    {/* └-> 제대로 된 HTML element가 아니므로 querySelector 할수없어서 'on-'을 써야한다! */}
    <input type="text" readOnly defaultValue={stNum1} size="1" />
    +
    <input type="text" readOnly defaultValue={stNum2} size="1" />
    =
    <input type="text" size="1" />
    <button style={{display : 'none'}}>결과보기!</button>
    {/* react에서 inline-style은 {{}}로 묶어서 {{display : 'none'}} 꼴로 적어야한다. */}
    <p className="result">결과!</p>
    </form>
    /* HTML공간! */
    );//return(JSX)
    /* ----------------------------------------------------------------------- */
  };//component
export default App;