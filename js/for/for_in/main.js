var myInfo = {
   name: 'panda',
   age: 20,
   address: 'Hai Duong'
}

for (var key in myInfo) {
   console.log(myInfo[key])
}

var courses = [
   'Javascript',
   'PHP',
   'Ruby'
]

for (var index in courses) {
   console.log(courses[index])
}