const mongoose = require("mongoose");

const ProductoSchema = new mongoose.Schema(
    {
        codigo:{
            type: String,
            required: true,
            unique: true
        },
        producto:{
            type: String,
            required: true
        },
        presentacion:{
            type: String,
            required: true
        },
        inventario:{
            type: String,
            required: true
        },
        valor_unitario:{
            type: String,
            required: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const Producto = new mongoose.model("Producto",ProductoSchema);
module.exports = Producto;