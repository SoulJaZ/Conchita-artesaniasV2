// Importamos express
import express from "express";

// Importar Cookies httpOnly
import cookieParser from "cookie-parser";

// Importar monogoSanitize
import mongoSanitize from "express-mongo-sanitize";

// Permite conexión entre frontend y backend
import cors from "cors";

// Seguridad básica HTTP
import helmet from "helmet";

// Rutas órdenes
import orderRoutes from "./routes/orderRoutes.js";

// Rutas carts
import cartRoutes from "./routes/cartRoutes.js";

// Rutas productos
import productRoutes from "./routes/productRoutes.js";

// Middleware manejo errores
import errorMiddleware from "./middleware/errorMiddleware.js";

// Rutas autenticación
import authRoutes from "./routes/authRoutes.js";
import limiter from "./middleware/rateLimitMiddleware.js";

// Creamos aplicación express
const app = express();

// ===============================
// MIDDLEWARES
// ===============================

// Permite peticiones externas
app.use(
  cors({
    origin: ["http://localhost:5173", "https://conchita-artesanias.vercel.app"],

    credentials: true,
  }),
);

// Agrega seguridad HTTP
app.use(
  helmet({
    crossOriginResourcePolicy: false,
  }),
);

// Agrega sanitización MongoDb
app.use(mongoSanitize());

// Usar Cookies httpOnly
app.use(cookieParser());

// Permite recibir JSON
app.use(express.json());

// ===============================
// RUTAS
// ===============================

// Rutas autenticación
app.use("/api/auth", authRoutes);

// Rutas Cart
app.use("/api/cart", cartRoutes);

// Rutas productos
app.use("/api/products", productRoutes);

// Rutas órdenes
app.use("/api/orders", orderRoutes);

// ===============================
// MIDDLEWARE ERRORES
// ===============================

app.use(errorMiddleware);
app.use(limiter);

// Exportamos app
export default app;
