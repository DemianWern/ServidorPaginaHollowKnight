const express = require("express")
const app = express()
const cors = require("cors")

//Solucion al problema de CORS
app.use(cors('*'))

/*
Esta es una forma en la que se le autoriza a usar el servidor a ciertas URL (creo, sigo sin entender muy bien)
app.use(cors({
    origin: (origin, callback) => {
        const ACCEPTED_ORIGINS = [
            'http://localhost:8080',
            'http://localhost:3000',
            'http://127.0.0.1:5500'
        ]

        if (ACCEPTED_ORIGINS.includes(origin)) {
            return callback(null, true)
        }

        if (!origin) {
            return callback(null, true)
        }

        return callback(new Error('Not allowed by CORS'))
    }
}))
*/

//Se importan los datos que se van a usar
const datosAmuletos = require("./datos/amuletos.json")
const datosBestiario = require("./datos/bestiario.json")

//Se importan los routers que se van a usar
const rutaApiAmuletos = require("./routers/amuletos")
const rutaApiBestiario = require("./routers/bestiario")

//Creacion del servidor
const PUERTO = process.env.PORT || 3000 //process.env.PORT sirve cuando el puerto se determina de forma dinamica por el servidor

app.listen(PUERTO, () => {
    console.log(`El servidor esta escuchando en el puerto ${PUERTO}, URL: http://localhost:${PUERTO}`)
})

//Routers, sirven para abreviar rutas que se repiten varias veces al momento de programar
//Con app.use se indica la nueva ruta base y la constante por la que se reemplaza app al momento de usar esa ruta
app.use("/api/amuletos", rutaApiAmuletos)

app.use("/api/bestiario", rutaApiBestiario)

//Routing
//Para las peticiones de tipo GET en el path /, se hace lo que determina la funcion lambda
app.get("/", (req, res) => {
    res.send(`Primer servidor con Express`)
})

//Por defecto si la URL no es válida larga un error 404
app.use((req, res)=>{
    res.status(404).send("Error 404 not found")
})