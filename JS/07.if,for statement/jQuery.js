// if, for statement //
function searchNumber (numX, numY) {
      var primeNumber = parseInt($(`.ex_${numX} input`).val())
        if(primeNumber > numY) {
            $(`.ex_${numX} .para_result`).text(true);
        } else {
            $(`.ex_${numX} .para_result`).text(false);
        }// if() = condition(조건문) { true일경우의 result} else {false일경우의 result}
}
$(function () {
    $('.ex_one button').click(function () {
        searchNumber('one', 5);
    }) // click(event) call-back function
    $('.ex_two button').click(function () {
        searchNumber('two', 3);
    })
}) // ready function(call-back function => 항상 jQuery쓸때는 꼭 필요하다!)