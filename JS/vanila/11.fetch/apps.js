/* jQuery로 연결하는 방법! 
$('header').load('login.html') */
/* http://127.0.0.1:5500/JS/vanila/11.RECAP/login.html -> 로 연결된다! */


fetch('header.html').then(result => {
    console.log(result.text);
})//fetch.then -> 비동기로 된다! ('html'다 읽고 나서 확인한다.)