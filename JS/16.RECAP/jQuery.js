$(function () {
    /* ex_one, two --------------------------------------------------------------------------- */
    // ${}가 아닌 parent, siblings, children인 node를 이용해서 function을 만들어본다!
    $('.ex_one button, .ex_two button').click(function () {
        var a = 0; /*  클릭할때마다 점수가 변하면 안되니까 click-event 안에서 변수선언! 
        each-event안에서 하면 점수가 늘지를 않는다! 0 <=> 1 왔다갔다함. */
        var error =false; // for validation
        $(this).parent().siblings('div').each(function () {
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
        $(this).parent().siblings('.result').text(a); //한번만 나오면 되니까! each-event밖에서!
    })//click
})//call-back function