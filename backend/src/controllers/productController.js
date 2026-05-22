// =======================================
// SERVICES
// =======================================

import {

  getAllProducts,
  getProductByIdService,
  createProductService,
  updateProductService,
  deleteProductService

} from "../services/productService.js";

// =======================================
// OBTENER TODOS LOS PRODUCTOS
// GET /api/products
// =======================================

export const getProducts = async (req, res) => {

  try {

    // QUERY PARAMS
    const {

      search,
      category,
      page = 1,
      limit = 10

    } = req.query;

    // OBTENER PRODUCTOS
    const products = await getAllProducts(

      search,
      category,
      Number(page),
      Number(limit)
    );

    // RESPUESTA
    res.json(products);

  } catch (error) {

    res.status(500).json({

      message: error.message
    });
  }
};

// =======================================
// OBTENER PRODUCTO POR ID
// GET /api/products/:id
// =======================================

export const getProductById = async (req, res) => {

  try {

    // BUSCAR PRODUCTO
    const product = await getProductByIdService(

      req.params.id
    );

    // VALIDAR EXISTENCIA
    if (!product) {

      return res.status(404).json({

        message: "Producto no encontrado"
      });
    }

    // RESPUESTA
    res.json(product);

  } catch (error) {

    res.status(500).json({

      message: error.message
    });
  }
};

// =======================================
// CREAR PRODUCTO
// POST /api/products
// =======================================

export const createProduct = async (req, res) => {

  try {

    // DATOS DEL BODY
    const {

      name,
      price,
      image,
      description,
      category,
      stock

    } = req.body;

    // CREAR PRODUCTO
    const product = await createProductService({

      name,
      price,
      image,
      description,
      category,
      stock
    });

    // RESPUESTA
    res.status(201).json(product);

  } catch (error) {

    res.status(500).json({

      message: error.message
    });
  }
};

// =======================================
// ACTUALIZAR PRODUCTO
// PUT /api/products/:id
// =======================================

export const updateProduct = async (req, res) => {

  try {

    // ACTUALIZAR PRODUCTO
    const product = await updateProductService(

      req.params.id,
      req.body
    );

    // VALIDAR EXISTENCIA
    if (!product) {

      return res.status(404).json({

        message: "Producto no encontrado."
      });
    }

    // RESPUESTA
    res.json(product);

  } catch (error) {

    res.status(500).json({

      message: error.message
    });
  }
};

// =======================================
// ELIMINAR PRODUCTO
// DELETE /api/products/:id
// =======================================

export const deleteProduct = async (req, res) => {

  try {

    // ELIMINAR PRODUCTO
    const product = await deleteProductService(

      req.params.id
    );

    // VALIDAR EXISTENCIA
    if (!product) {

      return res.status(404).json({

        message: "Producto no encontrado."
      });
    }

    // RESPUESTA
    res.json({

      message: "Producto eliminado"
    });

  } catch (error) {

    res.status(500).json({

      message: error.message
    });
  }
};