import { useEffect, useRef, useState } from "react";

const CompResult = ({ chStShowComp }) => {
  let [stSecond, chStSecond] = useState(5);
  let secondRef = useRef(5);

  useEffect(() => {
    let intervalID = setInterval(() => {
      chStSecond(--secondRef.current)
      if (secondRef.current === 0) {
        chStShowComp('calc')
      }//if
      console.log(secondRef.current);
    }, 1000)//setInterval
    return (() => {
      clearInterval(intervalID);
    })
  })//useEffect
  return (
    <>
      <p>남은시간 : {stSecond}</p>
      <hr />
      <h2>결과!</h2>
    </>
  );
};
export default CompResult;