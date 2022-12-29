const Container = require("./container.js");
const productos = new Container("./router/products/products.json");
const productosEnBase = require("./products.json");

const express = require("express");
const { Router } = require("express");
const router = Router();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended:true }));

app.use("/api/productos" , router );

app.use(express.static("public"));

const products = productosEnBase;
router.get("/" , ( req , res ) => {
    res.render( "pages/index" , { productNames: products, titulo:"Products managment" , mensaje:"Add new Product" , title: "TITLE" , price: "PRICE" , thumbnail: "THUMBNAIL" , empresa:"Activá Studio" });
});

router.get("/productsList" , ( req , res ) => {
    res.render("pages/productsList" ,  {productNames: products , titulo:"Products managment" , mensaje:"Add new Product" , title: "TITLE" , price: "PRICE" , thumbnail: "THUMBNAIL" , empresa:"Activá Studio" } )
})


router.post("/" , ( req , res ) => {
    const obj = req.body;
    productos.save(obj);
    console.log(products);
    res.render("pages/index", {productNames:products, titulo:"Products managment" , mensaje:"Add new Product" , title: "TITLE" , price: "PRICE" , thumbnail: "THUMBNAIL" , empresa:"Activá Studio" } )
})


module.exports = router;