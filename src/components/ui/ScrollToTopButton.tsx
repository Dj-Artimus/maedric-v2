"use client";
import SlantedFillButton from "@/components/ui/SlantedFillButton";
import React, { useEffect, useState } from "react";
import { HiArrowLongUp } from "react-icons/hi2";

const ScrollToTopButton: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Get the hero section height (you used the first section)
      const heroSection = document.querySelector("section");
      if (heroSection) {
        const heroHeight = heroSection.clientHeight;
        setShowScrollTop(window.scrollY > heroHeight);
      } else {
        // fallback
        setShowScrollTop(window.scrollY > 300);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    e.stopPropagation();

    // Suppress smart snap globally while we animate to top
    window.__suppressSmartSnap = true;

    // Clear suppression after we detect we've reached top OR after fallback ms
    let fallback = 0;
    const clearWhenAtTop = () => {
      if (window.scrollY === 0) {
        window.__suppressSmartSnap = false;
        window.removeEventListener("scroll", clearWhenAtTop);
        if (fallback) window.clearTimeout(fallback);
      }
    };

    window.addEventListener("scroll", clearWhenAtTop, { passive: true });

    // Fallback: in case scroll-to-top doesn't reach exactly 0 (or no scroll event fires)
    fallback = window.setTimeout(() => {
      window.__suppressSmartSnap = false;
      window.removeEventListener("scroll", clearWhenAtTop);
    }, 1400); // adjust if you want longer

    // Finally, do the smooth scroll
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`fixed ${showScrollTop ? "md:block" : "hidden"} bottom-8 right-8 rounded-full overflow-hidden z-[100] group`}
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
  );
};

export default ScrollToTopButton;
