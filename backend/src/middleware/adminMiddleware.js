// Middleware admin
const admin = (req, res, next)=>{

    // Verificar rol
    if (req.user && req.user.role === "admin") {
        next();
    } else {
        res.status(403).json({
            message: "Acceso denegado!"
        });
    }
};
export default admin;