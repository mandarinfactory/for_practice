{
    let video = document.querySelector('.gnb-sm video')
    let gnbSm = document.querySelector('.gnb-sm')
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
    /* ------------------gnb_xm motion ------------------------------------------------------------------------- */

    let timeoutID;
    document.querySelectorAll('.gnb a').forEach(v => {
        v.addEventListener('click', e => {
            let target = e.target.getAttribute('data-target')
            let offset = document.querySelector('.scr-target' + target).getBoundingClientRect().y + scrY
            window.smoothScroll = false;
            window.scrSpeed = 0
            window.scrollTo({
                top: offset,
                behavior: 'smooth',
            })//scrollTo
            clearTimeout(timeoutID);
            timeoutID = setTimeout(() => {
                window.smoothScroll = true
            }, 1000)//setTimeout
            /* ------------------gnb button ------------------------------------------------------------------------- */
            document.querySelector('.mbtn').classList.remove('active')
            gnbSm.classList.remove('active')
            time = -0.1
        })//addEventListener
    })//forEach
    /* ------------------scroll spy ------------------------------------------------------------------------- */
    let scrollSpy = () => {
        let offset0 = document.querySelector('.scr-target0').getBoundingClientRect().y + scrY
        let offset1 = document.querySelector('.scr-target1').getBoundingClientRect().y + scrY
        let offset2 = document.querySelector('.scr-target2').getBoundingClientRect().y + scrY
        let offset3 = document.querySelector('.scr-target3').getBoundingClientRect().y + scrY
        let offset4 = document.querySelector('.scr-target4').getBoundingClientRect().y + scrY
        let offset5 = document.querySelector('.scr-target5').getBoundingClientRect().y + scrY
        let offset6 = document.querySelector('.scr-target6').getBoundingClientRect().y + scrY
        let current
        if (scrY < offset1) {
            current = 0
        } else if (scrY >= offset1 && scrY < offset2) {
            current = 1
        } else if (scrY >= offset2 && scrY < offset3) {
            current = 2
        } else if (scrY >= offset3 && scrY < offset4) {
            current = 3
        } else if (scrY >= offset4 && scrY < offset5) {
            current = 4
        } else if (scrY >= offset5 && scrY < offset6) {
            current = 5
        } else {
            current = 6
        }//if-else
        document.querySelectorAll('.gnb a').forEach(v => {
            v.classList.remove('active')
        })//forEach
        document.querySelector(`.gnb-lg .link_btn${current}`).classList.add('active')
        document.querySelector(`.gnb-sm .link_btn${current}`).classList.add('active')
    }//function_scrollSpy
    scrollSpy()
    window.addEventListener('scroll', () => {
        scrollSpy()
    })//scroll event
    window.addEventListener('resize', () => {
        scrollSpy()
    })//resize event
}//유효scope