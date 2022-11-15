$(function () {
   /* { ex_one
        let a = 1;
    }ex_one end  => 변수의 scope(유효범위)를 제한시켜서 놓는다! 
    {
        let a = 1
    }위 변수a와는 다른 변수a이다. */
    {
        let a = 1;
        let isClick = true;
        $('.ex_one button').click(function () {
            a++;
            $('.ex_one .result').text(a)
        })//click
    }///* ex_one end */
})//call-back