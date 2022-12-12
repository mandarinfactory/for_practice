/* jQuery로 연결하는 방법! 
$('header').load('login.html') */
/* http://127.0.0.1:5500/JS/vanila/11.RECAP/login.html -> 로 연결된다! */


fetch('header.html').then(result => {
    return result.text();
}).then(result => {
    document.querySelector('header').innerHTML = result
})
/* 
1. fetch.then -> 비동기로 된다! ('html'다 읽고 나서 확인한다.) 
2. 첫번째 result에는 완전 raw file로 다 가져온다. -> fetch('header.html').then(result => {})
3. return result.text()로 text화 된걸 다시 비동기로 가져온다.
4. html 전체를 긁어오게 된다.
*/