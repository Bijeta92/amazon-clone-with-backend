import React, { useContext } from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductDescriptionItem from "./ProductDescriptionItem";

const ProductDescription = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    console.log(`the clicked product ID: ${id}`);
    //console.log(`https://tranquil-peak-03364.herokuapp.com/products/`)
    fetch("https://tranquil-peak-03364.herokuapp.com/products/" + id)
      .then((res) => res.json())
      .then((product) => {
        //console.log(product.body);
        setProduct(product.body);
      })
      .catch((err) => console.log(`Error ${err}`));
  }, []);

  // console.log(product);

  return (
    <>
      <Header />
      {product.map((productDescriptionItem) => (
        <ProductDescriptionItem
          key={productDescriptionItem.id}
          id={productDescriptionItem.id}
          productURL={productDescriptionItem.productURL}
          productName={productDescriptionItem.productName}
          price={productDescriptionItem.price}
          description={productDescriptionItem.description}
        />
      ))}

      <Footer />
    </>
  );
};

export default ProductDescription;
