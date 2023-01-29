$(function () {
    /* viewbox_plugin_sunshine -------------------------------------- */
    $(window).load(function () {
        $('.viewbox_sunshine ul li figure a').viewbox();
    })//load
    function callMotionSunshine() {
        $('.viewbox_sunshine ul li').each(function () {
            var offsetTop = $(this).offset().top
            if (scrY = offsetTop) {
                $(this).addClass('active')
            } else {
                $(this).removeClass('active')
            }
        })//each
    }//callMotion_function
    callMotionSunshine();
    $(window).scroll(function () {

    }).resize(function () {

    })//window_event
    /* viewbox_plugin_museum -------------------------------------- */
    $(window).load(function () {
        $('.viewbox_museum ul li figure a').viewbox();
    })//load
    function callMotionMuseum() {
        $('.viewbox_museum ul li').each(function () {
            var offsetTop = $(this).offset().top
            if (scrY = offsetTop) {
                $(this).addClass('active')
            } else {
                $(this).removeClass('active')
            }
        })//each
    }//callMotion_function
    callMotionMuseum();
    $(window).scroll(function () {

    }).resize(function () {

    })//window_event
    /* viewbox_plugin_dancestudio -------------------------------------- */
    $(window).load(function () {
        $('.viewbox_dancestudio ul li figure a').viewbox();
    })//load
    function callMotionDancestudio() {
        $('.viewbox_dancestudio ul li').each(function () {
            var offsetTop = $(this).offset().top
            if (scrY = offsetTop) {
                $(this).addClass('active')
            } else {
                $(this).removeClass('active')
            }
        })//each
    }//callMotion_function
    callMotionDancestudio();
    $(window).scroll(function () {

    }).resize(function () {

    })//window_event
    /* viewbox_plugin_bluebottle -------------------------------------- */
    $(window).load(function () {
        $('.viewbox_bluebottle ul li figure a').viewbox();
    })//load
    function callMotionBluebottle() {
        $('.viewbox_bluebottle ul li').each(function () {
            var offsetTop = $(this).offset().top
            if (scrY = offsetTop) {
                $(this).addClass('active')
            } else {
                $(this).removeClass('active')
            }
        })//each
    }//callMotion_function
    callMotionBluebottle();
    $(window).scroll(function () {

    }).resize(function () {

    })//window_event
})//document.ready