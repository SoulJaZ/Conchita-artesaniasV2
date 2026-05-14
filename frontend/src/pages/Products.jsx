import {

  useEffect,
  useState

} from "react";


import ProductList from "../components/ProductList/ProductList"

import SearchBar from "../components/SearchBar/SearchBar";

import Loader from "../components/Ui/Loader"

import ErrorMessage from "../components/Ui/ErrorMessage"

import api from "../services/api";

// PÁGINA PRODUCTOS

function Products() {
  // ESTADOS

  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const [search, setSearch] = useState("");

  // OBTENER PRODUCTOS

  const fetchProducts = async () => {

    try {

      setLoading(true);

      // Petición backend
      const { data } = await api.get("/products");


      // Guardar productos
      setProducts(data);

    } catch (error) {

      console.log(error);

      setError(

        "Error cargando productos"
      );

    } finally {

      setLoading(false);
    }
  }

  // CARGA INICIAL

  useEffect(() => {

    fetchProducts();

  }, []);
  // FILTRAR PRODUCTOS

  const filteredProducts = products.filter(product =>

    product.name.toLowerCase().includes(search.toLowerCase())
  );

  // LOADING

  if (loading) {

    return <Loader />;
  }


  return (

    <main className="bg-[#faf2f2] min-h-screen p-16">
      <div className="max-w-7xl mx-auto px-6">

        <div className="mb-12">
          <h1 className="
        text-5xl
        font-bold
        text-gray-900
        mb-4
        ">
            Nuestros productos
          </h1>
          <p className="text-gray-700 text-lg">
            Descubre la belleza de nuestras artesanías hechas a mano.
          </p>
        </div>

        {/* Sin productos */}

        <div className="mb-10">
          <SearchBar
            search={search}
            setSearch={setSearch}
          />
        </div>

        {/* Error*/}
        {
          error && (

            <ErrorMessage
              message={error}
            />
          )
        }

        {/* Lista productos */}

        <ProductList

          products={filteredProducts}
        />


      </div>
    </main>
  )
}

export default Products;