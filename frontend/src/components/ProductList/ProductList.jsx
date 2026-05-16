import ProductCard from "../ProductCard/ProductCard";

// PRODUCT LIST

function ProductList({ products }) {

  // NO PRODUCTS

  if (!products?.length) {

    return (

      <div className="
        text-center
        py-20
      ">

        <h2 className="
          text-3xl
          font-bold
          text-gray-700
          mb-4
        ">

          No se encontraron productos

        </h2>

        <p className="text-gray-500">

          Intenta con otra búsqueda.

        </p>

      </div>
    );
  }

  return (

    <section className="
      grid
      sm:grid-cols-2
      lg:grid-cols-3
      xl:grid-cols-4
      gap-8
    ">

      {
        products.map(product => (

          <ProductCard
            key={product._id}
            product={product}
          />
        ))
      }

    </section>
  );
}

export default ProductList;