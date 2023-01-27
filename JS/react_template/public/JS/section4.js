$(function () {
    let n = 1
    let intervalID
    let timeoutID
    let handleClick = true /* 연타click제어용! */

    function changeBox() {
        if (n > 3) n = 1;
        if (n < 1) n = 3;
        $('.section4 .box').each(function () {
            let activeNum
            let id = parseInt($(this).attr('data-id'))
            if (id >= n) {
                activeNum = id - n + 1
            } else {
                activeNum = 3 - (n - id) + 1
            }//if-else
            $(this).removeClass('active1 active2 active3')
            $(this).addClass(`active${activeNum}`)
        })//each
        $('.section4 .box').removeClass('active')
        $('.section4 .box' + n).addClass('active')
    }//changeBox

    $('.section4 .box').bind('transitionend', function () {
        handleClick === true;
    })//transitionend

    intervalID = setInterval(function () {
        n++
        changeBox()
    }, 2000)//intervalID

    function autoPlay() {
        clearInterval(intervalID)
        clearTimeout(timeoutID)
        timeoutID = setTimeout(function () {
            intervalID = setInterval(function () {
                n++
                changeBox()
            }, 5000)//intervalID
        }, 5000)//timeoutID
    }//autoPlay

    $('.section4 .next').click(function () {
        if (handleClick === false) return false
        n++;
        changeBox();
        autoPlay();
    })//click

    $('.section4 .prev').click(function () {
        if (handleClick === false) return false
        n--;
        changeBox();
        autoPlay();
    })//click
})//document.ready