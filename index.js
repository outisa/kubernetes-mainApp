const generateHash = () => {
  const date = `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}T${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}:${new Date().getMilliseconds()}Z`;
  const hash1 =  Math.random().toString(32).substring(2);
  const hash2 =  Math.random().toString(36).substring(2);
  const hash3 =  Math.random().toString(12).substring(2);
  
  return `${date}: ${hash1}-${hash2}-${hash3}`;
};

const string = generateHash();

setInterval(() => {
  console.log(string);
}, 5000);