$(document).ready(function () { // call-back function! => 이 내부에서만 기록해야한다. //
    function clickAddNum (numX) {
        var firstNum = $(`.ex_${numX} .input_one`).val();
        var secondNum = $(`.ex_${numX} .input_two`).val();
        var theFirstNum = parseInt(firstNum + secondNum);
        var thirdNum = $(`.ex_${numX} .input_three`).val();
        var fourthNum = $(`.ex_${numX} .input_four`).val();
        var theSecondNum = parseInt(thirdNum + fourthNum);
        var resultNum = theFirstNum + theSecondNum;
        $(`.ex_${numX} p`).text(resultNum);
        // .text&html로 p element의 값을 변경(result => resultNum)한다.//
    }
    function checkTotalPrice (numX) {
        var selectPrice = parseInt($(`.ex_${numX} select`).val())
        var selectColor = parseInt($(`.ex_${numX} input:checked`).val())
        var submitQuan = $(`.ex_${numX} .input_quan`).val()
        var totalPrice = (selectPrice + selectColor) * submitQuan;
        $(`.ex_${numX} p`).text(totalPrice + '원 입니다. 빠른 구매 부탁드립니다.')
    }
    function easyAddOne (numX) {
        var firstOne = parseInt($(`.ex_seven .para_${numX} .number_one`).val())
        var secondOne = parseInt($(`.ex_seven .para_${numX} .number_two`).val())
        var totalOne = firstOne + secondOne
        $(`.ex_seven .para_${numX} b`).text(totalOne)
        return totalOne
        // function을 종료하고 다시 호출지점으로 반환시키는게 return이다. //
    }

    $('.ex_one button').click(function () {
        clickAddNum('one');
    })
    $('.ex_two button').click(function () {
        clickAddNum('two');
    })
    $('.ex_three button').click(function () {
        var submitGender = $('.ex_three input:checked').val()
        $('.ex_three p').text(`you've choose ${submitGender}.`)
        // pseudo class => :checked는 선택되어진 element를 말한다. //
    })
    $('.ex_four button').click(function () {
        var selectVal = $('.ex_four select').val()
        // select의 value값이 있어야 가능하다.
        console.log(selectVal);
    })
    $('.ex_five button').click(function () {
      checkTotalPrice('five')
    })
    $('.ex_six button').click(function () {
      checkTotalPrice('six')
    })
    $('.ex_seven button').click(function () {
        var sumOne = easyAddOne('one')
        var sumTwo = easyAddOne('two')
        var sumThree = easyAddOne('three')
        var sumFour = easyAddOne('four')
        var sumFive = easyAddOne('five')
        var sumResult = sumOne + sumTwo + sumThree + sumFour + sumFive
        $('.ex_seven .output').text(sumResult)
    })
    function anCheckTotalPrice (numX) {
        var selectPrice = parseInt($(`.ex_eight .div_${numX} select`).val())
        var selectColor = parseInt($(`.ex_eight .div_${numX} input:checked`).val())
        var submitQuan = $(`.ex_eight .div_${numX} .input_quan`).val()
        var totalPrice = (selectPrice + selectColor) * submitQuan;
        $(`.ex_eight .div_${numX} p`).text(totalPrice + '원 입니다. 빠른 구매 부탁드립니다.')
        return totalPrice
    }
    $('.ex_eight button').click(function () {
        var totalPriceOne = anCheckTotalPrice('one')
        var totalPriceTwo = anCheckTotalPrice('two')
        var totalPriceThree = anCheckTotalPrice('three')
        var totalPrice = totalPriceOne + totalPriceTwo + totalPriceThree
        $('.ex_eight .output_para').text('총' + totalPrice + '원 입니다. 확인 후 구매 부탁드립니다.')
    })
})
// 항상 function등을 적을때 사전에 주석으로 정리를 해놓고 만들자! //
//jQuery는 항상 $(document).ready내에서 function을 생성해야한다!(call-back function) //