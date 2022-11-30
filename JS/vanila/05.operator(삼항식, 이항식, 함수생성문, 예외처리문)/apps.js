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
    let str = `1 + 2 * 3`
    const foo = new Function (`str`,`return(str)`)
    /* new Function(`str`,`return(1 + 2 * 3)`) 꼴로 나온다고 생각하면 된다. */


    document.querySelector('.ex_three button').addEventListener('click', e => {
       console.log(foo(str));
    })//click-event
    /* 함수생성문 ---------------------------------------------------------------- */
}
{   
    document.querySelector('.ex_four button').addEventListener('click', e => {
        window.str = document.querySelector('.ex_four input').value /* input안에 있는 value! */
        let calculator = new Function (`return ${str}`)
        console.log(calculator())
    })//click-event
    /* 함수생성문_assignment ----------------------------------------------------- */
}
