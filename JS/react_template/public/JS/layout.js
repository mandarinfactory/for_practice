let setStickyBox = () => {
    document.querySelector('.sticky_container').style.height = `${winH + winW * 2}px`
    document.querySelector('.sticky').style.height = `${winH + winW * 2}px`
    let stickyStart = document.querySelector('.sticky_container').getBoundingClientRect().y + scrY /* === offset().top */
    let stickyEnd = document.querySelector('.section6').getBoundingClientRect().y + scrY - winH /* section6구하기! */
    let metaX
    if (scrY < stickyStart) {//sticky 이전
        metaX = 0
    } else if (scrY >= stickyStart && scrY <= stickyEnd) {//sticky 진행중
        metaX = stickyStart - scrY
    } else if (scrY > stickyEnd) {//sticky 끝
        metaX = document.querySelector('.sticky').clientWidth - document.querySelector('.sticky_inner').clientWidth
    }//if-else
    document.querySelector('.sticky_inner').style.transform = `translateX(${metaX}px)`
}//function_setStickyBox

setStickyBox();
window.addEventListener('scroll', () => {
    setStickyBox();
})//scroll_event
window.addEventListener('resize', () => {
    setStickyBox();
})//resize_event
