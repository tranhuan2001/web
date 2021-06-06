
// DOM events example

// 1. Input / select
// 2. Key up / down

// input
var inputTextValue;

var inputElementText = document.querySelector('input[type="text"]')

inputElementText.onchange = function(e) {
   console.log(e.target.value)
}

// inputElementText.oninput = function(e) {
//    inputTextValue = e.target.value
//    console.log(e.target.value)
// }

var inputElementCheckbox = document.querySelector('input[type="checkbox"]')

inputElementCheckbox.onchange = function(e) {
   console.log(e.target.checked)
}

// select
var selectElements = document.querySelector('select')
selectElements.onchange = function(e) {
   console.log(e.target.value)
}

// keyup: thực thi sau khi rời tay khỏi phím trên bàn phím
inputElementText.onkeyup = function(e) {
   console.log(e.which)
   switch(e.which) {
      case 27:
         console.log('EXIT')
         break
      case 13:
         console.log('SEND CHAT')
         break
   }
}
// keydown: thực thi ngay khi nhấn phím