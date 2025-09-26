"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import AnimatedUnderline from "../ui/AnimatedUnderline";

// Define the type for a single product object
export interface FeaturedProduct {
  id: number;
  name: string;
  description: string;
  image: string;
  price: string;
}

// Define the props interface for the component
interface FeaturedPageProductsSectionProps {
  products: FeaturedProduct[];
}

const FeaturedPageProductsSection: React.FC<
  FeaturedPageProductsSectionProps
> = ({ products }) => {
  const [activeProductIndex, setActiveProductIndex] = useState(0);
  const mobileSwiperRef = useRef<SwiperType | null>(null);
  const desktopSwiperRef = useRef<SwiperType | null>(null);
  // Detect screen size (simple hook or window.matchMedia)
  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;

  // Handle previous button click
  const handlePrevClick = () => {
    if (isMobile && mobileSwiperRef.current) {
      mobileSwiperRef.current.slidePrev();
    } else if (!isMobile && desktopSwiperRef.current) {
      desktopSwiperRef.current.slidePrev();
    }
  };

  // Handle next button
  const handleNextClick = () => {
    if (isMobile && mobileSwiperRef.current) {
      mobileSwiperRef.current.slideNext();
    } else if (!isMobile && desktopSwiperRef.current) {
      desktopSwiperRef.current.slideNext();
    }
  };

  // Create a doubled array for infinite scroll
  const extendedProducts = [...products, ...products];

  // Handle direct thumbnail click
  const handleThumbnailClick = (clickedIndex: number) => {
    const swiper = isMobile
      ? mobileSwiperRef.current
      : desktopSwiperRef.current;
    if (!swiper) return;

    const current = swiper.realIndex;
    const total = products.length;
    const extendedTotal = extendedProducts.length;

    // Calculate the shortest path between current and clicked
    let diff = clickedIndex - current;

    // Wrap-around: if the difference is more than half, go the other way
    if (Math.abs(diff) > total / 2) {
      diff = diff > 0 ? diff - total : diff + total;
    }

    let targetIndex = current + diff;

    // Wrap negative indices back into valid range
    if (targetIndex < 0) {
      targetIndex += extendedTotal;
    }

    // Special case: handle when swiper has looped beyond total
    if (diff < -total / 2 && current >= total && clickedIndex < total) {
      targetIndex = total - 1 + diff;
    }

    swiper.slideToLoop(targetIndex, 600);
  };

  // Handle slider change
  const handleSlideChange = (swiper: SwiperType) => {
    const realIndex = swiper.realIndex % products.length;
    setActiveProductIndex(realIndex);
  };

  const currentProduct = products[activeProductIndex];

  return (
    <section className="w-full bg-white">
      <div className="mx-auto sm:max-xl:container max-w-6xl px-[15.5px] py-28">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="font-quiche text-3xl md:text-4xl text-primary capitalize">
            Featured Jewellery
          </h2>
        </div>

        {/* Desktop Layout */}
        <div className="block max-xs:mt-64 max-sm:mt-72 sm:max-md:mt-36">
          <div className="relative flex flex-col justify-end sm:justify-normal sm:flex-row items-end sm:pb-8 md1:pb-0 md1:items-center h-[670px]">
            {/* Left Side - Blue Background with Product Display and Details */}
            <div className="w-full sm:w-1/3">
              <div className="sm:absolute left-0 top-0 bg-[#415567] w-[60vw] h-96 sm:w-96 lg:w-[485px] sm:h-[670px]"></div>
              {/* MAEDRIC Text - Vertical */}
              <div className="absolute left-4 xs:max-sm:left-[5%] -top-60 xs:top-[-38%] translate-y-1 sm:top-1/2 transform sm:translate-y-[-50%] pointer-events-none">
                <span
                  className="font-cinzel text-6xl sm:text-8xl rotate-180 font-light text-white/20 tracking-[15px] whitespace-nowrap"
                  style={{
                    writingMode: "vertical-lr",
                    textOrientation: "mixed",
                  }}
                >
                  MAEDRIC
                </span>
              </div>

              {/* Main Product Image */}
              <div className="absolute -top-48 right-1\2 translate-x-1/3 xs:top-[-35%] xs:right-1/3 sm:right-0 sm:top-[-120px] md:top-2 sm:left-1/2 md1:left-0 sm:translate-x-[-45%] md:translate-x-[-40%] md1:translate-x-0 md1:relative w-[70%] xs:w-[70%] xs:max-sm:max-w-80 sm:w-[50%] md:w-[42%] md1:w-[135%] lg:w-[150%] xl:w-[250%] md1:h-full aspect-square max-w-md md1:ml-20 xl:ml-12 z-20 group">
                <Image
                  src={currentProduct.image}
                  alt={currentProduct.name}
                  fill
                  className="object-cover object-center z-10 hover:scale-105 transition-transform duration-1000 "
                  priority
                />
                {/* Elliptical shadow */}
                <div
                  className="absolute bottom-0 group-hover:translate-y-2 transition-transform duration-1000 left-1/2 -translate-x-1/2 w-64 lg:w-72 h-8 bg-black/60 blur"
                  style={{
                    borderRadius: "100% / 100%", // horizontal radius / vertical radius
                  }}
                />
              </div>
            </div>

            {/* Right Side - White Background with Product Details and Slider */}
            <div className="flex flex-col-reverse sm:flex-row w-full sm:gap-6 sm:justify-between z-10 max-sm:bg-white">
              {/* Product Details Section */}
              <div className="flex-1 flex items-end md1:items-center bg-white shadow-xl shadow-black/20 p-6 md1:ps-40 lg:ps-52 md1:pr-14 lg:pr-24 group">
                <div className="w-full max-sm:h-96 max-sm:flex flex-col justify-between">
                  <div className="">
                    <h3 className="font-quiche text-3xl text-primary mb-4">
                      <AnimatedUnderline underlineColor="accent">
                        {currentProduct.name}
                      </AnimatedUnderline>
                    </h3>
                    <p className="font-figtree text-base text-primary/70 leading-relaxed mb-8 max-w-xl">
                      {currentProduct.description}
                    </p>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col max-sm:mx-auto w-full max-w-2xl md:flex-row gap-4 sm:max-md:max-w-sm">
                    <Link
                      href="#"
                      className="py-3 px-6 w-full text-[14px] border text-black hover:text-white border-black rounded-[2px] transition-all duration-300 font-figtree text-center uppercase tracking-[3px] slanted-fill-btn"
                      style={
                        {
                          "--bg-color": "transparent",
                          "--fill-color": "#051e33",
                        } as React.CSSProperties & Record<string, string>
                      }
                    >
                      <span className="z-10">More Details</span>
                    </Link>
                    <Link
                      href="#"
                      className="py-3 px-6 w-full text-[14px] border text-white border-accent rounded-[2px] transition-all duration-300 font-figtree text-center uppercase tracking-[3px] slanted-fill-btn"
                      style={
                        {
                          "--bg-color": "#d2ae6d",
                          "--fill-color": "#051e33",
                        } as React.CSSProperties & Record<string, string>
                      }
                    >
                      <span className="z-10">Inquire Now</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Thumbnail Slider Section */}
              <div className="flex sm:flex-col h-full items-center justify-center">
                <div className="flex flex-col justify-center items-center z-10">
                  <button
                    onClick={handlePrevClick}
                    className="p-1 sm:p-2 h-20 xs:h-24 sm:w-24 sm:h-auto flex justify-center items-center  text-primary/70 hover:text-primary transition-colors cursor-pointer"
                    aria-label="Previous"
                  >
                    <SlArrowUp className="w-6 h-6 -rotate-90 sm:rotate-0" />
                  </button>
                </div>

                {/* Horizontal Swiper for Thumbnails */}
                <div className="block sm:hidden h-20 xs:h-24 w-[78vw] rounded-sm bg-white relative">
                  <Swiper
                    onSwiper={(swiper) => (mobileSwiperRef.current = swiper)}
                    direction="horizontal"
                    slidesPerView={4}
                    spaceBetween={0}
                    loop={true}
                    modules={[Navigation]}
                    onSlideChange={handleSlideChange}
                    className="w-full h-full"
                  >
                    {extendedProducts.map((product, globalIndex) => (
                      <SwiperSlide key={`${product.id}-${globalIndex}`}>
                        {/* The product container now has the conditional golden border */}
                        <div
                          className={`relative w-full h-20 xs:h-24 cursor-pointer flex items-center justify-center transition-colors ${
                            globalIndex % products.length ===
                              activeProductIndex &&
                            "border-[2px] bg-accent/10 border-[#d2ae6d]"
                          }`}
                          onClick={() =>
                            handleThumbnailClick(globalIndex % products.length)
                          }
                        >
                          <div className="relative w-20 h-20 xs:w-24 xs:h-24 overflow-hidden">
                            <Image
                              src={product.image}
                              alt={product.name}
                              fill
                              className="object-contain object-center p-1.5"
                            />
                            {/* Small shadow */}
                            <div
                              className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-10 h-0.5 bg-black/70 blur-[3px]"
                              style={{
                                borderRadius: "100% / 100%", // horizontal radius / vertical radius
                              }}
                            />
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                {/* Vertical Swiper for Thumbnails */}
                <div className="hidden sm:block w-24 h-[530px] rounded-sm bg-white relative">
                  <Swiper
                    onSwiper={(swiper) => (desktopSwiperRef.current = swiper)}
                    direction="vertical"
                    slidesPerView={5}
                    spaceBetween={0}
                    loop={true}
                    modules={[Navigation]}
                    onSlideChange={handleSlideChange}
                    initialSlide={0} // Sets the initial active slide to the third one (index 2).
                    centeredSlides={true} // Centers the active slide.
                    className="w-full h-full"
                  >
                    {extendedProducts.map((product, globalIndex) => (
                      <SwiperSlide key={`${product.id}-${globalIndex}`}>
                        {({ isActive }) => (
                          <div
                            className={`relative w-full h-20 xs:h-24 cursor-pointer flex items-center justify-center transition-colors ${
                              isActive &&
                              "border-[2px] bg-accent/10 border-[#d2ae6d]"
                            }`}
                            onClick={() =>
                              handleThumbnailClick(
                                globalIndex % products.length
                              )
                            }
                          >
                            {/* Square aspect ratio container */}
                            <div className="relative w-20 h-20 xs:w-24 xs:h-24 border overflow-hidden">
                              <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-contain object-center p-1.5"
                              />
                              {/* Small shadow */}
                              <div
                                className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-10 h-0.5 bg-black/70 blur-[3px]"
                                style={{
                                  borderRadius: "100% / 100%", // horizontal radius / vertical radius
                                }}
                              />
                            </div>
                          </div>
                        )}
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                <div className="flex flex-col justify-center items-center sm:mt-[-12px] bg-white z-10">
                  <button
                    onClick={handleNextClick}
                    className="p-1 sm:p-2 h-20 xs:h-24 sm:h-auto sm:w-24 flex justify-center items-center text-primary/70 hover:text-primary transition-colors cursor-pointer"
                    aria-label="Next"
                  >
                    <SlArrowDown className="w-6 h-6 -rotate-90 sm:rotate-0" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white w-full h-44 absolute bottom-0 left-0"></div>
      </div>
    </section>
  );
};

export default FeaturedPageProductsSection;
