{/* ex_one */
    /*
    {
        ~~~~ 일정들 ~~~~~
    } 
    */
    /* 일정추가 ---------------------------------------------------- */
    // localStorage에서 일정을 확인한다. //
    let todoList
    let jsonLocalStorage = localStorage.getItem('localTodoList') // JSON화된 요소!(JSON.stringify)
    // '일정이 없다'라면 빈배열 //
    if(!jsonLocalStorage) {
        todoList = [];
    } else {
        todoList = JSON.parse(jsonLocalStorage); // 다시 JSON화된 요소를 JS객체나 배열로 또 변화!
    }
    console.log(todoList)
    // 일정이 존재하면 일정목록을 배열로 저장 //

    document.querySelector('.ex_one button').addEventListener('click', () => {
        let date = document.querySelector('.ex_one input[type=date]').value
        let time = document.querySelector('.ex_one input[type=time]').value
        let todo = document.querySelector('.ex_one input[type=text]').value
        let todoObj = {date,time,todo,}//일정한개의 객체
        todoList.push(todoObj)
        let jsonTodoList = JSON.stringify(todoList)//이 JS의 값을 JSON의 글자형태로 변환시켜준다.
        localStorage.setItem('localTodoList', jsonTodoList);
        /* date : date => 이런꼴로 많이해서 간소화시켜서 쓸수 있다! */
    })//addEventListener
    /* 일정출력 ---------------------------------------------------- */
    /* 일정삭제 ---------------------------------------------------- */
}