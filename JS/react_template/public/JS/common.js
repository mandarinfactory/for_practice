let winInfo = () => {
    window.scrX = window.scrollX; // window.pageXoffset --> 요즘에는 잘 안씀!
    window.scrY = window.scrollY; // window.pageYoffset --> 요즘에는 잘 안씀!
    window.winW = window.innerWidth;
    window.winH = window.innerHeight;
    console.log(scrX, scrY, winW, winH);
}//function_winInfo

winInfo(); //--> 시작할때!
window.addEventListener('scroll', () => {
    winInfo();
})//--> scroll할때!
window.addEventListener('resize', () => {
    winInfo();
})//--> resize할때!