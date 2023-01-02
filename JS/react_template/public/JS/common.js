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