import { buttonHome, buttonUniverse, buttonExploration } from './elements.js'
export function Events() {
  buttonHome.addEventListener('click', () => {
    buttonHome.classList.add('active')
    buttonUniverse.classList.remove('active')
    buttonExploration.classList.remove('active')
  })

  buttonUniverse.addEventListener('click', () => {
    buttonHome.classList.remove('active')
    buttonUniverse.classList.add('active')
    buttonExploration.classList.remove('active')
  })

  buttonExploration.addEventListener('click', () => {
    buttonHome.classList.remove('active')
    buttonUniverse.classList.remove('active')
    buttonExploration.classList.add('active')
  })
}
