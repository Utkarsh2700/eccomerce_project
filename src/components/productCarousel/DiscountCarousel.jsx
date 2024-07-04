import React from "react";
import CarouselSection from "../carousel/CarouselSection";

const DiscountCarousel = ({ products }) => {
  return (
    <div className="itemsContainer">
      {/* {products.map((product) => ( */}
      <CarouselSection
        products={products}
        //   product={product}
        //   key={product.id}
        title="Flash Sales"
        heading="Today's"
        itemLimit={10}
        delay={5000}
      />
      {/* ))} */}
    </div>
  );
};

export default DiscountCarousel;
