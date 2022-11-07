$(function () {
    $('.door_btn').click(function () {
        $('.door_container').toggleClass('active')
    })//click
    $('.cube_btns button').click(function (){
        var X = $(this).attr('data-x')
        var Y = $(this).attr('data-y')
        $('.cube').css({'transform':`rotateX(${X}deg) rotateY(${Y}deg)`})
    })//click
    $('.btn_three button').click(function () {
        var X = $(this).attr('data-x')
        var Y = $(this).attr('data-y')
        $('.theCube').css({'transform':`rotateX(${X}deg) rotateY(${Y}deg)`})
    })//click
})//call-back function
