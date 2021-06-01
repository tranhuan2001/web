/* 
Một số hàm built-in
   1. alert
   2. console
   3. confirm
   4. prompt
   5. setTimeout
   6. setInterval
*/
var fullName = 'TDH';

alert('Javascript basic');
console.log(fullName);
console.error(fullName);
console.warn(fullName);
confirm(fullName);
prompt(fullName);

setTimeout(function() {
   console.log(fullName);
}, 2000) // sau 2s hien thong bao

setInterval(function() {
   console.log(fullName + Math.random);
}, 1000) // cu sau 1s tu dong chay code, lien tuc