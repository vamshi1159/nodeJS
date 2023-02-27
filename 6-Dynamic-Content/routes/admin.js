const path = require('path')

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const products = [];

// /admin/add-product => GET
router.get('/add-product',(req,res,next) =>{
    res.render('add-product',{pageTitle:"Add Product"})
})


// this is post reqeust 
// /admin/product  => POST
router.post('/product',(req,res,next)=>{
    console.log(req.body);
    products.push({title:req.body.title});
    res.redirect('/');
})

module.exports = {
    routes: router,
    products
}