{
    document.querySelectorAll('.ex_one button, .ex_two button').forEach( v => {
        v.addEventListener('click', e => {
            e.target.style.backgroundColor='yellow'
            let nextEl = e.target.nextElementSibling
            let prevEl = e.target.previousElementSibling
            if(nextEl){
                nextEl.style.backgroundColor='aqua'
            }else {
                prevEl.style.backgroundColor='red'
            }
        })//addEventListener
    })//forEach
}/* ex_one */
{}
{}
{}