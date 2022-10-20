$(document).ready(function () { // call-back function! => 이 내부에서만 기록해야한다. //
    function clickAddNum () {
        var firstNum = $('.ex_one .input_one').val();
        var secondNum = $('.ex_one .input_two').val();
        var theFirstNum = parseInt(firstNum + secondNum);
        var thirdNum = $('.ex_one .input_three').val();
        var fourthNum = $('.ex_one .input_four').val();
        var theSecondNum = parseInt(thirdNum + fourthNum);
        var resultNum = theFirstNum + theSecondNum;
        $('.ex_one p').text(resultNum);
        // .text&html로 p element의 값을 변경(result => resultNum)한다.//
    }
    $('.ex_one button').click(function () {
        clickAddNum();
    })
})