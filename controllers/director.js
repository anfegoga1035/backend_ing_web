const Director = require('../models/director');
const { request, response } = require('express');

const createDirector = async (req = request, res = response) => {
    const { nombre } = req.body;
    try {
        const directorDB = await Director.findOne({ nombre });

        if (directorDB) {
            return res.status(400).json({ mensaje: 'El director ya existe' });
        }

        const datos = {
            nombre
    
        };

        const director = new Director(datos);

        await director.save();

        return res.status(201).json(director);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ mensaje: error });
    }
};


/**
 * Consultar todos los directores
 */
const getDirectores = async (req, res) => {
    try {
        const { estado } = req.query;

        const directores = await Director.find({ estado });

        return res.json(directores);

    } catch (error) {
        console.log(error);
        return res.status(500).json({ mensaje: error });
    }
}


module.exports = {
    createDirector,
    getDirectores
}