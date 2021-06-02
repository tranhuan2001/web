var languages = [
   'Javascript',
   'PHP',
   'Ruby'
]

for (var value of languages) {
   console.log(value)
}

var language = 'Javascript'

for (var value of language) {
   console.log(value)
}

var myInfo = {
   name: 'Panda',
   age: 20
}

// trả về key
console.log(Object.keys(myInfo))
for (var value of Object.keys(myInfo)) {
   console.log(myInfo[value])
}

// trả về mảng giá trị
console.log(Object.values(myInfo))
for (var value of Object.values(myInfo)) {
   console.log(value)
}