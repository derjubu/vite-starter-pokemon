import './styles/index.css'
import { getBySelector } from './lib/dom.js'
import Example from './components/Example'

const example = Example('Vite Starter')

getBySelector('#app').append(example)
