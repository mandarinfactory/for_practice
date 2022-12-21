import React, { useEffect } from 'react';

const CompMinus = () => {
    useEffect(() => {
        console.log('Minus 완성!!!!!!');
    }, [])//useEffect
    useEffect(() => {
        console.log('Minus 수정!!!!!!');
    }, [])//useEffect
    return (
        <>
            <h2>빼기</h2>
            <form>
            </form>
            <p className="output">결과</p>
        </>
    );
};

export default CompMinus;