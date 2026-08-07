// TABLA PRODUCTOS ADMIN

function ProductTable({

  products = [],
  onEdit,
  onDelete

}) {

  // VALIDAR ARRAY
  if (!Array.isArray(products)) {

    return (

      <div className="p-10 text-center">

        <p className="text-red-500">

          Error cargando productos.

        </p>

      </div>
    );
  }

  // SIN PRODUCTOS
  if (products.length === 0) {

    return (

      <div className="p-10 text-center">

        <p className="text-gray-500">

          No hay productos registrados.

        </p>

      </div>
    );
  }

  return (

    <div className="
      bg-white
      rounded-3xl
      shadow-lg
      overflow-hidden
    ">

      <div className="overflow-x-auto">

        <table className="w-full">

          {/* HEAD */}

          <thead className="bg-[#f8f5f2]">

            <tr>

              <th className="p-5 text-left">

                Imagen

              </th>

              <th className="p-5 text-left">

                Nombre

              </th>

              <th className="p-5 text-left">

                Categoría

              </th>

              <th className="p-5 text-left">

                Precio

              </th>

              <th className="p-5 text-left">

                Stock

              </th>

              <th className="p-5 text-left">

                Acciones

              </th>

            </tr>

          </thead>

          {/* BODY */}

          <tbody>

            {

              products.map(product => (

                <tr
                  key={product._id}
                  className="border-t"
                >

                  {/* IMAGEN */}

                  <td className="p-5">

                    <img

                      src={

                        product.image ||

                        "https://placehold.co/100x100"
                      }

                      alt={product.name}

                      className="
                        w-20
                        h-20
                        object-cover
                        rounded-xl
                      "
                    />

                  </td>

                  {/* NOMBRE */}

                  <td className="p-5 font-medium">

                    {product.name}

                  </td>

                  {/* CATEGORÍA */}

                  <td className="p-5">

                    {product.category || "Sin categoría"}

                  </td>

                  {/* PRECIO */}

                  <td className="p-5">

                    ${product.price}

                  </td>

                  {/* STOCK */}

                  <td className="p-5">

                    {

                      product.stock > 0

                        ? (

                          <span className="text-green-600">

                            {product.stock}

                          </span>
                        )

                        : (

                          <span className="text-red-500">

                            Sin stock

                          </span>
                        )
                    }

                  </td>

                  {/* ACCIONES */}

                  <td className="p-5">

                    <div className="
                      flex
                      gap-3
                    ">

                      {/* EDITAR */}

                      <button

                        onClick={() => onEdit(product)}

                        className="
                          bg-blue-500
                          hover:bg-blue-600
                          text-white
                          px-4
                          py-2
                          rounded-lg
                          transition
                        "
                      >

                        Editar

                      </button>

                      {/* ELIMINAR */}

                      <button

                        onClick={() => onDelete(product._id)}

                        className="
                          bg-red-500
                          hover:bg-red-600
                          text-white
                          px-4
                          py-2
                          rounded-lg
                          transition
                        "
                      >

                        Eliminar

                      </button>

                    </div>

                  </td>

                </tr>
              ))
            }

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default ProductTable;