import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import data from "../data";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("/api/products");
      setProducts(result.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>Featured products</h1>
      <div className='products'>
        {products ? (
          products.map((product) => {
            return (
              <div className='product' key={product.slug}>
                <Link to={`/product/${product.slug}`}>
                  <img src={product.image} alt={product.name} />
                </Link>
                <div className='productInfo'>
                  <Link to={`/product/${product.slug}`}>
                    <p>{product.name}</p>
                  </Link>
                  <p>
                    <strong>${product.price}</strong>
                  </p>
                  <button>Add to Cart</button>
                </div>
              </div>
            );
          })
        ) : (
          <p>testing</p>
        )}
      </div>
    </div>
  );
};

export default HomeScreen;
