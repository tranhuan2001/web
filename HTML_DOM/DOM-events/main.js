
// DOM events
// 1. Attribute events
// 2. Assign event using the element node

var pElement = document.querySelector('p')

pElement.onclick = function() {
   console.log(Math.random())
}

var h3Element = document.querySelectorAll('h3')

for (var i = 0; i < h3Element.length; ++i) {
   h3Element[i].onclick = function(event) {
      console.log(event.target)
   }
}