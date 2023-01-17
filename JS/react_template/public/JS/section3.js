$(function () {
    let count = $('.section3 .carousel .container figure').size()
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
})//document.ready