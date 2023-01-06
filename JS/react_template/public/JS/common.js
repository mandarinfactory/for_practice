
let fnGetWindow = () => {
  window.scrY = window.scrollY
  window.scrX = window.scrollX
  window.winW = document.body.clientWidth 
  window.winH = document.body.clientHeight
}

fnGetWindow()

window.addEventListener('scroll', () => {
  fnGetWindow()
})

window.addEventListener('resize', () => {
  fnGetWindow()
})

window.addEventListener('mousemove', (e) => {
  window.clientX = e.clientX
  window.clientY = e.clientY
  window.pageX = e.pageX
  window.pageY = e.pageY
})

/* smoothScroll ----------------------------------------------------------------------------- */
window.isMobile = false;
window.smoothScroll = true
var scrSpeed = 0;

window.filter = "win16|win32|win64|mac";
if (navigator.platform) {
  isMobile = filter.indexOf(navigator.platform.toLowerCase()) < 0;
}

window.addEventListener("mousewheel", function (e) {
  if (!smoothScroll) { return false }
  e.preventDefault(); /* 브라우져 휠의 사용성을 없앤다 // 다만 passive : false를 써야 작동이 가능*/
  delta = e.wheelDeltaY / -120; /* 휠방향과 scrY와의 부호일치 */
  scrSpeed += 10 * delta;
}, { passive: false });

setInterval(function () {
  if (isMobile || !smoothScroll) return false
  window.scrollTo({
    top: scrY + scrSpeed, // behavior 랑 충돌이 나기에 수동값과 behavior는 공존할 수 없다.
  });
  scrSpeed *= 0.9;
}, 20);


