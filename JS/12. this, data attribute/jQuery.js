$(function () {

  function getHandle (thisElement) { 
    var a = thisElement.attr('data-kor') /* this는 예약어! 이미 지정해져있다. 
    this = Eventlistener(event를 받는 element) => event자체를 줄여버린다.
    this는 {}내에서만 가능하다.(event내에서만 가능하다.) 
    attr = value내에 있는 attribute값을 찾아준다. */
    console.log(a)
  }//getHandle

  $('.ex_one button').click(function () {
    getHandle($(this)); // $(this) = 'thisElement'라는 parameter로 들어가서 적용된다.
  })//click

  var n = 1;
  $('.ex_two button').click(function () {
  n += parseInt($(this).val())
  $('.ex_two .result').text(n);
  })
})//call-back