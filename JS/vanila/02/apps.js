document.addEventListener('DOMContentLoaded',()=>{
    window.addEventListener('load',()=>{

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