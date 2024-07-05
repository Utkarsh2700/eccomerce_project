// import React from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import useFetch from "@/hooks/useFetch";
// import Img from "../lazyLoadImage/Img";
// import Stars from "../stars/Stars";
// import Autoplay from "embla-carousel-autoplay";
// import { CiHeart } from "react-icons/ci";
// import ContentWrapper from "../contentWrapper/ContentWrapper";
// import { useDispatch, useSelector } from "react-redux";
// // import { setProducts } from "@/store/productsSlice";
// import PropTypes from "prop-types";
// import { useNavigate } from "react-router-dom";
// import { addItem } from "@/store/cartSlice";
// import { GrAddCircle } from "react-icons/gr";
// import { AiFillDelete } from "react-icons/ai";
// const CarouselSection = ({
//   url,
//   sortKey,
//   sortOrder,
//   title,
//   heading,
//   itemLimit,
//   delay,
//   product,
//   // key,
// }) => {
//   const dispatch = useDispatch();

//   const {
//     data: products,
//     error,
//     loading,
//   } = useFetch(url, {
//     sortBy: sortKey,
//     order: sortOrder,
//   });
//   // console.log(products);
//   // dispatch(setProducts(products));
//   // console.log();
//   const navigate = useNavigate();

//   // showing dynamic items on top of cart basically number
//   console.log(product);
//   const handleAddToBag = ({ product }) => {
//     dispatch(addItem(product.id));
//   };

//   const cartItems = useSelector((store) => store.cart.items);
//   // console.log(cartItems);
//   // const elementFound = cartItems.indexOf(products.items.id) >= 0;
//   // console.log(products.id, elementFound);

//   return (
//     <div className="carouselItem">
//       <ContentWrapper>
//         <span className="flex text-red-600 text-center items-center">
//           <div className="bg-red-600 h-8 w-3 mx-3"></div>
//           {heading}
//         </span>
//         <h3 className="text-4xl font-semibold">{title}</h3>
//         <div className="flex justify-center">
//           <Carousel
//             opts={{
//               align: "start",
//               loop: true,
//             }}
//             plugins={[
//               Autoplay({
//                 delay: delay,
//               }),
//             ]}
//             className="w-5/6 ml-12"
//           >
//             <CarouselContent>
//               {/* {Array.from({ length: 5 }).map((_, index) => ( */}
//               {products?.slice(0, itemLimit).map((product) => (
//                 <CarouselItem
//                   key={[product.id]}
//                   className="sm:basis-1/2 md:basis-1/2 lg:basis-1/5"
//                 >
//                   <div className="p-1 cursor-pointer">
//                     <Card>
//                       <CardContent
//                         className="relative flex aspect-square items-center justify-center p-6"
//                         onClick={() =>
//                           navigate(`/${product.category}/${product.id}`)
//                         }
//                       >
//                         <Img src={product.thumbnail} alt={product.title} />
//                         <span className="discountdesc absolute top-0 left-0 bg-red-500 text-white text-sm px-2 my-1 mx-1">
//                           -{Math.ceil(product.discountPercentage)}%
//                         </span>
//                         <span
//                           className="absolute top-2 right-1 dark:bg-slate-900 bg-gray-100 rounded-full"
//                           id="heart"
//                         >
//                           <CiHeart />
//                         </span>
//                       </CardContent>
//                       <div className="productDescription dark:bg-gray-900 bg-gray-200">
//                         <span className="pricing">
//                           <span className="text-red-600">${product.price}</span>
//                           <span className="line-through text-gray-600 px-2">
//                             $
//                             {Math.round(
//                               product.price *
//                                 (1 + product.discountPercentage / 100)
//                             )}
//                           </span>
//                         </span>
//                         <div>{product.title}</div>
//                         <div className="ratingnReviews flex">
//                           <Stars className="" rating={product.rating} />(
//                           {product.minimumOrderQuantity + 20})
//                         </div>
//                       </div>
//                       <div className="buttons flex flex-wrap">
//                         <button
//                           className="hover:bg-red-600 hover:text-white font-medium-text-base text-center rounded w-full flex items-center justify-center"
//                           onClick={handleAddToBag}
//                         >
//                           <GrAddCircle />
//                           Add to bag
//                         </button>
//                         <button
//                           className="hover:bg-red-600 hover:text-white font-medium-text-base text-center rounded w-full flex items-center justify-center"
//                           onClick={handleAddToBag}
//                         >
//                           <AiFillDelete /> Remove
//                         </button>
//                       </div>
//                     </Card>
//                   </div>
//                 </CarouselItem>
//               ))}
//               {/* // ))} */}
//             </CarouselContent>
//             <CarouselPrevious />
//             <CarouselNext />
//             <div className="allProducts flex justify-center my-2">
//               <p className="text-white bg-red-600 text-center rounded w-[200px] text-sm px-6 py-2">
//                 View All Products
//               </p>
//             </div>
//           </Carousel>
//         </div>
//       </ContentWrapper>
//     </div>
//   );
// };

// // CarouselSection.propTypes = {
// //   url: PropTypes.string.isRequired,
// //   sortKey: PropTypes.string,
// //   sortOrder: PropTypes.oneOf(["asc", "desc"]),
// //   title: PropTypes.string.isRequired,
// //   heading: PropTypes.string.isRequired,
// //   itemLimit: PropTypes.number,
// //   delay: PropTypes.number.isRequired,
// // };

// // CarouselSection.defaultProps = {
// //   sortKey: "id",
// //   sortOrder: "asc",
// //   itemLimit: 10,
// // };

// export default CarouselSection;

// CarouselSection.jsx

// import React from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import Img from "../lazyLoadImage/Img";
// import Stars from "../stars/Stars";
// import { CiHeart } from "react-icons/ci";
// import ContentWrapper from "../contentWrapper/ContentWrapper";
// import { useDispatch } from "react-redux";
// import { addItem } from "@/store/cartSlice";
// import { GrAddCircle } from "react-icons/gr";
// import { AiFillDelete } from "react-icons/ai";
// import Autoplay from "embla-carousel-autoplay";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import useFetch from "@/hooks/useFetch";
import Img from "../lazyLoadImage/Img";
import Stars from "../stars/Stars";
import Autoplay from "embla-carousel-autoplay";
import { CiHeart } from "react-icons/ci";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addItem, removeItem } from "@/store/cartSlice";
import { GrAddCircle } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";
import { addToWishList, removeFromWishList } from "@/store/wishlistSlice";

const CarouselSection = ({ products, title, heading, itemLimit, delay }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  const navigate = useNavigate();
  const wishlistItems = useSelector((store) => store.wishlist.items);
  // console.log("cartItems:", cartItems); // Log the cart items to debug

  const handleAddToBag = (product) => {
    dispatch(addItem(product.id));
  };

  const handleRemoveFromBag = (productId) => {
    dispatch(removeItem(productId));
  };

  const isProductInCart = (productId) => {
    return cartItems.includes(productId);
  };

  const handleViewAllProducts = () => {
    navigate("/explore");
  };

  const isProductInWishlist = (productId) => {
    return wishlistItems.some((item) => item.id === productId);
  };

  const handleAddToWishlist = (product) => {
    if (isProductInWishlist(product.id)) {
      dispatch(removeFromWishList(product.id));
    } else {
      dispatch(addToWishList(product));
    }
  };

  return (
    <div className="carouselItem">
      <ContentWrapper>
        <span className="flex text-red-600 text-center items-center">
          <div className="bg-red-600 h-8 w-3 mx-3"></div>
          {heading}
        </span>
        <h3 className="text-4xl font-semibold">{title}</h3>
        <div className="flex justify-center">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: delay,
              }),
            ]}
            className="w-5/6 sm:ml-12"
          >
            <CarouselContent>
              {products?.slice(0, itemLimit).map((product) => (
                <CarouselItem
                  key={product.id}
                  className="sm:basis-1/2 md:basis-1/2 lg:basis-1/5"
                >
                  <div className="p-1 cursor-pointer">
                    <Card>
                      <CardContent
                        className="relative flex aspect-square items-center justify-center p-6"
                        onClick={() =>
                          navigate(`/${product.category}/${product.id}`)
                        }
                      >
                        <Img src={product.thumbnail} alt={product.title} />
                        <span className="discountdesc absolute top-0 left-0 bg-red-500 text-white text-sm px-2 my-1 mx-1">
                          -{Math.ceil(product.discountPercentage)}%
                        </span>
                        <span
                          className="absolute top-2 right-1 dark:bg-slate-900 bg-gray-100 rounded-full"
                          id="heart"
                        >
                          <span onClick={() => handleAddToWishlist(product)}>
                            <CiHeart
                              className={`
                            ${
                              isProductInWishlist(product.id)
                                ? "fill-red-600 "
                                : ""
                            }`}
                            />
                          </span>
                        </span>
                      </CardContent>
                      <div className="productDescription dark:bg-gray-900 bg-gray-200">
                        <span className="pricing">
                          <span className="text-red-600">${product.price}</span>
                          <span className="line-through text-gray-600 px-2">
                            $
                            {Math.round(
                              product.price /
                                (1 - product.discountPercentage / 100)
                            )}
                          </span>
                        </span>
                        <div>{product.title}</div>
                        <div className="ratingnReviews flex">
                          <Stars className="" rating={product.rating} />(
                          {product.minimumOrderQuantity + 20})
                        </div>
                      </div>
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
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
            <div className="allProducts flex justify-center my-2">
              <p
                className="text-white bg-red-600 text-center rounded w-[200px] text-sm px-6 py-2 hover:shadow-3xl transition-all duration-500 ease-in-out cursor-pointer
                "
                onClick={handleViewAllProducts}
              >
                View All Products
              </p>
            </div>
          </Carousel>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default CarouselSection;
