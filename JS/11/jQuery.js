$(function () {
    function getScoreCal(numX) {
        var totalScore = 0; /* 만약 변수를 외부에서 선언하면 
        초기화가 되지 않고 누적되서 계산되게 된다. */
        totalScore += parseInt($(`.div_${numX} .kor`).val())
        totalScore += parseInt($(`.div_${numX} .eng`).val())
        totalScore += parseInt($(`.div_${numX} .math`).val())
        // totalScore이 증가한다.(증감연산자, +=를 사용)
        var averageScore = parseFloat((totalScore / 3).toFixed(1));
        if(isNaN(averageScore)){
            alert('정확한 점수를 적어주시기 바랍니다.');
            return false
        }
        $(`.div_${numX} .result`).text(`총점:${totalScore}, 평균:${averageScore}`)
        var obj = {
            totalScore,
            averageScore,
        }
        return obj;
    }//function
    $('.ex_one button').click(function () {
        var resultOne = getScoreCal('one');
        var resultTwo = getScoreCal('two');
        $('.ex_one>.result').text(`총점평균 : ${((resultOne.totalScore)+(resultTwo.totalScore))/2} 
        총평균: ${((resultOne.averageScore)+(resultTwo.averageScore))/2}`)
    })//click
})//call-back