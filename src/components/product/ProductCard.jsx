const ProductCard = ({ product }) => {
  const { id, name, price, image,title } = product;
  return (<div className="card">   
    <div >
      <div className="price">
        <h3>{price}</h3>
      </div>
      <img src={image} alt={title} width="150px"/>
      <div>
        <h2>{title }</h2>
      </div>
    </div>
    </div>)
};

export default ProductCard;
