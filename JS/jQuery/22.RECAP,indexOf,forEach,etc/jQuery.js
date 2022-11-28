$(function () {
    $('.ex_one button').click(function () {
        var numArr = [1, 2, 3];
        var EngArr = ['one', 'two', 'three'];
        var EnNumArr = EngArr.map(function (v, i) {
            return {[v]:numArr[i]} 
            /* 
            return을 해야 array이 생긴다!!, {}는 객체 
            [v]는 배열의 순서가 아닌, {}내에서의 [v]는 parameter로써의 v라고 생각하면 된다. 
            //
            var name = '가나다'
            obj = {
                name : 가나다,
            }
            obj.name => 가나다
            //
            var name = '가나다'
            obj = {
                [name] : 가나다, // 가나다(key값으로써의 '가나다') : 가나다 => 라는 뜻이다.
            }
            obj.name => undefined
            */
        })//map
        /* 
        EnNumArr = [
            {'two':2},
            {'one':1},
            {'three':3}
        ]
        */
    })//click(ex_one)
    /* ex_one -------------------------------------------------------------- */
    $('.ex_two .result').empty();
    for(var i = 1; i <= 10; i++){
        var randomNum = Math.ceil(Math.random() * 10);
        $('.ex_two .q').append(`${randomNum},`);
    }//for
/*     $('.ex_two .even').click(function () {
        var numberArr = $('.ex_two .q').text().split(',')
        numberArr.pop()
        var evenArr = []
        numberArr.forEach(function (v) {
            if(parseInt(v) % 2 === 0) {
                evenArr.push(v) //parseInt안해서 string이다! + forEach 대신에 map으로 써도 된다!
            }//if
        })//forEach(numberArr)
        $('.ex_two .result').text(`짝수의 갯수는! : ${evenArr.length}개`)
        evenArr.forEach(function (v){
            $('.ex_two .result').append(`,${v}`)
        })//forEach(evenArr)
    })//click(ex_two .even => forEach사용!) */ // 이런 방법으로도 사용가능하지만! 대부분 filter를 더 사용!
    
    $('.ex_two button').click(function () {
        var numberArr = $('.ex_two .q').text().split(',')
        numberArr.pop()//마지막에 있는 ,를 빼준다!
        var theNumber = parseInt($(this).attr('data-num'))
        var oddEvenArr = numberArr.filter(function (v) {
            return parseInt(v) % 2 === theNumber//항상 return을 해야 array가 생긴다!
        })//filter => oddEvenArr의 array 만들어짐!

        var oddEven = $(this).attr('data-ran')// click한 그! button = $(this)!!!!!!!!!!!
        $('.ex_two .result').text(`${oddEven}의 갯수는! : ${oddEvenArr.length}개`)
        oddEvenArr.forEach(function (v){
            $('.ex_two .result').append(`,${v}`)
        })//forEach(oddEvenArr)
    })//click(ex_two button => filter사용!)
    /* ex_two -------------------------------------------------------------- */
    var totalArr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
        $('.ex_three .q').append(totalArr[Math.floor(Math.random() * 10)])//append는 변수선언하면 안된다!
        var qNum = $('.ex_three .q').text()
        $('.ex_three button').click(function () {        
            var userNum = parseInt($('.ex_three input').val())//input은 value로 가져오는것! text가 아니고!
            if(totalArr[userNum] === qNum){
                $('.ex_three .result').text('yyyyyes')
            } else {
                $('.ex_three .result').text('nnnnno')
            }//if-else
        })//click(ex_three)
    /* ex_three -------------------------------------------------------------- */
    var weekEnArr = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
    var weekKrArr = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일']
    $('.ex_four .q').append(weekEnArr[Math.floor(Math.random() * 7)])
    $('.ex_four button').click(function () {
        if(
        weekEnArr.indexOf($('.ex_four .q').text())
        ===
        weekKrArr.indexOf($('.ex_four input').val())
        ){
            $('.ex_four .result').text('yyyyyes')
        } else {
            $('.ex_four .result').text('nnnnno')
        }//if-else
    })//click(ex_four)
    /* ex_four -------------------------------------------------------------- */
    var numEnArr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    for(var i = 1; i <= 5; i++){
    $('.ex_five .q').append(numEnArr[Math.floor(Math.random() * 10)]+',')
    }//for-i
    $('.ex_five button').click(function () {
        var checkCnt = 0;
        var quesArr = $('.ex_five .q').text().split(',')
        quesArr.pop()
        var userArr = ($('.ex_five input').val()).split(',')
        for(i = 0; i < quesArr.length; i++){
            if(numEnArr[userArr[i]] === quesArr[i]){
                checkCnt++
            } else {
                checkCnt--
            }//if
        }//for
        if(checkCnt === quesArr.length){
            $('.ex_five .result').text('다맞았습니다!')
        } else {
            $('.ex_five .result').text('다시 한번 확인해보세요!')
        }//if
    })//click
    /* ex_five -------------------------------------------------------------- */
})//call-back