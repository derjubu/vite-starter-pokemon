import './Navigation.css'

export default function Navigation(onClick) {
  const el = document.createElement('nav')
  el.className = 'Navigation'
  el.innerHTML = `
    <button class="Navigation__button Navigation__button--active">Home</button>
    <button class="Navigation__button">About</button>
    <button class="Navigation__button">Something</button>
  `
  const buttons = el.querySelectorAll('button')
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      onClick(button.innerText.toLowerCase())
      activateButton(button)
    })
  })

  function activateButton(selectedButton) {
    buttons.forEach(button =>
      button.classList.toggle(
        'Navigation__button--active',
        selectedButton === button
      )
    )
  }
  return el
}
