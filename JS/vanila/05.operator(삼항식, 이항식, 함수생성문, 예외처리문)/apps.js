{
    let a = 1;
    document.querySelector('.ex_one button').addEventListener('click', e => {
        a = (a === 1)? 2 : 1;
        console.log(a);
    })//click-event
    /* 3항연산자 ---------------------------------------------------------------- */
}
{
    let a = 1;
    document.querySelector('.ex_two button').addEventListener('click', e => {
        a = (a === 1)||2; // a === 1이면 true, !== 이면 2를 return
        a = (a === 1)&&2; // a === 1이면 2, !== 이면 false를 return
        console.log(a);
    })//click-event
    /* 2항연산자 ---------------------------------------------------------------- */
}
{
    let a = 1;
    const foo = new Function(`console.log('tt')`)
    document.querySelector('.ex_three button').addEventListener('click', e => {
       foo();
    })//click-event
}
