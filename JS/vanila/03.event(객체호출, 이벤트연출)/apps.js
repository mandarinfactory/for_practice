document.addEventListener('DOMContentLoaded',() => {
    document.getElementById('btn').addEventListener('click',() => {

    })//click
    const btnArr = document.getElementsByClassName('btn')
    Array.from(btnArr).forEach((v) => {
        v.addEventListener('click', () => {
            console.log('hi');
        })//addEventListener
    })//forEach
    /* 
    getElementsByID는 객체를,
    ByTagName, ClassName은 배열을 return 한다.
    위에서 btnArr는 유사배열이라서 따로 Array.from()을 통해 배열화를 거쳐서 getElementsByClassName
    내에서 event가 실행시킬수 있다.
    forEach를 사용해서 각각의 .btn에 event가 일어나게 해준다.
    */

})//DOM