$(function () {
      var morph = new TimelineMax({paused:false,repeat:-1}); 

      morph.to(".ex_four .path1",1,{morphSVG:".ex_four .path2",ease:Linear.easeNone})
      .to(".ex_four .path1", 1,{morphSVG:".ex_four .path1_copy",ease:Linear.easeNone});

    /* ex_four ---------------------------------------------------- */
    $('.ex_five .btn1').click(function () {
        TweenMax.to(".ex_five .path1",1,{morphSVG:".ex_five .path1_copy",fill:"yellow",ease:Linear.easeNone})
    })
    $('.ex_five .btn2').click(function () {
      TweenMax.to(".ex_five .path1",1,{morphSVG:".ex_five .path2",fill:"yellow",ease:Linear.easeNone})
    })
    /* morphing-motion ------------------------------------------------------------------------------------------ */
    $('.ex_eight .btn1').click(function () {
      $('.ex_eight').addClass('active');
    })//click-event
    $('.ex_eight .btn2').click(function () {
      $('.ex_eight').removeClass('active');
    })//click-event
    function resizeImage() {
      var t = $('.ex_nine').offset().top
      if (scrY >= t -winH * 0.8) {
        $('.ex_nine').addClass('active')
      } else {
        $('.ex_nine').removeClass('active')
      }

    }
    resizeImage()
    $(window).resize(function (){
      resizeImage()
    }).scroll(function () {
      resizeImage()
    })//window-event
})
