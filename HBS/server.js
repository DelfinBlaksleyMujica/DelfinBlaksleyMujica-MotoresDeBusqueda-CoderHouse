const express = require('express');
const products = require("./router/products/products.js");

const app = express();
const hbs = require('hbs');

app.use(
    express.urlencoded({
        extended: false,
    })
);

app.use("/api/productos" , products );
//Defino el motor de plantilla 

hbs.registerPartials(__dirname + "/HBS/app/views/partials");
app.set("views" , "./views");// especifica el directorio de vistas
app.set("view engine" , "hbs");// especifica el motor de plantillas
app.use( express.static("public"));// registra el motor de plantillas


const port = 8080;

const server = app.listen( port , () => {
    console.log(__dirname);
    console.log("Listening on port", port);
})

server.on("error" , () => {
    console.log(`An error ocurred on server ${error.message}`);
});
