import React, { useState } from 'react';

/* const setNumber = () => {
    return Math.floor(Math.random() * 9)
}//function_setNumber */

const CompPlus = () => {//component
    let [num1, chNum1] = useState('hello!')
    return (
        <>
            <form>
                <span>ㅇ ㅁㅇ</span>
                +
                <span>ㅇㅅ ㅇ</span>
                =
                <input type="text" size="1" />
            </form>
        </>
    );
};

export default CompPlus;