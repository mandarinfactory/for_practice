    $(function () {
        $('.ex_two input:last-child').click(function() {
            var firstNumber = $('.ex_two input:first-child').val()
            var secondNumber = $('.ex_two input:nth-child(2)').val()
            var thirdNumber = $('.ex_two input:nth-child(3)').val()
            var fourthNumber = $('.ex_two input:nth-child(4)').val()
            var firstAddNumber = parseInt(firstNumber + secondNumber)
            var secondAddNumber = parseInt(thirdNumber + fourthNumber)
            var totalAddNumber = firstAddNumber + secondAddNumber
            $('.ex_two .result_num').text(totalAddNumber)
        })
    }) 
// $(document).ready
/* 항상!!!! jQuery는 call-back function(비동기연결function)내에서 해야한다! */
/* $(document) = browser가 다 읽은 시점부터 .ready = $로 단축어로 쓸수 있다. */