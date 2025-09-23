// src/components/jewellerySections/FeaturedJewellerySectionWithImageSwap.tsx

"use client";

import FeaturedJewelleryCriteriaSection from "@/components/jewellerySections/FeaturedJewelleryCriteriaSection";
import Image from "next/image";
import React, { useState } from "react";

// Define the shape of a single criteria item
interface Criteria {
  number: number;
  title: string;
  description: string;
}

// Define the mapping of images for each state
const criteriaImages = [
  "/images/featuredJewelleryCriteriaImg.png", // Default image
  "/images/featuredJewelleryCriteriaImg1.png", // Image for criteria 1
  "/images/featuredJewelleryCriteriaImg2.png", // Image for criteria 2
  "/images/featuredJewelleryCriteriaImg3.png", // Image for criteria 3
];

const backgroundImages = [
  "/images/featuredJewelleryStaticBgImg.jpg", // Default background image
  "/images/featuredJewelleryStaticBgImg1.png", // Background image for criteria 1
  "/images/featuredJewelleryStaticBgImg2.png", // Background image for criteria 2
  "/images/featuredJewelleryStaticBgImg3.png", // Background image for criteria 3
];

const criterias: Criteria[] = [
  {
    number: 1,
    title: "Rarity & Exclusivity",
    description:
      "The jewellery is made of high quality metal and/or gemstones.",
  },
  {
    number: 2,
    title: "Thoughtful design and quality make",
    description:
      "The jewellery piece has a special design and a great finishing.",
  },
  {
    number: 3,
    title: "Hidden Beauty",
    description:
      "Our collections feature exclusive designs that blend classic elegance with contemporary trends, making each piece truly one-of-a-kind.",
  },
];

const FeaturedJewellerySectionWithImageSwap: React.FC = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handleMouseEnter = (index: number) => {
    setActiveImageIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveImageIndex(0);
  };

  return (
    <>
      <FeaturedJewelleryCriteriaSection
        criterias={criterias}
        criteriaImage={criteriaImages[activeImageIndex]}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      {/* Dynamic Background Image Section */}
      <div className="w-full h-[50vw] md1:h-[40vw] max-md1:py-6 md1:fixed top-1/2 translate-y-0 md1:translate-y-[-50%] left-0 -z-10">
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

export default FeaturedJewellerySectionWithImageSwap;
