const { Router } = require('express');
const routerProductos = Router();
const controlProducto = require("../controllers/ControllerProducto")

routerProductos.get("/",(req, res) => {
    res.send("Funcionalidad de Productos activa");
});

routerProductos.post("/new", controlProducto.ProductoSave);
routerProductos.get("/list", controlProducto.ProductosList);
routerProductos.get("/find/:id", controlProducto.ProductosXid);

module.exports = routerProductos;

