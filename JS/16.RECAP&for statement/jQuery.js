$(function () {
    /* ex_one, two --------------------------------------------------------------------------- */
    // ${}가 아닌 parent, siblings, children인 node를 이용해서 function을 만들어본다! ${}로 많이쓰긴한다.
    function searchNumber (numX) {
        var a = 0; /*  클릭할때마다 점수가 변하면 안되니까 click-event 안에서 변수선언! 
        each-event안에서 하면 점수가 늘지를 않는다! 0 <=> 1 왔다갔다함. */
        var error =false; // for validation
        numX.parent().siblings('div').each(function () {
            var divNum = $(this).attr('data-ans')
            var inputNum = $(this).children('input:checked').val()
            if(inputNum === undefined){ // validation if statement => 아래 if(error){}로 연결된다.
                error = true;
               /*  return false; */ // 여기서 false를 return하면 false한 시점에서 function은 멈춘다.
            }
            if(divNum === inputNum) {
                a++;
            }
        })//each
        if(error){
            alert('모든 문제를 체크하고 확인해주시기 바랍니다.')
            return false;
        }// error값이 true인경우의 if
        numX.parent().siblings('.result').text(a); //한번만 나오면 되니까! each-event밖에서!
    }//searchNumber
    function eraseNumber (numY) {
        /* $('.ex_one input').attr('checked', false) => 이것도 되지만, 현재는 prop을 권장! */
        numY.parent().siblings('div').children('input').prop('checked', false)
        numY.parent().siblings('.result').text('그 결과는..?')
    }//earseNumber
    $('.ex_one .button_result, .ex_two .button_result').click(function () {
        searchNumber($(this))
    })//click(.button_result)
    $('.ex_one .button_reset, .ex_two .button_reset').click(function () {
        eraseNumber($(this))
    })//click(.button_reset)
})//call-back function