document.querySelector('.loginBtn').addEventListener('click', async e => {
    let data = await fetch('./data.json')
    data = await data.json()
    console.log(data);
    let id = document.querySelector('.userId').value
    let pw = document.querySelector('.userPw').value
})//addEventListener