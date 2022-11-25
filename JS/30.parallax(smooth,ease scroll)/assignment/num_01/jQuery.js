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
            meta = 1 + Math.abs(scrY - (offT - winH * 0.5 + elH * 0.5)) * - 0.0005
            if(meta < 0) meta = 0;
            $(this).find('.inner').css({'transform':`scale(${meta})`})
            /* parallax ------------------------------------------------------------ */
            if (scrY >= offT  - winH * 0.9){
                $(this).addClass('active')
            } else {
                $(this).removeClass('active')
            }//if-else
            /* scroll --------------------------------------------------------------- */    
        })//each
    }//function_move
    move();
    $(window).scroll(function () {
        move();
    }).resize(function () {
        move();
    })
})