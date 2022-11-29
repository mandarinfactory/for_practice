{
    document.querySelectorAll('.ex_one button').forEach( v => {
        v.addEventListener('click', e => {
            e.target.style.color = 'firebrick'
            e.target.style.borderRadius = '50%'// '-'은 다음단어를 대문자로 써줘야한다.
        })//click-event 
    })//querySelectorAll
}/* 이미 defer로 비연동으로 되어있기 때문에 따로 document필요없다! */