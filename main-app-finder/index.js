const app = require('./app')
const path = require('path')
const fs = require('fs')
const axios= require('axios')

const directory = path.join('/', 'app', 'files')
const pathTologs = path.join(directory, 'logs.txt')

const getPongs = async() => {
  try {
    pong = await axios.get('http://pingpong-svc/pingpong')
    console.log(pong.data.counts)
    return pong.data.counts
  } catch (error) {
    console.log(error)
  }
}

app.get('/', async (requst, response) => {
  const stringToSend = fs.readFileSync(pathTologs, 'utf-8')
  let pongs = await getPongs()
  const message = process.env.MESSAGE

  response.send(`<div><p>${message}</p><p>${stringToSend}.</p><p>Ping / Pongs: ${pongs}</p></div>`)
})

const PORT = process.env.PORT || 3003
app.listen(PORT, () => {
  console.log(`Server started in port ${PORT}`)
})