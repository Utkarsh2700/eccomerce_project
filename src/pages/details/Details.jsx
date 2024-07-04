import React from "react";
import useFetch from "@/hooks/useFetch";
import { useParams } from "react-router-dom";
import { Skeleton } from "@/components/ui/skeleton";
import Img from "@/components/lazyLoadImage/Img";
import CircleRating from "@/components/circleRating/CircleRating";
import { CiHeart } from "react-icons/ci";
import { Separator } from "@/components/ui/separator";
import { FaShippingFast } from "react-icons/fa";
import { RxUpdate } from "react-icons/rx";
import CarouselSection from "@/components/carousel/CarouselSection";
import { useDispatch, useSelector } from "react-redux";
import { addToWishList, selectIsInWishlist } from "@/store/wishlistSlice";

const Details = () => {
  const { id } = useParams();
  const { data, loading } = useFetch(`https://dummyjson.com/products/${id}`);
  const dispatch = useDispatch();
  const isInWishlist = useSelector((state) =>
    selectIsInWishlist(state, data?.id)
  );
  const addToFavorites = (product) => {
    dispatch(addToWishList(product));
    console.log("Favorites button was clicked");
  };

  return (
    <div className="dark:bg-black dark:text-white">
      {!loading ? (
        <>
          <div className="productDetails md:flex">
            <div className="img md:w-3/5 w-full p-2 rounded-md">
              <Img
                src={data.images[0]}
                className="shadow-bs drop-shadow-3xl w-full "
              />
            </div>
            <div className="productDetails md:w-2/5 w-full p-2">
              <div className="title text-3xl font-semibold">{data.title}</div>
              <div className="ratingNreview flex items-center justify-between text-lg">
                <div className="rating w-1/4 ">
                  <CircleRating
                    rating={data.rating.toFixed(1)}
                    className="dark:text-white"
                  />
                </div>
                <div className="reviews w-1/3 font-normal">
                  ( {data.reviews.length} Reviews )
                </div>
                <div className="seprator">|</div>
                <div
                  className={`stock w-1/4 ${
                    data.stock > 8 ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {data.availabilityStatus}
                  {/* {data.stock > 8 ? "In Stock" : "Low Stock"} */}
                </div>
              </div>
              <span className="pricing text-2xl font-semibold">
                <span className="text-red-600">${data.price}</span>
                <span className="line-through text-gray-600 px-2">
                  $
                  {Math.round(data.price * (1 + data.discountPercentage / 100))}
                </span>
              </span>
              <div className="description text-sm font-normal my-2">
                {data.description}
              </div>
              <Separator />
              <div className="colors">{data?.colors}</div>
              <div className="sizes">{data?.sizes}</div>
              <div className="quantityNBuy flex my-2">
                <div className="quantity cursor-pointer border rounded mx-2 w-2/5 flex justify-between">
                  <span
                    className="dec hover:bg-red-600 w-[30%]  flex items-center justify-center"
                    onClick={() =>
                      console.log("Decrement item count was clicked")
                    }
                  >
                    -
                  </span>
                  <span className="w-full flex items-center justify-center border">
                    2
                  </span>
                  <span
                    className="inc w-[30%] hover:bg-red-600 hover:text-white flex items-center justify-center"
                    onClick={() =>
                      console.log("Increment item count was clicked")
                    }
                  >
                    +
                  </span>
                </div>
                <div
                  className="buynow bg-red-600 w-2/5 text-center rounded cursor-pointer"
                  onClick={() => console.log("Buy Now was clicked")}
                >
                  Buy Now
                </div>
                <div
                  className="heart border rounded w-[10%] mx-2 flex items-center justify-center  hover:bg-red-600"
                  onClick={() => addToFavorites(data)}
                >
                  <CiHeart className={`${isInWishlist ? "bg-red-600" : ""}`} />
                </div>
              </div>
              <div className="benefts border rounded">
                <div className="delivery border w-full flex  py-2">
                  <span className="cursor-pointer w-1/3 pl-2">
                    <FaShippingFast size={"40"} />
                  </span>
                  <div className="text-base font-medium">
                    <div>Free Delivery</div>
                    <div className="text-xs font-medium">
                      {data.shippingInformation}{" "}
                      <span className="underline cursor-pointer">Details</span>{" "}
                    </div>
                  </div>
                </div>
                <div className="return border w-full flex py-2">
                  <span className="cursor-pointer w-1/3 pl-2">
                    <RxUpdate size={"40"} />
                  </span>
                  <div className="text-base font-medium">
                    <div>Hassle Free Returns</div>
                    <div className="text-xs font-medium">
                      {data.returnPolicy}{" "}
                      <span className="underline cursor-pointer">Details</span>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relatedItems">
            <CarouselSection
              url={`https://dummyjson.com/products/category/${data?.category}`}
              //   sortKey="stock"
              //   sortOrder="desc"
              title="Explore Our Products"
              heading="Our Products"
              itemLimit={20}
              delay={120000}
            />
          </div>
        </>
      ) : (
        <div className="detailsBannerSkeleton">
          <div className="flex flex-col space-y-3">
            <Skeleton className="h-[125px] w-[250px] rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
