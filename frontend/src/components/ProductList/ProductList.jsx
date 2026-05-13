import ProductCard from "../ProductCard/ProductCard";

function ProductList({products, onAdd}){
    return(
        <section className="products-grid">
            {
                products.map(product=>{
                    <ProductCard
                    key={product.id}
                    product={product}
                    onAdd={onAdd}
                    />
                })
            }
        </section>
    )
}
export default ProductList;