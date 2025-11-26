const express = require("express")
const fs = require("fs")
const path = require("path")

const rutaApiVideos = express.Router()

const ubicacionVideo = path.join(__dirname, "..", "img")

rutaApiVideos.get("/:video", (req, res) => {
    const nombreVideo = req.params.video
    ubiVideoSolicitado = path.join(ubicacionVideo, nombreVideo)

    if (!fs.existsSync(ubiVideoSolicitado)) {
        return res.status(404).send('Error al encontrar el video: 404 not found');
    }
    res.sendFile(ubiVideoSolicitado)
})

module.exports = rutaApiVideos