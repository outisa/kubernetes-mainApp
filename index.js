const app = require('./app')

const generateHash = () => { 
  const hash1 =  Math.random().toString(32).substring(2);
  const hash2 =  Math.random().toString(36).substring(2);
  const hash3 =  Math.random().toString(12).substring(2);
  
  return `${hash1}-${hash2}-${hash3}`;
};

let string = generateHash()
app.get('/', (requst, response) => {
  let date = `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}T${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}:${new Date().getMilliseconds()}Z`;
  const stringToSend = `${date}: ${string}`
  response.send(stringToSend)
})

setInterval(() => {
  let date = `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}T${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}:${new Date().getMilliseconds()}Z`;
  const stringToSend = `${date}: ${string}`
  console.log(stringToSend)
}, 5000);
const PORT = 3003
app.listen(PORT, () => {
  console.log(`Server started in port ${PORT}`)
})