const app = require('./app')
const path = require('path')
const fs = require('fs')
const axios= require('axios')

const directory = path.join('/', 'app', 'files')
const pathTologs = path.join(directory, 'logs.txt')

const getPongs = async() => {
  let pong = 0
  try {
    pong = await axios.get('http://pingpong-svc/pingpong')
  } catch (error) {
    console.log(error)
  }
  return pong
}

app.get('/', async (requst, response) => {
  const stringToSend = fs.readFileSync(pathTologs, 'utf-8')
  let pongs = await getPongs()
  response.send(`${stringToSend} \r\n Ping / Pongs: ${pongs}`)
})

const PORT = process.env.PORT || 3003
app.listen(PORT, () => {
  console.log(`Server started in port ${PORT}`)
})