const express = require("express")
const fs = require("fs")
const path = require("path")

const rutaApiImagenes = express.Router()

const ubicacionImagenes = path.join(__dirname,"..","img")

rutaApiImagenes.get("/:imagen", (req, res) => {
    const imagen = req.params.imagen
    ubiImagenSolicitada = path.join(ubicacionImagenes, imagen)

    if (!fs.existsSync(ubiImagenSolicitada)) {
        res.status(404).send("Error al encontrar la imágen: 404 not found")
    }

    res.sendFile(ubiImagenSolicitada)
})

module.exports = rutaApiImagenes