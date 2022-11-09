$(function () {
    $('.ex_one button').click(function () {
        var answerArr = [
            [1, 4, 5],[2,3],[2,3]
        ]//answerArr(각각 q1,q2,q3의 답들이 들어있다. i=1,2,3 => 여기서 j=1,2,3,4만큼 checkbox가 돌아간다!)
        var point = 0;
        var correctArr = []; // for-i나 j내에서 만들면 계속 새로고침 되어서 array안에 들어왔다가 사라진다!
        var wrongArr = []; // ''
        for(var i = 1; i <= 3; i++){
            var chkCnt = 0; // for-j문 안에서 나오면 계속 순환하므로 새로고침되서 값이 증가하지 않는다!
            var inputCnt = $(`.ex_one .q${i} input`).size()
            for(var j = 1; j <= inputCnt; j++){ // j <= checkbox의 갯수!
                if( // checkbox 하나하나에 맞게 checked가 되어있거나 안되어있거나 => 둘다 맞다고 확인!(checked, !checked둘다)
                ($(`.ex_one .q${i} input:nth-child(${j})`).prop('checked') && answerArr[i-1].indexOf(j) !== -1)
                // 1번째 input에서 checked된 값과(&&) answerArr에서 1값이 있고 그게 -1이 아니라면 (indexOf에서 값이 없으면 -1이 나온다.)
                || // OR
                (!$(`.ex_one .q${i} input:nth-child(${j})`).prop('checked') && answerArr[i-1].indexOf(j) === -1)
                // 1번째 input에서 checked되지 않은값과(&&) answerArr에서 1값이 없어서 그게 -1이라면 (indexOf에서 값이 없으면 -1이 나온다.)
                ) {
                    chkCnt++ //checkbox 각각 하나 선택할때 chkCnt++!
                }//if
            }//for-j
            if(chkCnt === inputCnt){ //1문제당 정답 check! => 위 if에서 문제당 각4개의 checkbox 확인!
                point++
            }//if-chkCnt
        }//for-i
    var result = '(점수 : ' + point + ')'
    result += '(맞은번호 : ' + correctArr + ')' // 문자열 이어붙인다! (+=)
    result += '(맞은번호 : ' + wrongArr + ')' // 문자열 이어붙인다! (+=)
    $('.ex_one .result').text(result)
    })//click(.ex_one)
    /* ex_one -------------------------------------------------------- */
        $('.ex_two').append(`<table></table>`)
        for(var i = 1; i <= 9; i++){
            $('.ex_two table').append(`<tr></tr>`)
            $('.ex_two table tr:last-child').append(`<td colspan=${i}></td>`)
            if(i !== 9){$('.ex_two table tr:last-child').append(`<td colspan=${9 - i}></td>`)}
        }//for-i
    /* ex_two -------------------------------------------------------- */
    var totalUserArr = [
        
    ]//totalUserArr // .add할때마다 큰배열을 밖에 만들면 계속 초기화된다!
    $('.ex_three .add').click(function () {
        var userArr = [] // 소괄호는 계속 추가되어야하므로 안에다 만든다!
        userArr.push($('.ex_three .name').val());
        userArr.push($('.ex_three .gender:checked').val());
        userArr.push($('.ex_three .age').val());
        totalUserArr.push(userArr);
        $('.ex_three').val('').prop('checked'.false) // click-event 후 input 초기화!
    })//click(.add)
    $('.ex_three .print').click(function () {
        $('.ex_three .result').empty()
        for(var i = 0; i < totalUserArr.length; i++) { //0,1번째씩이니까 ,i < totalUserArr.length
            for(var j = 0; j < 3; j++){
                $('.ex_three .result').append(`${totalUserArr[i][j]},`)
            }//for-j
            $('.ex_three .result').append(`<br>`)
        }//for-i
    })//click(.print)
    /* ex_three -------------------------------------------------------- */
    /* 
    array[]는 반복, 순서 그리고 for에서 쓰기 편하고,
    object{}는 data추출할때 매우 편하다. => for문으로 돌릴수 없다! (순서X)
     */
    var allArr = []; // 큰array
    $('.ex_four .add').click(function () {
        var userObj = {};
        userObj.name = ($('.ex_four .name').val());
        userObj.gender = ($('.ex_four .gender:checked').val());
        userObj.age = ($('.ex_four .age').val());
        allArr.push(userObj);
        console.log(allArr)
    })//click(.add)
    $('.ex_four .print').click(function () {
        $('.ex_four .result').empty()
        for(var i = 0; i < allArr.length; i++){
            $('.ex_four .result').append(`${allArr[i].name},`)
            $('.ex_four .result').append(`${allArr[i].gender},`)
            $('.ex_four .result').append(`${allArr[i].age}`)
            $('.ex_four .result').append(`<br>`) //i번씩 띄어쓰기 해줘야하니까!
        }//for-i
    })//click(.print)
    /* ex_four -------------------------------------------------------- */
    var theArr = [];
    $('.ex_five .add').click(function () {
        var theObj = {};
        theObj.name = ($('.ex_five .name').val());
        theObj.gender = ($('.ex_five .gender:checked').val());
        theObj.age = ($('.ex_five .age').val());
        theArr.push(theObj);
    })//click(.add)
    $('.ex_five .print').click(function () {
        $('.ex_five .result').empty()
        theArr.forEach(function (obj) { //obj라는 parameter! => .append(`${obj.name},`)
            $('.ex_five .result').append(`${obj.name},`)
            $('.ex_five .result').append(`${obj.gender},`)
            $('.ex_five .result').append(`${obj.age},`)
            $('.ex_five .result').append(`<br>`)
        }) //forEach function(event는 아니고 array-method이다! each랑은 비슷함.)
      /*   for(var i = 0; i < allArr.length; i++){
            $('.ex_five .result').append(`${theArr[i].name},`)
            $('.ex_five .result').append(`${theArr[i].gender},`)
            $('.ex_five .result').append(`${theArr[i].age}`)
            $('.ex_five .result').append(`<br>`) //i번씩 띄어쓰기 해줘야하니까!
        }//for-i  => 요즘에는 이렇게 안쓴다! function화 한다. */
    })//click(.print)
    /* ex_five -------------------------------------------------------- */
    var everyArr = []
    for (var i = 1; i <= 20; i++){
        everyArr.push(Math.floor(Math.random()*10)) // 0 ~ 9, ㅡㅁ소.ceil이면 1 ~ 10
    }//for-i
    everyArr.forEach(function (num) {
        $('.ex_six .result').append(num)
         
        $('.ex_six .result').append(`<br>`)
    })//forEach
    /* ex_six -------------------------------------------------------- */
    var oneArr = [
        {
            name : "가상",
            gender : '남',
            age : '23'
        },
        {
            name : '나상',
            gender : '여',
            age : '31'
        },
        {
            name : '다상',
            gender : '남', 
            age : '48'
        },
        {
            name : '라상',
            gender : '여', 
            age : '19'
        }
    ]
    $('.ex_seven button').click(function () {
        $('.ex_seven .result').empty()//click할때 한번만 비우면 된다!
        var femaleArr = oneArr.filter(function (v) {
            return v.gender === '여'
        })//filter-function(해당 조건에 맞는 array들을 가져와서 새로운 array로 묶는다. => 조건만 볼때 주로 쓴다!(~조건이면 return한다.))
        var maleArr = oneArr.filter(function (v) {
            return v.gender === '남'
        })//filter-function(해당 조건에 맞는 array들을 가져와서 새로운 array로 묶는다.)
        femaleArr.forEach(function (v) {
            $('.ex_seven .result').append(`여성 : ${v.name}`)
            $('.ex_seven .result').append(`<br>`)
        })//forEach(femaleArr)
        $('.ex_seven .result').append(`<br>`)
        maleArr.forEach(function (v) {
            $('.ex_seven .result').append(`남성 : ${v.name}`)
            $('.ex_seven .result').append(`<br>`)
        })//forEach(maleArr)
    })//click(.ex_seven)
    /* ex_seven -------------------------------------------------------- */
    var oneArr = [
        {
            name : "마상",
            gender : '남',
            age : '23'
        },
        {
            name : '바상',
            gender : '여',
            age : '31'
        },
        {
            name : '사상',
            gender : '남', 
            age : '48'
        },
        {
            name : '아상',
            gender : '여', 
            age : '19'
        }
    ]
    $('.ex_eight button').click(function () {
        var twoArr =oneArr.map(function (v) {
            return v.name
        })//map.oneArr
        twoArr.forEach(function () {
            $('.ex_eight .result').append(v + ',');
        })//forEach => map을 써도 되지만 주로 forEach를 출력시에는 쓴다.(새로운 array를 사용할때 주로 map사용!)
    })//click(.ex_eight)
    /* ex_eight -------------------------------------------------------- */
})//call-back