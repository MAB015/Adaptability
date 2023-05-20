const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const path = require("path");


//Inicio
const app=express()

//configuracion
app.set("port", process.env.PORT || 4000);
app.set("views",path.join(__dirname, "views"));
app.engine(".hbs", exphbs({
    defaultLayout:"main",
    layoutsDir:path.join(app.get("views"),"layouts"),
    PartialsDir:path.join(app.get("views"),"partials"),
    extname: ".hbs",
    helpers: require("./lib/handlebars")
}))
app.set("views engine", "hbs");

//peticiones
app.use(morgan("dev"));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//variables Variables
app.use((req, res, next) =>{
    next();
})

//Rutas
app.use(require("./routes"));
app.use(require("./routes/authentications"));
app.use("/links", require("./routes/links"));


//publico
app.use(express.static(path.join(__dirname, "public")))

//Iniciar Servidor
app.listen(app.get("port"), () => {
    console.log("server on port", app.get("port"))
})