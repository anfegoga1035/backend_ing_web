const { Schema, model } = require('mongoose')

const MediaSchema = Schema({
    serial: {
        type: String,
        required: [true, 'Serial requerido'],
        unique: [true, 'media ya existe']
    },
    titulo: {
        type: String,
        required: [true, 'Titulo requerido'],
    },
    url: {
        type: String
    },
    sipsosis: {
        type: String,
        required: [true, 'Sipnosis requerida'],
    },
    imagen: {
        type: String
    },
    // TODO: COLOCAR EL RESTO DE ATRIBUTOS
    genero: {
        type: Schema.Types.ObjectId,
        ref: 'Genero',
        required: true
    },
    director: {
        type: Schema.Types.ObjectId,
        ref: 'Director',
        required: true
    },
        productora: {
        type: Schema.Types.ObjectId,
        ref: 'Productora',
        required: true
    },
    tipo: {
        type: Schema.Types.ObjectId,
        ref: 'Tipo',
        required: true
    },
    fechaCreacion: {
        type: Date,
        default: new Date()
    },
    fechaActualizacion: {
        type: Date,
        default: new Date()
    }
    // TODO: COLOCAR EL RESTO DE ATRIBUTOS tipo Schemas
})

module.exports = model('Media', MediaSchema)