
// JSON sever: Fake ra API
// CRUD: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
//    - Create: tạo mới -> POST
//    - Read: lấy dữ liệu -> GET
//    - Update: cập nhật -> PUT / PATCH
//    - Delete: xóa -> DELETE
// Postman
var coursesApi = 'http://localhost:3000/courses'
fetch(coursesApi)
   .then(function(response) {
      return response.json()
   })
   .then(function(data) {
      console.log(data)
   })