import React from "react";
import "./product-list.css";
import productArray from "../../db";
import { useState, useEffect } from "react";

//const [product, setProduct] = useState([]);

console.log(typeof productArray);

const ProductList = (product) => {
  return (
    <div>
      {product.map(function (item, i) {
        return (
          <div className="repeat" key={i}>
            <div className="box">
              <div className="product-container">
                <div className="product-card">
                  <img
                    className="product-image"
                    src={item.image}
                    alt={item.name}
                  />
                  <div className="product-info">
                    <h2 className="product-title">{item.name}</h2>
                    <p className="product-description">{item.allergies}</p>
                    <p>{item.price}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
