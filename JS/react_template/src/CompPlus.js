import React, { useContext, useRef, useState } from 'react';
import { myContext } from './App';

/* const setNumber = () => {
    return Math.floor(Math.random() * 9)
}//function_setNumber */

const CompPlus = () => {//component
    let { setNumber } = useContext(myContext);
    let [num1, chNum1] = useState(setNumber());
    let [num2, chNum2] = useState(setNumber());
    let [result, chResult] = useState('결과');
    let refNum1 = useRef();
    let refNum2 = useRef();
    let refUserNum = useRef();
    let setResult = e => {
        e.preventDefault();
        let num1 = parseInt(refNum1.current.innerText)
        let num2 = parseInt(refNum1.current.innerText)
        let userNum = parseInt(refUserNum.current.value)
        if (num1 + num2 === userNum) {
            chResult('정답!')
        } else {
            chResult('5답!')
        }
    }//function_setResult
    return (
        <>
            <form onSubmit={setResult}>
                <span ref={refNum1}>{num1}</span>
                +
                <span ref={refNum2}>{num2}</span>
                =
                <input ref={refUserNum} type="text" size="1" />
                <span>{result}</span>
            </form>
        </>
    );
};

export default CompPlus;