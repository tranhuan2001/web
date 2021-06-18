
// Tagged template literals
function highLight([first, ...strings], ...values) {
   return values.reduce((previousValue, currentValue) => [...previousValue, `<span>${currentValue}</span>`, strings.shift()], [first]).join('')
}

var band = 'F8'
var course = 'Javascript'

const html = highLight`Học lập trình ${course} tại ${band}!`
console.log(html)