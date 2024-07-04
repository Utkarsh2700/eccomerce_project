import React, { useState } from "react";
import Img from "@/components/lazyLoadImage/Img";
import { useDispatch, useSelector } from "react-redux";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { removeItem } from "@/store/cartSlice";

const BagItems = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    dispatch(removeItem(item.id));
  };
  const [quantity, setQauntity] = useState("1");
  return (
    <div className="bagItems">
      <div className="cart-items-container">
        <div className="products">
          <div className="product text-base font-medium flex justify-between items-center">
            <div className="imgCont w-1/6">
              <Img src={item.thumbnail} className={"h-[54px] w-[54px]"} />
            </div>
            <div className="name w-1/6">{item.title}</div>
            <div className="number border border-gray-400  h-11 w-1/6">
              <input
                value={quantity}
                type="number"
                min={"1"}
                max={"100"}
                onChange={(e) => setQauntity(e.target.value)}
                className="w-full h-full dark:text-white dark:bg-black text-center"
                style={{
                  // Custom styles to ensure arrows appear
                  MozAppearance: "textfield",
                  WebkitAppearance: "none",
                  appearance: "none",
                }}
              />
            </div>
            <div className="rate w-1/6">$ {item.price}</div>
            <div
              className="removeItem cursor-pointer"
              onClick={handleRemoveItem}
            >
              <RiDeleteBin5Fill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BagItems;
