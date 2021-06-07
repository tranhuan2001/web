
// Fetch: Lấy dữ liệu qua API

// API (URL): Application programing interface
// cổng giao tiếp giữa các phần mềm

// Back-end -> API -> fetch -> JSON/XML -> JSON.parse -> Javascript types -> Render ra giao diện với HTML

var posts = 'https://jsonplaceholder.typicode.com/posts'

fetch(posts)
   .then(function(response) {
      return response.json()
      // JSON -> Javascript types
   })
   .then(function(post) {
      var htmls = post.map(function(post) {
         return `<li>
            <h2>${post.title}</h2>
            <p>${post.body}</p>
         </li>`
      })
      var html = htmls.join('')
      document.getElementById('post-block').innerHTML = html
   })