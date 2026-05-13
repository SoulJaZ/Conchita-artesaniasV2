import products from "../../data/product";
import ProductCard from "../../components/ProductCard/ProductCard";

function Products() {
    
    return (
            <section>
                {
                    products.map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))
                }
                
            </section>
    )
}

export default Products