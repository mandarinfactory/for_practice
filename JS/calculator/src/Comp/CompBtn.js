import React, { useContext, useEffect } from 'react';
import { AppContext } from '../App';

/* 
let src = btnInfo.src
let type = btnInfo.type
let char = btnInfo.char 
└--> let {src, type, char} = btnInfo --> destructuring, 구조분해(비구조할당) 
arr = [1,2,3]
let [1,2,3] = arr
- 구조분해 : 구조 분해 할당 구문은 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 JS 표현식입니다.
- 함수는 왠만하면 밖에다가 만드는게 좋은편이다. --> 다시 굳이 쓴 함수를 또 읽을 필요는 없으니까!
단, 이 함수를 자식이 물려받아야하는 경우에는 꼭 안쪽에 넣어준다!
*/

const CompBtn = ({ btnInfo }) => {
    let { str, chStr } = useContext(AppContext);
    let { src, type, char } = btnInfo

    let setCalc = e => {
        let btnType = e.currentTarget.getAttribute('data-type')
        let btnChar = e.currentTarget.value
        if (btnType === 'string') {
            chStr(str += btnChar);
        } else if (btnType === 'clear') {
            chStr('');
        } else if (btnType === 'del') {
            /*  str.slice(0, -0) 첫글자(0)부터 마지막글자(-0)까지! --> 뒤에서 한글자까지라고 하려면 -1로 해놓으면 된다. */
            chStr(str.slice(0, -1))
        } else if (btnType === 'equal') {
            try {
                let theResult = new Function(`return ${str}`)
                chStr(String(theResult()))
            } catch {
                alert('error 입니다. 식을 다시 확인해주십시오.')
            }//try(일단은 시도해보고)-catch(안되면 여기서 해결!) --> 예외처리구문
        }//if-else
    }//function_setCalc --> 여기서 e는 parameter가 아닌 eventListener로써의 e다!

    useEffect(() => {
    }, [])//useEffect --> [] === 만들어질때 딱 그 처음만! 안하면 계속 eventListener가 추가가 된다!

    return (
        <button onClick={setCalc} data-type={type} value={char}>
            <img src={require(`../Assets/img/${src}.png`)} alt />
        </button >
    );
};

export default CompBtn;