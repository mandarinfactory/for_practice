window.addEventListener('mousemove', () => {
  document.querySelector('.cursor').style.left = `${window.clientX}px`
  document.querySelector('.cursor').style.top = `${window.clientY}px`
})

document.querySelectorAll('a,button').forEach(v => {
  v.addEventListener('mouseenter', () => {
    document.querySelector('.cursor').classList.add('hover')
  })
  v.addEventListener('mouseleave', () => {
    document.querySelector('.cursor').classList.remove('hover')
  })
  v.addEventListener('mousedown', () => {
    document.querySelector('.cursor').classList.add('active')
  })
})

document.addEventListener('mouseup', () => {
  document.querySelector('.cursor').classList.remove('active')
})

document.addEventListener('mouseleave', () => {
  document.querySelector('.cursor').style.display = 'none'
})

document.addEventListener('mouseenter', () => {
  document.querySelector('.cursor').style.display = 'block'
})
