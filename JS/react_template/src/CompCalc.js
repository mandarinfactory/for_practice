import { useEffect, useRef, useState } from "react";

const CompClac = ({ chStShowComp }) => {
  let [stSec, changeStSec] = useState(5);
  let secRef = useRef(5)
  const chComponent = e => {
    let chName = e.target.getAttribute('data_comp_name') //$(this).attr('data-n')
    chStShowComp(chName);
  }//chComponent_function

  useEffect(() => {
    let intervalID = setInterval(() => {
      changeStSec(--secRef.current)
      if (secRef.current === 0) {
        chStShowComp('result')
      }//if
      console.log(secRef.current);
    }, 1000)//setInterval
    return (() => { //--> components가 화면에서 사라질때!!!!
      clearInterval(intervalID);
    })//return
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