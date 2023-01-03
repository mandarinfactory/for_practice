let winInfo = () => {
    window.scrX = window.scrollX; // window.pageXoffset --> 요즘에는 잘 안씀!
    window.scrY = window.scrollY; // window.pageYoffset --> 요즘에는 잘 안씀!
    window.winW = window.innerWidth;
    window.winH = window.innerHeight;
}//function_winInfo

winInfo(); //--> 시작할때!


window.addEventListener('scroll', () => {
    winInfo();
})//--> scroll할때!
window.addEventListener('resize', () => {
    winInfo();
})//--> resize할때!
window.addEventListener('mousemove', e => {
    window.mausX = e.clientX
    window.mausY = e.clientY // browser 기준의 mouse자표
    window.pageX = e.pageX
    window.pageY = e.pageY // document 기준의 mouse좌표
})//--> mousemove할때!

/* Smooth Scroll ----------------------------------------------------------------------------- */
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
},
    { passive: false }
);
