$(function () {
    var t
    var h
    var meta
    function parallaxBox () {
        t = $('.ex_one').offset().top
        meta = 100 + (scrY - (t)) * 1
        /* 
        << parallax 공식! >>
        기본값(내가 원하는 값) + (스크롤 위치 - (내가 원하는 위치)) * 속도와 방향 => 양수면 ▽, 음수이면 △ 변한다.
         */
        $('.ex_one').css({'width':`${meta}px`})
        t = $('.ex_two').offset().top
        h = $('.ex_two').innerHeight();
        meta = 0 + (scrY - (t - winH * 0.5 + h * 0.5)) * 0.1 
        /* 화면정중앙까지 img가 걸리면 보이게끔 해준다. 위,아래로 갈수록 img가 변경 */
        $('.ex_two img').css({'transform':`scale(1.5) translateY(${meta}px)`})
        meta = 0 + Math.abs((scrY - (t - winH * 0.5 + h * 0.5)))  * 0.1 /* Math.abs => 절대값으로 변경해준다! */
        $('.ex_two').css({'border-radius':`${meta}%`})
        meta = 1 + Math.abs(scrY - (t - winH * 0.5 + h * 0.5)) * - 0.0009/* opacity, transform(scale)은 값이 작으므로 매우 작은 차이로 한다! */
        $('.ex_two').css({'opacity': meta})
        meta = 1 + Math.abs(scrY - (t - winH * 0.5 + h * 0.5)) * 0.001
        $('.ex_two').css({'transform':`scale(${meta})`})
        /* parallax에서는 transform을 빼야한다! */
    }//parallaxBox

    parallaxBox();
    $(window).resize(function () {
        parallaxBox();
    }).scroll(function () {
        parallaxBox();
    })//window-event
})