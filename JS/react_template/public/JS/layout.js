let setStickyBox = () => {
    document.querySelector('.sticky_container').style.height = `${winH + winW * 2}px`
    document.querySelector('.sticky').style.height = `${winH}px`
}//function_setStickyBox

setStickyBox();
window.addEventListener('scroll', () => {
    setStickyBox();
})//scroll_event
window.addEventListener('resize', () => {
    setStickyBox();
})//resize_event
