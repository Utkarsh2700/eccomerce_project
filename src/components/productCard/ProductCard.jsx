import { addItem, removeItem } from "@/store/cartSlice";
import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { GrAddCircle } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Img from "../lazyLoadImage/Img";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const navigate = useNavigate();
  //   console.log(cartItems);

  const isProductInCart = () => {
    return cartItems.includes(product.id);
  };
  const handleAddToBag = () => {
    dispatch(addItem(product.id));
  };
  const handleRemoveFromBag = () => {
    dispatch(removeItem(product.id));
  };

  return (
    <div className="productCard m-2">
      <div className="relative group cursor-pointer overflow-hidden duration-500 w-64 h-80 bg-zinc-800 text-gray-50 p-5">
        <div className="">
          <div className="group-hover:scale-110 w-full h-60 bg-blue-400 duration-500">
            <Img
              src={product.thumbnail}
              alt=""
              onClick={() => navigate(`/${product.category}/${product.id}`)}
            />
          </div>
          <div className="absolute w-56 left-0 p-5 -bottom-16 duration-500 group-hover:-translate-y-12">
            <div className="absolute -z-10 left-0 w-64 h-28 opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-blue-900"></div>
            <span className="text-xl font-bold">
              {product.title.slice(0, 20)}...
            </span>
            <div className="group-hover:opacity-100 w-56 duration-500 opacity-0">
              <div className="buttons flex flex-wrap">
                {isProductInCart(product.id) ? (
                  <button
                    className="hover:bg-red-600 hover:text-white font-medium-text-base text-center rounded w-full flex items-center justify-center"
                    onClick={() => handleRemoveFromBag(product.id)}
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
