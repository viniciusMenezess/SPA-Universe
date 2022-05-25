export function Events() {
  const buttonHome = document.querySelector('.buttonHome')
  const buttonUniverse = document.querySelector('.buttonUniverse')
  const buttonExploration = document.querySelector('.buttonExploration')

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
