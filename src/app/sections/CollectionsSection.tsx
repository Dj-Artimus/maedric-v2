/**
 * --------------------------------------------------------
 * ✏️ Author: DjArtimus
 * 📅 Created: 12-08-2025 - 04-09-2025
 *
 * 📌 Description:
 *   Displays curated jewelry collections in a responsive slider
 *   format with custom navigation and interactive hover effects.
 * --------------------------------------------------------
 */

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

import { COLLECTIONS } from "@/utils/constants";

/**
 * Type alias for Swiper instance
 */
type SwiperInstance = SwiperType;

/**
 * CollectionsSection Component
 *
 * Showcases featured jewelry collections with image sliders,
 * navigation controls, and descriptive text.
 *
 * @returns {JSX.Element} Collections showcase section
 */
const CollectionsSection: React.FC = () => {
  // Collections data
  const collections = COLLECTIONS;
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSlideChange = (swiper: SwiperInstance) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <section className="w-full max-w-sm xs:max-w-md px-4 md:px-0 sm:max-w-xl md:max-w-3xl md1:max-w-4xl lg:max-w-5xl xl:max-w-[1176px] my-6 mt-10 sm:mt-12 md:mt-16 h-full">
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
                className={`featured-prev-collection hidden sm:flex items-center ${
                  isBeginning ? "opacity-30" : "cursor-pointer"
                }`}
                disabled={isBeginning}
              >
                <SlArrowLeft
                  className={`w-5 h-5 sm:w-6 sm:h-6 text-primary/70`}
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
                  prevEl: ".featured-prev-collection",
                  nextEl: ".featured-next-collection",
                }}
                onSlideChange={handleSlideChange}
                onInit={(swiper) => handleSlideChange(swiper)}
              >
                {collections.map((item) => (
                  <SwiperSlide key={item.id}>
                    <Link href={`/${item.name.toLowerCase().replace(/\s+/g, '-')}`} className="cursor-pointer">
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
                        <h3 className="text-[20px] font-figtree font-normal leading-[30px] sm:leading-[34px] text-left text-black/60 self-end">
                          <AnimatedUnderline underlineColor="accent">
                            {item.name}
                          </AnimatedUnderline>
                        </h3>
                        <HiArrowLongRight className="w-7 h-7 hover:scale-110 transition-transform text-primary/70 group-hover:animate-pulse" />
                      </div>
                    </div></Link>
                  </SwiperSlide>
                ))}
              </Swiper>
              <button
                aria-label="Next"
                className={`featured-next-collection hidden sm:flex items-center ${
                  isEnd ? "opacity-30" : "cursor-pointer"
                }`}
                disabled={isEnd}
              >
                <SlArrowRight
                  className={`w-5 h-5 sm:w-6 sm:h-6 text-primary/70`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollectionsSection;

/**
 * 📌 Notes:
 * - Implements Swiper for smooth transitions
 * - Features responsive card layouts
 * - Uses hover animations for interactions
 */
