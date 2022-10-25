$(function(){
    function calPrimeNumber (primeNumber) {
        var thePrimeNumber = primeNumber
        if (Number.isNaN(thePrimeNumber)) {
        return '숫자를 입력해주십시오.'
        } else if (!Number.isInteger(thePrimeNumber)) {
            // Number.isInteger(thePrimeNumber)로 쓰게 되서 소수로 나오게 되면 false가 나오게 된다.
            // 따라서 !Number.isInteger(thePrimeNumber)로 써서 반대로 결과가 나오게 해준다.
        return '정수를 입력해주십시오.'
        } else if ((thePrimeNumber % 2) === 0) {
        return '짝수입니다.'
        } else {
        return '홀수입니다.'
        }
    }
    $('.ex_one button').click(function () {
        var primeNumber = parseFloat($('.ex_one input').val())
        $('.ex_one .para_result').text(calPrimeNumber(primeNumber))
    })//click

    function threeFiveNumber (firstNumber) {
        var resultNumber
        if(firstNumber >= 3 && firstNumber <= 5) {
            resultNumber = '감사합니다!'
        } else {
            resultNumber = '틀렸습니다!'
        }
        return resultNumber
    }
    $('.ex_two button').click(function () {
        var firstNumber = parseFloat($('.ex_two input').val())
        $('.ex_two .para_result').text(threeFiveNumber(firstNumber))
    })//click

    function oneFiveEightNumber (firstNumber) {
        var theResultNumber
        if(firstNumber === 1 || firstNumber === 5 || firstNumber === 8) {
            theResultNumber = `${firstNumber} 맞음!`
        } else {
            theResultNumber = `${firstNumber} 틀림!`
        }
        return theResultNumber
    }
    $('.ex_three button').click(function () {
        var firstNumber = parseFloat($('.ex_three input').val())
        $('.ex_three .para_result').html(oneFiveEightNumber(firstNumber))
    })//click    
})//document.ready call-back function

/*  boolean : true, false 딱 두개만 있다.(string이 아님!)
    undefined : 변수만 선언하고 값을 할당하지 않은것(=false)
    null : 변수를 선언하고 의도적으로 빈값(null)을 할당한것(=false) 
        
        var foo = null // false
        if(!foo) {
            alert(); // true, alert는 실행된다.
        }

    NaN : Not-a-Number(=false) 
    - Number.isNaN(primeNumber)
        Number.isNaN(primeNumber) //true(NaN)
        Number.isNaN은 현재 값이 NaN이어야만 true를 반환한다.
        = 값이 NaN과 동일하니?
    -is.NaN(primeNumber)
        isNaN은 현재 값이 NaN이거나 숫자로 변환했을때 NaN이 되면 참을 반환한다.
        = 값이 숫자가 아니지?
    - Number.isInteger(value)
        주어진 값이 정수인지를 판별해준다.
        Number.isInteger(1.5437) // false, (Math.PI) //false
    */

/* 논리연산자 
        비교연산자가 2개이상일경우 연결해주는 연산자이다.
        - &&(and연산자) : 모든 조건이 참일 때 참
        - ||(or연산자) : 한조건만 참이여도 참
    */
