$(function () {
    var offT
    var elH
    var meta
    function picture(){
        $('ul li').each(function () {
            offT = $(this).offset().top;
            elH = $(this).innerHeight();
            meta = 0 + (scrY - (offT - winH * 0.5 + elH * 0.5)) * 0.1
            $(this).find('img').css({'transform':`translateY(${meta}px)`})
            meta = 1 + Math.abs(scrY - (offT - winH * 0.5 + elH * 0.5)) *  - 0.002
            $(this).children('div').css({'transform':`scale(${meta})`})
            meta = 0 + Math.abs(scrY - (offT - winH * 0.5 + elH * 0.5)) *  0.5
            $(this).children('div').css({'border-radius':`${meta}px`})
            $(this).find('img').css({'border-radius':`${meta}px`})

        })
    }//function_picture
    picture();
    $(window).scroll(function () {
        picture();
    }).resize(function () {
        picture();
    })
})