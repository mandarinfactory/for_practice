{
    let video = document.querySelector('.gnb_sm video')
    let gnbSm = document.querySelector('.gnb_sm')
    let time = -1
    document.querySelector('.mbtn').addEventListener('click', () => {
        e.currentTarget.classList.toggle('active')
        gnbSm.classList.add('active')
        time = time * -1
    })

    /*  let intervalID = setInterval(() => {
         video.currentTime = video.currentTime + time
         if (time === 0.1 && video.currentTime === 0) {
             gnbSm.classList.remove('active')
         }
     }, 100) */

    document.querySelectorAll('.gnb a').forEach(v => {
        v.addEventListener('click', e => {
            let target = e.target.getAttribute('data-target')
            let offset = document.querySelector('.scr-target' + target).getBoundingClientRect().y + scrY
            if (target == '4' || target == '5') {
                offset += winW - winH
            }//if
            window.smoothScroll = false;
            window.scrSpeed = 0
            window.scrollTo({
                top: offset,
                behavior: 'smooth',
            })//scrollTo
        })//addEventListener
    })//forEach
}