$(function () {
  function paperGame(theResult) {
    var theResult = theResult; // parameter에 있는 theResult가 아니다! 새로운 변수로 선언한거임.
    if (theResult !== 1 && theResult !== 2 && theResult !== 3) {
      alert("입력이 잘못되었습니다.");
      return false; // 종료시에 관행적으로 사용하는 return값이다.
    } // 유효성검사는 if statement로만 하는게 좋다.

    // 사용자가 선택한 numeric variable를 string으로 변환시킴.
    if (theResult === 1) theResult = "가위";
    else if (theResult === 2) theResult = "바위";
    else theResult = "보"; // 한줄일때는 {}를 제외할 수 있다.

    //computer가 1 ~ 3사이의 숫자를 random하게 선택한 후, string으로 변환
    var randomNum = Math.ceil(Math.random() * 3); // () * 3 = 0.00000001 ~ 2.99999999
    if (randomNum === 1) randomNum = "가위";
    else if (randomNum === 2) randomNum = "바위";
    else randomNum = "보";

    var resultGame;
    if (
      (theResult === "가위" && randomNum === "보") ||
      (theResult === "바위" && randomNum === "가위") ||
      (theResult === "보" && randomNum === "바위")
    )
      resultGame = "유저 승";
    else if (
      (theResult === "가위" && randomNum === "바위") ||
      (theResult === "바위" && randomNum === "보") ||
      (theResult === "보" && randomNum === "가위")
    )
      resultGame = "컴퓨터 승";
    else resultGame = "비김";
    var theObj = {
      objUser: theResult,
      objComputer: randomNum,
      objResult: resultGame,
    }; // = 객체, 여러가지 값을 넣을수 있다.
    return theObj;
    // 0 ~ 2 (내림) : Math.floor()
    // 1 ~ 3 (올림) : Math.ceil() + 반올림은 Math.round()
  }
  $(".ex_one button").click(function () {
    var theResult = parseInt($(".ex_one input").val()); // 1 2 3
    var resultGame = paperGame(theResult); // objUser, objComputer, objResult
    if (!resultGame) return false; // click시 잘못된 값을 넣었을때 Eventlistener도 false로 반환시키게 해준다.
    $(".ex_one .para_result").text(
      `사용자 : ${resultGame.objUser}, 컴퓨터 : ${resultGame.objComputer}, 결과 : ${resultGame.objResult}`
    );
  }); //click

  function searchGrade(korScore, engScore, mathScore) {
    var korScore = parseFloat(korScore);
    var engScore = parseFloat(engScore);
    var mathScore = parseFloat(mathScore);
    var totalScore = korScore + engScore + mathScore;
    var averageScore = (totalScore / 3).toFixed(2); // 소수점 2자리까지 끊어서 return해주는 function
    var scoreToGrade; // for return
    if (isNaN(averageScore)) {
      alert("숫자로 적어주시기 바랍니다!");
      return false;
    }
    if (averageScore > 100 || averageScore < 0) {
      alert("0-100점 사이만 입력해주시기 바랍니다!");
      return false;
    } // 유효성검사(validation)는 else if로 묶기보단 따로 if로 적어준다.
    /* 등급구하기 */
    if (averageScore >= 90) {
      scoreToGrade = "A";
    } else if (averageScore < 90 && averageScore >= 80) {
      scoreToGrade = "B";
    } else {
      scoreToGrade = "C";
    }
    var anotherObj = {
      total: totalScore,
      average: averageScore,
      grade: scoreToGrade,
    };
    return anotherObj;
  }

  $(".ex_two button").click(function () {
    var korScore = $(".ex_two .korean").val();
    var engScore = $(".ex_two .english").val();
    var mathScore = $(".ex_two .math").val();
    var resultScore = searchGrade(korScore, engScore, mathScore);
    if (!resultScore) return false;
    $(".ex_two .para_result").text(
      `총점:${resultScore.total}점 평균:${resultScore.average}점 ${resultScore.grade}학점입니다! 축하드립니다!`
    );
  }); //click

  $(".ex_three button").click(function () {
    var selGender = $(".ex_three .gender:checked").val();
    var selHeight = parseFloat($(".ex_three .height").val());
    var selWeight = parseFloat($(".ex_three .weight").val());
    var bmiNum = parseFloat(
      (selWeight / ((selHeight / 100) * (selHeight / 100))).toFixed(2)
    );
    var alertBMI;
    // 1. 키를 100 - 200 내로 안적음
    // 2. 체중은 200내로
    if (!selGender || isNaN(bmiNum) || bmiNum < 10 || bmiNum > 50) {
      alert("성별, 체중 그리고 신장을 확인 후 다시 적어주시기 바랍니다.");
      return false;
    }
    // 마름 적정 과체중 비만
    if (
      (selGender = "male" && bmiNum < 15) ||
      (selGender = "female" && bmiNum < 20)
    ) {
      alertBMI = "귀하는 마른 체중입니다.";
    } else if (
      (selGender = "male" && bmiNum >= 15 && bmiNum < 20) ||
      (selGender = "female" && bmiNum >= 20 && bmiNum < 25)
    ) {
      alertBMI = "귀하는 적정한 체중입니다.";
    } else if (
      (selGender = "male" && bmiNum >= 20 && bmiNum < 25) ||
      (selGender = "female" && bmiNum >= 25 && bmiNum < 30)
    ) {
      alertBMI = "귀하는 과체중인 체중입니다.";
    } else {
      alertBMI = "귀하는 비만인 체중입니다.";
    }
    $(".ex_three .para_result").text(
      `${alertBMI} 확인 후 자세한 상담은 전화로 부탁드립니다.`
    );
  }); //click
}); //call-back function!!
