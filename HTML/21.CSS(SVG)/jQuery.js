$(function () {
      var morph = new TimelineMax({paused:true}); 
      morph.to(".path1",1,{morphSVG:".path2",fill:"#000",ease:Linear.easeNone})
      .to(".path1", 1,{morphSVG:".path3",fill:"#000",ease:Linear.easeNone});
})