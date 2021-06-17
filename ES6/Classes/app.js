
// Classes

function course(name, price) {
   this.name = name
   this.price = price
}
const jsCourse = new course('Javascript', 1000)
console.log(jsCourse)

class course2 {
   constructor(name, price) {
      this.name = name
      this.price = price
   }
}
const phpCourse = new course2('PHP', 1500)
console.log(phpCourse)