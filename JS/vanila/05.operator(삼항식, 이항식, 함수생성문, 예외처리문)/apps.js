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
    n = 1;
    const foo = new Function('a','b',`return(a + b)`)

    
    document.querySelector('.ex_three button').addEventListener('click', e => {
       console.log(foo(1, 2));
    })//click-event
    /* 함수생성문 ---------------------------------------------------------------- */
}
