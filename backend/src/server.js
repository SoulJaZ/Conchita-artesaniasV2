// Variables entorno
import dotenv from "dotenv";

// App express
import app from "./app.js";

// Conexión MongoDB
import connectDB from "./config/db.js";


// Cargar variables .env
dotenv.config();


// Conectar base datos
connectDB();


// Puerto servidor
const PORT = process.env.PORT || 4000;


// Iniciar servidor
app.listen(PORT, () => {

  console.log(
    `Servidor ejecutándose en puerto ${PORT}`
  );

});