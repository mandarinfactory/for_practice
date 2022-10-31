$(function (){
    /* ex_one, two -------------------------------------------------------- */
    function btnColor (numX){
        var numY = numX.val() // 선택한 btn의 value값 =.attr('value')
        var color = numX.attr('data-color') // 선택한 btn의 임의의 attribute('data-color')
        $(`.ex_${numY} button`).css({'color':'inherit'}) // 후순위로 오면 모든 element가 없어져버린다.
        numX.css({'color':color}) //.click된 button = this = numX => color는 'data-color'값을 가져온다.
    }//btnColor => 가공과정은 복잡해도 된다!
    $('.ex_one button, .ex_two button').click(function () {
        btnColor($(this)) // = click한btn => 최대한 간소화 시켜야한다!, 상품은 최대한 간단하게!
    }) //click
    /* ex_three, four ---------------------------------------------------- */
    function btnStyle (numX){
        var numY = numX.val() // click한 btn($this = numX)의 value = numY
        var numZ = numX.attr('data-theColor')
        $(`.ex_${numY} button`).removeClass('active') // 먼저 removeClass로 끄고
        numX.addClass('active') // 그다음 addClass로 따로 class를 추가해준다.
        $(`.ex_${numY} button`).css({'color':'inherit'})
        numX.css({'color':numZ})
    }
    $('.ex_three button, .ex_four button').click(function () {
        btnStyle($(this))
    })//click
    /* ex_five, six ------------------------------------------------------- */
    $('.ex_five button').click(function () {
        $('.ex_five button').css({'color':'inherit'})
        $(this).siblings('button').css({'color':'crimson'}) // siblings = 형제element들
    })
    $('.ex_six button').click(function () {
        $('.ex_six .btn_box').css({'background-color':'inherit'})
        $(this).parent().css({'background-color':'darkgrey'})
    })
    /* ex_seven ---------------------------------------------------------- */
    $('.ex_seven .btn_box').click(function () {
        $('.ex_seven .btn_box button').css({'background-color':'inherit'})
        $(this).children('button').css({'background-color':'red'})
    })
    $('.ex_seven .btn_box button').click(function () {
        return false; // 중지!!!!!!!!!! btn누르면 동작안하게끔 만들어줌!!!!!!
    })
})//call-back(document.ready)