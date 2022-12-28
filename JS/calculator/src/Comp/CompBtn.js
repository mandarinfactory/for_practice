import React from 'react';

const CompBtn = ({ btnInfo }) => {
    /* 
    let src = btnInfo.src
    let type = btnInfo.type
    let char = btnInfo.char 
    └--> let {src, type, char} = btnInfo --> destructuring, 구조분해(비구조할당) 
    arr = [1,2,3]
    let [1,2,3] = arr
    - 구조분해 : 구조 분해 할당 구문은 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 JS 표현식입니다.
    */
    let { src, type, char } = btnInfo
    return (
        <button>
            <img src={require(`../Assets/img/${src}.png`)} alt />
        </button>
    );
};

export default CompBtn;