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

  /*   let foo = () => {
        str += `${year}년도 ${monthArr[month]} ${date}일 ${dayArr[day]}요일 ${dayNight} ${halfHour}시 ${min}분 ${sec}초`
        document.querySelector('.ex_one .output').innerText = str
    } 오류있다.....뀽....*/
    let intervalID = setInterval(() => {
    /* foo() */
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
}/* ex_one ------------------------------------------------------------ */
{
    let findDate = new Date()
}/* ex_two (assignment) ----------------------------------------------- */
{
    let nowSec = parseInt(Date.now() / 1000);
    let nowMin = parseInt(nowSec / 60);
    let nowHour = parseInt(nowMin / 60);
    let nowDate = parseInt(nowHour / 24);
    console.log(nowDate);
}/* ex_three --------------------------------------------------------- */
{
    let christmas = new Date(2022,11,25)
    let dDay = parseInt(christmas.getTime() / 1000)
    let now = parseInt(Date.now() / 1000)
    let remainTime = dDay - now;
    let remainHour = parseInt(remainTime / 3600)
    let remainMin  = parseInt(remainTime % 3600 / 60)
    let remainSec  = parseInt(remainTime % 3600 % 60)
    document.querySelector('.ex_four p.output').append(`크리스마스까지 ${remainHour}시간, ${remainMin}분, ${remainSec}초 남았습니다.`)
}/* ex_four ---------------------------------------------------------- */

{
    /* 
    62초
    62 / 60초 = 1분
    62 % 60초 = 2초

    62분 => 1시간 2분 0초
    = 3720초
    3720 / 3600초 = 1시간
    3720 % 3600초 = 120초
    120 / 60초 = 2분
    120 % 60초 = 0초

    62분 30초 => 1시간 2분 30초
    = 3750초
    3750 / 3600초 = 1시간
    3750 % 3600초 = 150초
    150 / 60초 = 2분
    150 % 60초 = 30초

    */
}