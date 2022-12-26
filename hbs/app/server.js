const express = require("express");
const hbs = require("hbs");
const products = require("./router/products/products");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine" , "hbs" );
app.set("views" , "./hbs/app/views");

app.use("/api" , products );

const PORT=3000;

const server =app.listen(PORT , () => {
    console.log(`App listening on port ${server.address().port}`);
})

server.on("error" , () => {
    console.log(`An error ocurred on server ${error.message}`);
});