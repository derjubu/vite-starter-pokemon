import { createElement } from '../lib/dom.js'
import './Card.css'
import { getByDataJs } from '../lib/dom.js'
import { fetchPokemon } from '../lib/api.js'

export default async function Card({
  image,
  name,
  id,
  hp,
  type,
  height,
  weight,
  imageShiny,
}) {
  /*fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
    .then(result => result.json())
    .then(data => findPredecessor(data))*/
  const data = await fetchPokemon(id)

  function findPredecessor(data) {
    if (data.evolves_from_species !== null) {
      const predecessorName = data.evolves_from_species.name
      buttonPredecessor.classList.remove('hidden')
      buttonPredecessor.addEventListener('click', () => {
        window.location = `#${predecessorName}`
      })
    }
  }

  const el = createElement('li', {
    className: 'Card card--basic',
    id: `${name}`,
    innerHTML: `
    <img data-js="imageRegular" class="card-image" src="${image}" alt="${name}" width="96" height="96">
    <img data-js="imageShiny" class="card-image hidden" src="${imageShiny}" alt="${name}" width="96" height="96">
    <span class="card-name">${name}</span>
    <span>HP: ${hp}</span>
    <span class="card-types">Types: ${type}</span>
    <span>Heigth: ${height}</span>
    <span>Weigth: ${weight}</span>
    <button class="card__button" data-js="buttonShiny">Make it shine</button>
    <button class="card__button hidden" data-js="buttonPredecessor">Evolved from</button>`,
  })
  const imageRegular = getByDataJs('imageRegular', el)
  const imageShine = getByDataJs('imageShiny', el)
  const buttonShine = getByDataJs('buttonShiny', el)
  const buttonPredecessor = getByDataJs('buttonPredecessor', el)
  findPredecessor(data)
  buttonShine.addEventListener('click', () => {
    imageRegular.classList.toggle('hidden')
    imageShine.classList.toggle('hidden')
  })

  return el
}
