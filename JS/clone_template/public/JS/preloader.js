document.querySelector('.preloader').addEventListener('mousewheel', e => {
    e.stopPropagation();/* === return false */
})//mousewheel

$(window).load(function () {
    $('.preloader').fadeOut()
})//load
