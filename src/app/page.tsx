"use client";
import SlantedFillButton from "@/components/ui/SlantedFillButton";
import React, { useEffect, useState } from "react";
import { HiArrowLongUp } from "react-icons/hi2";
import CTASection from "./sections/CTASection";
import CollectionsSection from "./sections/CollectionsSection";
import FeaturedCardsSection from "./sections/FeaturedCardsSection";
import FounderAndContactSection from "./sections/FounderAndContactSection";
import HeroSection from "./sections/HeroSection";
import JewelleryTypeSection from "./sections/JewelleryTypeSection";
import NewsletterSection from "./sections/NewsletterSection";
import PopularProductsSection from "./sections/PopularProductsSection";
import ProcessSection from "./sections/ProcessSection";
import InstagramGallarySection from "./sections/InstagramGallarySection;";
import TestimonialsSection from "./sections/TestimonialsSection";

const HomePage: React.FC = () => {
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

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    e.stopPropagation();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-col justify-start items-center w-full">
      {/* Hero Section */}
      <HeroSection />

      {/* Shop by Jewellery Type Section */}
      <JewelleryTypeSection />

      {/* Collections Section */}
      <CollectionsSection />

      {/* Featured Cards Section */}
      <FeaturedCardsSection />

      {/* Popular Products Section */}
      <PopularProductsSection />

      {/* CTA Section */}
      <CTASection />

      {/* Process Section */}
      <ProcessSection />

      {/* Experiences Section */}
      <TestimonialsSection />

      {/* Founder and Contact Section */}
      <FounderAndContactSection />

      {/* Stay Connected Section */}
      <InstagramGallarySection />

      {/* Newsletter Section */}
      <NewsletterSection />

      {/* Arrow Up */}
      <div
        className={`fixed ${
          showScrollTop ? "md:block" : "hidden"
        } bottom-8 right-8 rounded-full overflow-hidden z-[999] group`}
      >
        <SlantedFillButton
          onClick={scrollToTop}
          backgroundColor="#051e33"
          fillColor="#d2ae6d"
          className="md:flex items-center justify-center w-full h-full cursor-pointer"
        >
          <HiArrowLongUp className="z-10 text-3xl text-accent group-hover:text-primary m-3" />
        </SlantedFillButton>
      </div>
    </div>
  );
};

export default HomePage;
