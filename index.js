const app = require('./app');
const mongo = require('./database');
const rutasProductos = require("./src/routers/Productos.routes");
const rutasUsuarios = require("./src/routers/Usuarios.routes");
const cors = require("cors");

app.use(cors());

var port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log("servidor corriendo Ok");
});

app.get("/",(req,res) =>{
    res.send("API funcionando");
})

// Configuración de rutas:
app.use("/productos",rutasProductos);
app.use("/usuarios",rutasUsuarios);