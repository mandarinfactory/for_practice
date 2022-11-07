$(function () {
    var a = [1, 2, 3, 4, 5]; // array
    a.push(6);
    /* 
    push는 맨 마지막값 추가, unshift는 맨 앞값 추가 
    pop은 맨 뒷값 삭제, shift는 맨 앞값 삭제
    // [1, 2, 3, 4, 5, 6]
    */
    a.splice(1,2, 'A', 'B'); 
    /* 
    특정 index로부터 시작해서[1] 2가지 값을 지운다.[2] // 2, 3
    지우고 나서 'A', 'B'를 추가한다. // [1, A, B, 4, 5, 6]
    */
   console.log(a.length); // 6
   /* practice -------------------------------------------------- */
   var b = ['김', '이', '박', '최'] // click-event에서 만들면 새로고침되서 array내 값이 지워지지 않는다!
   var c = 1
   function clickBtn (d) {
    var d = $(this)
    if(b.length === 0){
        alert('끝났습니다.')
        return false
    }
       for(var i = 1; i <= 4; i ++){
       c++
       var randomNum = Math.floor(Math.random() * b.length) 
       /*  0 ~ 3, 0 ~ 2, 0 ~ 1, 0으로 자동으로 줄어든다. (array의 length만큼 변한다.) */
       var Surname = b[randomNum]
       if(b.length === 4) $(`.ex_${d} .result`).empty()
       $(`.ex_${d} .result`).append(`${Surname}은 ${5-b.length}등 입니다.`)
       b.splice(randomNum,1); // 출력된값을 지운다. randomNum로부터 시작해서 1가지 값을 지운다. ~ 0떼까지!
       }//for-i
   }//clickBtn function
   $('.ex_one button, .ex_two button').click(function () {  
    clickBtn($(this))
   })//click
   /* ex_one, two ----------------------------------------------- */
var arrOne = [
        ['김철수','25','남'], // arrOne[i번째]value => 0번째 // arrOne[i][j]번째 => 0번째줄의 0,1,2값들
        ['박영희','38','여'],
        ['최민영','41','여'],
        ['이민국','19','남']
    ]//arrOne, []안에 []있는 array를 multi-dimension array라고 한다.
$('.ex_three button').click(function () {
    $('.ex_three .result').empty()
    $('.ex_three .result').html(`
    <table>
        <tr>
            <th>이름</th>
            <th>나이</th>
            <th>성별</th>
        </tr>
    </table>
    `)//html
    for(var i = 0; i <= arrOne.length; i++){
    $('.ex_three table').append('<tr></tr>') 
        for(var j = 0; j < arrOne[i].length; j++) {
            $('.ex_three tr:last-child').append(`<td>${arrOne[i][j]}</td>`)
            }//for-j, j는 배열의 각각 칸에 들어갈 값!
        }//for-i, i는 배열의 줄!(총4줄)
    })//click
})//call-back function