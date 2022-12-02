{
    /*     if (new Date().getHours() > 12){
        halfHour = (new Date().getHours() - 12 )
    } else ( halfHour = new Date().getHours()) */
    let dayNight = (new Date().getHours() > 12)?'PM':'AM'
    let halfHour = (new Date().getHours() > 12)?new Date().getHours() - 12:new Date().getHours()
    if (halfHour < 10){
        halfHour = '0' + halfHour
    }
    let min = new Date().getMinutes();
    let sec = new Date().getSeconds();
    let year = new Date().getFullYear();
    let month = new Date().getMonth();
    let date = new Date().getDate();
    let day = new Date().getDay();

    let monthArr = ['Janurary', 'Febrary','March','April','May','June','July','August','September','October','November','December']
    let dayArr = ['일','월','화','수','목','금','토']
    let str = ''

    let foo = () => {
        str += `${year}년도 ${monthArr[month]} ${date}일 ${dayArr[day]}요일 ${dayNight} ${halfHour}시 ${min}분 ${sec}초`
        document.querySelector('.ex_one .output').innerText = str
    }
    let intervalID = setInterval(() => {
        foo()
    },1000)
    document.querySelectorAll('.ex_one button').forEach(v => {        
        v.addEventListener('click', e => {
            document.querySelector('.ex_one .btns').classList.toggle('active')
        })
        document.querySelector('.ex_one .btns .stop').addEventListener('click', e => {
            clearInterval(intervalID);
        })
        document.querySelector('.ex_one .btns .play').addEventListener('click', e => {
            clearInterval(intervalID);
            intervalID = setInterval(() => {
                foo()
            },1000)
        })
    })
}