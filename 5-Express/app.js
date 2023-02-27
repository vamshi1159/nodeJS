const http = require('http');

const express = require('express');

const app = express()

app.use((req,res,next)=>{
    console.log("In middleware")
    next(); //allows the request ot continue to the next middleware in line
})

app.use((req,res,next)=>{
    //if next is not called in the previous use ... this won't invoke
    console.log("In the another");
    res.send("<h1>Hello worlld from Express</h1>")
})
const server = http.createServer(app);

server.listen(3000);