$(function () {
    $('.ex1 .show').click(function () {
      $('.ex1 .box').show()
    })//click
  
    $('.ex1 .hide').click(function () {
      $('.ex1 .box').hide()
    })//click
  
    $('.ex1 .toggle').click(function () {
      $('.ex1 .box').toggle()
    })//click
  
    /* ex2---------------------------------------------------------- */
    $('.ex2 .bg-yellow').click(function () {
      $('.ex2 .box').css({'background': '#FF0'})
    })//click
  
    $('.ex2 .bg-none').click(function () {
      $('.ex2 .box').css({'background': 'none'})
    })//click
   // 추가적으로 내가 넣어야함!
    $('.ex2 .bg-color').click(function () {
      $('.ex2 .box').css({
        'background': 'yellow',
        'color':'red',
      })
    })//click

    /* ex3 -------------------------------------------------------- */
    $('.ex3 .add-class').click(function () {
        $('.ex3 .box').addClass('activeOne activeTwo')
    })
    $('.ex3 .remove-class').click(function () {
        $('.ex3 .box').removeClass('activeOne activeTwo')
    })
    $('.ex3 .toggle-class').click(function () {
        $('.ex3 .box').toggleClass('activeOne activeTwo')
    })

    /* ex4 -------------------------------------------------------- */
    $('.ex4 .slide_up').click(function () {
        $('.ex4 .box').stop().slideUp(2000, function () {
            alert('hallo!')
        })// animation(slide, fade)내 call-back function은 animation이 끝나면 실행하게 된다.
    })
    $('.ex4 .slide_down').click(function () {
        $('.ex4 .box').stop().slideDown(2000)
    })
    $('.ex4 .slide_toggle').click(function () {
        $('.ex4 .box').stop().slideToggle(2000)
    }) // 2000 = 2s, 이렇게 따로 시간을 지정할 수 있다.

    /* ex5 --------------------------------------------------- */
    $('.ex5 .fade_in').click(function () {
        $('.ex5 .box').stop().fadeIn('fade_in')
    })
    $('.ex5 .fade_out').click(function () {
        $('.ex5 .box').stop().fadeOut('fade_out')
    })
    $('.ex5 .fade_toggle').click(function () {
        $('.ex5 .box').stop().fadeToggle('fade_toggle')
    })
  })//document.ready
  /* animnation이 중첩될경우 .stop()을 사용해 animation이 누적되는걸 방지한다. */