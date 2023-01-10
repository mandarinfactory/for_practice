const button0 = document.querySelector('.menu_box .button0')
const button1 = document.querySelector('.menu_box .button1')
const button2 = document.querySelector('.menu_box .button2')
const button3 = document.querySelector('.menu_box .button3')
const button4 = document.querySelector('.menu_box .button4')
const button5 = document.querySelector('.menu_box .button5')
const button6 = document.querySelector('.menu_box .button6')
const barBtn = document.querySelector('.mbtn .bars')
const closeBtn = document.querySelector('.mbtn .close')
const menuBox = document.querySelector('.menu_box')
const menuBtn = Array.from(document.querySelectorAll('.menu_box button'))
const handleClick = e => {
    menuBtn.forEach(v => {
        v.classList.remove('active')
    })//forEach
    e.target.classList.add('active')
}//function_handleClick
/* const 변수 선언문들 ---------------------------------------------------------------------------------- */

barBtn.addEventListener('click', e => {
    e.target.classList.add('active')
    closeBtn.classList.add('active')
    menuBox.classList.add('active')
})//addEventListener
closeBtn.addEventListener('click', e => {
    e.target.classList.remove('active')
    barBtn.classList.remove('active')
    menuBox.classList.remove('active')
})//addEventListener
menuBtn.forEach(e => {
    e.addEventListener('click', handleClick)
})//forEach
/* menu_box내에서 icon들 누르면 사라지게 하거나 button 누르면 색변경 시키게 해놓음 ---------------------- */

button0.addEventListener('click', e => {
    document.querySelector('.section_one').scrollIntoView({ behavior: 'smooth', block: 'center' })
})//addEventListener
button1.addEventListener('click', e => {
    document.querySelector('.section_two').scrollIntoView({ behavior: 'smooth', block: 'center' })
})//addEventListener
button2.addEventListener('click', e => {
    document.querySelector('.section_three').scrollIntoView({ behavior: 'smooth', block: 'center' })
})//addEventListener
button3.addEventListener('click', e => {
    document.querySelector('.section_four').scrollIntoView({ behavior: 'smooth', block: 'center' })
})//addEventListener
button4.addEventListener('click', e => {
    document.querySelector('.section_five').scrollIntoView({ behavior: 'smooth', block: 'center' })
})//addEventListener
button5.addEventListener('click', e => {
    document.querySelector('.section_six').scrollIntoView({ behavior: 'smooth', block: 'center' })
})//addEventListener
button6.addEventListener('click', e => {
    document.querySelector('.section_seven').scrollIntoView({ behavior: 'smooth', block: 'center' })
})//addEventListener
/* 해당 button 누르면 해당 section으로 가게 만들어줌 ---------------------------------------------------- */

