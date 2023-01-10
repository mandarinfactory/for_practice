{
    $('.visual').mousemove(function (e) {
        let mausX = e.offsetX
        let mausY = e.offsetY
        mouseMotion(mausX, mausY)
    }).bind('touchmove', function (e) {
        let mausX = e.originalEvent.offsetX
        let mausY = e.originalEvent.offsetY
        mouseMotion(mausX, mausY)
    })//mousemove, bind

    function mouseMotion(x, y) {
        let centerX = $(this).innerWidth() * 0.5
        let centerY = $(this).innerHeight() * 0.5
        let diffX = x - centerX
        let diffY = y - centerY
        let metaScale1 = 2 + diffX * 0.0001
        if (metaScale1 < 1) metaScale1 = 1
        $('.visual .bg img').css({ 'transform': `scale(${metaScale1})` })
        let metaScale2 = 1 + diffX * 0.0001
        $('.visual .bg-bottom1').css({ 'transform': `scaleY(${metaScale2})` })
        let rotateX = diffX * 0.01
        let rotateY = - diffY * 0.01
        $('.visual .dancer').css({ 'transform': `translate(-50%, -50%) rotateX(${rotateX}deg) rotateY(${rotateY}deg)` })
    }//function_mouseMotion
}