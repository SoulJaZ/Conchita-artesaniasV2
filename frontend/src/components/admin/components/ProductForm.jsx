import { useEffect, useState } from "react";

// FORMULARIO PRODUCTOS
function ProductForm({
    product,
    onCreate,
    onUpdate,
    onCancel
}) {
    // ESTADOS FORMULARIOS

    const [formData, setFormData] = useState({
        name: "",
        description: "",
        price: "",
        stock: "",
        image: "",
        category: ""
    });

    // CARGAR PRODUCTO EN EDICIÓN
    useEffect(() => {
        if (product) {
            setFormData({
                name: product.name || "",
                description: product.description || "",
                price: product.price || "",
                stock: product.stock || "",
                image: product.image || "",
                category: product.category || ""
            });
        }
    }, [product])

    // MANEJAR INPUTS
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // ENVIAR FORMULARIO
    const handleSubmit = async (e) => {
        e.preventDefault();

        // EDITAT
        if (product) {
            onUpdate(product._id, formData)
        } else {
            // crear
            onCreate(formData)
        }
    };

    return (
        <div className="
            bg-white
            rounded-3xl
            shadow-lg
            p-8
        ">
            <h2 className="
                text-2xl
                font-bold
                mb-8
            ">
                {product ? "Editar Producto" : "Nuevo Producto"}
            </h2>

            {/* FORM */}

            <form

                onSubmit={handleSubmit}

                className="
          grid
          md:grid-cols-2
          gap-6
        "
            >

                {/* NOMBRE */}

                <div>

                    <label className="
            block
            mb-2
            font-medium
          ">

                        Nombre

                    </label>

                    <input

                        type="text"

                        name="name"

                        value={formData.name}

                        onChange={handleChange}

                        required

                        className="
              w-full
              border
              rounded-xl
              px-4
              py-3
              outline-none
            "
                    />

                </div>


                {/* PRECIO */}

                <div>

                    <label className="
            block
            mb-2
            font-medium
          ">

                        Precio

                    </label>

                    <input

                        type="number"

                        name="price"

                        value={formData.price}

                        onChange={handleChange}

                        required

                        className="
              w-full
              border
              rounded-xl
              px-4
              py-3
              outline-none
            "
                    />

                </div>


                {/* STOCK */}

                <div>

                    <label className="
            block
            mb-2
            font-medium
          ">

                        Stock

                    </label>

                    <input

                        type="number"

                        name="stock"

                        value={formData.stock}

                        onChange={handleChange}

                        required

                        className="
              w-full
              border
              rounded-xl
              px-4
              py-3
              outline-none
            "
                    />

                </div>


                {/* CATEGORÍA */}

                <div>

                    <label className="
            block
            mb-2
            font-medium
          ">

                        Categoría

                    </label>

                    <input

                        type="text"

                        name="category"

                        value={formData.category}

                        onChange={handleChange}

                        className="
              w-full
              border
              rounded-xl
              px-4
              py-3
              outline-none
            "
                    />

                </div>


                {/* IMAGEN */}

                <div className="md:col-span-2">

                    <label className="
            block
            mb-2
            font-medium
          ">

                        URL Imagen

                    </label>

                    <input

                        type="text"

                        name="image"

                        value={formData.image}

                        onChange={handleChange}

                        className="
              w-full
              border
              rounded-xl
              px-4
              py-3
              outline-none
            "
                    />

                </div>


                {/* DESCRIPCIÓN */}

                <div className="md:col-span-2">

                    <label className="
            block
            mb-2
            font-medium
          ">

                        Descripción

                    </label>

                    <textarea

                        name="description"

                        value={formData.description}

                        onChange={handleChange}

                        rows="5"

                        required

                        className="
              w-full
              border
              rounded-xl
              px-4
              py-3
              outline-none
              resize-none
            "
                    ></textarea>

                </div>


                {/* BOTONES */}

                <div className="
          md:col-span-2
          flex
          gap-4
        ">

                    <button

                        type="submit"

                        className="
              bg-[#8b5e3c]
              hover:bg-[#6f472d]
              text-white
              px-6
              py-3
              rounded-xl
              font-semibold
              transition
            "
                    >

                        {

                            product

                                ? "Guardar cambios"

                                : "Crear producto"
                        }

                    </button>


                    <button

                        type="button"

                        onClick={onCancel}

                        className="
              border
              border-gray-300
              px-6
              py-3
              rounded-xl
            "
                    >

                        Cancelar

                    </button>

                </div>

            </form>
        </div>
    )
}
export default ProductForm;