import { createElement } from '../lib/dom.js'
import './Card.css'
import { getByDataJs } from '../lib/dom.js'

export default function Card({
  image,
  name,
  hp,
  type,
  height,
  weight,
  imageShiny,
}) {
  const el = createElement('li', {
    className: 'Card card--basic',
    innerHTML: `
    <img data-js="imageRegular" class="card-image" src="${image}" alt="${name}" width="96" height="96">
    <img data-js="imageShiny" class="card-image hidden" src="${imageShiny}" alt="${name}" width="96" height="96">
    <span class="card-name">${name}</span>
    <span>HP: ${hp}</span>
    <span class="card-types">Types: ${type}</span>
    <span>Heigth: ${height}</span>
    <span>Weigth: ${weight}</span>
    <button class="card__button-shine" data-js="buttonShiny">Make it shine</button>`,
  })
  const imageRegular = getByDataJs('imageRegular', el)
  const imageShine = getByDataJs('imageShiny', el)
  const button = getByDataJs('buttonShiny', el)
  console.log(imageRegular)
  button.addEventListener('click', () => {
    imageRegular.classList.toggle('hidden')
    imageShine.classList.toggle('hidden')
  })

  return el
}
