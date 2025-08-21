"use client";
import AnimatedUnderline from "@/components/ui/AnimatedUnderline";
import Image from "next/image";
import React, { useRef } from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { POPULAR_PRODUCTS } from "@/utils/constants";
import type { Swiper as SwiperClass } from "swiper";

const PopularProductsSection: React.FC = () => {
  // Popular products data
  const popularProducts = POPULAR_PRODUCTS;
  const swiperRef = useRef<SwiperClass | null>(null);
  return (
    <section className="w-full max-w-sm xs:max-w-md  px-4 md:px-0 sm:max-w-lg md:max-w-3xl lg:max-w-4xl xl:max-w-[1170px] my-4 xs:mt-0 sm:mt-4 mb-8 xs:mb-14">
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
                className="featured-prev hidden sm:flex items-center "
              >
                <SlArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 hover:scale-110 transition-transform text-primary/70" />
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
                  prevEl: ".featured-prev",
                  nextEl: ".featured-next",
                }}
                // loop
                // autoplay={{
                //   delay: 3500,
                //   disableOnInteraction: false,
                // }}
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
              >
                {/* <div className="w-full flex flex-row gap-5 overflow-x-hidden"> */}
                {popularProducts.map((item) => (
                  <SwiperSlide
                    key={item.id}
                    onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
                    onMouseLeave={() => swiperRef.current?.autoplay?.start()}
                  >
                    <div
                      className={`flex flex-col gap-2 h-fit items-center xs:min-w-[300px] sm:min-w-[350px] md:min-w-[310px] border border-[#d2ae6d] p-5 pb-3 group`}
                    >
                      <div className="flex flex-col justify-start items-center w-full bg-black overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={200}
                          height={260}
                          loading="lazy"
                          className="w-full aspect-[3/4] object-cover group-hover:scale-110 transition-transform duration-1000 ease-in-out"
                        />
                      </div>
                      <div className="flex flex-row justify-between sm:justify-between items-center w-full">
                        <h3 className="text-[24px] sm:text-[28px] font-figtree font-normal leading-[30px] sm:leading-[34px] text-left text-black/60 self-end">
                          <AnimatedUnderline underlineColor="accent">
                            {item.name}
                          </AnimatedUnderline>
                        </h3>
                        <HiArrowLongRight className="w-10 h-10 sm:w-10 sm:h-10 hover:scale-110 transition-transform text-primary/70 group-hover:animate-pulse" />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
                {/* </div> */}
              </Swiper>
              <button
                aria-label="Next"
                className="featured-next hidden sm:flex items-center"
              >
                <SlArrowRight className="w-5 h-5 sm:w-6 sm:h-6 hover:scale-110 transition-transform text-primary/70" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularProductsSection;
