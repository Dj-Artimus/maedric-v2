"use client";
import React from "react";
import CTASection from "./sections/CTASection";
import CollectionsSection from "./sections/CollectionsSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import FeaturedCardsSection from "./sections/FeaturedCardsSection";
import HeroSection from "./sections/HeroSection";
import JewelryTypeSection from "./sections/JewelryTypeSection";
import FounderAndContactSection from "./sections/FounderAndContactSection";
import NewsletterSection from "./sections/NewsletterSection";
import PopularProductsSection from "./sections/PopularProductsSection";
import ProcessSection from "./sections/ProcessSection";
import StayConnectedSection from "./sections/StayConnectedSection";

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col justify-start items-center w-full">
      {/* Hero Section */}
      <HeroSection />

      {/* Shop by Jewellery Type Section */}
      <JewelryTypeSection />

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
      <StayConnectedSection />

      {/* Newsletter Section */}
      <NewsletterSection />
    </div>
  );
};

export default HomePage;
