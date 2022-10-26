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
     var randomNumber = Math.ceil(Math.random() * 3)// () * 3 = 0.00000001 ~ 2.99999999
     if (randomNumber === 1) randomNumber = '가위'
     else if (randomNumber === 2) randomNumber = '바위'
     else randomNumber = '보'
     console.log(randomNumber);
    // 0 ~ 2 (내림) : Math.floor()
    // 1 ~ 3 (올림) : Math.ceil() + 반올림은 Math.round()
    })//click
})//call-back function!!