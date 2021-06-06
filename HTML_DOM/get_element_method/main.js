// HTML DOM

/* 
1. Element: id, class, tag name, CSS selector, HTML collection
2. Attribute
3. Text
*/

// id
var headingNodeId = document.getElementById('heading')
console.log(headingNodeId)

// class
var headingNodesClassName = document.getElementsByClassName('heading')
console.log(headingNodesClassName)

// tag name
var headingNodesTagName = document.getElementsByTagName('h1')
console.log(headingNodesTagName)

// CSS selector
var headingNodeCssSelector = document.querySelector('.box .heading-2')
console.log(headingNodeCssSelector)

var headingNodeCssSelectors = document.querySelectorAll('.heading-2')
console.log(headingNodeCssSelectors)

// HTML collection
console.log(document.forms)
console.log(document.forms['form-1'])
console.log(document.forms.testForm)

// document.write(): ít được sử dụng