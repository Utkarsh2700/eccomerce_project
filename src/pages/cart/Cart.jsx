import React, { useState } from "react";
import { Slash } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import ContentWrapper from "@/components/contentWrapper/ContentWrapper";
import BagItems from "@/components/bag/BagItems";
import BagSummary from "@/components/bag/BagSummary";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const bagItems = useSelector((state) => state.cart.items);
  // due to below line only items in byStock array are visible in bag page
  // const items = useSelector((state) => state.products.byStock);

  // To Add all the items from byDiscouunt Array , byRating Array , byStock Array we will use  the below approach

  // const itemsByStock = useSelector((state) => state.products.byStock);
  // const itemsByDiscount = useSelector((state) => state.products.byDiscount);
  // const itemsByRating = useSelector((state) => state.products.byRating);

  // const items = [...itemsByDiscount, ...itemsByRating, ...itemsByStock];

  // Above approach caused duplicate items

  const itemsByStock = useSelector((state) => state.products.byStock) || [];
  const itemsByDiscount =
    useSelector((state) => state.products.byDiscount) || [];
  const itemsByRating = useSelector((state) => state.products.byRating) || [];
  const itemsExplore =
    useSelector((state) => state.products.items.products) || [];
  console.log("itemsExplore = ", itemsExplore);
  const productsByCategory = useSelector((state) => state.products.byCategory);
  // console.log("productsByCategory", productsByCategory);

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

  // const finalItems = items.filter((item) => {
  //   const itemIndex = bagItems.indexOf(item.id);
  //   return itemIndex >= 0;
  // });

  const finalItems = items.filter((item) => bagItems.includes(item.id));

  console.log("products", items);
  console.log(bagItems);

  return (
    <div className="cart-page dark:bg-black dark:text-white">
      <Breadcrumb className="mx-3">
        <BreadcrumbList>
          <BreadcrumbItem>
            <NavLink to={"/"} className={"cursor-pointer"}>
              {/* <BreadcrumbLink href="/"> */}
              Home
              {/* </BreadcrumbLink> */}
            </NavLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <Slash />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink href="/bag">Cart</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <Slash />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <ContentWrapper>
        <div className="title flex items-center justify-between  my-4 text-base font-medium">
          <span className="prod w-1/6">Product</span>
          <span className="price w-1/6">Price</span>
          <span className="quantity w-1/6">Quantity</span>
          <span className="subTotal w-1/6">SubTotal</span>
        </div>
        {finalItems.map((item, index) => (
          <BagItems item={item} key={index} />
        ))}
        <div className="cartOptions flex items-center justify-between">
          <span className="return border border-gray-400 px-4 cursor-pointer h-[56px] text-base font-medium flex items-center justify-center my-2 hover:bg-red-600 hover:text-white hover:shadow-3xl transition-all duration-500 ease-in-out">
            Return To Shop
          </span>
          <span className="update border border-gray-400 h-[56px] px-4 cursor-pointer text-base font-medium flex items-center justify-center my-2 hover:bg-red-600 hover:text-white  hover:shadow-3xl transition-all duration-500 ease-in-out">
            Update Cart
          </span>
        </div>
        <BagSummary />
      </ContentWrapper>
    </div>
  );
};

export default Cart;
