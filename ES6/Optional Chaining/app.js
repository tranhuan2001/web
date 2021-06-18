
// Optional chaining (?.): sử dụng khi không chắc chắn đối tượng có tồn tại hay ko

var course = {
   name: 'PHP',
   children: {
      name: 'Javascript',
      children2: {
         name: 'Ruby',
         children3: {
            name: 'ReactJS'
         }
      } 
   }
}

if (course?.children?.children2?.children3) {
   console.log(course.children.children2.children3.name)
}
