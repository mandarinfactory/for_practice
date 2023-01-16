{
    bubble('.section2 .bubble_container', './img/bubble')
    let fractal = new displacmentWave('.section2 .bg img', '#fractal', './img/ripple.png', 5, 4)
    document.querySelector('.section2 .center').addEventListener('mouseenter', () => {
        fractal.wave()
    })//mouseenter
    let motion = () => {
        let scr2 = document.querySelector('.scr-target2').getBoundingClientRect().y
        let scr3 = document.querySelector('.scr-target3').getBoundingClientRect().y
        if (scr2 <= 0 && scr3 > 0) {
            document.querySelector('.section2').classList.add('active')
        } else {
            document.querySelector('.section2').classList.remove('active')
        }
    }//motion_function
    motion()
    window.addEventListener('scroll', () => {
        motion()
    })//scroll
    window.addEventListener('resize', () => {
        motion()
    })//resize
}