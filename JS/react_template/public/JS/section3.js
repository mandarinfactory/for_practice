$(function () {
    let count = $('.section3 .carousel .container figure').length
    for (var i = 1; i <= count; i++) {
        $(`.section3 .carousel .container .figure${i}`).clone().appendTo('.section3 .carousel .container')
        $(`.section3 .carousel .container .figure${i}`).eq(1).css({
            'position': 'absolute',
            'left': 100 + (i - 1) * (100 / count) + '%'
        })//css
    }//for
    for (var i = count; i >= 1; i--) {
        $(`.section3 .carousel .container .figure${i}`).eq(0).clone().prependTo('.section3 .carousel .container')
        $(`.section3 .carousel .container .figure${i}`).eq(0).css({
            'position': 'absolute',
            'right': 100 + (count - i) * (100 / count) + '%'
        })//css
    }//for
    /* btn_event(slider) ------------------------------------------------------------------------------- */
    $('.section3 .container').bind('transitionend', function () {
        if (n > count) {
            n = 1
            $('.section3 .container').css({
                'transition-duration': '0s',
                'left': (n - 1) * - 100 + '%'
            })//css
        } else if (n < 1) {
            n = count
            $('.section3 .container').css({
                'transition-duration': '0s',
                'left': (n - 1) * - 100 + '%'
            })//css
        }//if-else
    })//bind.transitionend
    let n = 1;
    let intervalID
    let timeoutID

    intervalID = setInterval(function () {
        n++;
        chBtn()
    }, 2000)

    function autoPlay() {
        clearInterval(intervalID)
        clearTimeout(timeoutID)
        timeoutID = setTimeout(function () {
            intervalID = setInterval(function () {
                n++;
                chBtn()
            }, 2000)
        }, 3000)
    }//function_autoPlay

    function chBtn() {
        $('.section3 .container').css({
            'transition-duration': '0.5s',
            'left': (n - 1) * - 100 + '%'
        })//css
        $('.section3 .controls button').removeClass('active')
        $('.section3 .controls .btn' + n).addClass('active')
        $('.section3 .carousel').toggleClass('active')
        $('.section3 .carousel figure').removeClass('active')
        $('.section3 .carousel figure' + n).addClass('active')
    }//function_chBtn
    $('.section3 .prev').click(function () {
        n--;
        chBtn()
        autoPlay()
    })//click
    $('.section3 .next').click(function () {
        n++;
        chBtn()
        autoPlay()
    })//click
    $('.section3 .indicator button').click(function () {
        n = $(this).attr('data-n')
        chBtn()
        autoPlay()
    })//click
})//document.ready