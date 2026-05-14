const errorMiddleware = (err, req, res, next) => {

  console.error("ERROR:", err);

  res.status(err.status || 500).json({

    success: false,

    message: err.message || "Error interno del servidor",

    stack:
      process.env.NODE_ENV === "development"
        ? err.stack
        : null
  });
};

export default errorMiddleware;