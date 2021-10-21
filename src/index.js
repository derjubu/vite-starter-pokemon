import './styles/index.css'
import { getElement } from './lib/dom.js'

const appContainer = getElement('#app')
appContainer.innerText = 'Vite Starter'
