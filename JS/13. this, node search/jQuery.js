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
    })//click
    $('.ex_six button').click(function () {
        $('.ex_six .btn_box').css({'background-color':'inherit'})
        $(this).parent().css({'background-color':'darkgrey'})
    })//click
    /* ex_seven ---------------------------------------------------------- */
    $('.ex_seven .btn_box').click(function () {
        $('.ex_seven .btn_box button').css({'background-color':'inherit'})
        $(this).children('button').css({'background-color':'red'})
    })//click
    $('.ex_seven .btn_box button').click(function () {
        return false; // 중지!!!!!!!!!! btn누르면 동작안하게끔 만들어줌!!!!!!
    })//click
    /* ex_eight ---------------------------------------------------------- */
    $('.ex_eight button').click(function () {
        $(this).siblings('button').removeClass('active'); // this의 나머지 = this의 siblings!
        $(this).toggleClass('active')
        // toggle, toggleClass는 this제외하고 다 removeClass + this는 꼭 남아야한다!
    })//click
    /* 
        // 숨기거나 보여주는 method    
        show, hide, toggle
        fadeIn, fadeOut, fadeToogle (+stop!) 
        slideDown, slideUp, slideToggle (+stop!)
        // 모양바꾸는 method
        css, addClass, removeClass, toggleClass
    */
   /* assignment ----------------------------------------------------- */
   $('.ex_nine button').click(function () {
        var boxNumber = $(`.ex_nine .box${$(this).text()}`).attr('data-bg')
        $(`.ex_nine div`).css({'background-color':'inherit'})
        $(`.ex_nine .box${$(this).text()}`).css({'background-color':boxNumber})
   })
   $('.ex_ten button').click(function () {
    $(`.ex_ten .box${$(this).text()}`).attr('data-bg')
    $(`.ex_ten .box${$(this).text()}`).siblings('div').removeClass(`active${$(this).text()}`)
    $(`.ex_ten .box${$(this).text()}`).toggleClass(`active${$(this).text()}`)
   })
})//call-back(document.ready)