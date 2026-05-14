import express from "express";

import cookieParser from "cookie-parser";


import cors from "cors";

import helmet from "helmet";


// ROUTES

import orderRoutes from "./routes/orderRoutes.js";

import cartRoutes from "./routes/cartRoutes.js";

import productRoutes from "./routes/productRoutes.js";

import authRoutes from "./routes/authRoutes.js";


// MIDDLEWARES

import errorMiddleware from "./middleware/errorMiddleware.js";

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
    methods: [

      "GET",
      "POST",
      "PUT",
      "DELETE",
      "OPTIONS"
    ],
  }),
);

// Agrega seguridad HTTP
app.use(
  helmet({
    crossOriginResourcePolicy: false,
  }),
);

app.use(limiter);

// Agrega sanitización MongoDb
// Usar Cookies httpOnly
app.use(cookieParser());

// Permite recibir JSON
app.use(express.json());

// HEALTH CHECK

app.get("/", (req, res) => {

  res.send("API funcionando");
});

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


// Exportamos app
export default app;
