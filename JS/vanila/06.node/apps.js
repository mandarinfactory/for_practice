{
    document.querySelectorAll('.ex_one button, .ex_two button').forEach( v => {
        v.addEventListener('click', e => {
            e.target.style.backgroundColor = 'yellow'
            let nextEl = e.target.nextElementSibling
            let prevEl = e.target.previousElementSibling
            if(nextEl){
                nextEl.style.backgroundColor = 'aqua'
            }
            if(prevEl){
                prevEl.style.backgroundColor = 'red'
            }
        })//addEventListener
    })//forEach
}/* ex_one, two */
{
    document.querySelectorAll('.ex_three button').forEach( v => {
        v.addEventListener('click', e => {
            document.querySelectorAll('.ex_three button').forEach( h => {
                h.style.backgroundColor = 'rgb(239,239,239)'
            })
            e.target.style.backgroundColor = 'darkgreen'
        })//addEventListener
    })//forEach
}/* ex_three */
{
    document.querySelectorAll('.ex_four button').forEach( v => {
        v.addEventListener('click', e => {
            Array.from(e.target.parentElement.children).forEach( h => {
                h.style.color = 'black'
            })
            /* 
            parent는 element로 나오지만! (하나라서)
            children은 여러개이므로 유사-array로 나온다!
            유사-array이니까 Array.from으로 진짜-array로 만들어준다!
            => 모든 button 다 끄고 나만 다시 색 변경!
            */
            e.target.style.color = 'darkblue'
        })//addEventListener
    })//forEach
}/* ex_four */
{
    document.querySelectorAll('.ex_five button').forEach( v => {
        v.addEventListener('click', e => {
            Array.from(e.target.parentElement.children).forEach( v => {
                // v => [btn1, btn2, btn3, btn4]
                if(v !== e.target) v.classList.remove('active')
            })//forEach
            e.target.classList.toggle('active')
          /*   let elE = e.target
            // e.target => btn3
            Array.from(e.target.parentElement.children).forEach( h => {
                // h => [btn1, btn2, btn3, btn4]
                if(elE === h){
                    elE.style.color = 'purple'
                } else {
                    h.style.color = 'yellow'
                }
            })//if-else 내가 해본 방법...뀽 */
        })//addEventListener
    })//forEach
/* click한 애랑 target이랑 같으면 true! */
}/* ex_five */
{   
    let btnArr = Array.from(document.querySelectorAll('.ex_six button')) // 먼저 만들어 놓는게 index하려고 할때 편하다!
    btnArr.forEach( v => {
        v.addEventListener('click', e => {
            console.log(btnArr.indexOf(e.target))
        })//click-event
    })//forEach
}/* ex_six */
{   
    document.querySelectorAll('.ex_seven button').forEach( v => {
        v.addEventListener('click', e => {
            let mySiblingsBtnArr = Array.from(e.target.parentElement.children)
            let indexNumber = mySiblingsBtnArr.indexOf(e.target)
            alert(indexNumber);
        })//click-event
    })//forEach
    /* let btnsArr = Array.from(document.querySelectorAll('.ex_seven button'))
    btnsArr.forEach( v => {
        v.addEventListener('click', e => {
            if(btnsArr.indexOf(v) === btnsArr.indexOf(e.target)){
                e.target.style.backgroundColor = 'yellow'
            } else {
                e.target.style.backgroundColor = 'rgb(239,239,239)'
            }//if-else
        })//click-event
    })//forEach 요것도 내가 만든 방법...뀽 */
}/* ex_seven */
{
    document.querySelectorAll('.ex_eight button').forEach( v => {
        v.addEventListener('click', e => {
            let btnArr = Array.from(e.target.parentElement.children)
            let thisIndex = btnArr.indexOf(e.target)
            btnArr.forEach((v, i)=> {
                if(thisIndex > i){
                    v.style.backgroundColor = 'firebrick'
                } else if(thisIndex <= i){
                    v.style.backgroundColor = 'rgb(239,239,239)'
                } else return false
            })
        })//click-event
    })//forEach
}/* ex_eight */