{
    let a = 1;
    document.querySelector('.ex_one button').addEventListener('click', e => {
        a =(a === 1)? 2 : 1;
        console.log(a);
    })//click-event
    /* 3항연산자 ---------------------------------------------------------------- */
}
{
    let a = 1;
    document.querySelector('.ex_two button').addEventListener('click', e => {
        a =(a === 1)&&2;
        console.log(a);
    })//click-event
    /* 2항연산자 ---------------------------------------------------------------- */
}