$(function () {
    $('.ex_one button').click(function () {
        var answerArr = [
            [1, 4, 5],[2,3],[2,3]
        ]//answerArr(각각 q1,q2,q3의 답들이 들어있다. i=1,2,3 => 여기서 j=1,2,3,4만큼 checkbox가 돌아간다!)
        var point = 0;
        var correctArr = []; // for-i나 j내에서 만들면 계속 새로고침 되어서 array안에 들어왔다가 사라진다!
        var wrongArr = []; // ''
        for(var i = 1; i <= 3; i++){
            var chkCnt = 0; // for-j문 안에서 나오면 계속 순환하므로 새로고침되서 값이 증가하지 않는다!
            var inputCnt = $(`.ex_one .q${i} input`).size()
            for(var j = 1; j <= inputCnt; j++){ // j <= checkbox의 갯수!
                if( // checkbox 하나하나에 맞게 checked가 되어있거나 안되어있거나 => 둘다 맞다고 확인!(checked, !checked둘다)
                ($(`.ex_one .q${i} input:nth-child(${j})`).prop('checked') && answerArr[i-1].indexOf(j) !== -1)
                // 1번째 input에서 checked된 값과(&&) answerArr에서 1값이 있고 그게 -1이 아니라면 (indexOf에서 값이 없으면 -1이 나온다.)
                || // OR
                (!$(`.ex_one .q${i} input:nth-child(${j})`).prop('checked') && answerArr[i-1].indexOf(j) === -1)
                // 1번째 input에서 checked되지 않은값과(&&) answerArr에서 1값이 없어서 그게 -1이라면 (indexOf에서 값이 없으면 -1이 나온다.)
                ) {
                    chkCnt++ //checkbox 각각 하나 선택할때 chkCnt++!
                }//if
            }//for-j
            if(chkCnt === inputCnt){ //1문제당 정답 check! => 위 if에서 문제당 각4개의 checkbox 확인!
                point++
            }//if-chkCnt
        }//for-i
    var result = '(점수 : ' + point + ')'
    result += '(맞은번호 : ' + correctArr + ')' // 문자열 이어붙인다! (+=)
    result += '(맞은번호 : ' + wrongArr + ')' // 문자열 이어붙인다! (+=)
    $('.ex_one .result').text(result)
    })//click(.ex_one)
    /* ex_one -------------------------------------------------------- */
        $('.ex_two').append(`<table></table>`)
        for(var i = 1; i <= 9; i++){
            $('.ex_two table').append(`<tr></tr>`)
            $('.ex_two table tr:last-child').append(`<td colspan=${i}></td>`)
            if(i !== 9){$('.ex_two table tr:last-child').append(`<td colspan=${9 - i}></td>`)}
        }//for-i
    /* ex_two -------------------------------------------------------- */
    var totalUserArr = [
        
    ]//totalUserArr // .add할때마다 큰배열을 밖에 만들면 계속 초기화된다!
    $('.ex_three .add').click(function () {
        var userArr = [] // 소괄호는 계속 추가되어야하므로 안에다 만든다!
        userArr.push($('.ex_three .name').val());
        userArr.push($('.ex_three .gender:checked').val());
        userArr.push($('.ex_three .age').val());
        totalUserArr.push(userArr);
        $('.ex_three').val('').prop('checked'.false) // click-event 후 input 초기화!
    })//click(.add)
    $('.ex_three .print').click(function () {
        $('.ex_three .result').empty()
        for(var i = 0; i < totalUserArr.length; i++) { //0,1번째씩이니까 ,i < totalUserArr.length
            for(var j = 0; j < 3; j++){
                $('.ex_three .result').append(`${totalUserArr[i][j]},`)
            }//for-j
            $('.ex_three .result').append(`<br>`)
        }//for-i
    })//click(.print)
    /* ex_three -------------------------------------------------------- */
})//call-back