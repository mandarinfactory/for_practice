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

let scrollSpy = () => {
    let current
    const offset0 = document.querySelector('.section_one').getBoundingClientRect().y + (scrY * 0.9)
    const offset1 = document.querySelector('.section_two').getBoundingClientRect().y + (scrY * 0.9)
    const offset2 = document.querySelector('.section_three').getBoundingClientRect().y + (scrY * 0.9)
    const offset3 = document.querySelector('.section_four').getBoundingClientRect().y + (scrY * 0.9)
    const offset4 = document.querySelector('.section_five').getBoundingClientRect().y + (scrY * 0.9)
    /*    const offset5 = document.querySelector('.section_six').getBoundingClientRect().y + scrY
    const offset6 = document.querySelector('.section_seven').getBoundingClientRect().y + scrY */
    if (scrY < offset1) {
        current = 0
    } else if (scrY >= offset1 && scrY < offset2) {
        current = 1
    } else if (scrY >= offset2 && scrY < offset3) {
        current = 2
    } else if (scrY >= offset3 && scrY < offset4) {
        current = 3
    } else if (scrY >= offset4 && scrY < offset5) {
        current = 4
    } else if (scrY >= offset5 && scrY < offset6) {
        current = 5
    } else {
        current = 6
    }//if-else
    document.querySelectorAll('.menu_box button').forEach(v => {
        v.classList.remove('active')
    })//forEach
    document.querySelector(`.menu_box .link_btn${current}`).classList.add('active')
}//function_scrollSpy
scrollSpy()
window.addEventListener('scroll', () => {
    scrollSpy()
})//scroll event
window.addEventListener('resize', () => {
    scrollSpy()
})//resize event
/* 해당 section으로 scroll할때마다 button.active도 같이 따라감 --------------------------------------------- */
