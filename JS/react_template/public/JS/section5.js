$(function () {
    let book = new flipBook('.book');
    $('.section5 .btns button').click(function () {
        var n = parseInt($(this).attr('data-n'))
        book.flip(n)
        $('.section5 .btns button').removeClass('active')
        $(this).addClass('active')
    })//click
    $('.section5 .book a').viewbox()
})//document.ready