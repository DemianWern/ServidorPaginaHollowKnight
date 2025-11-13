const express = require("express")
const app = express()

//Se importan los datos que se van a usar
const datosAmuletos = require("./datos/amuletos.json")
const datosBestiario = require("./datos/bestiario.json")

//Se importan los routers que se van a usar
const rutaApiAmuletos = require("./routers/amuletos")
const rutaApiBestiario = require("./routers/bestiario")

//Creacion del servidor
const PUERTO = 3000 || process.env.PORT //process.env.PORT sirve cuando el puerto se determina de forma dinamica por el servidor

app.listen(PUERTO, ()=>{
    console.log(`El servidor esta escuchando en el puerto ${PUERTO}`)
})

//Routers, sirven para abreviar rutas que se repiten varias veces al momento de programar
//Con app.use se indica la nueva ruta base y la constante por la que se reemplaza app al momento de usar esa ruta
app.use("/api/amuletos", rutaApiAmuletos)

app.use("/api/bestiario", rutaApiBestiario)

//Routing
//Para las peticiones de tipo GET en el path /, se hace lo que determina la funcion lambda
app.get("/", (req, res)=>{
    res.send("Primer servidor con Express")
})

