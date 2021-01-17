const app = require('./app')
const path = require('path')
const fs = require('fs')

const directory = path.join('/', 'app', 'files')
const pathToFile = path.join(directory, 'logs.txt')

const generateHash = () => { 
  const hash1 =  Math.random().toString(32).substring(2)
  const hash2 =  Math.random().toString(36).substring(2)
  const hash3 =  Math.random().toString(12).substring(2)
  
  return `${hash1}-${hash2}-${hash3}`
};

let string = generateHash()

setInterval(() => {
  let date = `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}T${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}:${new Date().getMilliseconds()}Z`;
  const stringToSend = `${date}: ${string}`
  console.log(stringToSend)
  fs.appendFile(pathToFile, stringToSend)
}, 5000)

const PORT = process.env.PORT || 3003
app.listen(PORT, () => {
  console.log(`Server started in port ${PORT}`)
})