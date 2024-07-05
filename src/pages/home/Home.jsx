// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";

// import Banner from "@/components/banner/Banner";

// import CarouselSection from "@/components/carousel/CarouselSection";
// import useFetch from "@/hooks/useFetch";
// import { Separator } from "@/components/ui/separator";
// import Category from "@/components/category/Category";
// import { setProducts } from "@/store/productsSlice";

// const Home = () => {
//   const {
//     data: products,
//     error,
//     loading,
//   } = useFetch("https://dummyjson.com/products");
//   // console.log(`products ${products}`);
//   // console.log(products);
//   const selector = useSelector((state) => state.products);
//   const dispatch = useDispatch();
//   dispatch(setProducts(products));

//   // Ensure products is an array before mapping
//   // if (!Array.isArray(products)) {
//   //   console.log("Products is not an array:", products);
//   //   return <div>Loading...</div>;
//   // }

//   return (
//     <div className="home dark:text-white dark:bg-black">
//       <div className="banners">
//         <Banner />
//         <CarouselSection
//           url="https://dummyjson.com/products"
//           sortKey="discountPercentage"
//           sortOrder="desc"
//           title="Flash Sales"
//           heading="Today's"
//           itemLimit={10}
//           delay={5000}
//         />
//         <Separator />
//         <Category />
//         <CarouselSection
//           url="https://dummyjson.com/products"
//           sortKey="rating"
//           sortOrder="desc"
//           title="Best Selling Products"
//           heading="This Month"
//           itemLimit={20}
//           delay={60000}
//         />
//         <Separator />
//         <CarouselSection
//           url="https://dummyjson.com/products"
//           sortKey="stock"
//           sortOrder="desc"
//           title="Explore Our Products"
//           heading="Our Products"
//           itemLimit={20}
//           delay={120000}
//         />
//         <Separator />
//       </div>
//       <div className="productsList">
//         {products?.map((product) => {
//           return (
//             <div key={product.id}>
//               <h3>{product.name}</h3>
//               <p>{product.description}</p>
//               <p>${product.price}</p>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Home;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Banner from "@/components/banner/Banner";

// import CarouselSection from "@/components/carousel/CarouselSection";
import useFetch from "@/hooks/useFetch";
import { Separator } from "@/components/ui/separator";
import Category from "@/components/category/Category";
import {
  // setProducts,
  setProductsByDiscount,
  setProductsByRating,
  setProductsByStock,
} from "@/store/productsSlice";
import DiscountCarousel from "@/components/productCarousel/DiscountCarousel";
import RatingCarousel from "@/components/productCarousel/RatingCarousel";
import StockCarousel from "@/components/productCarousel/StockCarousel";
import { Skeleton } from "@/components/ui/skeleton";
import ContentWrapper from "@/components/contentWrapper/ContentWrapper";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import { auth, db } from "@/components/firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CardSkeleton from "@/components/loadingSkeletons/CardSkeleton";

const Home = () => {
  const [userDetails, setUserDetails] = useState();
  const fetchUserData = async () => {
    // setUserDetails(user)
    auth.onAuthStateChanged(async (user) => {
      console.log(user);
      const docRef = doc(db, "Users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log(docSnap.data());
        setUserDetails(docSnap.data());
        console.log(userDetails);
        if (userDetails) {
          toast.success(
            `Welcome 🙏
            ${userDetails?.firstName}
            
            ${userDetails?.lastName}`,
            { position: "top-right" }
          );
        }
        console.log(userDetails);
      } else {
        console.log("User is not logged in");
      }
    });
  };
  useEffect(() => {
    fetchUserData();
  }, []);

  const dispatch = useDispatch();
  const {
    data: discountData,
    error: discountError,
    loading: discountLoading,
  } = useFetch("https://dummyjson.com/products", {
    sortBy: "discountPercentage",
    order: "desc",
  });
  // console.log("discountData =", discountData);

  const {
    data: ratingData,
    error: ratingError,
    loading: ratingLoading,
  } = useFetch("https://dummyjson.com/products", {
    sortBy: "rating",
    order: "desc",
  });
  // console.log("ratingData =", ratingData);

  const {
    data: stockData,
    error: stockError,
    loading: stockLoading,
  } = useFetch("https://dummyjson.com/products", {
    sortBy: "stock",
    order: "desc",
  });
  // console.log("stockData =", stockData);

  useEffect(() => {
    if (discountData) {
      dispatch(setProductsByDiscount(discountData.products));
    }
  }, [discountData, dispatch]);

  useEffect(() => {
    if (ratingData) {
      dispatch(setProductsByRating(ratingData.products));
    }
  }, [ratingData, dispatch]);

  useEffect(() => {
    if (stockData) {
      dispatch(setProductsByStock(stockData.products));
    }
  }, [stockData, dispatch]);

  const productsByDiscount = useSelector((state) => state.products.byDiscount);

  const productsByRating = useSelector((state) => state.products.byRating);
  const productsByStock = useSelector((state) => state.products.byStock);

  if (discountLoading || ratingLoading || stockLoading)
    return (
      <>
        <div>
          <Skeleton className=" w-full p-4 h-[400px]">
            <Skeleton className="bg-blue-950 flex items-center justify-center p-6 h-[380px]" />
          </Skeleton>
        </div>
        <ContentWrapper className="bg-blue-950">
          <Skeleton className="flex text-red-600 text-center items-center">
            <Skeleton className="bg-red-600 h-8 w-3 mx-3"></Skeleton>
            {/* {heading} */}
          </Skeleton>
          <Skeleton className="bg-blue-950 text-4xl font-semibold">
            {/* {title} */}
          </Skeleton>
          <Skeleton className="bg-blue-950 flex justify-center">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 12000,
                }),
              ]}
              className="w-5/6 ml-12"
            >
              <span className="flex items-center justify-center">
                <CarouselContent>
                  {/* {products?.slice(0, itemLimit).map((product) => ( */}
                  <CarouselItem
                    // key={product.id}
                    className="sm:basis-1/2 md:basis-1/2 lg:basis-1/5"
                  >
                    <Skeleton className="bg-blue-950 p-1 cursor-pointer flex gap-4">
                      <Card>
                        <CardContent
                          className="relative flex aspect-square items-center justify-center p-6 h-80 w-72 sm:h-64 sm:w-32 lg:h-60 lg:w-40 md:h-72 md:w-56"
                          // onClick={() =>
                          //   navigate(`/${product.category}/${product.id}`)
                          // }
                        >
                          {/* <Img src={product.thumbnail} alt={product.title} /> */}
                          <span className="discountdesc absolute top-0 left-0 bg-red-500 text-white text-sm px-2 my-1 mx-1">
                            {/* -{Math.ceil(product.discountPercentage)}% */}
                          </span>
                          <span
                            className="absolute top-2 right-1 dark:bg-slate-900 bg-gray-100 rounded-full"
                            id="heart"
                          >
                            {/* <CiHeart /> */}
                          </span>
                        </CardContent>
                        <Skeleton className="productDescription dark:bg-gray-900 bg-gray-200">
                          <Skeleton className="pricing">
                            <Skeleton className="text-red-600">
                              {/* ${product.price} */}
                            </Skeleton>
                            <Skeleton className="bg-blue-950 line-through text-gray-600 px-2">
                              {/* $
                            {Math.round(
                              product.price /
                                (1 - product.discountPercentage / 100)
                            )} */}
                            </Skeleton>
                          </Skeleton>
                          <Skeleton>{/* {product.title} */}</Skeleton>
                          <Skeleton className="ratingnReviews flex bg-blue-950">
                            {/* <Stars className="" rating={product.rating} />( */}
                            {/* {product.minimumOrderQuantity + 20}) */}
                          </Skeleton>
                        </Skeleton>
                        <Skeleton className="buttons flex flex-wrap bg-blue-950">
                          {/* {isProductInCart(product.id) ? ( */}
                          <button
                            className="hover:bg-red-600 hover:text-white font-medium-text-base text-center rounded w-full flex items-center justify-center"
                            // onClick={() => handleRemoveFromBag(product.id)}
                          >
                            {/* <AiFillDelete /> Remove */}
                          </button>
                          {/* ) : ( */}
                          {/* <Skeleton */}
                          {/* className="bg-green-500 hover:bg-red-600 hover:text-white font-medium-text-base text-center rounded w-full flex items-center justify-center"
                            // onClick={() => handleAddToBag(product)}
                          > */}
                          {/* <GrAddCircle />
                            Add to bag */}
                          {/* </Skeleton> */}
                          {/* )} */}
                        </Skeleton>
                      </Card>
                      <span className="hidden sm:flex">
                        <CardSkeleton />
                      </span>
                      <span className="hidden lg:flex">
                        <CardSkeleton />
                      </span>
                      <span className="hidden lg:flex">
                        <CardSkeleton />
                      </span>
                      <span className="hidden lg:flex">
                        <CardSkeleton />
                      </span>
                    </Skeleton>
                  </CarouselItem>
                  {/* ))} */}
                </CarouselContent>
              </span>

              <CarouselPrevious />
              <CarouselNext />
              <Skeleton className="allProducts flex justify-center my-2 bg-blue-950">
                <Skeleton
                  className="text-white bg-red-600 text-center rounded w-[200px] text-sm px-6 py-2 hover:shadow-3xl transition-all duration-500 ease-in-out cursor-pointer 
                "
                  // onClick={handleViewAllProducts}
                >
                  View All Products
                </Skeleton>
              </Skeleton>
            </Carousel>
          </Skeleton>
        </ContentWrapper>
      </>
    );
  if (discountError || ratingError || stockError)
    return <div>Error loading data</div>;

  return (
    <div className="home dark:text-white dark:bg-black">
      <ToastContainer />
      <div className="banners">
        <Banner />
        <DiscountCarousel products={productsByDiscount} />
        <Separator />
        <Category />
        <RatingCarousel products={productsByRating} />
        <Separator />
        <StockCarousel products={productsByStock} />
        <Separator />
      </div>
    </div>
  );
};

export default Home;
