/* eslint-disable */
import { useState } from "react";

const CompQuestion = (props) => {
    /* ---------------------------------------------------------------- */
    let [stNum1, chStNum1] = useState(setRandomNum())
    let [stNum2, chStNum2] = useState(setRandomNum())
    let [stResult, chStResult] = useState("")
    let [stPoint, chStPoint] = useState("")
    /* ---------------------------------------------------------------- */
    function setRandomNum() {
        return Math.floor(Math.random() * 10);
    }//setRandomNum
    const checkResult = e => {
        e.preventDefault();
        let userNum = parseInt(document.querySelector('input').value);
        if (isNaN(userNum % 2)) {
            alert('숫자를 적어주십시오.')
        }//if_validation
        if (stNum1 + stNum2 === userNum) {
            chStResult('정답');
            chStPoint(++stPoint)
            chStNum1(setRandomNum())
            chStNum1(setRandomNum())
            /* 
            stPoint++로 출력하면 '0'출력된후 --> 한번더 클릭해야 '1'이 출력되므로 ++stPoint로 해야한다. 
            또한, react에서는 가급적이면 증감연산자를 지양한다!!!!!!!
            */
        } else {
            chStResult('오답');
            chStPoint(--stPoint)
        }//if_else
        if (stPoint === 3) {
            chStShowCamp(2)
        }
        document.querySelector('input').value = '';
    }//checkResult
    return (
        <>
            <h2>문제화면</h2>
            <form onSubmit={checkResult}>
                <p>
                    <span>{stNum1}</span>
                    +
                    <span>{stNum2}</span>
                    =
                    <input className="" type="text" size="1" />
                </p>
                <hr />
                <p className="result">
                    ★결과★ : {stResult}
                </p>
                <hr />
                <p>
                    ★점수★ : {stPoint}
                </p>
            </form>
            <App />
            <CompResult />
        </>
    );
};

export default CompQuestion;