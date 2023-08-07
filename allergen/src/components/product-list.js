import React from "react";
import "./product-list.css";

const ProductList = (header, image, description) => {
  return (
    <div>
      {Array.from({ length: 5 }).map((_, i) => (
        <div className="box">
          <div key={i} className="product-container">
            <h2 className="product-title">Title</h2>
            <image className="product-image"></image>
            <p className="product-description"></p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
