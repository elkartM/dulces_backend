const Router = require("express");
const routerUsuario = Router();
const controlUsuario = require("../controllers/ControllerUsuarios");


routerUsuario.post("/new", controlUsuario.usuarioSave);
routerUsuario.post("/login", controlUsuario.usuarioLogin);

module.exports = routerUsuario;