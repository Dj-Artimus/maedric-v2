"use client";
import AnimatedUnderline from "@/components/ui/AnimatedUnderline";
import SlantedFillButton from "@/components/ui/SlantedFillButton";
import HorizontalFillButton from "@/components/ui/HorizontalFillButton";
import React, { useEffect, useState } from "react";
import { HiArrowLongRight, HiArrowLongUp } from "react-icons/hi2";

const HeroSection: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Get the hero section height
      const heroSection = document.querySelector("section");
      if (heroSection) {
        const heroHeight = heroSection.offsetHeight;
        // Show button when scrolled past hero section
        setShowScrollTop(window.scrollY > heroHeight);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Initial check
    handleScroll();

    // Clean up event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
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
      <div className="absolute w-full lg:w-[78%] bottom-0 left-1/2 -translate-x-1/2 inset-0 flex flex-col justify-center items-center px-4 md:px-12 lg:px-0 pt-16 pb-8 sm:pt-20 sm:pb-12 md:pb-16 xl:pb-24 overflow-visible">
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
          <div className="">
            <HorizontalFillButton
              backgroundColor="transparent"
              fillColor="#051e33"
              className="w-full h-fit xl:w-fit flex items-center gap-3 xl:text-nowrap text-[16px] font-figtree font-normal leading-[18px] sm:leading-[20px] tracking-[4px] sm:tracking-[3px] text-center uppercase text-white border-[1.5px] border-white bg-transparent hover:text-white px-3 py-3 sm:px-4 xl:px-5 xl:ps-5 sm:py-3 group"
            >
              <span onClick={() => console.log("Explore clicked")}>
                Explore Our Jewellery
              </span>
              <div className="md:max-lg:hidden flex flex-row justify-end items-center group-hover:animate-pulse">
                <HiArrowLongRight className="w-6 h-6 hover:scale-110 text-neutral group-hover:translate-x-1 transition-transform duration-500 ease-in" />
              </div>
            </HorizontalFillButton>
          </div>
        </div>
      </div>

      {/* Arrow Up */}
      <div
        className={`fixed ${showScrollTop ? "md:block" : "hidden"} bottom-8 right-8 rounded-full overflow-hidden z-[999] group scroll-smooth`}
      >
        <SlantedFillButton
          backgroundColor="#051e33"
          fillColor="#d2ae6d"
          className="md:flex items-center justify-center w-full h-full cursor-pointer"
        >
          <HiArrowLongUp
            onClick={scrollToTop}
            className="z-10 text-3xl text-accent group-hover:text-primary m-3"
          />
        </SlantedFillButton>
      </div>
    </section>
  );
};

export default HeroSection;
