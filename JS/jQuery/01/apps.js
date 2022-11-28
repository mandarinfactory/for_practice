var a = 10;
// var(변수, variable)이라는뜻이다. //
// a를 10으로 변수선언했다(a=10). 10은 a의 값이다. //
// 따라서 a라는 변수가 정의가 되었으므로 따로 ""가 없더라도 alert()에서 인식된다. //
// 변수나 값은 반드시 연산자로 연결해야한다. //

console.log(a);
// 변수 호출함 //
// 단, 변수 호출전에 변수선언 및 할당이 되어있어야 한다. //

var b = 100;
b = 101;
// b를 변수로 선언(var b) => 100을 값으로 할당.(var b = 100;) => 101으로 재할당했다(b = 101). //
// 변수는 대소문자 구별, 띄어쓰기가 불가하고 숫자로 시작하는 변수는 안된다. //

console.log(b); 
// 101이 출력된다. => 후순위값이 출력되게 된다. //
// 변수는 항상 선순위에 있어야한다. (변수 호이스팅은 제외)//
// 변수의 종류는 string, number, boolean등이 있다. => +는 하나의 값이라도 string이면 연산이 아닌 문자들이 연결되는 명령어로 쓰인다. => 자동적으로 string이 아닌 값도 암묵적으로 변환되어서 둘다 string되어서 출력된다. //
// method => 쉽게 생각하면 명령어라고 보면 된다. => alert, prompt() //

var d = prompt('number_one');
// 사용자가 입력한 값을 retrun하는 method => 요즘에는 잘 쓰는 method는 아님 //
d = parseInt(d);
var e = prompt('number_two');
e = parseInt(e);
var f = d;
d = e;
console.log(e,f);
// parseInt => string을 number로 변환시켜주는 method이다. 단, 정수만 해당된다. (내림으로 계산한다.) //