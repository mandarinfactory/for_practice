$(function () {
    var offT
    var elH
    var meta
    function move (){
        $('li').each(function () {
            offT = $(this).offset().top;
            elH = $(this).innerHeight();
            meta = 0 + (scrY - (offT - winH * 0.5 + elH * 0.5)) * 0.1
            $(this).find('img').css({'transform':`scale(1.5) translateY(${meta}px)`})
            meta = 1 + Math.abs(scrY - (offT - winH * 0.5 + elH * 0.5)) * - 0.0001
            if(meta < 0) meta = 0;
            $(this).find('.inner').css({'transform':`scale(${meta})`})
        })//each
    }//function_move



    move();
    $(window).scroll(function () {
        move();
    }).resize(function () {
        move();
    })
})