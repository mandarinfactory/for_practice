$(function () {
    var cardinalEnArr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',]
    var cardinalKrArr = ['영', '하나', '둘', '셋', '넷', '다섯', '여섯', '일곱', '여덟', '아홉',]
    $('.ex_one .q').append(cardinalEnArr[Math.floor(Math.random() * 10)])

    $('.ex_one button').click(function () {
        var enNum = $('.ex_one .q').text(); // 문제의 영어글자가 나온다.
        var enNumIdx = cardinalEnArr.indexOf(enNum); // 해당 글자가 array에서 몇번째에 있는 건지 파악해줌.
        var krNum = $('.ex_one input').val(); 
        var krNumIdx = cardinalKrArr.indexOf(krNum);
        if(enNumIdx === krNumIdx){
            $('.ex_one .result').text('yyyyyes')
        } else {
            $('.ex_one .result').text('nnnnno')
        }//if-else
    })//click
    /* ex_one ------------------------------------------------------------------------------- */
    var anEnArr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',]
    var anKrArr = ['영', '하나', '둘', '셋', '넷', '다섯', '여섯', '일곱', '여덟', '아홉',]
    for(var i = 1; i <= 3; i++){
        $('.ex_two .q').append(anEnArr[Math.floor(Math.random() * 10)] + ',')
    }//for
    $('.ex_two button').click(function () {
        var enString = $('.ex_two .q').text().slice(0,-1); // 마지막 ','를 지우는법! === pop()
        var enArr = enString.split(',') //,를 기준으로 enArr로 array 생성!!
        var krString = $('.ex_two input').val()
        var krArr = krString.split(',')
        
        var count = 0;
        enArr.forEach(function (v,i) {
            var qEnNum = anEnArr.indexOf(v) // 출력된 영어단어가 기존array(anEnArr)에서 어디있는지 확인!
            var userKrWord = krArr[i] // user가 기록한 단어의 array중에 anEnArr.indexOf(v)얘와 같은지 확인!
            var aKrNum = anKrArr.indexOf(userKrWord) // userKrWord가 anKrArr에서 몇번째에 있는지를 확인!
            // 그래서 qEnNum과 aKrNum이 같은지를 확인하면 된다!
            if(qEnNum === aKrNum){
                count++
            }
        })//enArr.forEach / 여기서 v는 영어단어!
        if(count === 3){
            $('.ex_two .result').text('yyyyyes')
        } else {
            $('.ex_two .result').text('nnnnno')
        }
    })//click
    /* ex_two ------------------------------------------------------------------------------- */
    var personnelArr = [
        { name : '가상', gender : '남', age : 32, id : 1},//object
        { name : '나상', gender : '여', age : 19, id : 2},//object
        { name : '다상', gender : '남', age : 26, id : 3},//object
        { name : '라상', gender : '여', age : 43, id : 4},//object
    ]//personnelArr => id로 구분시키는것! 따라서 서로 다른 값으로 해야한다!
    function printPersonnelArr () {
        $('.ex_three .result').empty();
        personnelArr.forEach(function (v) {
            $('.ex_three .result').append(`
            <p>
            이름 : ${v.name}, 성별 : ${v.gender}, 나이 : ${v.age} <button class='delete' value = '${v.id}'>삭제</button>
            </p> 
            `) /* JS에서 동적으로 button을 생성함. (dynamic programming) */
        })//forEach
    }//printPersonnelArr
    printPersonnelArr();
    $('body').on('click','.ex_three .result .delete',function () {
        var id = parseInt($(this).val())
        personnelArr = personnelArr.filter(function(v) {
            return v.id != id;
        })//filter
        printPersonnelArr();
    })//on을 사용하면 button(삭제button)이 후에 만들어지더라도 function이 적용이 된다.

    $('.ex_three .sort-age').click(function () {
        personnelArr.sort(function (x,y) {
            return x.age - y.age
        })//sort
        printPersonnelArr();
    })//click(sort-age)
    $('.ex_three .sort-name').click(function () {
        personnelArr.sort(function (x,y) {
            if(x.name > y.name) return 1
            if(x.name < y.name) return -1
            if(x.name === y.name) return 0
        })//sort => 순서를 바꾸면 내림차순으로 바뀐다! -1 / 1 / 0
        printPersonnelArr();
    })//click(sort-age)
    /* ex_three ------------------------------------------------------------------------------- */
})//call-back



/* 
<< reference && copy >>
 1.
 var a = 1
 var b = a
 console.log(a === b) // true

 2.
 console.log([1,2] == [1,2]) // false
  => array는 보기에는 같아도 하나하나가 개별적으로 다른 array이므로 false로 출력된다.

 3. 
 var arr1 = [1,2]
 var arr2 = arr1 // arr2는 arr1을 참조한다고 말한다. (여기서 arr1 = [1,2]와 arr2 = arr1에서의 arr1은 다른값이다.)
 arr2.push(3)
 console.log(arr2, arr1)
 // [1,2,3], [1,2,3]
 console.log(arr2 === arr1)
 // true

 4.
 var obj1 = {name : 'a'}
 var obj2 = obj1 // 마찬가지로, obj2는 obj1을 참조한다고 말한다.
 obj2.name = b
 console.log(obj1.name) // b   

 5. 복사
 var a = [1,2,3]
 var aCopy = [...a] //전개연산자 => var a의 array 값을 복사한다.
 var obj3 = {name : 'a'}
 var obj3Copy = {...obj3} //전개연산자 => var obj3의 object 값을 복사한다.

 6.얕은복사(shallow copy)
  - 배열내 객체, 배열들이 있을때 내부값은 참조를 하는거고 내부값까지 복사하지 않는다.
  - 객체나 배열 안에 객체나 배열이 들어있는 값을 복사한 경우
 var arr = [
    {name : 'a'},
    {name : 'b'},
 ]
 var arrCopy = [...arr] //copy
 arr.pop()
 console.log(arr, arrCopy) // [ {name : 'a'}, {name : 'a'},{name : 'b'}, ]


 arr[0].name = 'c';
 console.log(arrCopy) // [ {name : 'c'},{name : 'b'}, ]
*/