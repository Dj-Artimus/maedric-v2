"use client";
import AnimatedUnderline from "@/components/ui/AnimatedUnderline";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { POPULAR_PRODUCTS } from "@/utils/constants";

type SwiperInstance = SwiperType;

const PopularProductsSection: React.FC = () => {
  // Popular products data
  const popularProducts = POPULAR_PRODUCTS;
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSlideChange = (swiper: SwiperInstance) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <section className="w-full max-w-sm xs:max-w-md px-4 md:px-0 sm:max-w-xl md:max-w-3xl md1:max-w-4xl lg:max-w-5xl xl:max-w-[1176px] my-4 xs:mt-0 sm:mt-4 mb-8 xs:mb-14">
      <div className="flex flex-row justify-start items-center w-full">
        {/* Content */}
        <div className="flex-1 relative w-full">
          <div className="flex flex-col gap-[18px] justify-start items-start w-full">
            {/* Section Title */}
            {/* Section Header */}
            <div className="flex flex-col gap-[6px] justify-start items-center w-full px-4 sm:px-6 md:px-[56px]">
              <h2 className="text-[30px] md:text-[36px] font-quiche font-normal leading-[32px] sm:leading-[40px] md:leading-[45px] text-center capitalize text-primary">
                Popular Jewellery
              </h2>
              <p className="text-[16px] sm:text-[18px] md:text-[20px] font-figtree font-normal leading-[24px] sm:leading-[28px] md:leading-[32px] text-center text-black/70 w-full md:w-[80%] lg:w-[66%]">
                Discover what everyone is loving right now — our most popular
                pieces, handpicked based on what is trending with Maedric
                customers this season.
              </p>
            </div>
            {/* Collections Grid */}
            <div className="flex flex-row items-stretch gap-1 w-full">
              <button
                aria-label="Previous"
                className={`featured-prev-product hidden sm:flex items-center ${
                  isBeginning ? "opacity-30" : "cursor-pointer"
                }`}
                disabled={isBeginning}
              >
                <SlArrowLeft
                  className={`w-5 h-5 sm:w-6 sm:h-6 text-primary/70${
                    !isBeginning ? "hover:scale-110" : ""
                  } transition-transform`}
                />
              </button>
              {/* Jewellery Categories Grid */}
              <Swiper
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={1.2}
                breakpoints={{
                  640: { slidesPerView: 1.2 },
                  768: { slidesPerView: 2.2 },
                  1280: { slidesPerView: 3.2 },
                }}
                navigation={{
                  prevEl: ".featured-prev-product",
                  nextEl: ".featured-next-product",
                }}
                onSlideChange={handleSlideChange}
                onInit={(swiper) => handleSlideChange(swiper)}
              >
                {popularProducts.map((item) => (
                  <SwiperSlide key={item.id}>
                    <Link href={`/product/${item.id}`} className="cursor-pointer">
                      <div
                        className={`flex flex-col gap-[10px] h-fit items-center xs:min-w-[300px] sm:min-w-[350px] md:min-w-[310px] border border-[#d2ae6d] p-[22px] sm:p-5 group`}
                      >
                        <div className="flex flex-col justify-start items-center w-full bg-black overflow-hidden">
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={200}
                            height={260}
                            className="w-full aspect-[3/4] object-cover group-hover:scale-110 transition-transform duration-1000 ease-in-out"
                          />
                        </div>
                        <div className="flex flex-row justify-between sm:justify-between items-center w-full mb-2">
                          <h3 className="text-[20px] font-figtree font-normal text-left text-black/60 self-end">
                            <AnimatedUnderline underlineColor="accent">
                              {item.name}
                            </AnimatedUnderline>
                          </h3>
                          <HiArrowLongRight className="w-7 h-7 hover:scale-110 transition-transform text-primary/70 group-hover:animate-pulse" />
                        </div>
                        <p className="text-[15px] font-figtree font-normal text-left text-primary/60 line-clamp-2 -mt-4">
                          {item.description}
                        </p>
                      </div>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
              <button
                aria-label="Next"
                className={`featured-next-product hidden sm:flex items-center ${
                  isEnd ? "opacity-30" : "cursor-pointer"
                }`}
                disabled={isEnd}
              >
                <SlArrowRight
                  className={`w-5 h-5 sm:w-6 sm:h-6 text-primary/70 ${
                    !isEnd ? "hover:scale-110" : ""
                  } transition-transform `}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularProductsSection;
