const ProductCard = ({price, image, title }) => {

  return (
    <div className="card">
      <div>
        <div className="price">
          <h3>{price}</h3>
        </div>
        <img src={image} alt={title} width="150px" />
        <div className="card__over">
          <h2>{title}</h2>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
