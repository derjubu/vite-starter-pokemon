import { createElement } from '../lib/dom.js'
import './Card.css'

export default function Card({ image, name, hp, type, height, weight }) {
  const el = createElement('section', {
    className: 'Card',
    innerHTML: `<li class="card">
    <img class="card-image" src="${image}" alt="${name}" width="96" height="96">
    <span class="card-name">${name}</span>
    <span>HP: ${hp}</span>
    <span>Types: ${type}</span>
    <span>Heigth: ${height}</span>
    <span>Weigth: ${weight}</span>
    </li>`,
  })

  return el
}
