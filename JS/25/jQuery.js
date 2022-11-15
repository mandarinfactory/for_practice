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
    }/* ex_one end */
    /* ex_one ------------------------------------------------------------------------------------ */
    {
        let tvNum = 1;
        let imgNum = 1;
        let timeoutId;
        let isClick = true;

        setInterval(function () {
            tvNum ++;
            if(tvNum > 3) tvNum = 1;
            $('.tv').hide()
            $('.tv'+tvNum).show()
        },100)//setInterval

        function imageChange () {
            if(imgNum > 5) imgNum = 1;
            if(imgNum < 1) imgNum = 5;
            $('.carousel .inner img').stop().fadeOut(1000).removeClass('active')
            $('.carousel .inner .img'+imgNum).stop().fadeIn(1000).addClass('active')
            $('.indicator button').removeClass('active')
            $('.btn'+imgNum).addClass('active')
        }//imageChange

       var colorTvId = setInterval(function () {
            imgNum  ++;
            imageChange();
        },2000)//setIntverval

        $('.indicator button').click(function () {
            imgNum = parseInt($(this).val());
            imageChange();
            clearInterval(colorTvId);
            clearTimeout(timeoutId)
            timeoutId = setTimeout(function () {
                colorTvId = setInterval(function () {
                    imgNum  ++;
                    if(imgNum > 5) imgNum = 1;
                },2000)
            },5000)//setTimeout
            imageChange();
            autoplay()
        })//click
        
        $('.next').click(function () {
            if(!isClick)return false
            isClick = false
            setTimeout(function () {
                isClick = true;
            },1000)
            imgNum ++;
            imageChange();
            autoplay()
        })//click
        $('.prev').click(function () {
            if(!isClick)return false
            isClick = false
            setTimeout(function () {
                isClick = true;
            },1000)
            imgNum --;
            imageChange();
            autoplay()
        })//click
    }/* ex_two end */
    /* ex_two ------------------------------------------------------------------------------------ */
})//call-back