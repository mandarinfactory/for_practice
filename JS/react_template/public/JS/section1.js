{
  
  let wave = new displacmentWave('.visual .dancer','#ripple-filter1','./img/ripple.png',5,7)
  $('.visual .dancer').mouseenter(function(){
    wave.wave()
  })//mouseenter

  $('.visual').mousemove(function(e){
    var mx = e.offsetX 
    var my = e.offsetY
    mouseMotion(mx,my)
  }).bind('touchmove',function(e){
   var mx = e.originalEvent.changedTouches[0].clientX
   var my = e.originalEvent.changedTouches[0].clientY
   mouseMotion(mx,my)
  })

  function mouseMotion(mouseX,mouseY){
    var cx = $(this).innerWidth() * 0.5
    var cy = $(this).innerHeight() * 0.5
   
    var diffx = mouseX - cx 
    var diffy = mouseY - cy

    var metaScale = 2 + diffx*0.0001
    if(metaScale < 1) metaScale = 1
    $('.visual .bg img').css({'transform':`scale(${metaScale})`})
    var metaScale2 = 1 + diffx*0.0001
    $('.visual .bg-bottom1').css({'transform':`scaleY(${metaScale2})`})
    var rotateX = diffx * 0.02
    var rotateY = -diffy * 0.02
    $('.visual .dancer').css({'transform':`translate(-50%,-50%) rotateX(${rotateY}deg) rotateY(${rotateX}deg)`})
  }//fn


}