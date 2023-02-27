const path = require('path');

const express = require('express');

const bodyParser = require('body-parser');

const expressHbs = require('express-handlebars');



const rootDir = require('./util/path');

const admin = require('./routes/admin');
const shopRoutes = require('./routes/shop');


const app = express();

//set global configuration that express doesn't understand
//we need to set engine based on how you register 
//here hbs is used ,so files need to have 404.hbs extension
//if handlebars then 404.handlebars
// app.engine("hbs",expressHbs());
app.set("view engine","ejs");

app.set("views","views");

//for pug enable below
//app.set("view engine",'pug')

app.use(bodyParser.urlencoded({extended:true}))

//to access public path
app.use(express.static(path.join(__dirname,'public')));


app.use("/admin",admin.routes);

app.use(shopRoutes)

app.use((req,res,next) => {
    res.status(404).render("404",{pageTitle:'Page Not Found', path:null});
})

app.listen(3000)