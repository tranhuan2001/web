
// fetch example

var courseApi = 'http://localhost:3000/courses'

function start() {
   // getCourses(function(courses) {
   //    renderCourses(courses)
   // })
   getCourses(renderCourses)
   handleCreateForm()
}
start()

// functions
function getCourses(callback) {
   fetch(courseApi)
      .then(function(response) {
         return response.json()
      })
      .then(callback)
}

function renderCourses(courses) {
   var listCoursesBlock = document.querySelector('#courses__list')
   var htmls = courses.map(function(course) {
      return `
         <li class="courses__item-${course.id}">
            <h4>${course.name}</h4>
            <p>${course.description}</p>
            <button onclick="handleDeleteCourse(${course.id})">DELETE</button>
            <button onclick="handlePutCourse(${course.id})">UPDATE</button>
         </li>
      `
   })
   listCoursesBlock.innerHTML = htmls.join('')
}

function createCourse(data, callback) {
   var options = {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json'
         // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data)
   }
   fetch(courseApi, options)
      .then(function(response) {
         return response.json()
      })
      .then(callback)
}

function handleCreateForm() {
   var createCourseBtn = document.querySelector('#create-course__btn')
   createCourseBtn.onclick = function() {
      var courseName = document.querySelector('input[name=name]').value
      var courseDescription = document.querySelector('input[name=description]').value
      
      var formData = {
         name: courseName,
         description: courseDescription
      }

      createCourse(formData, function() {
         getCourses(renderCourses)
      })
   }
}

function handleDeleteCourse(id) {
   var options = {
      method: 'DELETE',
      headers: {
         'Content-Type': 'application/json'
      }
   }
   fetch(courseApi + '/' + id, options)
      .then(function(response) {
         return response.json()
      })
      .then(function() {
         // getCourses(renderCourses) // note: hạn chế call lại API
         var courseItem = document.querySelector('.courses__item-' + id)
         if (courseItem) {
            courseItem.remove()
         }
      })
}

function putCourse(data, id, callback) {
   var options = {
      method: 'PUT',
      headers: {
         'Content-Type': 'application/json'
         // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data)
   }
   fetch(courseApi + '/' + id, options)
      .then(function(response) {
         return response.json()
      })
      .then(callback)
}

function handlePutCourse(id) {
   var createCourseBtn = document.querySelector('#create-course__btn')
   createCourseBtn.style.display = "none"
   var updateCourseBtn = document.querySelector('#update-course__btn')
   updateCourseBtn.style.display = "block"
   
   var courseItem = document.querySelector('.courses__item-' + id)
   var nameItem = courseItem.getElementsByTagName('h4')
   var descriptionItem = courseItem.getElementsByTagName('p')

   var courseName = document.querySelector('input[name=name]')
   var courseDescription = document.querySelector('input[name=description]')

   courseName.value = nameItem[0].innerText
   courseDescription.value = descriptionItem[0].innerText

   updateCourseBtn.onclick = function() {
      var formData = {
         name: courseName.value,
         description: courseDescription.value
      }
      putCourse(formData, id, function () {
         createCourseBtn.style.display = "block"
         updateCourseBtn.style.display = "none"
         nameItem.innerHTML = courseName.value
         descriptionItem.innerHTML = courseDescription.value
      })
   }
}