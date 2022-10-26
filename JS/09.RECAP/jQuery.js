$(function () {
    $('.ex_one button').click(function () {
        var theResult = parseInt($('.ex_one input').val()) // 1 2 3
        if (theResult !==1 && theResult !==2 && theResult !==3) {
            alert('입력이 잘못되었습니다.')
            return false // 종료시에 관행적으로 사용하는 return값이다.
        } // 유효성검사는 if statement로만 하는게 좋다. 

    // 사용자가 선택한 numeric variable를 string으로 변환시킴.     
    if (theResult === 1) theResult = '가위'
     else if (theResult === 2) theResult = '바위'
     else theResult = '보' // 한줄일때는 {}를 제외할 수 있다.

     //computer가 1 ~ 3사이의 숫자를 random하게 선택한 후, string으로 변환
     var randomNum = Math.ceil(Math.random() * 3)// () * 3 = 0.00000001 ~ 2.99999999
     if (randomNum === 1) randomNum = '가위'
     else if (randomNum === 2) randomNum = '바위'
     else randomNum = '보'
    
    var resultGame 
    if ((theResult === '가위' && randomNum === '보') || (theResult === '바위' && randomNum === '가위') || (theResult === '보' && randomNum === '바위')) resultGame = '유저 승'
    else if ((theResult === '가위' && randomNum === '바위') || (theResult === '바위' && randomNum === '보') || (theResult === '보' && randomNum === '가위')) resultGame = '컴퓨터 승'
    else resultGame = '비김'
    $('.ex_one .para_result').text(`사용자 : ${theResult}, 컴퓨터 : ${randomNum}, 결과 : ${resultGame}`)
    // 0 ~ 2 (내림) : Math.floor()
    // 1 ~ 3 (올림) : Math.ceil() + 반올림은 Math.round()
    })//click
})//call-back function!!