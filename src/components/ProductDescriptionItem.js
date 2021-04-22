import React from "react";

const ProductDescriptionItem = (props) => {
  return (
    <div className="prodDesc__container">
      <section>
        <img
          src={props.productURL}
          alt={props.productName}
          className="prodDesc__image"
        />
      </section>
      <section className="prodDesc__details">
        <div className="prodDesc__productName">
          <strong>{props.productName}</strong>
        </div>
        <div className="prodDesc__productName">
          <strong>ProdId: {props.id}</strong>
        </div>
        <div className="prodDesc__productPrice">
          <strong>Price: CDN$ </strong>
          {props.price}
        </div>
        <div className="prodDesc__productDescription">
          <strong>Product Description: </strong>
          {props.description}
        </div>
        <div>
          <button type="submit" className="prodDesc_addToCartButton">
            Add to Cart
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProductDescriptionItem;
