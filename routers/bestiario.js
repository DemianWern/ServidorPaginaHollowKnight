const express = require("express")
const datosBestiario = require("../datos/bestiario.json")

const rutaApiBestiario = express.Router()

rutaApiBestiario.use(express.json())

rutaApiBestiario.get("/:busqueda", (req, res)=>{
    const busqueda = req.params.busqueda
    const resBusqueda = datosBestiario.filter(bestia => bestia.nombre == busqueda)

    if(resBusqueda.length===0){
        return res.status(404).send("La bestia no se encontró: Error 404 not found")
    }

    return res.send(resBusqueda)
})

rutaApiBestiario.get("/", (req, res)=>{
    res.send(datosBestiario)
})

//Se exporta el router
module.exports = rutaApiBestiario