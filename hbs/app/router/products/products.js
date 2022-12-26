const { Router } = require("express");


const products = Router();

products.get("/productos" , ( req , res )=> {
    return res.render("index")
})

products.post("/productos" , ( req , res )=> {
    res.send({ message:"Anda el post"})
});


module.exports = products;