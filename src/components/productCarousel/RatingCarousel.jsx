// RatingCarousel.jsx
import React from "react";
import CarouselSection from "../carousel/CarouselSection";

const RatingCarousel = ({ products }) => {
  return (
    <div className="itemsContainer p-8">
      {/* {products.map((product) => ( */}
      <CarouselSection
        products={products}
        //   product={product}
        // key={product.id}
        title="Best Selling Products"
        heading="This Month"
        itemLimit={20}
        delay={60000}
      />
      {/* ))} */}
    </div>
  );
};

export default RatingCarousel;
