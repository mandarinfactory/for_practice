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
        console.log(selectVal);

    })
})