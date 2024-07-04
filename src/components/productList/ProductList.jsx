import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../../store/productsSlice";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .them((data) => dispatch(setProducts(data)));
  }, [dispatch]);

  return (
    <div className="productsList">
      {products.map((product) => {
        return (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
