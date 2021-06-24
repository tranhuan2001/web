// Polyfill: là cách tạo ra các điều kiện để chạy code trên các trình duyệt cũ không hỗ trợ phương thức được sử dụng
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes

if (!String.prototype.includes) {
   String.prototype.includes = function(search, start) {
      'use strict'

      if (search instanceof RegExp) {
         throw TypeError('first argument must not be a RegExp');
      }
      if (start === undefined) { start = 0 }
      return this.indexOf(search, start) !== -1
   }
}