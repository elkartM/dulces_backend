const Producto = require("../models/Productos.js")

const ProductoSave = async (req, res) => {
    try {
        const producto = new Producto(req.body);
        await producto.save();
        res.send("Producto correctamente guardado");
    } catch (error) {
        console.error(error);
    }
}

// Listar Productos:

const ProductosList = async (req, res) => {
    try {
        const listaProductos = await Producto.find();
        res.status(200).send(listaProductos)        
    } catch (error) {
        console.error(error);
    }

}

// Consultar por ID:

const ProductosXid = async (req, res) => {
    try {
        const id = req.params.id;
        if(id){
            const producto = await Producto.findById(id);
            res.status(200).send(producto);
        }
        else{
            res.send("No se pudo tramitar la solicitud");
        }
        
    } catch (error) {
        console.lerror(error);
    }
}

module.exports={
    ProductoSave,
    ProductosList,
    ProductosXid
}