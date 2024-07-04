import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CiHeart } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishList } from "@/store/wishlistSlice";
import Img from "../lazyLoadImage/Img";

const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.items);

  const removeFromFavorites = (product) => {
    dispatch(removeFromWishList(product));
    console.log("removed from bag", product.title);
  };
  return (
    <div className="wishlist">
      <Sheet>
        <SheetTrigger>
          <CiHeart />
        </SheetTrigger>
        <SheetContent>
          <div className="p-4">
            <h2 className="text-xl font-bold">Your Wishlist</h2>
            {wishlistItems.length === 0 ? (
              <p>Your wishlist is empty.</p>
            ) : (
              <div className="grid grid-cols-1 gap-4">
                {wishlistItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between"
                  >
                    <Img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-16 h-16"
                    />
                    <div className="flex flex-col">
                      <span>{item.title}</span>
                      <span>${item.price}</span>
                      <span onClick={() => removeFromFavorites(item)}>
                        remove
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Wishlist;
