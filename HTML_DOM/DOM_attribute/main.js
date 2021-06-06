// DOM attribute

// var headingElement = document.getElementsByTagName('h1')

// console.log(headingElement)

// headingElement[0].id = 'heading'

var headingElement = document.querySelector('h1')

headingElement.className = 'heading'

headingElement.setAttribute('data', 'heading-data')

console.log(headingElement.getAttribute('data'))