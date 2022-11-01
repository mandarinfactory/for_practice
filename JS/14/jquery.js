$(function () {
    /* ex_one, two ------------------------------------------------------- */
    function checkBgColor (numX) {
        var exNum = numX.parent().attr('data_num')
        var bgColor = $(`.ex_${exNum} .box${numX.text()}`).attr('data-bg')
        $(`.ex_${exNum} .box`).css({'background-color':'inherit'})
        $(`.ex_${exNum} .box${numX.text()}`).css({'background-color': bgColor})
    } //function
    $(`.ex_one button, .ex_two button`).click(function () {
        checkBgColor($(this));
    })//click
    /* ex_three --------------------------------------------------------- */
    function checkColor (numX) {
        var bigNum = numX.parent().attr('data-num')
        console.log(bigNum);
        var num = numX.text();
        console.log(num);
        $(`.ex_${bigNum} .box${num}`).siblings('div').removeClass(`active1 active2 active3`) // 우선 다 꺼야함!
        $(`.ex_${bigNum} .box${num}`).toggleClass(`active${num}`)

    }
    $('.ex_three button, .ex_four button').click(function () {
        checkColor($(this));
    })
})//.document.ready