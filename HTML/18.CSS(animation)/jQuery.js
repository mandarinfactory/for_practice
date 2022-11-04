$(function () {
    $('.ex_two button').click(function () {
        $(this).siblings('button').removeClass('active')
        $(this).toggleClass('active')
    })//click
    $('.ex_four button').addClass('active')
    $('.ex_five button').click(function () {
        $('.ex_five .box').fadeIn()
        $('.ex_five .box').addClass('active')
    })//click
    $('.container1 button').click(function () {
        $('.container1 .box').toggleClass('active')
    })//click
    $('.container2 button').click(function () {
        $('.container2 .box').toggleClass('active')
    })//click
})//call-back function