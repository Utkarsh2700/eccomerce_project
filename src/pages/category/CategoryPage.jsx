import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setProductsByCategory } from "../../store/productsSlice";
import useFetch from "@/hooks/useFetch";
import ContentWrapper from "@/components/contentWrapper/ContentWrapper";
import { AiFillDelete } from "react-icons/ai";
import { GrAddCircle } from "react-icons/gr";
import { addItem, removeItem } from "@/store/cartSlice";
import Img from "@/components/lazyLoadImage/Img";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const productsByCategory = useSelector((state) => state.products.byCategory);
  console.log(productsByCategory);
  const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems);

  const { data, error, loading } = useFetch(
    `https://dummyjson.com/products/category/${categoryName}`
  );

  // console.log("categoryData", data);
  useEffect(() => {
    if (data) {
      dispatch(setProductsByCategory(data.products));
    }
  }, [data, dispatch]);

  const isProductInCart = (productId) => {
    // console.log(cartItems.includes(productId));
    return cartItems.includes(productId);
  };
  const handleAddToBag = (product) => {
    dispatch(addItem(product.id));
    // console.log("addedItem", product.id);
  };
  const handleRemoveFromBag = (product) => {
    dispatch(removeItem(product.id));
    // console.log("removedId", product.id);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading products!</div>;
  }

  return (
    <div className="dark:bg-black dark:text-white py-4">
      <ContentWrapper>
        <h1 className="text-4xl font-semibold capitalize">
          {categoryName} Products
        </h1>
        <div className="product-list grid-cols-2 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {productsByCategory.map((product) => (
            <div
              key={product.id}
              className="product-card hover:shadow-2xl hover:bg-gray-200 shadow-gray-800 rounded-2xl cursor-pointer"
            >
              <Img
                src={product.thumbnail}
                alt={product.title}
                onClick={() => navigate(`/${product.category}/${product.id}`)}
              />
              <div className="group-hover:"></div>
              <h2 className="text-xl font-bold">{product.title}</h2>
              <p className="text-xl font-semibold">${product.price}</p>
              {isProductInCart(product.id) ? (
                <button
                  className="hover:bg-red-600 hover:text-white font-medium-text-base text-center rounded w-full flex items-center justify-center"
                  onClick={() => handleRemoveFromBag(product)}
                >
                  <AiFillDelete /> Remove
                </button>
              ) : (
                <button
                  className="bg-green-500 hover:bg-red-600 hover:text-white font-medium-text-base text-center rounded w-full flex items-center justify-center"
                  onClick={() => handleAddToBag(product)}
                >
                  <GrAddCircle />
                  Add to bag
                </button>
              )}
            </div>
          ))}
        </div>
      </ContentWrapper>
    </div>
  );
};

export default CategoryPage;
