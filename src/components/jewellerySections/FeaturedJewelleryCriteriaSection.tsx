// src/components/jewellerySections/FeaturedJewelleryCriteriaSection.tsx

"use client";

import Image from "next/image";
import React from "react";

import AnimatedUnderline from "@/components/ui/AnimatedUnderline";

// Define props interface
interface FeaturedJewelleryCriteriaSectionProps {
  criterias: {
    number: number;
    title: string;
    description: string;
  }[];
  criteriaImage: string;
  onMouseEnter: (index: number) => void;
  onMouseLeave: () => void;
}

const FeaturedJewelleryCriteriaSection: React.FC<
  FeaturedJewelleryCriteriaSectionProps
> = ({ criterias, criteriaImage, onMouseEnter, onMouseLeave }) => {
  return (
    <section className="w-full md:max-w-4xl lg:max-w-6xl max-xl:container mx-auto flex flex-col md1:flex-row items-center md1:gap-12 px-4 sm:px-6 lg:px-10 mt-24">
      {/* Left Content */}
      <div className="w-full flex justify-center">
        <div className="w-fit relative overflow-hidden group">
          <Image
            src={criteriaImage}
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
            Featured Jewellery pieces have one or more of these criteria
          </h2>
          <div className="flex flex-col justify-center mx-auto lg:justify-start items-center sm:divide-y divide-black/20">
            {criterias.map((step) => (
              <div
                key={step.number}
                className="flex flex-col gap-6 text-wrap shrink-0 w-full py-4 group"
                onMouseEnter={() => onMouseEnter(step.number)}
                onMouseLeave={onMouseLeave}
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
  );
};

export default FeaturedJewelleryCriteriaSection;
