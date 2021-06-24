// Giới thiệu về Set
var array = ['a', 'b', 'c', 'a', 'b', 'c', 'a', 'b']
console.log([...(new Set(array))])

// => Trả về 1 object với các phần tử chỉ tồn tại 1 lần
