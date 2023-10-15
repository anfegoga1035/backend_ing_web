const { Schema, model } = require('mongoose')

const ProductoraSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'Nombre productora requerido'],
        minlength: 1
    },
    slogan: {
        type: String
    },
    descripcion: {
        type: String
    },
    fechaCreacion: {
        type: Date,
        default: new Date()
    },
    fechaActualizacion: {
        type: Date,
        default: new Date()
    }
    
})

module.exports = model('Productora', ProductoraSchema)