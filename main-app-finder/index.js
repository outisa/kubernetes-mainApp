const app = require('./app')
const path = require('path')
const fs = require('fs')
const axios= require('axios')

const directory = path.join('/', 'app', 'files')
const pathTologs = path.join(directory, 'logs.txt')

app.get('/healthz', async (requst, response) =>{
  try {
    await axios.get('http://pingpong-svc/pingpong')
    response.sendStatus(200).end()
  } catch (error) {
    console.log(error)
    response.sendStatus(500).end()
  }

})

app.get('/', async (requst, response) => {
  const stringToSend = fs.readFileSync(pathTologs, 'utf-8')
  let pongs = 0  
  try {
    pong = await axios.get('http://pingpong-svc/pingpong')
    console.log(pong.data.counts)
    pongs = pong.data.counts
  } catch (error) {
    console.log(error)
  }
  const message = process.env.MESSAGE

  response.send(`<div><p>${message}</p><p>${stringToSend}.</p><p>Ping / Pongs: ${pongs}</p></div>`)
})

const PORT = process.env.PORT || 3003
app.listen(PORT, () => {
  console.log(`Server started in port ${PORT}`)
})