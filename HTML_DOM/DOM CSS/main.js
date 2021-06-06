// DOM Style

var boxElement = document.querySelector('.box')

boxElement.style.width = '200px'
boxElement.style.height = '100px'
boxElement.style.backgroundColor = 'aqua'

// Object.assign()
Object.assign(boxElement.style, {
   with: '200px',
   height: '100px',
   backgroundColor: 'blue'
})

console.log(boxElement.style)