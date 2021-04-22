import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BestSellerProducts from "./BestSellerProducts";
import { useState, useEffect } from "react";
const BestSeller = () => {
  const [bestSellers, setBestSellers] = useState([]);

  useEffect(() => {
    fetch("https://tranquil-peak-03364.herokuapp.com/bestsellers")
      .then((res) => res.json())
      .then((data) => {
        setBestSellers(data);
      })
      .catch((err) => console.log(`Error ${err}`));
  }, []);

  return (
    <>
      <Header />
      <div className="bestSeller__body">
        <div className="bestSeller__heading">
          <h1>Best Sellers </h1>
        </div>
        <div className="bestSeller__productItems">
        {bestSellers.map((bestSellerProduct) => (
          <BestSellerProducts
            key={bestSellerProduct.id}
            id={bestSellerProduct.id}
            productName={bestSellerProduct.productName}
            price={bestSellerProduct.price}
            description={bestSellerProduct.description}
            productURL={bestSellerProduct.productURL}
          />
        ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BestSeller;
