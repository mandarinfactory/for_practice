/* eslint-disable */
/* └-> 주석처리로 하면 warning은 따로 안나오고 error창만 뜨게 된다.  */
import { useRef } from "react";

const App = () => {
  let refNum1 = useRef()
  /* JS공간! */
  const refNum1Val = () => {
    let num1 = parseInt(refNum1.current.value)  
    /* randering되기전, setTimeout & setInterval일때만 useRef 쓰기를 권장한다!!!!!!!!!!!! */
    let num2 = parseInt(document.querySelector('.num2').value)
    let result = num1 + num2
    /* document.querySelector('.result').innerText = result --> 이거 안쓰려고 react쓰는거임! ==> react state로 변경!!!!*/
  }//refNum1Val_function

  return (
    <div>
      <input ref={refNum1} className="num1" type="number" />
      +
      <input className="num2" type="number" />
      =
      <button onClick={refNum1Val}>결과보기</button>
      <p className="result">그 결과는..?</p>
    </div>
    /* HTML공간! */
  );
};
export default App;