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

function Products(){
  // ESTADOS

  const [products,setProducts] = useState([]);

  const [loading,setLoading] = useState(true);

  const [error,setError] = useState("");

  const [search,setSearch] = useState("");

  // OBTENER PRODUCTOS

  const fetchProducts = async()=>{

    try{

      setLoading(true);

      // Petición backend
      const { data } = await api.get("/products");


      // Guardar productos
      setProducts(data);

    }catch(error){

      console.log(error);

      setError(

        "Error cargando productos"
      );

    }finally{

      setLoading(false);
    }
  }

  // CARGA INICIAL

  useEffect(()=>{

    fetchProducts();

  },[]);
  // LOADING

  if(loading){

    return <Loader />;
  }


  return(

    <main className="max-w-7xl mx-auto p-5">

      {/* Título */}

      <h1 className="text-4xl font-bold mb-8">

        Productos

      </h1>


      {/* Buscador */}

      <SearchBar

        search={search}

        setSearch={setSearch}
      />


      {/* Error */}

      <ErrorMessage

        message={error}
      />


      {/* Lista productos */}

      <ProductList

        products={products}

        search={search}
      />

    </main>
  )
}

export default Products;