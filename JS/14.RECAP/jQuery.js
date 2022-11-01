$(function () {
    /* ex_one, two ------------------------------------------------------- */
    function checkBgColor (numX) {
        var exNum = numX.parent().attr('data_num')
        var bgColor = $(`.ex_${exNum} .box${numX.text()}`).attr('data-bg')
        $(`.ex_${exNum} .box`).css({'background-color':'inherit'})
        $(`.ex_${exNum} .box${numX.text()}`).css({'background-color': bgColor})
    } //function
    $(`.ex_one button, .ex_two button`).click(function () {
        checkBgColor($(this));
    })//click
    /* ex_three, four --------------------------------------------------------- */
    function checkColor (numX) {
        var num = numX.text();
        var bigNum = numX.parent().attr('data-num')
        $(`.ex_${bigNum} .box${num}`).siblings('div').removeClass(`active1 active2 active3`) // 우선 다 꺼야함!
        $(`.ex_${bigNum} .box${num}`).toggleClass(`active${num}`)
        
    }
    $('.ex_three button, .ex_four button').click(function () {
        checkColor($(this));
    })//click
    /* ex_five, six--------------------------------------------------------- */
    function calculator (numX) {
        var numOne = parseInt(numX.siblings('.num_one').val())
        var numTwo = parseInt(numX.siblings('.num_two').val())
        var operCal = numX.siblings('select').val()
        if (operCal === '+') {
            result = numOne + numTwo
        } else if (operCal === '-') {
            result = numOne - numTwo
        } else if (operCal === '*') {
            result = numOne * numTwo
        } else {
            result = (numOne / numTwo).toFixed(2)
        }
    }
    $(`.ex_five button, .ex_six button`).click(function () {
        /* var exNum = $(this).val() 
        var numOne = parseInt($(`.ex_${exNum} .num_one`).val())
        var numTwo = parseInt($(`.ex_${exNum} .num_two`).val())
        var operCal = $(`.ex_${exNum} select`).val() */
        calculator($(this))
        $(this).siblings('.result').text(result) // node를 사용하면 따로 value값을 줄 필요가 없다!
    })//click
    /* assignment!(ex_seven, eight) ---------------------------------------- */
    var a = 0;
    function easyCalculator(numY) {
        a += parseInt(numY.val())
        $(`.ex_${numY.siblings('span').attr('data-name')} span`).text(a);
    }//function
    $('.ex_seven button, .ex_eight button').click(function () {
        easyCalculator($(this))
    })//click
    /* accordian --------------------------------------------------------- */
    $('.question').click(function () {
        $('.answer').stop().slideUp()
        $(this).siblings('.answer').stop().slideToggle()
        $(this).parent().siblings().children('.question').removeClass('active')
        $(this).toggleClass('active')
    })//click
})//.document.ready