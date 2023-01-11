{
  $('.visual').mousemove(function (e) {
    var mx = e.offsetX
    var my = e.offsetY
    mouseMotion(mx, my)
  }).bind('touchmove', function (e) {
    var mx = e.originalEvent.changedTouches[0].pageX - $(this).offset().left
    var my = e.originalEvent.changedTouches[0].pageY - $(this).offset().top
    mouseMotion(mx, my)
  })//mousemove&touchmove_event

  function mouseMotion(mouseX, mouseY) {
    var cx = $(this).innerWidth() * 0.5
    var cy = $(this).innerHeight() * 0.5

    var diffx = mouseX - cx
    var diffy = mouseY - cy

    var metaScale = 2 + diffx * 0.0001
    if (metaScale < 1) metaScale = 1
    $('.visual .bg img').css({ 'transform': `scale(${metaScale})` })
    var metaScale2 = 1 + diffx * 0.0001
    $('.visual .bg-bottom1').css({ 'transform': `scaleY(${metaScale2})` })
    var rotateX = diffx * 0.02
    var rotateY = -diffy * 0.02
    $('.visual .dancer').css({ 'transform': `translate(-50%,-50%) rotateX(${rotateY}deg) rotateY(${rotateX}deg)` })
  }//function_mouseMotion
}