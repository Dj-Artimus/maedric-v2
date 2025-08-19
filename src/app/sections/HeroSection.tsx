"use client";
import AnimatedUnderline from "@/components/ui/AnimatedUnderline";
import SlantedFillButton from "@/components/ui/SlantedFillButton";
import React from "react";

const HeroSection: React.FC = () => {
  const handleClick = (e) => {
    e.preventDefault();
    const itemID = e.target.getAttribute("itemID");
    if (itemID.startsWith("#")) {
      const element = document.querySelector(itemID);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  return (
    <section className="w-full h-screen bg-primary/60 flex flex-col md:flex-row items-center justify-start relative overflow-hidden">
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
      <div className="absolute w-full lg:w-[78%] bottom-0 left-1/2 -translate-x-1/2 inset-0 flex flex-col justify-center items-center px-8 sm:px-6 pt-16 pb-8 sm:pt-20 sm:pb-12 md:pb-16 xl:pb-24">
        <div className="flex flex-col md:flex-row gap-[36px] items-center justify-between md:items-end w-full h-screen">
          <div className="flex flex-col items-center text-center md:text-start md:items-start w-full xl:w-[65%] gap-2 sm:gap-0">
            <h1 className="text-[40px] sm:text-[48px] md:text-[62px] font-quiche font-light leading-[44px] sm:leading-[56px] md:leading-[72px] text-white w-full sm:w-[80%] lg:w-[72%] xl:w-[60%]">
              Your Dream Jewellery, One Click Away
            </h1>
            <p className="text-[22px] md:text-[26px] font-figtree font-normal leading-[24px] sm:leading-[28px] md:leading-[32px] text-white w-full md:w-[60%] xl:w-[50%] group">
              <AnimatedUnderline underlineColor="accent">
                Designed by artisans, made for your moments
              </AnimatedUnderline>
            </p>
          </div>
          <SlantedFillButton
            backgroundColor="transparent"
            fillColor="#d2ae6d"
            className="w-full h-fit xl:w-fit xl:text-nowrap text-[16px] font-figtree font-normal leading-[18px] sm:leading-[20px] tracking-[4px] sm:tracking-[3px] text-center uppercase text-white border border-global-7 bg-transparent hover:bg-global-7 hover:text-primary px-3 py-3 sm:px-4 xl:px-2 xl:ps-3 sm:py-3 "
            onClick={() => console.log("Explore clicked")}
          >
            Explore Our Jewellery
          </SlantedFillButton>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
