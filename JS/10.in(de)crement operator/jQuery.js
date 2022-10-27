$(function () {
  /*
    a ++/-- => a +/- 1
    a += 5 => a + 5
    a += -7 => a + (-7) => a - 7 => a -= 7
    - 변수에 숫자가 있어야 증감이 가능하다.
    - event내에서 변수를 초기화하지 말것. => 내에 있으면 자동 초기화된다.
    */
  var n = 1;
  $(".ex_one .plus").click(function () {
    n++; // 증감 후!
    if (n > 5) n = 5; // 검사를 한다!
    $(".ex_one .para_result").text(n);
  }); // click

  $(".ex_one .minus").click(function () {
    n--;
    if (n < 1) n = 1;
    $(".ex_one .para_result").text(n);
  }); // click

  var m = 0;
  $(".ex_two .plus").click(function () {
    m++;
    if (m > 3) m = 0;
    $(".ex_two .para_result").text(m);
  }); // click

  $(".ex_two .minus").click(function () {
    m--;
    if (m < 0) m = 3;
    $(".ex_two .para_result").text(m);
  }); // click

  var a = 0;
  var b = 1;
  $(".ex_three button").click(function () {
    a += b;
    $(".ex_three .para_result").append(`, ${a}`); // append = 옆으로 이어서 붙이기로 출력해준다.
    b++;
  }); //click

  function plusMinusCal(numA, numB) {
    numA += numB;
    if (numA > 5) numA = 5;
    if (numA < 1) numA = 1;
    return numA;
  } // function
  var c = 1;
  $(".ex_four .plus").click(function () {
    c = plusMinusCal(c, 1);
    $(".ex_four .para_result").text(c); // = c
  });
  $(".ex_four .minus").click(function () {
    c = plusMinusCal(c, -1);
    $(".ex_four .para_result").text(c);
  });

  function circulCal(x, y, min, max) {
    // function내에서 변수는 매개변수(parameter)로 쓴다!
    x += y;
    if (x > max) x = min;
    if (x < min) x = max;
    return x;
  }
  var d = 0;
  $(".ex_five .plus").click(function () {
    d = circulCal(d, 1, 0, 3); // 증감결과 = 증감함수(증감결과, 증감할 양, 시작, 끝)
    $(".ex_five .para_result").text(d);
  });
  $(".ex_five .minus").click(function () {
    d = circulCal(d, -1, 0, 3);
    $(".ex_five .para_result").text(d);
  });
  var e = 2;
  $(".ex_six .plus").click(function () {
    e = circulCal(e, 1, 2, 8); // 증감결과 = 증감함수(증감결과, 증감할 양, 시작, 끝)
    $(".ex_six .para_result").text(e);
  });
  $(".ex_six .minus").click(function () {
    e = circulCal(e, -1, 2, 8);
    $(".ex_six .para_result").text(e);
  });

  function addQuestion(numX) {
    $(`.qu_${numX} .num_one`).text(Math.floor(Math.random() * 10));
    $(`.qu_${numX} .num_two`).text(Math.floor(Math.random() * 10));
  }

  addQuestion("one");
  addQuestion("two");
  addQuestion("three");

  function checkAddQuestion(spanOne) {
    var numOne = parseInt($(`.qu_${spanOne} .num_one`).text()); // val()은 input에서만 쓴다!
    var numTwo = parseInt($(`.qu_${spanOne} .num_two`).text()); // val()은 input에서만 쓴다!
    var sumNum = parseInt($(`.qu_${spanOne} .input_sum`).val());
    if (numOne + numTwo === sumNum) {
      return 1; // 1점을 주는것! => 점수확인으로 줄 점수!
    } else {
      return 0;
    }
  }
  $(".ex_seven button").click(function () {
    var point = 0; // click할때마다 초기화시키기 위해서!
    point += checkAddQuestion("one"); // point 증가 결과점수
    point += checkAddQuestion("two");
    point += checkAddQuestion("three");
    $(".ex_seven .result").text(point);
  }); // click


 function getPrice (price) {
   var priceOne = parseInt($(`.pro_${price} input`).val());
   var priceTwo = parseInt($(`.pro_${price} select`).val());
   var totalPrice = priceOne * priceTwo
   $(".pro_${price} .result").text(priceGoods);
  return getPrice
 }

  
  $(".ex_eight button").click(function () {
    $('.ex_eight .result').text(getPrice)
  });
}); // call-back function
