{
    let a = 1;
    document.querySelector('.ex_one button').addEventListener('click', e => {
        a =(a === 1)? 2 : 1;
        console.log(a);
    })//click-event
}