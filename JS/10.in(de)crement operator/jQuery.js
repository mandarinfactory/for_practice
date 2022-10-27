$(function () {
  /*
    a ++/-- => a +/- 1
    a += 5 => a + 5
    a += -7 => a + (-7) => a - 7 => a -= 7
    - 변수에 숫자가 있어야 증감이 가능하다.
    - event내에서 변수를 초기화하지 말것. => 내에 있으면 자동 초기화된다.
    */
  var n = 0;
  $(".ex_one .plus").click(function () {
    n++;
    $(".ex_one .para_result").text(n);
  }); // click
  $(".ex_one .minus").click(function () {
    n--;
    $(".ex_one .para_result").text(n);
  }); // click

  var m = 0;
  $(".ex_two .plus").click(function () {
    m++;
    $(".ex_two .para_result").text(m);
  }); // click
  $(".ex_two .minus").click(function () {
    m--;
    $(".ex_two .para_result").text(m);
  }); // click
}); // call-back function
