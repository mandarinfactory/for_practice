function anything(x,y) {
    return x + y;
}
let number = anything(5,90);
const multiNumber = console.log(number);
// function : 특정 행동을 수행하는 과정의 정리 //
// 반복적인 행동을 할때 편리하다.(재활용) + 수정,관리에 용이하다. + 가독성이 좋다. //
// 변수 호이스팅(var + undefined)와 같이 함수 호이스팅이 일어나 function이 어디있든 상관이 없다. //

function handleNumber (x,y) {
    console.log(x + y);
}
var oneNumber = parseInt(prompt('number_one'));
var twoNumber = parseInt(prompt('number_two'));
handleNumber(oneNumber, twoNumber);
// 함수명(handleNumber), 인자(a) //

function averageSumThree (ONE, TWO, THREE) {
    var promptOne = parseInt(ONE);
    var promptTwo = parseInt(TWO);
    var promptThree = parseInt(THREE);
    var sum = promptOne + promptTwo + promptThree;
    var sumAverage = sum / 3;
    var realAverage = sumAverage.toFixed(1);
    return realAverage;
}
var ONE = prompt('one');
var TWO = prompt('two');
var THREE = prompt('three');
var scoreThree = averageSumThree (ONE, TWO, THREE)
console.log(parseFloat(scoreThree));
// scope(변수의 범위를 지정해줌) : 지역변수(함수안에서 선언된 변수), 전역변수(함수밖에서 선언된 변수) //

var promptOne = parseInt(prompt('number_one'));
var promptTwo = parseInt(prompt('number_two'));
function addNumbers (promptOne, promptTwo) {
   return promptOne + promptTwo;
}
function minusNumbers (promptOne,promptTwo) {
    return promptOne - promptTwo;
}
function divideNumbers (promptOne, promptTwo) {
    var divideAverage = promptOne / promptTwo;
    var realDivide = divideAverage.toFixed(1);
    return parseFloat(realDivide);
}
function multiNumbers (promptOne, promptTwo) {
    return promptOne * promptTwo;
}
var add = addNumbers (promptOne, promptTwo);
var minus = minusNumbers (promptOne, promptTwo);
var divide = divideNumbers (promptOne, promptTwo);
var multi = multiNumbers (promptOne, promptTwo);
console.log(add, minus, divide, multi); 

var allDate = parseInt(prompt('write your all attend days'));
var absentDate = parseInt(prompt('write your absent days'));

function calRealDate (allDate, absentDate) {
    var attendDateFirst = allDate - absentDate;
    var attendDateSecond = parseInt(attendDateFirst / allDate * 100);
    return attendDateSecond;
}
var realAttendDate = calRealDate (allDate, absentDate);
if (realAttendDate < 80 ) { alert (realAttendDate + '% 출석하셨습니다. 80%를 넘겨야 지원금을 받으실수 있습니다. 화이팅!')}
else { alert (realAttendDate + '% 출석하셨습니다. 80%를 넘기셨습니다! 축하드려요!')}