// import useFetch from "@/hooks/useFetch";
// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setCategories } from "../../store/productsSlice";

// const Category = () => {
//   const dispatch = useDispatch();
//   const categories = useSelector((state) => state.products.categories);
//   const { data, error, loading } = useFetch(
//     "https://dummyjson.com/products/categories",
//     (data) => setCategories(data)
//   );
//   //   dispatch(setCategories(data));

//   useEffect(() => {
//     if (data) {
//       dispatch(setCategories(data)); // Dispatch action if data is available
//     }
//   }, [data, dispatch]);

//   console.log(categories);
//   //   console.log(products);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error loading categories!</div>;
//   }
//   // Ensure categories is an array before mapping
//   if (!Array.isArray(categories)) {
//     return <div>No categories available.</div>;
//   }

//   return (
//     <div className="category">
//       {categories.map((category, index) => (
//         <div key={index}>{category}</div>
//       ))}
//     </div>
//   );
// };

// export default Category;

// Category.jsx
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategories } from "../../store/productsSlice";
import useFetch from "@/hooks/useFetch";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Category = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.products.categories);
  const carouselContainer = useRef();
  const navigate = useNavigate();

  const { data, error, loading } = useFetch(
    "https://dummyjson.com/products/category-list"
  );

  useEffect(() => {
    if (data) {
      dispatch(setCategories(data));
    }
  }, [data, dispatch]);

  //   console.log(categories);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading categories!</div>;
  }

  if (!Array.isArray(categories) || categories.length === 0) {
    return <div>No categories available.</div>;
  }

  // Slicing the categories to get only the first five
  const firstFiveCategories = categories.slice(0, 5);

  const navigation = (dir) => {
    const container = carouselContainer.current;
    // console.log(container);
    // console.dir(container);

    const scrollAmount =
      dir === "left"
        ? container.scrollLeft - (container.offsetWidth + 32)
        : container.scrollLeft + (container.offsetWidth + 32);

    container.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  // Function to handle category click
  const handleCategoryClick = (category) => {
    navigate(`/category/${category}`);
  };
  const handleViewAllProducts = () => {
    navigate("/explore");
  };

  return (
    <div className="category">
      <ContentWrapper>
        <span className="flex text-red-600 text-center items-center">
          <div className="bg-red-600 h-8 w-3 mx-3"></div>Categories
        </span>
        <div className="categoriesNavigation flex justify-between">
          <h3 className="text-4xl font-semibold">Browse By Category</h3>
          <span className="flex justify-between items-center">
            <span className="mx-1 bg-gray-200 dark:bg-gray-800 p-1 rounded-full cursor-pointer">
              <FaArrowLeft onClick={() => navigation("left")} />
            </span>
            <span className="mx-1 bg-gray-200 dark:bg-gray-800 p-1 rounded-full cursor-pointer">
              <FaArrowRight onClick={() => navigation("right")} />
            </span>
          </span>
        </div>
        <div className="row flex overflow-x-hidden" ref={carouselContainer}>
          {categories.map((category, index) => (
            <div
              className="capitalize flex items-center h-[100px] min-w-[100px] justify-center flex-col bg-secondary text-secondary-foreground mx-4 my-2 shadow-lg shadow-gray-600 cursor-pointer"
              key={index}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </div>
          ))}
        </div>
        <div className="allProducts flex justify-center my-2">
          <p
            className="text-white bg-red-600 text-center rounded w-[200px] text-sm px-6 py-2 hover:shadow-3xl transition-all duration-500 ease-in-out cursor-pointer"
            onClick={handleViewAllProducts}
          >
            View All Products
          </p>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Category;
