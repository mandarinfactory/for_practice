/* layout.js---------------------------------------------------------------------- */
let fnSetSticky = () => {
  document.querySelector('.sticky-container').style.height = `${winH + winW * 2}px`
  document.querySelector('.sticky').style.height = `${winH}px`
  document.querySelector('.scr-target4').style.top = `${winW}px`
  document.querySelector('.scr-target5').style.top = `${winW * 2}px`
  let stickyStart = document.querySelector('.sticky-container').getBoundingClientRect().y + scrY
  let stickyEnd = document.querySelector('.section6').getBoundingClientRect().y + scrY - winH
  let metaX
  if (scrY < stickyStart) {//sticky 전
    metaX = 0
  } else if (scrY >= stickyStart && scrY <= stickyEnd) {//sticy 공간
    metaX = stickyStart - scrY
  } else if (scrY > stickyEnd) {//sticy 끝
    metaX = document.querySelector('.sticky').clientWidth - document.querySelector('.sticky-inner').clientWidth
  }//if else
  document.querySelector('.sticky-inner').style.transform = `translateX(${metaX}px)`
}//fnSetSticy

fnSetSticky()
window.addEventListener('scroll', () => {
  fnSetSticky()
})
window.addEventListener('resize', () => {
  fnSetSticky()
})
