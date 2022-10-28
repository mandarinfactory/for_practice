$(function () {
    function getScoreCal() {
        var totalScore = 0; /* 만약 변수를 외부에서 선언하면 
        초기화가 되지 않고 누적되서 계산되게 된다. */
        totalScore += parseInt($(`.div_one .kor`).val())
        totalScore += parseInt($(`.div_one .eng`).val())
        totalScore += parseInt($(`.div_one .math`).val())
        // totalScore이 증가한다.(증감연산자, +=를 사용)
        var averageScore = (totalScore / 3).toFixed(1);
        var Obj = {
            objTotal : totalScore, // totalScore값을 objTotal키에 넣는다. => Obj객체에 있는 objTotal키이다.
            objAverage : averageScore,
        }//하나에 2개이상의 결과(return)를 가지는걸 객체(object)라고 한다.
        return Obj
    }//function
    $('.div_one button').click(function () {
        var result = getScoreCal();
        $(`.div_one .result`).text(`총점:${result.objTotal}, 평균:${result.objAverage}`)
    })//click
})//call-back