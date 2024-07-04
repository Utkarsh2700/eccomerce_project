"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
// import Autoplay from "embla-carousel-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Img from "../lazyLoadImage/Img";

const Banner = () => {
  const images = [
    {
      img: "/banner/1.jpg",
    },
    {
      img: "/banner/2.jpg",
    },
    {
      img: "/banner/3.jpg",
    },
    {
      img: "/banner/4.jpg",
    },
    {
      img: "/banner/5.jpg",
    },
  ];
  return (
    <div className="banner w-full p-4">
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        opts={{
          loop: true,
        }}
      >
        <CarouselContent className="">
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <Card>
                <CardContent className="flex items-center justify-center p-6 ">
                  <Img className="" src={image.img} alt="" />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious />
        <CarouselNext /> */}
      </Carousel>

      {/* <Carousel
        className="w-full max-w-xs"
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel> */}
    </div>
  );
};

export default Banner;
