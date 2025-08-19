"use client";
import React from "react";
import CTASection from "./sections/CTASection";
import CollectionsSection from "./sections/CollectionsSection";
import FeaturedCardsSection from "./sections/FeaturedCardsSection";
import FounderAndContactSection from "./sections/FounderAndContactSection";
import HeroSection from "./sections/HeroSection";
import JewelleryTypeSection from "./sections/JewelleryTypeSection";
import NewsletterSection from "./sections/NewsletterSection";
import PopularProductsSection from "./sections/PopularProductsSection";
import ProcessSection from "./sections/ProcessSection";
import StayConnectedSection from "./sections/StayConnectedSection";
import TestimonialsSection from "./sections/TestimonialsSection";

const HomePage: React.FC = () => {
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
      <StayConnectedSection />

      {/* Newsletter Section */}
      <NewsletterSection />
    </div>
  );
};

export default HomePage;
