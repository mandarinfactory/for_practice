/* eslint-disable */
/* └-> 주석처리로 하면 warning은 따로 안나오고 error창만 뜨게 된다.  */
import { useState } from "react";
import CompQuestion from "./component/CompQuestion";
import CompResult from "./component/CompResult";

const App = () => {
  let [stShowComp, chStShowComp] = useState(1)
  return (
    <>
      {
        (stShowComp === 1) ? <CompQuestion chStShowComp={chStShowComp} /> : <CompResult />
      }
    </>
  );
};
export default App;