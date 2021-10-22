import { createElement } from '../lib/dom.js'
import './Card.css'

export default function Card({ name, id, image }) {
  const el = createElement('section', {
    className: 'Card',
    innerHTML: `<img src="${image}" alt="${name}" width="96" height="96">
    This is ${name}, it is the Pokemon with the ID ${id}. It has the types `,
  })

  return el
}
