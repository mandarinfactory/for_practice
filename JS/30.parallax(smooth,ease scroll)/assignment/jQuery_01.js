$(function () {
    var offsetTop
    var boxHeight
    var meta

 function motion () {
    $('li').each(function (){
        offsetTop = $(this).offset().top;  
        boxHeight = $(this).innerHeight();
        meta = 0 + Math.abs( scrY - (offsetTop - winH * 0.5 + boxHeight * 0.5)) * 0.1
        if(meta > 50)meta = 50;
        $(this).children('img').css({'border-radius':`${meta}%`})
        meta = 1 + Math.abs( scrY - (offsetTop - winH * 0.5 + boxHeight * 0.5)) * - 0.0001
        if(meta < 0)meta = 0;
        $(this).children('img').css({'transform':`scale(${meta})`})
    })
 }//motion
 motion();
 $(window).scroll(function () {
    motion();
}).resize(function () {
    motion();
 })//window-event
/* ex_one ------------------------------------------------------------------------- */





})//document.ready