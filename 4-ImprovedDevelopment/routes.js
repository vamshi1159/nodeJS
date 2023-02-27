const http = require('http')

const server = http.createServer((req,res)=>{
    res.write("<html><body><h1>Hello world!!!</h1></body></html>");
    res.end();
})
server.listen(3000)