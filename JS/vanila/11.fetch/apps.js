/* jQuery로 연결하는 방법! 
$('header').load('login.html') */
/* http://127.0.0.1:5500/JS/vanila/11.RECAP/login.html -> 로 연결된다! */

let includeText = () => {
    return new Promise (resolve => {
        fetch('header.html').then(result => {
            return result.text();
        }).then(result => {
            document.querySelector('header').innerHTML = result;
            /* 로그인했으면, login_after를 보여주자! */
            resolve();
        })//fetch.then
    })//promise
}//includeText_function

let loginHandler = async () => {
    await includeText();
}// ---> 로그인체크함수()!!!
/* 
1. 항상! await를 쓰려면 선 async가 있어야한다!
2. 바로 실행되지 말고 먼저 includeText위에가 되고 나서 실행! new Promise(resolve {~ resolve()}) --> await includeText() 
*/

/* 
1. fetch.then -> 비동기로 된다! ('html'다 읽고 나서 확인한다.) 
2. 첫번째 result에는 완전 raw file로 다 가져온다. -> fetch('header.html').then(result => {})
3. return result.text()로 text화 된걸 다시 비동기로 가져온다.
4. html 전체를 긁어오게 된다.
*/
