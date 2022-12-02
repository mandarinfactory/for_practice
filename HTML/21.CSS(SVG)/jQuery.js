$(function () {
      var morph = new TimelineMax({paused:true}); 

      morph.to(".ex_four .path1",1,{morphSVG:".ex_four .path2",ease:Linear.easeNone})
      .to(".ex_four .path2", 1,{morphSVG:".ex_four .path1_copy",ease:Linear.easeNone});
})