{/* ex_one */
    /* 일정추가 ---------------------------------------------------- */
    let todoList = [];//일정들의 배열
    document.querySelector('.ex_one button').addEventListener('click', () => {
        let date = document.querySelector('.ex_one input[type=date]').value
        let time = document.querySelector('.ex_one input[type=time]').value
        let todo = document.querySelector('.ex_one input[type=text]').value
        let todoObj = {date,time,todo,}//일정한개의 객체
        todoList.push(todoObj)
        let jsonTodoList = JSON.stringify(todoList)//이 JS의 값을 JSON의 글자형태로 변환시켜준다.
        localStorage.setItem(todoList, jsonTodoList);
        /* date : date => 이런꼴로 많이해서 간소화시켜서 쓸수 있다! */
    })//addEventListener
    /* 일정출력 ---------------------------------------------------- */
    /* 일정삭제 ---------------------------------------------------- */
}