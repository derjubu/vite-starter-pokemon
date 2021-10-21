import './styles/index.css'
import { getBySelector } from './lib/dom.js'

const appContainer = getBySelector('#app')
appContainer.innerText = 'Vite Starter'
