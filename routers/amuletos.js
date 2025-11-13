const express = require("express")
const datosAmuletos = require("../datos/amuletos.json")

//Routers, sirven para abreviar rutas que se repiten varias veces al momento de programar
const rutaApiAmuletos = express.Router()

/*
Funciones Middleware. Estas se ejecutan antes de enviar una resupuesta y despues de recibir una solicitud.
Estas funciones tienen acceso al objeto de la solicitud, al objeto de la respuesta y a next(), que es una funcion que se llama para ejecutar al proximo middleware.
*/ 
rutaApiAmuletos.use(express.json())//Para las peticiones de tipo POST, esta funcion convierte el cuerpo de la peticion en el formato JSON

//Se pueden mandar parametros por la URL, y estos se leen con :, por ejemplo /api/cursos/programacion/:lenguaje, donde lenguaje es el parametro y puede tener distintos lenguajes de programacion.
rutaApiAmuletos.get("/:busqueda", (req, res)=>{
    const busqueda = req.params.busqueda
    const resBusqueda = datosAmuletos.filter(amuleto => amuleto.nombre == busqueda)

    if(resBusqueda.length===0){
        return res.status(404).send("El amuleto no se encontro: Error 404")
    }

    return res.send(resBusqueda)
})

//Paramteros Query, son parametros que se indican en la URL. En la URL estos parámetros se indican despues de ? junto con valores clave/valor
rutaApiAmuletos.get("/", (req, res)=>{
    console.log(req.query)

    if(req.query.ordenar === "cantRanuras"){//Ordena de mayor a menor los amuletos en base a la cantidad de ranuras que ocupa el amuleto
        return res.send(datosAmuletos.sort((a,b) => b.cantRanuras - a.cantRanuras))
    }

    res.send(datosAmuletos)
})

//Se exporta el router
module.exports = rutaApiAmuletos