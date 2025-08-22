"use client";
import AnimatedUnderline from "@/components/ui/AnimatedUnderline";
import { JEWELLERY_CATEGORIES } from "@/utils/constants";
import Image from "next/image";
import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const JewelleryTypeSection: React.FC = () => {
  // Jewellery categories data
  const jewelleryCategories = JEWELLERY_CATEGORIES;

  return (
    <section className="w-full max-w-sm xs:max-w-md px-4 md:px-0 sm:max-w-lg md:max-w-3xl lg:max-w-4xl xl:max-w-[1170px] mt-[34px]">
      <div className="flex flex-row justify-start items-center w-full">
        {/* Content */}
        <div className="flex-1 relative w-full">
          <div className="flex flex-col gap-[18px] justify-start items-start w-full">
            {/* Section Title */}
            <div className="w-full max-w-[1326px] mx-auto px-4 sm:px-6 md:px-[56px] flex justify-center items-center">
              <h2 className="text-[30px] md:text-[36px] font-quiche font-normal text-center capitalize text-primary">
                shop by Jewellery type
              </h2>
            </div>
            <div className="flex flex-row items-stretch gap-1 w-full">
              <button
                aria-label="Previous"
                className="featured-prev-type hidden sm:flex items-center"
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
                  prevEl: ".featured-prev-type",
                  nextEl: ".featured-next-type",
                }}
              >
                {jewelleryCategories.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div
                      key={item.id}
                      className={`flex flex-col gap-2 h-fit items-center xs:min-w-[300px] sm:min-w-[350px] md:min-w-[310px] border border-[#d2ae6d] p-5 pb-3 group`}
                    >
                      <div className="flex flex-col justify-start items-center w-full bg-black overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={200}
                          height={200}
                          priority
                          className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-1000 ease-in-out"
                        />
                      </div>
                      <div className="flex flex-row justify-between sm:justify-between items-center w-full">
                        <h3 className="text-[25px] font-figtree font-normal leading-[30px] sm:leading-[34px] text-left text-black/60 self-end">
                          <AnimatedUnderline underlineColor="accent">
                            {item.name}
                          </AnimatedUnderline>
                        </h3>
                        <HiArrowLongRight className="w-9 h-9 hover:scale-110 transition-transform text-primary/70 group-hover:animate-pulse" />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
                {/* </div> */}
              </Swiper>
              <button
                aria-label="Next"
                className="featured-next-type hidden sm:flex items-center"
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

export default JewelleryTypeSection;
