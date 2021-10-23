import { createElement } from '../lib/dom.js'
import './Card.css'

export default function Card({ image, name, id, type }) {
  const el = createElement('section', {
    className: 'Card',
    innerHTML: `<li class="card"><img src="${image}" alt="${name}" width="96" height="96">
    This is ${name}, it is the Pokemon with the ID ${id}. It has the types ${type}</li>`,
  })

  return el
}
