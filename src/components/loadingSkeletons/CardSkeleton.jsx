import React from "react";
import { Card, CardContent } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

const CardSkeleton = () => {
  return (
    <>
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
    </>
  );
};

export default CardSkeleton;
