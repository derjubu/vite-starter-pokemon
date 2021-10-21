import { createElement } from '../lib/dom.js'
import './Example.css'

export default function Example() {
  const el = createElement('section', {
    className: 'Example',
    innerText: 'This is an example',
  })

  return el
}
