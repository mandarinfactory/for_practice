$(function () {
    var t
    var h
    var change
    function exParallax (){
        change = 100 + (scrY - (t)) * 1
        t = $('section div div').offset().top
        h = $('section div div').innerHeight();
        change =  0 + (scrY - (t - winH * 0.5 + h * 0.5)) * 0.1 
        $('section div div').css({'transform':`scale(${change/50}) translateY(${change}px)`})
    }//exParallax
    exParallax();
    $(window).scroll(function () {
        exParallax();
    }).resize(function () {
        exParallax();
    })//window-event
})//document.ready