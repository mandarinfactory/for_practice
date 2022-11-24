$(function () {
    var scrollSpeed = 0

    window.addEventListener('mousewheel',function (e) {
        delta = e.wheelDeltaY / -120
        console.log(delta)
    })
    /* 
    <<vanila JS>>
    addEventListener => event(click, mouseenter...)를 추가!
    wheelDeltaY = 마우스의 휠의 방향을 알수 있다. 위로 하면 +120, 아래로 하면 -120 의 값으로 출력된다.
    */
    setInterval (function () {
        window.scrollTo({
            top :  scrY + scrollSpeed
        })//setInterval
        scrollSpeed *= 0.975
        /* 
        곱하는 숫자가 1초과하면 가속도가 붙는다!
        0 ~ 1까지가 감속하는 숫자고 1과 가까워질수록 천천히 한다. (0.8 ~ 1이 제일 보기 좋다.)
        */
    },30)
})//document.ready