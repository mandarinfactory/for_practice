{
    let year = new Date().getFullYear();
    let month = new Date().getMonth();
    let day = new Date().getDate();
    let str = ''
    str += `${year}년도 ${month + 1}월 ${day}일`
    document.querySelector('.ex_one .output').innerText = str

}