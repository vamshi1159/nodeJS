const path = require('path');

const express = require('express');

const bodyParser = require('body-parser');

const rootDir = require('./util/path');

const admin = require('./routes/admin');
const shopRoutes = require('./routes/shop');


const app = express();

//set global configuration that express doesn't understand
app.set("view engine",'pug')

app.use(bodyParser.urlencoded({extended:true}))

//to access public path
app.use(express.static(path.join(__dirname,'public')));


app.use("/admin",admin.routes);

app.use(shopRoutes)

app.use((req,res,next) => {
    res.status(404).sendFile(path.join(rootDir,'views','404.html'))
})

app.listen(3000)