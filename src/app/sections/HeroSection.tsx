"use client";
import AnimatedUnderline from "@/components/ui/AnimatedUnderline";
import HorizontalFillButton from "@/components/ui/HorizontalFillButton";
import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";

const HeroSection: React.FC = () => {
  return (
    <section className="w-full h-[85vh] md:h-[90vh] lg:h-[100vh] bg-primary/60 flex flex-col md:flex-row items-center justify-start relative scroll-smooth overflow-visible ">
      {/* Background video */}
      <video
        className="md:absolute aspect-auto inset-0 w-full h-full object-cover z-0"
        src="/videos/Hero.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />

      {/* Hero Content */}
      <div className="absolute w-full lg:w-[78%] bottom-0 left-1/2 -translate-x-1/2 inset-0 flex flex-col justify-center items-center px-4 md:px-12 lg:px-0 pt-16 pb-8 sm:pt-20 sm:pb-12 overflow-visible">
        <div className="flex flex-col md:flex-row gap-[36px] items-center justify-between md:items-end w-full h-screen">
          <div className="flex flex-col items-center text-center md:text-start md:items-start w-full xl:w-[65%] xl:ms-8 gap-2 sm:gap-0">
            <h1 className="text-[26px] md:text-[36px] font-quiche font-light text-white w-full sm:w-[80%] lg:w-[72%] xl:w-[60%]">
              Your Dream Jewellery, One Click Away
            </h1>
            <p className="text-[15px] font-figtree font-normal text-white w-full md:w-[60%] xl:w-[45%] md:mt-4 group">
              <AnimatedUnderline underlineColor="accent">
                Designed by artisans, made for your moments
              </AnimatedUnderline>
            </p>
          </div>
          <div className="">
            <HorizontalFillButton
              backgroundColor="transparent"
              fillColor="#051e33"
              className="w-full h-fit xl:w-fit flex items-center gap-3 xl:text-nowrap text-[14px] font-figtree font-normal tracking-[1px] text-center uppercase text-white border-[1.5px] border-white bg-transparent hover:text-white px-3 py-3 sm:px-4 xl:px-5 xl:ps-5 sm:py-3 group"
            >
              <span onClick={() => console.log("Explore clicked")}>
                Explore Our Jewellery
              </span>
              <div className="md:max-lg:hidden flex flex-row justify-end items-center group-hover:animate-pulse">
                <HiArrowLongRight className="w-6 h-6 hover:scale-110 text-neutral group-hover:translate-x-1 transition-transform duration-300 ease-in" />
              </div>
            </HorizontalFillButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
