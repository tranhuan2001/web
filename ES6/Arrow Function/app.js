
// Arrow function

// function () === () => 
const logger = (log) => {
   console.log(log)
}
logger(`Message...`)

const sum = (a, b) => {
   return a + b
}
console.log(sum(1, 2))

// Ngắn gọn hơn
const sum2 = (a, b) => a + b // sau dấu => sẽ tự hiểu là return trừ dấu {}
console.log(sum2(1, 2))

// Trường hợp muốn return 1 object thì cần thêm dấu ()
const sum3 = (a, b) => ({a: a, b: b})
console.log(sum3(1, 2))