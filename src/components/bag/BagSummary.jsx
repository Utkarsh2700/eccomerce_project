import React from "react";
import { Separator } from "@/components/ui/separator";
import { useSelector } from "react-redux";

const BagSummary = () => {
  const bagItemIds = useSelector((state) => state.cart.items);
  // prices of items not added to summary which are not present in byStock array
  //   const items = useSelector((state) => state.products.byStock);

  //   const itemsByStock = useSelector((state) => state.products.byStock);
  //   const itemsByDiscount = useSelector((state) => state.products.byDiscount);
  //   const itemsByRating = useSelector((state) => state.products.byRating);

  //   const items = [...itemsByDiscount, ...itemsByRating, ...itemsByStock];

  // Above approach caused duplicate items

  const itemsByStock = useSelector((state) => state.products.byStock) || [];
  const itemsByDiscount =
    useSelector((state) => state.products.byDiscount) || [];
  const itemsByRating = useSelector((state) => state.products.byRating) || [];
  const itemsExplore =
    useSelector((state) => state.products.items.products) || [];

  const productsByCategory = useSelector((state) => state.products.byCategory);
  const itemsMap = new Map();
  [
    ...itemsByStock,
    ...itemsByDiscount,
    ...itemsByRating,
    ...itemsExplore,
    ...productsByCategory,
  ].forEach((item) => {
    itemsMap.set(item.id, item);
  });

  const items = Array.from(itemsMap.values());

  const finalItems = items.filter((item) => {
    const itemIndex = bagItemIds.indexOf(item.id);
    return itemIndex >= 0;
  });
  let totalItem = bagItemIds.length;
  let subTotal = 0;
  let totalDiscount = 0;
  let shippingFee = 5;
  finalItems.forEach((bagItem) => {
    subTotal += bagItem.price;
    totalDiscount +=
      bagItem.price / (1 - bagItem.discountPercentage / 100) - bagItem.price;
    console.log("SubTotal =", subTotal, "totalDiscount =", totalDiscount);
  });

  let total = subTotal - totalDiscount + shippingFee;

  //   const bagSummary = {
  //     totalItem: bagItemIds.length,
  //     totalMRP: 1750,
  //     totalDiscount: 999,
  //     finalPayment: 1755,
  //     shippingFee: 5,
  //   };

  return (
    <div className="bagSummary">
      <div className="bag-summary my-4 flex justify-between">
        <div className="coupon text-base font-medium w-1/2 flex flex-wrap h-full">
          <input
            type="text"
            placeholder="Coupon Code"
            name=""
            id=""
            className="border border-black p-2 mr-2 my-2"
          />
          <span className="bg-red-600 text-white  rounded cursor-pointer p-2 my-2 hover:shadow-3xl transition-all duration-300 ease-in-out">
            Apply Coupon
          </span>
        </div>
        <div className="cartTotal border border-black w-2/5">
          <div className="total text-xl font-medium justify-start px-2 py-2">
            Cart Total{" "}
            <span className="text-gray-700 font-normal text-sm">
              ({totalItem} Items)
            </span>
          </div>
          <div className="subtotal flex justify-between px-2 py-2">
            <span>SubTotal</span>
            <span>${subTotal.toFixed(2)}</span>
          </div>
          <Separator />
          <div className="subtotal flex justify-between px-2 py-2">
            <span>Discount</span>
            <span className="text-green-500">-${totalDiscount.toFixed(2)}</span>
          </div>
          <Separator />
          <div className="subtotal flex justify-between px-2 py-2">
            <span>Shipping</span>
            <span>${shippingFee}</span>
          </div>
          <Separator />
          <div className="subtotal flex justify-between px-2 py-2">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <div className="checkout flex justify-center pt-2 pb-6">
            <div className="bg-red-600 text-white text-base font-medium px-4 py-2 cursor-pointer w-2/3 flex justify-center rounded hover:shadow-3xl transition-all duration-300 ease-in-out">
              Proceed To Checkout
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BagSummary;
