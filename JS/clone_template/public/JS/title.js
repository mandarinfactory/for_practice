{
    const title = document.querySelector('.title')
    const titleDiv = document.querySelector('.title div')
    title.addEventListener('mousemove', e => {
        let mausX = e.offsetX
        let mausY = e.offsetY
        let winWidth = title.clientWidth
        let winHeight = title.clientHeight
        let metaY = (mausX - winWidth * 0.5) * 0.2
        let metaX = (mausY - winHeight * 0.5) * 0.2
        titleDiv.style.transform = `rotateY(${metaY}deg) rotateX(${metaX}deg)`
    })//mousemove
    title.addEventListener('mouseleave', e => {
        titleDiv.style.transform = `rotateY(0deg) rotateX(0deg)`
    })//mousemove
}//유효scope