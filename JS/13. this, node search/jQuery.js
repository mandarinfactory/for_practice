$(function (){
    function btnColor (numX){
        var numY = numX.val() // 선택한 btn의 value값 =.attr('value')
        var color = numX.attr('data-color') // 선택한 btn의 임의의 attribute('data-color')
        $(`.ex_${numY} button`).css({'color':'inherit'}) // 후순위로 오면 모든 element가 없어져버린다.
        numX.css({'color':color}) //.click된 button = this = numX => color는 'data-color'값을 가져온다.
    }//btnColor => 가공과정은 복잡해도 된다!
    $('.ex_one button, .ex_two button').click(function () {
        btnColor($(this)) // = click한btn => 최대한 간소화 시켜야한다!, 상품은 최대한 간단하게!
    }) //click
    $('.ex_three button').click(function () {
        $('.ex_three button').removeClass('active') // 먼저 removeClass로 끄고
        $(this).addClass('active') // 그다음 addClass로 따로 class를 추가해준다.
    })//click
})//call-back(document.ready)