import React from "react";
import "./product-list.css";

const ProductList = ({ data }) => {
  return (
    <div className="repeat">
      {data.map((product, i) => (
        <div key={i} className="box">
          <div className="product-container">
            <div className="product-card">
              <img
                className="product-image"
                src={product.image}
                alt={product.name}
              />
              <div className="product-info">
                <h2 className="product-title">{product.name}</h2>
                <p className="product-description">
                  Allergies: {product.allergies.join(", ")}
                </p>
                <p className="product-price">£{product.prices}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
