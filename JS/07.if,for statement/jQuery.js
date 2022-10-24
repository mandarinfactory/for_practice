// if, for statement //
$(function () {
    $('.ex_one button').click(function () {
        var firstNumber = parseInt($('.ex_one input').val())
        if(firstNumber > 5) {
            $('.ex_one .para_result').text(true);
        } else {
            $('.ex_one .para_result').text(false);
        }
        // if() = condition(조건문) { true일경우의 result} else {false일경우의 result}
    }) // click(event) call-back function
}) // ready function(call-back function => 항상 jQuery쓸때는 꼭 필요하다!)