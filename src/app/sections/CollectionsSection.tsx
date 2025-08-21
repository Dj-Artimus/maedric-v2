"use client";
import AnimatedUnderline from "@/components/ui/AnimatedUnderline";
import Image from "next/image";
import React, { useRef } from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import type { Swiper as SwiperClass } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { COLLECTIONS } from "@/utils/constants";

const CollectionsSection: React.FC = () => {
  // Collections data
  const collections = COLLECTIONS;
  const swiperRef = useRef<SwiperClass | null>(null);

  return (
    <section className="w-full max-w-sm xs:max-w-md px-4 md:px-0 sm:max-w-lg md:max-w-3xl lg:max-w-4xl xl:max-w-[1170px] -mt-20 xs:mt-0 sm:my-6 md:my-0 mb-6 lg:my-6 lg:mt-16 h-full">
      <div className="flex flex-row justify-start items-center w-full">
        {/* Content */}
        <div className="flex-1 relative w-full">
          <div className="flex flex-col gap-[18px] justify-start items-start w-full">
            {/* Section Title */}
            {/* Section Header */}
            <div className="flex flex-col gap-[6px] justify-start items-center w-full px-4 sm:px-6 md:px-[56px]">
              <h2 className="text-[30px] md:text-[36px] font-quiche font-normal leading-[32px] sm:leading-[40px] md:leading-[45px] text-center capitalize text-primary">
                Collections
              </h2>
              <p className="text-[16px] sm:text-[18px] md:text-[20px] font-figtree font-normal leading-[20px] sm:leading-[22px] md:leading-[24px] text-center text-black/70">
                Discover curated jewellery collections featuring rare gems and
                handcrafted designs
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
                modules={[Navigation, Autoplay]}
                spaceBetween={20}
                slidesPerView={1.2}
                breakpoints={{
                  640: { slidesPerView: 1.2 },
                  768: { slidesPerView: 2.2 },
                  1280: { slidesPerView: 3.2 },
                }}
                loop
                navigation={{
                  prevEl: ".featured-prev",
                  nextEl: ".featured-next",
                }}
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                }}
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
              >
                {/* <div className="w-full flex flex-row gap-5 overflow-x-hidden"> */}
                {collections.map((item) => (
                  <SwiperSlide
                    key={item.id}
                    onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
                    onMouseLeave={() => swiperRef.current?.autoplay?.start()}
                  >
                    <div
                      className={`flex flex-col gap-[30px] h-fit items-center xs:min-w-[300px] sm:min-w-[350px] md:min-w-[310px] border border-[#d2ae6d] p-[22px] sm:p-5 group`}
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

export default CollectionsSection;
