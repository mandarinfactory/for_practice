$(function () {
    $('.ex_one button').click(function () {
        var a = [1, 3];
        var point = 0;
    for (var i = 0; i < a.length; i++) {
        if($(`.ex_one .q${i} .radio${a[i]}`).prop('checked')) point++;
        }//for-i
        $('.ex_one .result').text(point)
    })//click
    /* ex_one ----------------------------------------------------- */
    $('.ex_two button').click(function (){
        var b = [0,1,0,1];
        var checkCnt = 0;
        for(var i = 0; i < b.length; i++){
            if(
                ($(`.ex_two .chk${i}`).prop('checked') && b[i] === 1)
                ||
                (!$(`.ex_two .chk${i}`).prop('checked') && b[i] === 0)
                ){
                    checkCnt++; 
                }//if - 정답check!
            }//for-i
        if(checkCnt === b.length )$('.ex_two .result').text('정답!')
        else $('.ex_two .result').text('오답!')
    })//click
        /* ex_two ----------------------------------------------------- */
        $('.ex_three button').click(function () {
            var c = [0,1,0,1]
            var i = 0;
            var checkCnt = 0;
            $('.ex_three').each(function () {
                if(
                    ($(this).prop('checked') && c[i] === 1)
                    ||
                    (!$(this).prop('checked') && c[i] === 0)
                    ){
                        checkCnt++;
                        i++ //i의값을 계속 변화해줘야하므로!
                    }//if
                })//each
        if(checkCnt === c.length){
            $('.ex_three .result').text('정답!')
        } else {
            $('.ex_three .result').text('오답!')
        }//if-else
    })//click
    /* ex_three ----------------------------------------------------- */

    var arr = [1,2,3]
    var foo = arr.indexOf[1] // 0, [2] // 1, [3] // 2
    // 만약 없는 값을 indexOf하면 무조건 -1이 나온다.

    $('.ex_four button').click(function () {
        var checkCnt = 0;
        var d = [2,4]
        for (var i = 1; i <= 4; i++) {
            if(
                ($(`.ex_four .input:nth-child(${i})`).prop('checked') && d.indexOf(i) !== 0)
                ||
                (!$(`.ex_four .input:nth-child(${i})`).prop('checked') && d.indexOf(i) === -1)
                )
                {
                    checkCnt++
                }//if
            }//for
            if(checkCnt === 4){
                $('.ex_four .result').text('정답!')
        } else {
            $('.ex_four .result').text('오답!')
        }//if-else
    })//click
    /* ex_four ----------------------------------------------------- */

    var str = 'a,b,c'
    var array = str.split(',') 
    // 'a','b','c' => arr = ['a','b','c']꼴로 만들어준다.

    var mainArr = ['사과','오렌지','바나나']
    $('.ex_five button').click(function () {
        var inputVal = $('.ex_five input').val()
        var userArr = inputVal.split(',') // ['사과','오렌지','바나나']
        var checkCnt = 0;
        var length = mainArr.length // 3
    for(var i = 0; i < userArr.length; i++){ 
        var string = userArr[i]
        var index = mainArr.indexOf(string)
        if(index >= 0){
            mainArr.splice(index,1)
            checkCnt++
        }//if
    }//for
    if(checkCnt === length){
        $('.ex_five .result').text('정답!')
    } else {
        $('.ex_five .result').text('오답!')
    }//if-else
    })//click
    /* ex_five ----------------------------------------------------- */
    $('.ex_six button').click(function () {
        
    })//click
    /* ex_six ------------------------------------------------------- */
    $('.ex_seven button').click(function () {
        $('.ex_seven .result').empty(); // .result를 지운다!
        $('.ex_seven .result').append(`<table>`)
        for(var i = 1; i <= 10; i++){
            $('.ex_seven .result table').append(`<tr>`)
            for(var j = 1; j <= 2; j++){
                $('.ex_seven .result table tr:last-child').append(`<td colspan=${1+j}>`)
            } //for - j
        } //for - i
        
    }) //click
    /* ex_seven ------------------------------------------------------- */
})//call-back function