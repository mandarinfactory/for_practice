$(function () {
    let n = 1
    $('.section4 .next').click(function () {
        n++;
        if (n > 3) n = 1;
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
    })//click
})//document.ready