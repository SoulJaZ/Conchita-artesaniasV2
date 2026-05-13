const validateProduct = (
    req,
    res,
    next
)=>{
    const {name, price} = req.body;
    if (!name || !price) {
        return res.status(400).json({
            message: "Datos inválidos"
        });
    }

    next();
}

export default validateProduct;
