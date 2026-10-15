/**
 * You have the first image of the frame, and the array of image filenames.
 *
 * Can you turn it into a gif ?
 */

function gifMaker () {
  const images = [
    'img/0.png',
    'img/1.png',
    'img/2.png',
    'img/3.png',
    'img/4.png',
    'img/5.png'
  ]

  const img = document.querySelector('img')
  let current = 0

  setInterval(() => {
    current = (current + 1) % images.length
    img.src = images[current]
  }, 3000)
}

document.addEventListener('DOMContentLoaded', gifMaker)
