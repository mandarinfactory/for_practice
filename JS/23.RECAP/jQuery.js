$(function () {
    var cardinalEnArr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',]
    var cardinalKrArr = ['영', '하나', '둘', '셋', '넷', '다섯', '여섯', '일곱', '여덟', '아홉',]
    $('.ex_one .q').append(cardinalEnArr[Math.floor(Math.random() * 10)])

    $('.ex_one button').click(function () {
        var enNum = $('.ex_one .q').text(); // 문제의 영어글자가 나온다.
        var enNumIdx = cardinalEnArr.indexOf(enNum); // 해당 글자가 array에서 몇번째에 있는 건지 파악해줌.
        var krNum = $('.ex_one input').val(); 
        var krNumIdx = cardinalKrArr.indexOf(krNum);
        if(enNumIdx === krNumIdx){
            $('.ex_one .result').text('yyyyyes')
        } else {
            $('.ex_one .result').text('nnnnno')
        }//if-else
    })//click
    /* ex_one ------------------------------------------------------------------------------- */
    var anEnArr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',]
    var anKrArr = ['영', '하나', '둘', '셋', '넷', '다섯', '여섯', '일곱', '여덟', '아홉',]
    for(var i = 1; i <= 3; i++){
        $('.ex_two .q').append(anEnArr[Math.floor(Math.random() * 10)] + ',')
    }//for
    $('.ex_two button').click(function () {
        var enString = $('.ex_two .q').text().slice(0,-1); // 마지막 ','를 지우는법! === pop()
        var enArr = enString.split(',') //,를 기준으로 enArr로 array 생성!!
        var krString = $('.ex_two input').val()
        var krArr = krString.split(',')
        
        var count = 0;
        enArr.forEach(function (v,i) {
            var qEnNum = anEnArr.indexOf(v) // 출력된 영어단어가 기존array(anEnArr)에서 어디있는지 확인!
            var userKrWord = krArr[i] // user가 기록한 단어의 array중에 anEnArr.indexOf(v)얘와 같은지 확인!
            var aKrNum = anKrArr.indexOf(userKrWord) // userKrWord가 anKrArr에서 몇번째에 있는지를 확인!
            // 그래서 qEnNum과 aKrNum이 같은지를 확인하면 된다!
            if(qEnNum === aKrNum){
               count++
            }
        })//enArr.forEach / 여기서 v는 영어단어!
        if(count === 3){
            $('.ex_two .result').text('yyyyyes')
        } else {
            $('.ex_two .result').text('nnnnno')
        }
    })//click
})//call-back