//IMPORTAR CONNECT DEL MÓDULO MONGOOSE
const mongo = require("mongoose");
//CONFIGURAR CONEXIÓN:
(async () => {
    try {
        const db = await mongo.connect("mongodb://localhost:27017/dulces-db");
        //comprobar la conexión:
        console.log("Conexión establecida en: ", db.connection.name);
    } catch (error) {
        console.error(error);
    }
}

)();