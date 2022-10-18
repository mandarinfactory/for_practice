function anything(x,y) {
    return x + y;
}
let number = anything(5,90);
const addNumber = console.log(number);
// function : 특정 행동을 수행하는 과정의 정리 //
// 반복적인 행동을 할때 편리하다. + 수정,관리에 용이하다. + 가독성이 좋다. //
// 변수 호이스팅(var + undefined)와 같이 함수 호이스팅이 일어나 function이 어디있든 상관이 없다. //

function handleNumber (x,y) {
    console.log(x + y);
}
var oneNumber = parseInt(prompt('number_one'));
var twoNumber = parseInt(prompt('number_two'));
handleNumber(oneNumber, twoNumber);
// 함수명(handle1Number), 인자(a) //
