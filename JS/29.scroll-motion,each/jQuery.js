$(function () {
    function motionBox () {
        var offT
        var scrY = $(window).scrollTop()
        var winH = $(window).innerHeight();
        offT = $('.section1 li').offset().top
        if(scrY >= offT - winH && scrY <= offT + 300){
            $('.section1 li').addClass('active')
        } else {
            $('.section1 li').removeClass('active')
        }
    }//function
    $(window).resize(function () {
        motionBox();
    }).scroll(function () {
        motionBox();
    })//window-event
})//document.ready