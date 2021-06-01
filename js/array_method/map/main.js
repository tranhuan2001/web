var courses = [
   'Javascript',
   'PHP',
   'Ruby'
]

var htmls = courses.map(function(course) {
   return `<h2>${course}</h2>`
})

console.log(htmls.join('\n'))

Array.prototype.map2 = function(callback) {
   var arrayLength = this.length
   var output = []
   for (var i = 0; i < arrayLength; ++i) {
      var result = callback(this[i], i)
      output.push(result)
   }
   return output
}

var htmls2 = courses.map2(function(course) {
   return `<h2>${course}</h2>`
})

console.log(htmls2.join('\n'))