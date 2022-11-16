//IMPORTAR CONNECT DEL MÓDULO MONGOOSE
const mongo = require("mongoose");
//CONFIGURAR CONEXIÓN:
(async () => {
    try {
        //const db = await mongo.connect("mongodb://localhost:27017/dulces-db");
        const db = await mongo.connect("mongodb+srv://elkart:3OpxYyJRXdhIZVEL@cluster0.rb8nnfe.mongodb.net/my_database?retryWrites=true&w=majority");
        //comprobar la conexión:
        console.log("Conexión establecida en: ", db.connection.name);
    } catch (error) {
        console.error(error);
    }
}

)();