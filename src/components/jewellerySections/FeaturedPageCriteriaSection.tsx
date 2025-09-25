"use client";

import AnimatedUnderline from "@/components/ui/AnimatedUnderline";
import Image from "next/image";
import React, { useState } from "react";

// Define props interfaces for the combined component
interface Criteria {
  number: number;
  title: string;
  description: string;
}

interface FeaturedPageCriteriaSectionProps {
  criteriaTitle: string;
  criterias: Criteria[];
  criteriaImages: string[];
  backgroundImages: string[];
}

const FeaturedPageCriteriaSection: React.FC<
  FeaturedPageCriteriaSectionProps
> = ({ criteriaTitle, criterias, criteriaImages, backgroundImages }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handleMouseEnter = (index: number) => {
    // The index passed from the child component corresponds to the criteria number (1, 2, 3)
    // We need to map this to the array index (1, 2, 3) since the default image is at index 0.
    setActiveImageIndex(index);
  };

  const handleMouseLeave = () => {
    // Revert to the default image when the mouse leaves
    setActiveImageIndex(0);
  };

  return (
    <>
      <section
        data-snap
        className="w-full md:max-w-4xl lg:max-w-6xl max-xl:container mx-auto flex flex-col md1:flex-row items-center md1:gap-12 px-4 sm:px-6 lg:px-10 pt-24"
      >
        {/* Left Content - Criteria Image */}
        <div className="w-full flex justify-center">
          <div className="w-fit relative overflow-hidden group">
            <Image
              src={criteriaImages[activeImageIndex]}
              alt="Featured Jewellery Criteria Image"
              priority
              width={580}
              height={725}
              className="object-cover object-right-top aspect-[3/4] h-full transition-all duration-1000 ease-in-out"
            />
            <div className="absolute bottom-0 left-0 w-full h-full bg-black/30" />
          </div>
        </div>

        {/* Right Content - Criterias */}
        <div className="w-full backdrop-blur-2xl bg-white/70 p-4">
          <div className="">
            <h2 className="text-[24px] md:text-[30px] font-quiche font-normal leading-[32px] sm:leading-[38px] md:leading-[42px] capitalize text-primary w-full">
              {criteriaTitle}
            </h2>
            <div className="flex flex-col justify-center mx-auto lg:justify-start items-center sm:divide-y divide-black/20">
              {criterias.map((step) => (
                <div
                  key={step.number}
                  className="flex flex-col gap-6 text-wrap shrink-0 w-full py-4 group"
                  onMouseEnter={() => handleMouseEnter(step.number)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="flex flex-row gap-[14px] justify-start items-start w-full">
                    <div className="flex flex-col justify-center items-center w-[56px] mt-[6px]">
                      <div className="w-[46px] h-[46px] border border-tertiary text-tertiary rounded-full flex items-center justify-center group-hover:bg-accent group-hover:border-primary group-hover:text-primary transition-all duration-300">
                        <span className="text-[18px] font-figtree font-semibold leading-[22px] sm:leading-[24px] text-center">
                          {step.number}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1.5 justify-start items-start self-center flex-1">
                      <h3 className="text-[18px] font-figtree font-[500] leading-[22px] text-left text-primary">
                        <AnimatedUnderline underlineColor="accent">
                          {step.title}
                        </AnimatedUnderline>
                      </h3>
                      <p className="text-[15px] font-figtree font-normal text-left text-black/70 w-full">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Background Image Section */}
      <div className="w-full bg-black h-[50vw] md1:h-[40vw] max-md1:py-6 md1:fixed top-1/2 translate-y-0 md1:translate-y-[-50%] left-0 -z-10">
        {backgroundImages.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt="featured Jewellery Static Bg Img"
            fill
            className={`object-cover transition-opacity duration-500 ease-in-out ${
              activeImageIndex === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
      <div className="hidden md1:block w-full h-[40vw]"></div>
    </>
  );
};

export default FeaturedPageCriteriaSection;
