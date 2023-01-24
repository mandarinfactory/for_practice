{
    const motion = () => {
        let meta
        let Y = document.querySelector('.section6').getBoundingClientRect().y
        meta = 1 + (-Y * 0.0005)
        if (meta < 1) meta = 1
        document.querySelector('.section6 .bg img').style.transform = `scale(${meta})`
        meta = - 0 + (Y * 0.5)
        if (meta > 0) meta = 0
        document.querySelector('.section6 .bg_top').style.transform = `translateY(${meta}px)`
    }//function_motion
    motion()
    window.addEventListener('scroll', () => {
        motion()
    })
    window.addEventListener('resize', () => {
        motion()
    })
}