const mongoose = require('mongoose');

const ProductoSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    categoria: {
        type: String,
        required: true
    },
    bodega: {
        type: String,
        required: true
    },
    percha: {
        type: Number,
        required: true

    }
});

module.exports = mongoose.model('Producto', ProductoSchema);