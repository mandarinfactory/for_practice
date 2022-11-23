$(function () {
    var offT
    function motionBox () {
        var scrY = $(window).scrollTop()
        var winH = $(window).innerHeight();

        $('.section1 li').each(function () {
            offT = $(this).offset().top // this = '.section1 li:nth-child(n)'
            if(scrY >= offT - winH * 0.9 && scrY <= offT - winH * 0.1){
                $(this).addClass('active')
            } else {
                $(this).removeClass('active')
            }
        })
    }//function
    $(window).resize(function () {
        motionBox();
    }).scroll(function () {
        motionBox();
    })//window-event
})//document.ready