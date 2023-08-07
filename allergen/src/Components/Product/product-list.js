import React from "react";
import "./product-list.css";

const ProductList = (header, image, description) => {
  return (
    <div className='repeat'>
      {Array.from({ length: 5 }).map((_, i) => (
        <div className="box">
          <div key={i} className="product-container">
          <div className="product-card">
          <image className="product-image">product-image</image>
            <div className = "product-info">
              <h2 className="product-title">Title</h2>
              <p className="product-description">product-description</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
