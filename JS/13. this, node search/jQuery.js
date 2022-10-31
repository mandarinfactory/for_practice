$(function (){
    $('.ex_one button').click(function () {
        $('.ex_one button').css({'color':'inherit'}) // 후순위로 오면 모든 element가 없어져버린다.
        $(this).css({'color':'firebrick'}) //.click된 button = this
    }) //click
})//call-back