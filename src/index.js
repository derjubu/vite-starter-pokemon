import Card from './components/Card'
import { getBySelector } from './lib/dom'
import './styles/index.css'

const url = 'https://pokeapi.co/api/v2/pokemon?limit=10'

fetch(url)
  .then(res => res.json())
  .then(data => {
    data.results.forEach(({ url }) => {
      fetch(url)
        .then(res => res.json())
        .then(pokemon => renderCards(pokemon))
    })
  })

function renderCards(data) {
  const container = getBySelector('#app')
  const card = Card({
    name: data.name,
    id: data.id,
    image: data.sprites.front_default,
  })
  console.log(data.name, data.id)
  container.append(card)
}
