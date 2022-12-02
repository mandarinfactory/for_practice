{
    /*     if (new Date().getHours() > 12){
        halfHour = (new Date().getHours() - 12 )
    } else ( halfHour = new Date().getHours()) */
    let dayNight = (new Date().getHours() > 12)?'PM':'AM'
    let halfHour = (new Date().getHours() > 12)?new Date().getHours() - 12:new Date().getHours()
    if (halfHour < 10){
        halfHour = '0' + halfHour
    }
    let min = (new Date().getMinutes() < 10)?new Date().getMinutes() = '0' + new Date().getMinutes():new Date().getMinutes()
    let sec = (new Date().getSeconds() < 10)?new Date().getSeconds() = '0' + new Date().getSeconds():new Date().getSeconds()
    let year = new Date().getFullYear();
    let month = new Date().getMonth();
    let date = new Date().getDate();
    let day = new Date().getDay();


    let monthArr = ['Janurary', 'Febrary','March','April','May','June','July','August','September','October','November','December']
    let dayArr = ['일','월','화','수','목','금','토']
    let str = ''
    str += `${year}년도 ${monthArr[month]} ${date}일 ${dayArr[day]}요일 ${dayNight} ${halfHour}시 ${min}분 ${sec}초`





    let foo = () => {
        
    }
    document.querySelector('.ex_one .output').innerText = str
    document.querySelectorAll('.ex_one button').forEach(v => {        
        v.addEventListener('click', e => {
            document.querySelector('.ex_one .btns').classList.toggle('active')
        })
    })
}