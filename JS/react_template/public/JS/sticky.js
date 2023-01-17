{
    let motion = () => {
        let Y = document.querySelector('.scr-target2').getBoundingClientRect().y
        let meta = (Y * 0.2 <= 0) ? Y * 0.2 : 0
        document.querySelector('.sticky .bg_cloud img').style.transform = `translateY(${meta}px)`
    }
    motion()
    window.addEventListener('scroll', e => {
        motion()
    })
    window.addEventListener('resize', e => {
        motion()
    })
}