import { useEffect } from "react";
import CompMinus from "./CompMinus";
import CompPoint from "./CompPoint";
import CompSum from "./CompSum";
import CompTitle from "./CompTitle";

const App = () => {
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
      <CompSum />
      <hr />
      <CompMinus />
      <hr />
      <CompPoint />
    </>
  );
};
export default App;