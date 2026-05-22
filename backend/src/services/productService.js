// SERVICIOS DESACOPLADOS.

import Product from "../models/Product.js";

// =======================================
// OBTENER TODOS LOS PRODUCTOS
// =======================================

export const getAllProducts = async (
  search = "",
  category = "",
  page = 1,
  limit = 10
) => {

  // QUERY DINÁMICA
  const query = {};

  // ============================
  // BÚSQUEDA POR NOMBRE
  // ============================

  if (search) {

    query.name = {

      $regex: search,

      $options: "i"
    };
  }

  // ============================
  // FILTRO POR CATEGORÍA
  // ============================

  if (category) {

    query.category = category;
  }

  // ============================
  // PAGINACIÓN
  // ============================

  const skip = (page - 1) * limit;

  // TOTAL PRODUCTOS
  const total = await Product.countDocuments(query);

  // PRODUCTOS PAGINADOS
  const products = await Product.find(query)

    .skip(skip)

    .limit(limit)

    .sort({

      createdAt: -1
    });

  // RESPUESTA
  return {

    products,

    total,

    currentPage: page,

    totalPages: Math.ceil(total / limit)
  };
};

// =======================================
// OBTENER PRODUCTO POR ID
// =======================================

export const getProductByIdService = async (id) => {

  return await Product.findById(id);
};

// =======================================
// CREAR PRODUCTO
// =======================================

export const createProductService = async (data) => {

  return await Product.create(data);
};

// =======================================
// ACTUALIZAR PRODUCTO
// =======================================

export const updateProductService = async (
  id,
  data
) => {

  return await Product.findByIdAndUpdate(

    id,

    data,

    {
      new: true
    }
  );
};

// =======================================
// ELIMINAR PRODUCTO
// =======================================

export const deleteProductService = async (id) => {

  return await Product.findByIdAndDelete(id);
};