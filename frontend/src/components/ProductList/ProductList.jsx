import {

  memo,
  useMemo

} from "react";

import ProductCard from "../ProductCard/ProductCard";

// LISTA PRODUCTOS

function ProductList({

  products = [],
  search = ""

}){

  // FILTRAR PRODUCTOS

  const filteredProducts = useMemo(()=>{

    return products.filter(product=>

      product.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  },[products,search]);
  // VALIDAR PRODUCTOS
  if(filteredProducts.length === 0){

    return(

      <div className="text-center py-10">

        <h2 className="text-2xl font-bold mb-3">

          No hay productos disponibles

        </h2>

        <p className="text-gray-500">

          Intenta con otra búsqueda.

        </p>

      </div>
    )
  }


  return(

    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

      {

        filteredProducts.map(product => (

          <ProductCard

            key={product._id}

            product={product}
          />
        ))
      }

    </section>
  )
}

export default memo(ProductList);