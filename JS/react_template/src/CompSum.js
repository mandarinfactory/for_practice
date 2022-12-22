
import React, { useEffect, useState } from 'react';

const CompSum = ({ point, chPoint }) => {
    let [num1, chNum1] = useState(Math.floor(Math.random() * 10));
    let [num2, chNum2] = useState(Math.floor(Math.random() * 10));
    let [result, chResult] = useState('결과');
    useEffect(() => {
        console.log('Sum 완성!!!!!!');
    }, [])//useEffect
    useEffect(() => {
        console.log('Sum 수정!!!!!!');
    }, [])//useEffect

    let formResult = e => {
        e.preventDefault();
        let num1 = parseInt(document.querySelector('.sum .num1').innerText)
        let num2 = parseInt(document.querySelector('.sum .num2').innerText)
        let num3 = parseInt(document.querySelector('.sum .num3').value)
        if (num1 + num2 === num3) {
            chResult('정답!!!!!');
            chPoint(++point)
        } else {
            chResult('5답!!!!!!');
            chPoint(--point)
        }//if-else
    }//function_formResult
    return (
        <>
            <h2>더하기</h2>
            <form className="sum" onSubmit={formResult}>
                <span className='num1'>{num1}</span>
                +
                <span className='num2'>{num2}</span>
                =
                <input className="num3" type="text" size="1" />
            </form>
            <p className="output">{result}</p>

        </>
    );
};

export default CompSum;