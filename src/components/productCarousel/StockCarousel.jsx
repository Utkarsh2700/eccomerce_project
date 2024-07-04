import React from "react";
import CarouselSection from "../carousel/CarouselSection";

const StockCarousel = ({ products }) => {
  return (
    <div className="itemsContainer">
      {/* {products.map((product) => ( */}
      <CarouselSection
        products={products}
        //   product={product}
        //   key={product.id}
        title="Explore Our Products"
        heading="Our Products"
        itemLimit={20}
        delay={120000}
      />
      {/* ))} */}
    </div>
  );
};

export default StockCarousel;
