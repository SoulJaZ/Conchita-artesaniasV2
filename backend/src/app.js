// Importamos express
import express from "express";

// Permite conexión entre frontend y backend
import cors from "cors";

// Seguridad básica HTTP
import helmet from "helmet";

// Rutas órdenes
import orderRoutes from "./routes/orderRoutes.js"

// Rutas productos
import productRoutes from "./routes/productRoutes.js";

// Middleware manejo errores
import errorMiddleware from "./middleware/errorMiddleware.js";

// Rutas autenticación
import authRoutes from "./routes/authRoutes.js";


// Creamos aplicación express
const app = express();


// ===============================
// MIDDLEWARES
// ===============================

// Permite peticiones externas
app.use(cors());

// Agrega seguridad HTTP
app.use(helmet());

// Permite recibir JSON
app.use(express.json());


// ===============================
// RUTAS
// ===============================

// Rutas autenticación
app.use("/api/auth", authRoutes);

// Rutas productos
app.use("/api/products", productRoutes);

// Rutas órdenes
app.use("/api/orders", orderRoutes)


// ===============================
// MIDDLEWARE ERRORES
// ===============================

app.use(errorMiddleware);


// Exportamos app
export default app;