let makeWheat = () => {
    return new Promise((resolve) => {
        console.log('밀 만들기 시작')
        setTimeout(() => {
            console.log('밀 만들기 끝!!')
            resolve('wheat')
        },Math.ceil(Math.random() * 3))//setTimeout
    })//promise -> 필히 하나의 parameter가 필요하다!
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
    console.log(`${ingredient}로 밀가루 만들기 시작`)
    setTimeout(() => {
        console.log('밀가루 만들기 끝!!')
        return 'powder'
    },Math.ceil(Math.random() * 3))//setTimeout
}//makePowder-function

let makeBread = (ingredient) => {
    console.log(`${ingredient}로 빵 만들기 시작`)
    setTimeout(() => {
        console.log('빵 만들기 끝!!')
        return 'bread'
    },Math.ceil(Math.random() * 3))//setTimeout
}//makeBread-function