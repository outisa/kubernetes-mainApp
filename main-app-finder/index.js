const app = require('./app')
const path = require('path')
const fs = require('fs')

const directory = path.join('/', 'app', 'files')
const pathToFile = path.join(directory, 'logs.txt')

app.get('/', (requst, response) => {
  const stringsToSend = fs.readFileSync(pathToFile, 'utf-8')
  console.log(stringsToSend) 
  response.send(stringsToSend)
})

const PORT = process.env.PORT || 3003
app.listen(PORT, () => {
  console.log(`Server started in port ${PORT}`)
})