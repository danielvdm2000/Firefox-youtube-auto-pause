const isVideoPlaying = video => Boolean(video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2)
const disableClick = (...elements) => elements.forEach(element => element.style.pointerEvents = 'none')
const enableClick = (...elements) => elements.forEach(element => element.style.pointerEvents = '') 

const video = document.querySelector('.html5-main-video')
const playButton = document.querySelector('.ytp-play-button')

let isAutoPaused = false

window.addEventListener('blur', () => {
  isAutoPaused = isVideoPlaying(video)
  if (isAutoPaused) {
      video.pause()
      disableClick(video, playButton)
  }
})

window.addEventListener('focus', () => {
  if (isAutoPaused) {
    video.play()
    setTimeout(() => enableClick(video, playButton), 100)
  }
})