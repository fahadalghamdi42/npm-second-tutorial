const names = require('./names')
const sayHi = require('./sayhi')

sayHi(names.john)
sayHi(names.peter)

const os = require('os')

const user = os.userInfo()
console.log(user)

console.log(`The system UpTime is ${os.uptime()} seconds`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS);

const path = require('path')

const filePath = path.join('content', 'subfolder', 'text.txt')
console.log(`This is the file path: ${filePath}`);

const base = path.basename(filePath)
console.log(`This is the base name of the file path: ${base}`);

const absolute = path.resolve(__dirname, filePath)
console.log(`This is the absolute file path: ${absolute}`);

const fs = require('fs')

const first = fs.readFileSync('./content/first.txt', 'utf8')
const second = fs.readFileSync('./content/second.txt', 'utf8')
console.log(first, second);

fs.writeFileSync('./content/result-sync.txt', `The result is: ${first}, ${second}`)

const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Wlecome to our homepage')
    }
    if (req.url === '/about') {
        res.end('This is a short about page')
    }
    res.end(`
        <h1>Something went wrong </h1> 
        <a href = "/">Back to homepage </a>
        `      
        )
})

server.listen(5000)