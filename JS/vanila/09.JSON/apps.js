{/* ex_one */
    /*
    {
      id : ,
      date : ,
      time : ,
      todo : ,
    } 
    */
   
   
   /* 일정추가 ---------------------------------------------------- */
   let todoList
   // localStorage에서 일정을 확인한다. //
   let jsonLocalStorage = localStorage.getItem('localTodoList') // JSON화된 요소!(JSON.stringify)
   // '일정이 없다'라면 빈배열 //
   if(!jsonLocalStorage) {
       todoList = [];
    } else {
        todoList = JSON.parse(jsonLocalStorage); // 다시 JSON화된 요소를 JS객체나 배열로 또 변화!
    }
    /* 일정출력함수 (출력을 2번해줘야해서!) ---------------------------------------------------- */
    let listOutput = () => {
        if(todoList.length === 0) return false
        document.querySelector('.ex_one ul').innerHTML = '';
        let todoListCopy = [...todoList]
        todoListCopy.reverse().forEach(e => { // .reverse()를 사용해서 내림차순(3 -> 2 -> 1)으로 만들어준다.
         let list = document.createElement('li')
         document.querySelector('.ex_one ul').append(list)// jQuery에서 .append 역할!
         list.innerHTML = `
         날짜 : ${e.date}<br>
         시간 : ${e.time}<br>
         일정 : ${e.todo}<br>
             <br>
             `
         })//forEach
     }//listOutput
     listOutput();
     // 일정이 존재하면 일정목록을 배열로 저장 //
    document.querySelector('.ex_one button').addEventListener('click', () => {
        let id = Date.now()
        let date = document.querySelector('.ex_one input[type=date]').value
        let time = document.querySelector('.ex_one input[type=time]').value
        let todo = document.querySelector('.ex_one input[type=text]').value
        let todoObj = {id,date,time,todo,}//일정한개의 객체
        todoList.push(todoObj)
        let jsonTodoList = JSON.stringify(todoList)//이 JS의 값을 JSON의 글자형태로 변환시켜준다.
        localStorage.setItem('localTodoList', jsonTodoList);
        /* date : date => 이런꼴로 많이해서 간소화시켜서 쓸수 있다! */
        listOutput();
    })//addEventListener

    /* 일정삭제 ---------------------------------------------------- */
}