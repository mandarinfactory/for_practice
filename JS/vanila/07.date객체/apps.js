{
    let halfHour
    if (new Date().getHours() > 12){
        halfHour = (new Date().getHours() - 12 )
    } else ( halfHour = new Date().getHours())
    if (halfHour < 10){
        halfHour = '0' + halfHour
    }
    let min = new Date().getMinutes()
    let sec = new Date().getSeconds()
    if (min < 10){
        min = '0' + min
    }
    if (sec < 10){
        sec = '0' + sec
    }

    let year = new Date().getFullYear();
    let month = new Date().getMonth();
    let date = new Date().getDate();
    let day = new Date().getDay();


    let monthArr = ['Janurary', 'Febrary','March','April','May','June','July','August','September','October','November','December']
    let dayArr = ['일','월','화','수','목','금','토']
    let str = ''
    str += `${year}년도 ${monthArr[month]} ${date}일 ${dayArr[day]}요일 ${halfHour}시 ${min}분 ${sec}초`
    document.querySelector('.ex_one .output').innerText = str

}