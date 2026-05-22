import { useEffect, useState } from "react";

import api from "../../../services/api";

import ProductTable from "../components/ProductTable.jsx"
import ProductForm from "../components/ProductForm.jsx"



// PANEL ADMINISTRADOR PRODUCTS
function ProductsAdmin() {
    // ESTADOS

    // LISTA de PRODUCTOS
    const [products, setProducts] = useState([]);

    // LOADING
    const [loading, setLoading] = useState(true)

    // ERRORES
    const [error, setError] = useState("");

    // Producto seleccionado para editar
    const [selectedProduct, setSelectedProduct] = useState(null);

    // MOstrar formulario
    const [showForm, setShowForm] = useState(false);

    // OBTENER PRODUCTOS
    const fetchProducts = async () => {
        try {
            setLoading(true);
            const { data } = await api.get("/products");
            setProducts(data);
        } catch (error) {
            console.error(error);
            setError("Error cargando productos.")
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    // CARGA INICIAL
    const createProduct = async (FormData) => {
        try {
            await api.post(
                "/products",
                FormData,
                {
                    headers: {
                        Authorization:
                            `Bearer ${localStorage.getItem("token")}`
                    }
                }
            )
                // RECARGAR PRODUCTOS
                fetchProducts();

                // CERAR FORMULARIO
                setShowForm(false);
            } catch (error) {
                console.error(error);
                alert("Error creando producto.")

            }
        }

        // actulizar producto
        const updateProduct = async (id, FormData) => {
            try {
                await api.put(
                    `/products/${id}`,
                    FormData,
                    {
                        headers: {
                            Authorization:
                                `Bearer ${localStorage.getItem("token")}`
                        }
                    }
                )
                // RECARGAR PRODUCTOS
                fetchProducts();

                // resetear producto seleccionado
                setSelectedProduct(null);

                // CERAR FORMULARIO
                setShowForm(false);
            } catch (error) {
                console.error(error);
                alert("Error actualizando producto.")
            }
        }


        // ELIMINAR PRODUCTO
        const deleteProduct = async (id) => {
            if (!window.confirm("¿Estás seguro de eliminar este producto?")) {
                return;
            }
            try {
                await api.delete(
                    `/products/${id}`,
                    {
                        headers: {
                            Authorization:
                                `Bearer ${localStorage.getItem("token")}`
                        }
                    }
                );
                // RECARGAR PRODUCTOS
                fetchProducts();
            } catch (error) {
                console.error(error);
                alert("Error eliminando producto.")
            }
        }

        // EDITAR PRODUCTO
        const handleEdit = (product) => {
            setSelectedProduct(product);
            setShowForm(true);
        };

        // NUEVO PRODUCTO
        const handleNewProduct = () => {
            setSelectedProduct(null);
            setShowForm(true);
        };

        // LOADING
        if (loading) {
            return (
                <div className="p-10">
                    <p>Cargando productos...</p>
                </div>
            )
        }
        return (
            <section>
                { /* HEADER */}
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">
                        Productos
                    </h1>
                    <p className="
                    text-gray-500
                    mt-2
                ">
                        Administra los productos de tu tienda. Agrega, edita o elimina productos fácilmente.
                    </p>

                    { /* BOTÓN NUEVO PRODUCTO */}
                    <button

                        onClick={handleNewProduct}

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

                        Nuevo Producto

                    </button>

                </div>

                { /* ERRORES */}
                {error && (
                    <div className="bg-red-100
                    text-red-700
                    px-4
                    rounded-xl
                    mb-6
                ">
                        {error}
                    </div>
                )}
                {/* FORMULARIO */}

                {

                    showForm && (

                        <div className="mb-10">

                            <ProductForm

                                product={selectedProduct}

                                onCreate={createProduct}

                                onUpdate={updateProduct}

                                onCancel={() => {

                                    setShowForm(false);

                                    setSelectedProduct(null);
                                }}
                            />

                        </div>
                    )
                }


                {/* TABLA */}

                <ProductTable

                    products={products}

                    onEdit={handleEdit}

                    onDelete={deleteProduct}
                />

            </section>
        )
    }
export default ProductsAdmin