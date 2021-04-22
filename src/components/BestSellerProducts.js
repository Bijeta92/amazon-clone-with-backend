import React, { useContext } from "react";
import Product from "../components/Product";
import AmazonContext from "../Context/AmazonCloneContext";

const BestSellerProducts = (props) => {
  const { products } = useContext(AmazonContext);
  return (
    <div>
      <Product
        key={props.id}
        id={props.id}
        pic={props.productURL}
        prodName={props.productName}
        prodPrice={props.price}
        prodDescription={props.description}
      />
    </div>
  );
};

export default BestSellerProducts;
