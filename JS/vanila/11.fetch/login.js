document.querySelector('.loginBtn').addEventListener('click', async e => {
    let data = await fetch('./data.json')
    data = await data.json()
    console.log(data);
    let id = document.querySelector('.userId').value
    let pw = document.querySelector('.userPw').value
    data.forEach(v => {
        if(v.id === id && v.pw === pw) {
            user = {
                id,
                pw,
                name : v.name // 얘는 따로 줄이지 않고 일일히 써줘야한다!
            }//user_object
        }//if-else
    })//forEach
    console.log(user.id, user.pw, user.name);
})//addEventListener