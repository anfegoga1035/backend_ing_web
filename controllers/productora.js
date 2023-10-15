const Productora = require('../models/productora');
const { request, response } = require('express');

/**
 * Crear productora
 */
const createProductora = async (req = request, res = response) => {
    const { nombre, slogan, descripcion } = req.body;
    try {
        const productoraDB = await Productora.findOne({ nombre });

        if (productoraDB) {
            return res.status(400).json({ mensaje: 'La productora ya existe' });
        }

        const datos = {
            nombre,
            slogan,
            descripcion
        };

        const productora = new Productora(datos);

        await productora.save();

        return res.status(201).json(productora);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ mensaje: error });
    }
};



/**
 * Consultar todas las productoras
 */
const getProductoras = async (req, res) => {
    try {
        const { estado } = req.query;

        const productoras = await Productora.find({ estado });

        return res.json(productoras);

    } catch (error) {
        console.log(error);
        return res.status(500).json({ mensaje: error });
    }
}


module.exports = {
    createProductora,
    getProductoras
};
