const tarjeta = document.querySelector('.tarjeta')
const tarjetaTitulo = document.querySelector('.tarjeta__titulo')
const imagenUno = document.querySelector('.tarjeta__imagen-1')
const imagenDos = document.querySelector('.tarjeta__imagen-2')
const imagenTres = document.querySelector('.tarjeta__imagen-3')
const botonSi = document.querySelector('.btn-si')
const botonNo = document.querySelector('.btn-no')

function remove() {
  botonSi.classList.add('hide')
  botonNo.classList.add('hide')
  imagenUno.classList.add('hide')
}

function corazones() {
  const elemento = document.createElement('div')
  elemento.classList.add('corazones')
  elemento.innerHTML = '🍆'

  elemento.style.left = Math.random() * 100 + 'vw'
  elemento.style.animationDuration = Math.random() * 3 + 2 + 's'

  tarjeta.appendChild(elemento)
}

setInterval(corazones, 1000)

botonNo.addEventListener('click', (e) => {
  tarjetaTitulo.innerHTML = 'Ok'

  const mensaje = document.createElement('div')
  mensaje.classList.add('mensaje')
  mensaje.innerHTML = 'Te gusta el pene <br>Sida para tu Dayanita:('
  tarjeta.appendChild(mensaje)

  remove()
  imagenTres.classList.remove('hide')
})

botonSi.addEventListener('click', (e) => {
  tarjetaTitulo.innerHTML = 'JAJAJA'
  const mensaje = document.createElement('div')
  mensaje.classList.add('mensaje')
  mensaje.innerHTML = 'Ya sabia, quien no me ama? <br>Toma más propina'
  tarjeta.appendChild(mensaje)

  remove()
  imagenDos.classList.remove('hide')
})
