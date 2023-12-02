import ProductCard from "./ProductCard";


//?havada yakaladık parametreyi

const ProductList = ({ products }) => {
  console.log(products);
  return (
    <div className=".card-container">
      {/* {products.map((product) => (
        <div key={product.id}>
          <div>
            <h3>{product.price}</h3>
          </div>
          <img src={product.image} alt={product.title} width="150px"/>
          <div>
            <h2>{product.title }</h2>
          </div>
        </div>
      ))} */}


{products.map((product)=>(
    <ProductCard key={product.id} product={product}/>
))

}




    </div>
  );
};

export default ProductList;
