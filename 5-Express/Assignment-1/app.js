const express = require('express');

const app = express();

app.use("/",(req,res,next)=>{
    console.log("This always runs!!!")
    next();
})
app.use("/users",(req,res,next)=>{
    console.log("In / middleware");
    res.send("<h1>Hello /users</h1>")
})

app.use("/",(req,res,next)=>{
    console.log("In /users middleware");
    // process.exit()
    res.send("<h1>Hello /</h1>")
});



app.listen(3000);
