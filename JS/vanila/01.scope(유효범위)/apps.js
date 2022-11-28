console.log(a);
var a = 1;

/* 
JS에서는 변수 호이스팅이 일어나서 차순위에 변수를 선언했어도 오류가 일어나지 않고 실행된다.
=> 출력되기전에 JS가 모든 함수, 변수를 확인하고 출력한다. 
이를 통해 error를 방지한다.
*/

fn();

function fn() {
    console.log('a');
}

/* 
마찬가지로 함수 또한 호이스팅이 일어나 차순위에 선언했어도 문제없이 출력된다.
이를 방지하기 위해 const/let 변수 선언문이 나왔다.
*/

/* console.log(b); */
let b = 1;
console.log(b);

/* 
let은 호이스팅이 일어나지 않아 차순위에 선언하면 에러가 나고 항상 선순위에 선언해줘야한다.
중복된 변수명을 사용할 수 없다. 값을 바꿀수는 있다.
*/

const c = 1;
/* 
c = 1; 
const c = 2;
*/
console.log(c);
const arr = [1, 2, 3, 4]
arr.push(5) 
/* const arr = 1 */
const obj = {name:'가'}
obj.name = '나';
/* obj = 3 */
/* 
method로 arr의 내부값 변경(arr.push(5);/obj.name = '나';)은 const의 에러를 일으키지는 않지만 
arr 자체를 바꾸는(const arr = 1;/obj = 3)건 에러가 실행된다. 
const가 아닌 let/var로 변수 선언했다면 에러가 발생하지 않는다.
const는 let처럼 호이스팅이 일어나지 않고 아예 변수 선언시 값까지 같이 줘야한다.
또한 값까지 바꿀수가 없다.
주로 함수의 변수선언시에 많이 쓰인다.
다시 말해, const로 선언한 변수는 절대 바꾸면 안되는 수준이라고 생각하면 된다.
*/