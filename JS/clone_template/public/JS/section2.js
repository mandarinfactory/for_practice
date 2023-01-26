{
    bubble('.section2 .bubble_container', './img/bubble')
    let fractal = new displacmentWave('.section2 .center figure div img', '#fractal', './img/ripple.png', 5, 4)
    document.querySelector('.section2 .center figure div img').addEventListener('mouseenter', () => {
        fractal.wave()
    })//mouseenter
    let motion = () => {
        let scr2 = document.querySelector('.scr-target2').getBoundingClientRect().y
        let scr3 = document.querySelector('.scr-target3').getBoundingClientRect().y
        if (scr2 <= winH * 0.5 && scr3 > winH * 0.5) {
            document.querySelector('.section2').classList.add('active')
        } else {
            document.querySelector('.section2').classList.remove('active')
        }
        let metaScale = 1 + (scrY - scr2) * 0.001
        if (metaScale < 1) metaScale = 1;
        document.querySelector('.section2 .bg img').style.transform = `scale(${metaScale})`
        metaScale = - scr2 * 0.1
        if (metaScale < 1) metaScale = 1
        document.querySelector('.section2 .bg-bottom img').style.transform = `translateY(${metaScale}px)`
    }//motion_function
    motion()
    window.addEventListener('scroll', () => {
        motion()
    })//scroll
    window.addEventListener('resize', () => {
        motion()
    })//resize

    const figureMaleImg = document.querySelector('.section2 .center figure')
    figureMaleImg.addEventListener('mousemove', e => {
        let rotateY = - (e.offsetX - e.currentTarget.clientWidth * 0.5) * 0.1
        let rotateX = (e.offsetY - e.currentTarget.clientHeight * 0.5) * 0.1
        figureMaleImg.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    })//mousemove
}