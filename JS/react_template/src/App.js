import { useState } from "react";
import CompClac from "./CompCalc";
import CompResult from "./CompResult";

const App = () => {
  let [stShowComp, chStShowComp] = useState('calc')
  const chComponent = e => {
    let chName = e.target.getAttribute('data_comp_name') //$(this).attr('data-n')
    chStShowComp(chName);
  }//chComponent_function
  /* 
    useEffect --> 대표적인 life_cycle hooks★★★★★ 
    [] --> app이 실행되는 첫번째에만 실행되게끔 하게 해준다.
  */


  /* const chComponent = showComp(parameter) => {
    chStShowComp(showComp)
  }//chComponent_function --> parameter 사용 function 예시! */


  /* state갱신시점!!!!! ---------------------------------------------------------------------------------------- */
  return (
    <>

      <button onClick={chComponent} data_comp_name='calc'>문제화면</button>
      <button onClick={chComponent} data_comp_name='result'>결과화면</button>

      {(stShowComp === 'calc') && <CompClac chStShowComp={chStShowComp} />}
      {(stShowComp === 'result') && <CompResult />}


      {/* 
        {(stShowComp === 'calc') ? <CompClac /> : <CompResult />} --> 3항식연산자
        {(stShowComp === 'calc') && <CompClac />} --> true면 <CompClac />를 출력, false면 false를 출력한다. 
        {(stShowComp === 'calc') && <CompResult />} --> true면 <CompResult />를 출력, false면 false를 출력한다. 
      */}
      {/*  
        <button onClick={() => { chComponent('calc') }}>문제화면</button>
        <button onClick={() => { chComponent('result') }}>결과화면</button> --> parameter 사용 event 예시
        저번에도 써놨지만!!!! parameter를 쓰려면 () => {function (원하는 function('parameter'))} --> 꼴로 적어줘야한다. 
      */}


    </>
  );
};
export default App;