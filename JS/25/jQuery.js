$(function () {
   /* { ex_one
        let a = 1;
    }ex_one end  => 변수의 scope(유효범위)를 제한시켜서 놓는다! 
    {
        let a = 1
    }위 변수a와는 다른 변수a이다. */
    {
        let a = 0;
        let disableClick = false;
        $('.ex_one button').click(function () {
            if(disableClick) return false; // 1. 지금은 disableClick이 false이므로 a++(disableClick = false, != true)
            disableClick = true; // 2. 1번 이후로 disableClick은 false => true로 되므로 if문에 충족, return false가 된다.
            setTimeout(function () {
                disableClick = false;
            },2000)//setTimeout(2초후에!) => 2초후에 다시 true => false값으로 바꿔서 a++을 실행시켜준다. => 1초에 1씩 증가하는 함수가 된다.
            a ++;
            $('.ex_one .result').text(a)
        })//click
    }///* ex_one end */
    {
        let tvNum = 1;
        setInterval(function () {
            tvNum ++;
            if(tvNum > 3) tvNum = 1
            $('.tv').hide()
            $('.tv'+tvNum).show()
        },300)//setInterval
    }
})//call-back