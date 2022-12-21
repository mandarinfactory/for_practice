import React, { useEffect } from 'react';

const CompSum = () => {
    useEffect(() => {
        console.log('Sum 완성!!!!!!');
    }, [])//useEffect
    useEffect(() => {
        console.log('Sum 수정!!!!!!');
    }, [])//useEffect

    return (
        <>
            <h2>더하기</h2>
            <form>
                <span></span>
                +
                <span></span>
                =
                <input type="text" size="1" />
            </form>

        </>
    );
};

export default CompSum;