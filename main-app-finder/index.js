const app = require('./app')
const path = require('path')
const fs = require('fs')

const directory = path.join('/', 'app', 'files')
const pathTologs = path.join(directory, 'logs.txt')
const directoryPongs = path.join('/', 'app', 'pongs')
const pathTopPongs = path.join(directoryPongs, 'pongs.txt')

app.get('/', (requst, response) => {
  const stringToSend = fs.readFileSync(pathTologs, 'utf-8')
  const pongs = fs.readFileSync(pathTopPongs, 'utf-8')
  response.send(`${stringToSend} \r\n Ping / Pongs: ${pongs}`)
})

const PORT = process.env.PORT || 3003
app.listen(PORT, () => {
  console.log(`Server started in port ${PORT}`)
})