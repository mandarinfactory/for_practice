document.addEventListener('DOMContentLoaded',() => {
    window.addEventListener('load',() => {
        function foo () {

        }//1번째 방법 => hoisting이 발생한다.

        foo = function () {

        }//2번쩨 방법 => 1번째 방법과 다를게 없다.(전역변수인 window.가 생략된거와 같다.)
        
        const foo = () => {

        }//3번째 방법 
        foo(); // 항상 선언 후 호출임을 명시하자!
    })//load, tag에 있는 data까지 다 보려고 할때
    /*  
    load(얘는 DOM~내에 있어도 가능하다. load가 항상 나중에 발생한다. 단, 반대는 안됨!) 
    다시말해,
    이사가 끝난후에 할일(load) (
        이사가기전에 해야할일(DOMContentLoaded) ()
    ) => 이렇게는 말이 되지 않는다는 말이다.
    */
})//DOMContentLoaded, tag만 보려고 할때

/* 
function () {} => ()=>(arrow function){}로 많이 쓰인다! 
jQ : $(document).ready(function () {}) === $(function () {})
$(window).load(function () {})//jQ === window.addEventListener('load',()=>{})//vanila

*/