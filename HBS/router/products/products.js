const Container = require("./container.js");
const productos = new Container("./router/products/products.json");
const productosEnBase = require("./products.json");
const products = productosEnBase;

const express = require("express");
const { Router } = require("express");
const router = Router();
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended:true }));

app.use("/api/productos" , router );

app.use(express.static("public"));

router.get("/", function ( req , res ) {
    res.render("main");
})

let arrayLength = products.length > 0 ? true : false;

router.get("/productsList", function ( req , res ) {
    res.render("productsList" , { suggestedChamps:products , listExists: arrayLength  });
})

router.post("/" , ( req , res ) => {
    const obj = req.body;
    productos.save(obj);
    console.log( products );
    res.render("main");
})



module.exports = router