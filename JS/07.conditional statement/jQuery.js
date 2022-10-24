// if, for statement //
function searchNumber (objectOne, axesNum) {
      var primeNumber = parseInt(objectOne.val())
        if(primeNumber > axesNum) {
            return 'true'
        } else {
            return 'false'
        }// if() = condition(조건문) { true일경우의 result} else {false일경우의 result}
}
$(function () {
    $('.ex_one button').click(function () {
       $('.ex_one .para_result').text(searchNumber($('.ex_one input'), 5))
    }) // click(event) call-back function
    $('.ex_two button').click(function () {
        $('.ex_two .para_result').text(searchNumber($('.ex_two input'), 3))
    })

function searchBloodType(objectType) {
    var objectBloodType = objectType
    if (objectBloodType === 'a') {
    return '소심한 성격입니다!'
    } else if (objectBloodType === 'b') {
    return '싸가지 없는 성격입니다!'
    } else if (objectBloodType === 'ab') {
    return '또라이입니다!'
    } else {
    return '노잼입니다!'
    } 
}
$('.ex_three button').click(function () {
    var objectType = $('.ex_three input:checked').val()   
    $('.ex_three .result').html(searchBloodType(objectType))
})//click call-back function
$('.ex_four button').click(function () {
    var objectType = $('.ex_four input:checked').val()   
    $('.ex_four .result').html(searchBloodType(objectType))
})
    }) // ready function(call-back function => 항상 jQuery쓸때는 꼭 필요하다!)
    /* conditional statement
    // syntax
    - if , if else(2분기), if else if else(다분기)
    // comparsion operator
    - >, <, >=, <= , ===, !==, &&, !(=false) 
    */