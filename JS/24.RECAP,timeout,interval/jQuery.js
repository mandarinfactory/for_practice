$(function () {
    /* ex_one ------------------------------------------------------------------------------ */
    var enNumArr = ['zero','one', 'two', 'three', 'four']
    var krNumArr = ['영', '하나', '둘', '셋', '넷']
    /*    enNumArr.forEach(function () {
        $('.ex_one .q').append(enNumArr[Math.floor(Math.random() * enNumArr.length)] + ',')
    })//forEach(enNumArr) => 겹치지 않게 하기 위해서는 forEach 쓰면 꼬인다! */ 
    var enNumArrCopy = [...enNumArr]
    for (var i = 0; i < 5; i++){
        var randomNum = Math.floor(Math.random() * enNumArrCopy.length) // 0 ~ 4, 0 ~ 3, 0 ~ 2, 0 ~ 1, 0
        $('.ex_one .q').append(enNumArrCopy[randomNum] + ',')
        enNumArrCopy.splice(randomNum,1)
    }//for-i
    
    $('.ex_one button').click(function () {
        var enString = $('.ex_one .q').text().slice(0,-1)
        var enStrArr = enString.split(',')
        var krString = $('.ex_one input').val()
        var krStrArr = krString.split(',') 
        
        var theArr = krStrArr.filter(function (v,i) {
            return krNumArr.indexOf(v)
            ===
            enNumArr.indexOf(enStrArr[i])
        })//filter(krStrArr) => 해당 조건을 만족하는 array를 출력해준다.
        
        var result
        if(theArr.length === 5 && krStrArr.length === 5){
            result = '정답!'
        } else {
            result = '오답!'
        }
        $('.ex_one .result').text(result)
    })//click
    /* ex_two ------------------------------------------------------------------------------ */
    var zeroTimeout // 밖에다가 변수를 선언한다!
    $('.ex_two .btn_one').click(function () {
        clearTimeout(zeroTimeout)
        zeroTimeout = setTimeout(function () {
            $('.ex_two .result').text(0)
        }, 2000)//setTimeout
    })//click(.btn_one)
    var primeTimeout // 밖에다가 변수를 선언한다!
    $('.ex_two .btn_two').click(function () {
        clearTimeout(primeTimeout) // stack이 쌓이지 않게 하기 위해!
        primeTimeout = setTimeout(function () { 
            $('.ex_two .result').text(1)
        },1000)//setTimeout
    })//click(.btn_two)
    /* ex_three ------------------------------------------------------------------------------ */
    var a = 0;
    var intervalPlus
    $('.ex_three .increase').click(function () {
        clearInterval(intervalPlus)
        intervalPlus = setInterval(function () {
            a++
            $('.ex_three .result').text(a);
        },1000)//setInterval
    })//click
    var intervalMinus
    $('.ex_three .decrease').click(function () {
        clearInterval(intervalMinus)
        intervalMinus = setInterval(function () {
            a--
            $('.ex_three .result').text(a)
        },1000)
    })//click   
    $('.ex_three ,stop').click(function () {
        clearInterval()
    })//click
    /* ex_four ------------------------------------------------------------------------------ */
    var b = 0;
    var timeoutPlusId
    var intervalPlusId
    $('.ex_four .increase').click(function () {
        timeoutPlusId = setTimeout(function () {
            clearInterval(intervalMinusId)
            clearInterval(intervalPlusId)
            intervalPlusId = setInterval(function () {
                b++;
                $('.ex_four .result').text(b);
            },1000)//setInterval
        },5000)//setTimeout
    })//click
    var timeoutMinusId
    var intervalMinusId
    $('.ex_four .decrease').click(function () {
        clearInterval(intervalPlusId)
        clearInterval(intervalMinusId)
        timeoutMinusId = setTimeout(function () {
            intervalMinusId = setInterval(function () {
                b--;
                $('.ex_four .result').text(b);
            },1000)//setInterval
        },5000)//setTimeout
    })//click
    /* ex_five ------------------------------------------------------------------------------ */
    $('.ex_five button').click(function () {
        var timeNum = parseInt($('.ex_five .timer').val())
        setInterval(function () {
            if(timeNum > 0){
            timeNum -= 0.01;
            } else {
            timeNum = 0;
            }
            if(((timeNum).toFixed(2)) > 0){
            $('.ex_five .result').text(`${(timeNum).toFixed(2)}초`)
            }
            else {
            $('.ex_five .result').text(`${((timeNum).toFixed(2)) * -1}초`)
            }
        },10)
    })//click
})//call-back