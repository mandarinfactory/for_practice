{
    let motion = () => {
        const scrSection1 = document.querySelector('.scr-target1')
        const scrSection2 = document.querySelector('.scr-target2')
        const section1 = document.querySelector('.section1')

        const offsetTop1 = scrSection1.getBoundingClientRect().y
        const offsetTop2 = scrSection2.getBoundingClientRect().y

        if (offsetTop1 < winH * 0.5 && offsetTop2 > 0) section1.classList.add('active')
        else section1.classList.remove('active')
    }//function_motion
    motion();
    window.addEventListener('scroll', () => {
        motion();
    })//scroll_event
    window.addEventListener('resize', () => {
        motion();
    })//resize_event
}