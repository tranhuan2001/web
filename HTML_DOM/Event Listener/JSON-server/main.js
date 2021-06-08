
// JSON sever: Fake ra API
var coursesApi = 'http://localhost:3000/courses'
fetch(coursesApi)
   .then(function(response) {
      return response.json()
   })
   .then(function(data) {
      console.log(data)
   })