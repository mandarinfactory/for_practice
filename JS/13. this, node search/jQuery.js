$(function (){
    function btnColor (numX){
        var numY = numX.val() // 선택한 btn의 value값 =.attr('value')
        var color = numX.attr('data-color') // 선택한 btn의 임의의 attribute('data-color')
        $(`.ex_${numY} button`).css({'color':'inherit'}) // 후순위로 오면 모든 element가 없어져버린다.
        numX.css({'color':color}) //.click된 button = this
    }//btnColor
    $('.ex_one button, .ex_two button').click(function () {
        btnColor($(this)) // = click한btn => 최대한 간소화 시켜야한다!
    }) //click
})//call-back