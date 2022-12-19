import { useState } from "react";
import CompClac from "./CompCalc";
import CompResult from "./CompResult";

const App = () => {
  let [stShowComp, chStShowComp] = useState('calc')
  const chComponent = () => {
    chStShowComp('result')
  }//chComponent_function
  /* state갱신시점!!!!! ---------------------------------------------------------------------------------------- */
  return (
    <>
      { /* {(stShowComp === 'calc') ? <CompClac /> : <CompResult />} --> 3항식연산자 */
        /* {(stShowComp === 'calc') && <CompClac />} --> true면 <CompClac />를 출력, false면 false를 출력한다. */
        /* {(stShowComp === 'calc') && <CompResult />} --> true면 <CompResult />를 출력, false면 false를 출력한다. */
      }
      <button>문제화면</button>
      <button onClick={chComponent}>결과화면</button>
      {(stShowComp === 'calc') && <CompClac />}
      {(stShowComp === 'result') && <CompResult />}
    </>
  );
};
export default App;