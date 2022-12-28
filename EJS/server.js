const express = require("express");
const products = require("./router/products/products.js");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/productos" , products );

const PORT = 8080;

const server = app.listen(PORT , () =>{
    console.log(`App listening on port ${server.address().port} `);
})

server.on("error" , (error)=> {
    console.log("Error ======>" , error.message);
})