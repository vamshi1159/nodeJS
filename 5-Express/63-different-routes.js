const http = require('http');

const express = require('express');

const app = express();

app.use("/add-product",(req,res,next)=>{
    console.log("In add product middle ware");
    res.send("<h1>The 'Add Product' </h1>");
})
app.use("/",(req,res,next)=>{
    //if next is not called in the previous use ... this won't invoke
    console.log("In the another");
    res.send("<h1>Hello worlld from Express</h1>")
});
const server = http.createServer(app);

server.listen(3000);