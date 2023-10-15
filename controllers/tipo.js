const Tipo = require('../models/tipo');
const { request, response } = require('express');

const createTipo = async (req = request, res = response) => {
    const { nombre, descripcion } = req.body;
    try {
        const tipoDB = await Tipo.findOne({ nombre });

        if (tipoDB) {
            return res.status(400).json({ mensaje: 'El tipo ya existe' });
        }

        const datos = {
            nombre,
            descripcion
        };

        const tipo = new Tipo(datos);

        await tipo.save();

        return res.status(201).json(tipo);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ mensaje: error });
    }
};


/**
 * Consultar todos los tipos
 */
const getTipos = async (req, res) => {
    try {
        const { estado } = req.query;

        const tipos = await Tipo.find({ estado });

        return res.json(tipos);

    } catch (error) {
        console.log(error);
        return res.status(500).json({ mensaje: error });
    }
}


module.exports = {
    createTipo,
    getTipos
}