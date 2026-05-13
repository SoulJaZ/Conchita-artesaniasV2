import rateLimit from "express-rate-limit"

// Limitador API
const limiter = rateLimit({
    // Tiempo ventana
    windowMs: 15 * 60 * 1000,
    //máximo request
    max:100,
    message:"Demasiadas peticiones"
});
export default limiter;