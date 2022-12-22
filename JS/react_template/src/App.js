import { useEffect, useState } from "react";
import CompMinus from "./CompMinus";
import CompPoint from "./CompPoint";
import CompSum from "./CompSum";
import CompTitle from "./CompTitle";

const App = () => {
  let [point, chPoint] = useState(0)
  useEffect(() => {
    console.log('AppComponent 완성!!!!!!');
  }, [])//useEffect
  useEffect(() => {
    console.log('AppComponent 수정!!!!!!');
  }, [])//useEffect
  return (
    <>
      <CompTitle />
      <hr />
      <CompSum point={point} chPoint={chPoint} />
      <hr />
      <CompMinus point={point} chPoint={chPoint} />
      <hr />
      <CompPoint point={point} />
    </>
  );
};
export default App;