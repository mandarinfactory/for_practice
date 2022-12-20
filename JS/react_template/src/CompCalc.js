import { useEffect, useRef, useState } from "react";

const CompClac = ({ chStShowComp }) => {
  let [stSec, changeStSec] = useState(5);
  let secRef = useRef(5)
  let refIntervalID = useRef()
  const chComponent = e => {
    let chName = e.target.getAttribute('data_comp_name') //$(this).attr('data-n')
    chStShowComp(chName);
  }//chComponent_function
  useEffect(() => {
    refIntervalID = setInterval(() => {
      changeStSec(--secRef.current)
      if (secRef.current === 0) {
        chStShowComp('result')
      }//if
      console.log(refIntervalID.current);
      return (() => {
        clearInterval(refIntervalID.current);
      })//return
    }, 1000)//setInterval
  }, [])
  return (
    <>
      <p>남은시간 : {stSec}</p>
      <hr />
      <h2>더하기문제</h2>
    </>
  );
};
export default CompClac;