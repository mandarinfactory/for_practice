{
    document.querySelectorAll('.ex_one button').forEach( v => {
        v.addEventListener('click', e => {
            e.target.style.color = 'firebrick'
            e.target.style.borderRadius = '50%'// '-'은 다음단어를 대문자로 써줘야한다.
        })//click-event 
    })//querySelectorAll
}/* 이미 defer로 비연동으로 되어있기 때문에 따로 document필요없다! */
/* ex_one --------------------------------------------------------------------- */
{
    document.querySelectorAll('.ex_two button').forEach( v => {
        v.addEventListener('click', e => {
            e.target.classList.toggle('active')
        })//click-event 
    })//querySelectorAll
}
/* ex_two --------------------------------------------------------------------- */
{
    document.querySelectorAll('.ex_three button').forEach( v => {
        v.addEventListener('click', e => {
            e.target.innerHTML = e.target.getAttribute('value')//'value'속성을 get한다.
        })//click-event 
    })//querySelectorAll
}
/* ex_three --------------------------------------------------------------------- */
{
    document.querySelectorAll('.ex_four button').forEach ( v => {
        v.addEventListener('click', e => {
            let a = e.target.innerHTML
            let b = e.target.getAttribute('value')
            e.target.innerHTML = b;
            e.target.setAttribute('value', a)
        })//click-event 
    })//querySelectorAll
}
/* ex_four --------------------------------------------------------------------- */
{
    document.querySelectorAll('.ex_five button').forEach ( v => {
        v.addEventListener('click', e => {
            e.currentTarget.classList.toggle('active')
            //target은 eventListener는 가장 안쪽에 있는 event를 말하고, currentTarget은 해당 element만 말한다.
        })//click-event 
    })//querySelectorAll
}
/* ex_five --------------------------------------------------------------------- */
{
    document.querySelector('.ex_six button').addEventListener('click', e => {
        alert('clicked!');
    })//click-event
    document.querySelector('.ex_six button span').addEventListener('click', e => {
        e.stopPropagation(); // event-bubbling을 막아준다.
        alert('clicked-span!');
    })//click-event
}
/* ex_six --------------------------------------------------------------------- */
{
    document.querySelectorAll('.ex_seven input:not(.result)').forEach((v) => {
        v.addEventListener('input', () => {
            let num1 = parseInt(document.querySelector('.ex_seven .num1').value);
            let num2 = parseInt(document.querySelector('.ex_seven .num2').value);
            let sum = num1 + num2;
            document.querySelector('.ex_seven .result').value = sum;
        })//input-event
    })//querySelectorAll
}
/* ex_seven --------------------------------------------------------------------- */