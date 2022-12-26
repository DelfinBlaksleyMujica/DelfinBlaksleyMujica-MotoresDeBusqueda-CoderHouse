const { Router } = require("express");


const products = Router();

const productos = [];

products.get("/productos" , ( req , res )=> {
    return res.render("index")
})


products.post("/productos" , ( req , res )=> {
    productos.push( req.body );
    res.render("productos" , { title:"Remera 1" , price:125 , thumbnail:"www.google.com"})
});


module.exports = products;