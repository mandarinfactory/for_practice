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

  function circulation(x, y) {
    x += y;
    if (x > 3) x = 0;
    if (x < 0) x = 3;
    return x;
  }
  var d = 0;
  $(".ex_five .plus").click(function () {
    d = circulation(d, 1);
    $(".ex_five .para_result").text(d);
  });
  $(".ex_five .minus").click(function () {
    d = circulation(d, -1);
    $(".ex_five .para_result").text(d);
  });
}); // call-back function
