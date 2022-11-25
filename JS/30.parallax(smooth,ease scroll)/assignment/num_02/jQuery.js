$(function () {
    var offT
    var elH
    var meta
    function flag (){
        offT = $('.right').offset().top
        elH = $('.right').innerHeight();
        meta = 100 - Math.abs(scrY - (offT - winH * 0.5 + elH * 0.5)) * 0.0009
        $('.right').css({'transform':`translateX(${meta}%)`})
    }//function_flag
    flag();
    $(window).scroll(function () {
        flag();
    }).resize(function () {
        flag();
    })
})