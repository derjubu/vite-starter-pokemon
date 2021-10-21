export function getElement(selector, target = document) {
  return target.querySelector(selector)
}

export function getAllElements(selector, target = document) {
  return target.querySelectorAll(selector)
}

export function getDataJs(dataJs, target = document) {
  return target.querySelector('[data-js=' + dataJs + ']')
}

export function getAllDataJs(dataJs, target = document) {
  return target.querySelectorAll('[data-js=' + dataJs + ']')
}

export function createElement(elementType, props, ...children) {
  const element = document.createElement(elementType)
  if (props) {
    Object.assign(element, props)
  }
  if (children) {
    element.append(...children)
  }
  return element
}
