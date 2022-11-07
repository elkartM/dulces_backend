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

// Actualizar producto:

const ProductoEdit = async (req, res) =>{
    try {
        const id = req.params.id;
        const producto = req.body;
        await Producto.findByIdAndUpdate(id, producto);
        res.send("Producto actualizado correctamente");
    } catch (error) {
        console.log(error);
    }
}

// Eliminar:

const ProductoDelete = async (req, res) =>{
    try {
        const id = req.params.id;
        await Producto.findByIdAndDelete(id);
        res.send("Producto eliminado correctamente");
    } catch (error) {
        console.log(error);
    }
}

module.exports={
    ProductoSave,
    ProductosList,
    ProductosXid,
    ProductoEdit,
    ProductoDelete
}