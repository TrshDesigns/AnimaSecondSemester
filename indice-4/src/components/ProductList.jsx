import ProductCard from "./ProductCard";

function ProductList() {
  return (
    <>
    <div className="cardContainer">
       <h2>Our products</h2>
       <div>
        <ProductCard></ProductCard>
       </div>
    </div>
    </>
  );
}

export default ProductList;
