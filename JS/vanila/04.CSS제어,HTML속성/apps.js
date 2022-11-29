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
            e.target.classList.toggle('active')
        })//click-event 
    })//querySelectorAll
}
/* ex_five --------------------------------------------------------------------- */