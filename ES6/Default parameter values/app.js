
// Default parameter values

// đặt giá trị mặc định cho biến

// E5
function logger1(log) {
   if (typeof log == 'undefined') {
      log = 'Default value'
   }
   console.log(log)
}
logger1()
logger1('Message...')

// ES6
function logger2(log = 'Default value') {
   console.log(log)
}
logger2()
logger2('Message...')

function logger3(log, isAlert = false) {
   if (isAlert) return alert(log)
   console.log(log)
}
logger3('Message...')
logger3('Message...', true)

function logger4(log, type = 'log') {
   console[type](log)
}
logger4('Message...')
logger4('Message...', 'error')
logger4('Message...', 'warn')