window.addEventListener('mousemove', () => {
    document.querySelector('.cursor').style.left = `${window.mausX}px`
    document.querySelector('.cursor').style.top = `${window.mausY}px`
})//mousemove_event
document.querySelectorAll('a,button').forEach(v => {
    v.addEventListener('mouseenter', () => {
        document.querySelector('.cursor').classList.add('hover')
    })//addEventListener
    v.addEventListener('mouseleave', () => {
        document.querySelector('.cursor').classList.remove('hover')
    })//addEventListener
})//forEach
