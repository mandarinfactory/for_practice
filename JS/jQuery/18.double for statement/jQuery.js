$(function () {
    $('.ex_one button').click(function () {
        $('.ex_one .result').empty() // .result값 지우기
        for(var i =1; i <= 3; i++) {
            for(var j = 3; j <= 8; j++){
                $('.ex_one .result').append(`${i}-${j}, `) //6번 나와야하니까 for j문 안에다가!
            }//for j(6번반복!)
            $('.ex_one .result').append(`<br>`) //3번 나와야하니까 for i문 안에다가!
        }//for i(3번반복!)
    })//click(.ex_one)
    /* ex_one ------------------------------------------------------------------------- */
    $('.ex_two button').click(function () {
        $('.ex_two .result').text('') // .result값 지우기
        var firstNum = parseInt($('.ex_two .first').val())
        var secondNum = parseInt($('.ex_two .second').val())
        if(firstNum > 9 || secondNum > 9){
            alert('10보다 작은 수를 적어주십시오.')
            $('.ex_two .first').empty()     
        }//if - validation
        if(firstNum <= secondNum){
            for(var i = firstNum; i <= secondNum; i++){
                for(var j = 1; j <= 9; j++){
                    $('.ex_two .result').append(`${i} * ${j} = ${i * j}<br>`)//구구단출력!
                }//for j(9번반복!)
                $('.ex_two .result').append(`<br>`)//각 단마다 띄어쓰기! => i가 각단의 값이다.
            }//for i(2-9반복!)
        } else {
            for(var i = firstNum; i >= secondNum; i--){
                for(var j = 1; j <= 9; j++){
                    $('.ex_two .result').append(`${i} * ${j} = ${i * j}<br>`)//구구단출력!
                }//for j(9번반복!)
                $('.ex_two .result').append(`<br>`)//각 단마다 띄어쓰기! => i가 각단의 값이다.
            }//for i(2-9반복!)
        }//if - 구구단
    })//click(.ex_two)
    /* ex_two ------------------------------------------------------------------------- */
    $('.ex_three button').click(function () {
        $('.ex_three .result').empty();
        for(var i = 1;i <= 3; i++){
            var str = ($(`.ex_three .str${i}`).val())//user가 input에 적은 값
            $('.ex_three .result').append(`<p>`) //i만큼 반복!
            for(var j = 0; j < str.length; j++){
                var char = str.charAt(`${j}`)
                $('.ex_three .result p:last-child').append(`${char} ,`) //j만큼 반복!
                /* 
                정리해서, .append(`<p>`)로 차례대로 p element가 i갯수 만큼 만들어진다.
                그 만들어진 p tag안에 j만큼 만들어진 값을 i만큼 만들어진 p에 넣어야하는데,
                p는 하나씩 순차적으로 (1번 p, 2번 p,3번 p순으로) 만들어지므로 p:last-child에 
                j로 만들어진 값을 넣으면 된다.
                */
            }//for j
        }//for i
    })//click(.ex_three)
    /* ex_three ----------------------------------------------------------------------- */
    $('.ex_four button').click(function () {
        $('.ex_four .result').empty(); // .result를 지운다!
        $('.ex_four .result').append(`<table>`)
        for(var i = 1; i <= 3; i++){
            $('.ex_four .result table').append(`<tr>`)
            for(var j = 1; j <= 6; j++){
                $('.ex_four .result table tr:last-child').append(`<td>`)
            } //for - j
        } //for - i
    }) //click
    /* ex_four ------------------------------------------------------------------------ */
    $('.ex_five button').click(function () {
        $('.ex_five .result').empty(); 
        $('.ex_five .result').append(`<table>`)
        for(var i =1; i <= 4; i++){
            $('.ex_five .result table').append(`<tr>`)
            var spanNum = 1
            if(i % 2 === 0 ){
                for(var j = 1; j <= 3; j++){
                    $('.ex_five .result tr:last-child').append(`<td colspan=2>`)
                } //for - j(td / even number)
            } else {
                for(var j = 1; j <= 6; j++){
                    $('.ex_five .result tr:last-child').append(`<td>`)
                } //for - j(td / odd number)
            }//if-else
        } //for -i(tr)
    }) //click
    /* ex_five ------------------------------------------------------------------------ */
    $('.ex_six button').click(function () {
        $('.ex_six .result').empty();
        for(var i = 1; i <= 5; i++){
            for(var j = 1; j <= i; j++){
                $('.ex_six .result').append('★')
            }// for -j_one
            for(j =1; j <= 5 - i; j++){
                $('.ex_six .result').append('☆')
            }// for -j_two
            $('.ex_six .result').append(`<br>`)//5개 별 하나왔으니까 한줄 내리기!
        }// for -i
    })// click
    /* ex_six -------------------------------------------------------------------------- */
    $('.ex_seven button').click(function () {
        $('.ex_seven .result').empty();
        for(var i = 1; i <= 3; i++ ){
            for(var j = 1; j <= 3 - i; j++){
                $('.ex_seven .result').append('☆')
            }//for_01
            for(var j = 1; j <= (2 * i - 1); j++){
                $('.ex_seven .result').append('★')
            }//for_02
            for(var j = 1; j <= 3 - i; j++){
                $('.ex_seven .result').append('☆')
            }//for_03
            $('.ex_seven .result').append(`<br>`)
        }// for -i
    })// click
    /* ex_seven ------------------------------------------------------------------------ */
    $('.ex_eight button').click(function () {
        var point = 0;
        for(var i = 1; i <= 3; i++){
            var riddle = ($(`.ex_eight .q${i} input:checked`).val())
            if (riddle === 'o') point ++;
        }//for
        $('.ex_eight .result').text(point)
    })//click
    /* ex_eight ------------------------------------------------------------------------ */
    $('.ex_nine button').click(function () {
        var checkCnt = 0; //문제를 맞춰서 증가할 값
        for(var j = 1; j <= 3; j++){
            var datumCnt = parseInt($(`.ex_nine .q${j}`).attr('data-cnt'))//data-cnt값
        }//for-j // 한문제에 돌리는 수 구하기
        /* 여기까지가 1문제!*/
        var point = 0;
        for(var j = 1; j <= 3; j++){
            var riddle = $(`.ex_nine .q${j} input:nth-child(${j})`).val()
            var isCheck = $(`.ex_nine .q${j} input:nth-child(${j})`).prop('checked')// checkbox는 체크한 값이 1개 이상이라서 따로 prop으로 checked를 써야한다.
            console.log(isCheck)
            if(isCheck && riddle === 'o' /* 가져온값(isCheck)이고 그값이 답일때 */) {
                point ++
            } //if-correct
            if(isCheck && riddle === undefined /* 가져온값(isCheck)이고 그값이 답이 아닐때 */){
                point --
                return false
            } // if-incorrect
            console.log(point)
        }//for-j // data-cnt의 값 구하기      
    })// click
}) // call-back function