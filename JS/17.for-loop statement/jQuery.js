$(function () {
    $('.ex_one button').click(function () {
        $('.ex_one .result').empty() // text를 지움!
        for(var i = 10; i >= 1; i --){
            $('.ex_one .result').append(`${11-i}<br>`)
        }//for(.ex_one)
    })//click(.ex_one)
    /* ex_one ----------------------------------------------- */
    $('.ex_two button').click(function () {
        var str = $('.ex_two input').val()
        $('.ex_two .result').empty()
        for (var i = 0; i <= str.length; i++) {
            $('.ex_two .result').append(`${str.charAt(str.length-i)}<br>`) 
             /* .strcharAt(n) = string에서 n번째가 가리키고 있는 문자열을 char-type으로 변환한다.  
             단, JS에서 n번째는 0,1,2,3....순으로 나온다.
             .append는 새로운element를 마지막에 추가하는 method이다.(prepend는 맨앞에) */
        }//for
    })//click(.ex_two)
})//call-back function