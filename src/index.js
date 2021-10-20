import Navigation from './components/Navigation'
import './index.css'

const nav = Navigation(onNavigate)

function onNavigate(page) {
  console.log(page)
}

document.body.append(nav)
