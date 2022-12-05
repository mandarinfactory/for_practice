{
    if('팝업에 기록된 시간으로부터 하루(24 * 60 * 60 * 1000)가 지났으면') {
    localStorage.removeItem('popup')
    }
    if(localStorage.getItem('hide')){
        /* 있으면 ex_one을 숨긴다. */
        document.querySelector('.ex_one').style.display = 'none';
    } /* else {
        없으면 ex_one을 보여준다. 
    } */
    
    document.querySelector('.ex_one button').addEventListener('click', () => {
        if (document.querySelector('.ex_one input').checked) {
            localStorage.setItem('hide', Date.now());
        }
        document.querySelector('.ex_one').style.display = 'none';
    })
}
/* ex_one --------------------------------------- */