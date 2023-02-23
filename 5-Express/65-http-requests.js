const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:true}))

app.use('/add-product',(req,res,next) =>{
    res.send('<form action="/product" method="POST"><input type="text" name="title" ><button type="submit">Product</button></form>');
})

// this is get reqeust 
app.get('/product',(req,res,next)=>{
    console.log("GET PRODUCT REQUEST");
    res.send("<h1>GET PRODUCTS</h1>")
})

// this is post reqeust 
app.post('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
})

app.use('/',(req,res,next)=>{
    res.send('<h1>Hello from Express!</h1>')
})

app.listen(3000)