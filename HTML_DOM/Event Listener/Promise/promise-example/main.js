
// promise example
var users = [
   {
      id: 1,
      name: 'Huan Tran'
   },
   {
      id: 2,
      name: 'Huan Panda'
   },
   {
      id: 3,
      name: 'Tran Huan'
   }
   //...
]

var comments = [
   {
      id: 1,
      userId: 1,
      content: 'Binh luan 1'
   },
   {
      id: 2,
      userId: 2,
      content: 'Binh luan 2'
   },
   {
      id: 3,
      userId: 1,
      content: 'Binh luan 3'
   }
]

// step: Lấy comment -> userId -> user tương ứng

// Fake API
function getComments() {
   return new Promise(function(resolve, reject) {
      setTimeout(function() {
         resolve(comments)
      }, 1000)
   })
}

function getUsersById(userIds) {
   return new Promise(function(resolve, reject) {
      var result = users.filter(function(user) {
         return userIds.includes(user.id)
      })
      setTimeout(function() {
         resolve(result)
      }, 1000)
   })
}

getComments()
   .then(function(comments) {
      var userIds = comments.map(function(comments) {
         return comments.userId
      })
      return getUsersById(userIds)
         .then(function(users) {
            return {
               users: users,
               comments: comments
            }
         })
   })
   .then(function(data) {
      var commentBlock = document.getElementById('comment-block')
      var html = ''
      data.comments.forEach(function(comment) {
         var user = data.users.find(function(user) {
            return user.id === comment.userId
         })
         html += `<li>${user.name}: ${comment.content}</li>`
      })
      commentBlock.innerHTML = html
   })

