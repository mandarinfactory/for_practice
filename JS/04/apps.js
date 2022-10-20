$(document).ready(function () {
    function addNumber(n) {
        var firstNumber = ($('.section_' + n + ' .input_one').val())
        var secondNumber = parseInt($('.section_' + n + ' .input_two').val())
        var resultNumber = firstNumber + secondNumber
        $('.section_' + n + 'p').html(resultNumber)
    }
    $('.section_one button').click(function () {
        addNumber('one');
    })
    $('.section_two button').click(function () {
        addNumber('two');
    })
    function anAddNumber(a, b, c) {
        var firstNum = $('section_' + a + ' .num' + b + ' - ' + b).val()
        var secondNum = $('section_' + a + ' .num' + b + ' - ' + c).val()
        var thirdNum = $('section_' + a + ' .num' + c + ' - ' + b).val()
        var fourthNum = $('section_' + a + ' .num' + c + ' - ' + c).val()
        var firstResultNum = parseInt(firstNum + secondNum)
        var secondResultNum = parseInt(thirdNum + fourthNum)
        var realNum = firstResultNum + secondResultNum
        $('section_' + a + 'p').html(realNum)
    }

    $('.section_three button').click(function () {
        anAddNumber('third', '1', '2')
    })
    $('.section_four button').click(function () {
        anAddNumber('fourth', '1', '2')
    })
})