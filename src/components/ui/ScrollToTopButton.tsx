"use client";
import SlantedFillButton from "@/components/ui/SlantedFillButton";
import React, { useEffect, useState } from "react";
import { HiArrowLongUp } from "react-icons/hi2";

const ScrollToTopButton: React.FC = () => {
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
    <div
      className={`fixed ${
        showScrollTop ? "md:block" : "hidden"
      } bottom-8 right-8 rounded-full overflow-hidden z-[999] group`}
    >
      {/* Arrow Up */}
      <SlantedFillButton
        onClick={scrollToTop}
        backgroundColor="#051e33"
        fillColor="#d2ae6d"
        className="md:flex items-center justify-center w-full h-full cursor-pointer"
      >
        <HiArrowLongUp className="z-10 text-3xl text-accent group-hover:text-primary m-3" />
      </SlantedFillButton>
    </div>
  );
};

export default ScrollToTopButton;
