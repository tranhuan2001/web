

// 1. Là 1 định dạng dữ liệu (chuỗi)
// 2. Javascript Object Notation
// 3. JSON: number, string, boolean, NULL, array, object

// Mã hóa / Giải mã
// Stringify: từ Javascript types -> JSON
// Prase: từ JSON -> Javascript types

var json = '["Javascript", "PHP"]'
console.log(JSON.parse(json))

var json2 = [
   'Javascript',
   'PHP'
]
console.log(JSON.stringify(json2))