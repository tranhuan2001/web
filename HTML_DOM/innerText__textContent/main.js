var headingElement = document.querySelector('.heading')

console.log(headingElement.innerText) // innerText trả về những gì nhìn thấy
headingElement.innerText = 'New heading'
headingElement.innerText = `

New heading

`

console.log(headingElement.textContent) // textContent trả về những gì trong file HTML
// headingElement.textContent = 'New heading'
// headingElement.textContent = `

// New heading

// `

// Note: Mở cmt để check

// innerHTML, outerHTML
var boxElement = document.querySelector('.box')

// innerHTML: ghi sau Element
boxElement.innerHTML = '<h1>Heading New Box</h1>'
// outerHTML: ghi đè
// boxElement.outerHTML = '<h1>Heading New Box</h1>'