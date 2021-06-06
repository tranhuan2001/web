
// ClassList property

// add
// contains
// remove
// toggle

var boxElement = document.querySelector('.box')

console.log(boxElement.classList)

console.log(boxElement.classList[0])
console.log(boxElement.classList[1])
console.log(boxElement.classList[2])

console.log(boxElement.classList.length)

console.log(boxElement.classList.value)

// add
boxElement.classList.add('aqua', 'black-background')

// contains: kiểm tra class có tồn tại trong element hay ko
console.log(boxElement.classList.contains('aqua'))
console.log(boxElement.classList.contains('red'))

// remove
setTimeout(() => {
   boxElement.classList.remove('black-background')
}, 3000)

// toggle
setInterval(() => {
   boxElement.classList.toggle('black-background')
}, 1000)