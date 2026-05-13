import { useState } from "react";

import ProductList from "../../components/ProductList/ProductList";
import SearchBar from "../../components/SearchBar/SearchBar";
import productsData from "../../data/product";

function Products(){

 const [search,setSearch] = useState("");

 const filteredProducts = productsData.filter(product=>
   product.name.toLowerCase()
   .includes(search.toLowerCase())
 );

 return(

  <main>

    <SearchBar
      search={search}
      setSearch={setSearch}
    />

    <ProductList
      products={filteredProducts}
      onAdd={(product)=>console.log(product)}
    />

  </main>
 )
}

export default Products;