let makeWheat = () => {
    return new Promise((resolve) => {
        console.log('밀 만들기 시작')
        setTimeout(() => {
            console.log('밀 만들기 끝!!')
            resolve('wheat')
        },Math.ceil(Math.random() * 3))//setTimeout
    })//promise -> 필히 하나의 parameter가 필요하다!(주로 resolve를 사용한다.)
}//makeWheat-function
/*            
let makeWheat = () => {
    console.log('밀 만들기 시작')
    setTimeout(() => {
        console.log('밀 만들기 끝!!')
        // 밀 만들기 끝남 //
            console.log(`${ingredient}로 밀가루 만들기 시작`)
            setTimeout(() => {
                console.log('밀가루 만들기 끝!!')
                // 밀가루 만들기 끝남 //
                    console.log(`${ingredient}로 빵 만들기 시작`)
                    setTimeout(() => {
                        console.log('빵 만들기 끝!!')
                    },Math.ceil(Math.random() * 3))//setTimeout
                    // 빵 만들기 끝남 //          
            },Math.ceil(Math.random() * 3))
    },Math.ceil(Math.random() * 3))//setTimeout
}//makeWheat-function
-> 비동기 문이 없었을때는 계속 call-back을 써서 문법이 난잡하게 썼다.
-> 비동기 문으로 call-back 문법을 단순화 시키기 위해서 만들어졌다.
*/
let makePowder = (ingredient) => {
    return new Promise((resolve) => {
        console.log(`${ingredient}로 밀가루 만들기 시작`)
        setTimeout(() => {
            console.log('밀가루 만들기 끝!!')
            resolve('powder')
        },(Math.ceil(Math.random() * 3)) * 1000)//setTimeout
    })//promise
}//makePowder-function

let makeBread = (ingredient) => {
    return new Promise((resolve) => {
        console.log(`${ingredient}로 빵 만들기 시작`)
        setTimeout(() => {
            console.log('빵 만들기 끝!!')
            resolve('bread')
        }, (Math.ceil(Math.random() * 3)) * 1000)//setTimeout
    })//promise
}//makeBread-function

/* promise && then -------------------------------------------------------- */
document.querySelector('.ex_one .btn_then').addEventListener('click', e => {
    makeWheat().then((result) => {
        return makePowder(result)
    })//makeWheat_then -> 꼭 return으로 끝내줘야 .then으로 연결할수 있다! 안하면 또 call-back 미로 써야함!
    .then((result) => {
        return makeBread(result)
    })//makePower_then
    .then((result) => {
        console.log(`${result}완성!!!!!!!!!!!!! 빵조! 빵내나!`)
    })
    /*
    then -> promise로 만든 function은 then으로 연결할수 있다.
    result는 그냥 parameter이므로 임의의 값이다.
    */
})

/* await && async -------------------------------------------------------------- */
document.querySelector('.ex_one .btn_async').addEventListener('click',async e => {
    let wheat = await makeWheat()
    let powder = await makePowder(wheat)
    let bread = await makeBread(powder)
    alert(`${bread}완료띠!!!!!!!!`)
    /* 
    makeWheat이 이미 promise가 되어있어야지 await을 쓸 수 있다!
    await -> 일단 기다리고 있어! 이런뜻...
    let foo = async () => {
        await loo();
    } 꼴로 해줘야한다.
    */
    makeBread()
})