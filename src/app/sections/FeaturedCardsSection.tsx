/**
 * --------------------------------------------------------
 * ✏️ Author: DjArtimus
 * 📅 Created: 12-08-2025 - 04-09-2025
 *
 * 📌 Description:
 *   Displays featured jewelry collections in card format with
 *   hover animations and gradient overlays for visual appeal.
 * --------------------------------------------------------
 */

"use client";

import Image from "next/image";
import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";
// import AnimatedUnderline from "@/components/ui/AnimatedUnderline";

/**
 * Interface defining the structure of a featured card
 */
interface FeaturedCard {
  title: string;
  bgImage: string;
}

/**
 * FeaturedCardsSection Component
 *
 * Renders a section of featured cards with hover effects
 * and responsive image loading.
 *
 * @returns {JSX.Element} Featured cards showcase section
 *
 * @example
 * <FeaturedCardsSection />
 */
const FeaturedCardsSection: React.FC = () => {
  const featuredCards: FeaturedCard[] = [
    {
      title: "Rare Gems. Remarkable Stories.",
      bgImage: "/images/featureCTA_Img1.png",
    },
    {
      title: "Jewel Boutique. Lives Beyond Trends.",
      bgImage: "/images/featureCTA_Img2.png",
    },
  ];

  return (
    <section className="w-full xs:max-w-md sm:max-w-xl md:max-w-2xl md1:max-w-4xl lg:max-w-5xl xl:max-w-[1168px] mx-auto my-4 xs:my-9 px-4 sm:px-6">
      <div className="flex flex-col md1:flex-row gap-[24px] w-full px-1.5 xl:px-0">
        {/* Card */}
        {featuredCards.map((card, index) => (
          <div
            key={index}
            className="flex flex-row justify-start items-center w-full lg:w-[648px] border border-[#d2ae6d] p-[24px] group"
          >
            <div className="relative w-full aspect-[3/4] h-[70vw] xs:h-80 sm:h-[400px] md:h-[450px] md1:h-[300px] lg:h-[350px] xl:h-[400px] bg-black overflow-hidden">
              <Image
                src={card.bgImage}
                alt={card.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary flex flex-row justify-between items-end p-[20px] sm:p-[40px]">
                <h3 className="text-[20px] sm:text-[24px] md:text-[28px] font-quiche font-normal leading-[24px] sm:leading-[28px] md:leading-[32px] text-left capitalize text-white w-[65%] mt-[348px]">
                  {/* <AnimatedUnderline underlineColor="accent"> */}
                  {card.title}
                  {/* </AnimatedUnderline> */}
                </h3>
                <div className="flex flex-row justify-end items-center py-[6px] group-hover:animate-pulse">
                  <HiArrowLongRight className="w-10 h-10 sm:w-10 sm:h-10 hover:scale-110 text-neutral group-hover:translate-x-2 transition-transform duration-700 ease-in" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

/**
 * 📌 Notes:
 * - Features hover animations on cards
 * - Implements gradient overlays
 * - Uses responsive image loading
 */

export default FeaturedCardsSection;
