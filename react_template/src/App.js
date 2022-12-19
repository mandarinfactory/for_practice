import { useState } from "react";
import CompClac from "./CompCalc";
import CompResult from "./CompResult";

const App = () => {
  let [stShowComp, chStShowComp] = useState('calc')
  return (
    <>
      { /* {(stShowComp === 'calc') ? <CompClac /> : <CompResult />} --> 3항식연산자 */
        /* {(stShowComp === 'calc') && <CompClac />} --> true면 <CompClac />를 출력, false면 false를 출력한다. */
        /* {(stShowComp === 'calc') && <CompResult />} --> true면 <CompResult />를 출력, false면 false를 출력한다. */
      }
      {(stShowComp === 'calc') && <CompClac />}
      {(stShowComp === 'calc') && <CompResult />}
    </>
  );
};
export default App;