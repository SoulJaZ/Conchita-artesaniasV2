import "./ProductCard"

function ProductCard({product, onAdd}){
    return (
        <div className="product-card">
            <img
            loading="lazy" 
            src={product.image} 
            alt={product.name} 
            />

            <h3>{product.name}</h3>
            
            <p>${product.price}</p>

            <button onClick={()=>onAdd(product)}>
                Agregar al carrito
            </button>
        </div>
    )
}
export default ProductCard;