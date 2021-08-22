function openMenu(){
  var menu = document.querySelector('.nav');
  var open = menu.animate([
    { transform: 'translate( 0, 0 )' },
    { transform: 'translate ( 280px, 0)' }
  ], 500)

  open.addEventListener( 'finish', function () {
    menu.style.transform = 'translate(280px, 0 )'
  })
}

function closeMenu(){
  var menu = document.querySelector('.nav');
  var close = menu.animate([
    { transform: 'translate(0, 0 )'}], 500)

  close.addEventListener('finish', function() {
    menu.style.transform = 'translate(0,0)'
  } )
}