window.addEventListener('mousemove', () => {
    document.querySelector('.cursor').style.left = `${window.mausX}px`
    document.querySelector('.cursor').style.top = `${window.mausY}px`
})//mousemove_event

document.querySelectorAll('a, button').forEach(v => {
    v.addEventListener('mouseenter', () => {
        document.querySelector('.cursor').classList.add('hover')
    })//addEventListener
    v.addEventListener('mouseleave', () => {
        document.querySelector('.cursor').classList.remove('hover active')
    })//addEventListener
    /* mouseenter/leave --------------------------------------------------- */
    v.addEventListener('mouseup', () => {
        document.querySelector('.cursor').classList.remove('active')
    })//addEventListener
    v.addEventListener('mousedown', () => {
        document.querySelector('.cursor').classList.add('active')
    })//addEventListener
    /* mouseup/down ------------------------------------------------------- */
})//forEach

document.addEventListener('mouseup', () => {
    document.querySelector('.cursor').classList.remove('active')
})//addEventListener
document.addEventListener('mouseleave', () => {
    document.querySelector('.cursor').style.display = 'none'
})//addEventListener
document.addEventListener('mouseenter', () => {
    document.querySelector('.cursor').style.display = 'block'
})//addEventListener
/* mouseup/leave/enter ------------------------------------------------------- */

