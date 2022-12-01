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
        let str = document.querySelector('.ex_four input').value /* input안에 있는 value! */
        try {
            let calculator = new Function (`return ${str}`)
            let result = calculator(str);
            alert(result);
        } catch {
            alert('계산식 오류!')
        }
    })//click-event
    /* 함수생성문_assignment ----------------------------------------------------- */
}
{

    window.str = '';
    document.querySelectorAll('.ex_five button:not(.result)').forEach( v => {
        v.addEventListener('click', e => {
            str += e.target.innerText;
            document.querySelector('.ex_five p').innerText = str;
        })//addEventListener
    })//forEach
    document.querySelector('.ex_five .result').addEventListener('click', e => {
        try {
            let fn = new Function (`return ${str}`)
            alert(fn())
        } catch {
            alert('계산식 틀림!')
        }
    })
       /* 
        글자들 = ''
        클릭할때마다
        글자들 += 글릭한버튼
        출력       
       */
}
{
    window.foo = '1 + 2'
    let fn = new Function('console.log(foo)')
    fn();
    /* 
    01.
    window.foo = '1 + 2'
    new Function ('console.log(foo)') => 
    'console.log('1 + 2')' => 
    console.log('1 + 2') => 
    // 1 + 2

    02.
    window.foo = '1 + 2'
    let fn = new Function('return 1+foo+1')
    console.log(fn());
    //11 + 21

    03.
    window.foo = '1 + 2'
    let fn = new Function('return 1+'+foo+'+1')
    'return 1+''+1 + 2+''+1' =>
    return 1+'+'1 + 2'+'+1 =>
    return 1+1+2+1 =>
    // 5
    console.log(fn());
    // 5
    */
}
