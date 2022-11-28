$(function () {
    var offsetT
    function motionBox (){
        var scrollT = $(window).scrollTop();
        var windowH = $(window).innerHeight();

        $('section .card').each(function () {
            offsetT = $(this).offset().top
            if(scrollT >= offsetT - windowH * 0.9 && scrollT <= offsetT - windowH * 0.1){
                $(this).addClass('active')
            } else {
                $(this).removeClass('active')
            }
        })//each
    }//function

    $(window).resize(function () {
        motionBox();
    }).scroll(function () {
        motionBox();
    })//window-event
})//document.ready