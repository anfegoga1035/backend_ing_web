const Genero = require('../models/genero')
const { request, response } = require('express')

/**
 * Crear genero
 */
const createGenero = async (req = request, res = response) => {// endpoint
    //console.log(req.body)
    const { nombre, descripcion} = req.body
    try {
        const generoDB = await Genero.findOne({ nombre })

        if(generoDB) {
            return res.status(400).json({mjs: 'Ya existe nombre'})
        }// select * from generos where nombre = ?
        
        const datos = {
            nombre,
            descripcion
        }
    
        const genero = new Genero(datos)
    
        await genero.save()
    
        return res.status(201).json(genero)

    } catch(error) {
        console.log(error)
        return res.status(500).json({msj: error})
    }
}

/**
 * consultar todos los géneros
 */
const getGeneros = async (req = request, res = response) => {// endpoint
    try {
        const { estado } = req.query

        const generos = await Genero.find({ estado })

        return res.json(generos)

    } catch(error) {
        console.log(error)
        return res.status(500).json({msj: error})
    }
}

/**
 * Consultar un género por su ID
 */

/**
 * Actualizar genero
 */

/**
 * Borrar un género
 */
module.exports = {
    createGenero,
    getGeneros
}