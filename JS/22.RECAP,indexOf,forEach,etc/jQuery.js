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
})//call-back