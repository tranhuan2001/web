
// 1. Event Listener
// 2. JSON
// 3. Promise
// 4. Fetch
// 5. DOM location
// 6. Local storage
// 7. Session storage
// 8. Coding convention
// 9. Best practices
// 10. Mistakes
// 11. Performance

// 1. Xử lý nhiều việc khi event xảy ra
// 2. Lắng nghe / hủy bỏ lắng nghe

var btnElement = document.querySelector('.btn')

function viec1() {
   console.log('viec 1')
}

function viec2() {
   console.log('viec 2')
}

btnElement.addEventListener('click', viec1)
btnElement.addEventListener('click', viec2)

setTimeout(function() {
   btnElement.removeEventListener('click', viec1)
}, 3000)