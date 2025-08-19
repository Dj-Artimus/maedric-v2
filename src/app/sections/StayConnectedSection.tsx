"use client";

import AnimatedUnderline from "@/components/ui/AnimatedUnderline";
import Image from "next/image";
import { useEffect, useState } from "react";
import { PiInstagramLogoBold } from "react-icons/pi";

/**
 * Array of Instagram gallery images with source and alt text.
 * Each image represents a piece of jewellery from the gallery.
 */
const instagramImages = [
  { src: "/images/insta-1.jpg", alt: "Jewellery 1" },
  { src: "/images/insta-2.jpg", alt: "Jewellery 2" },
  { src: "/images/insta-3.jpg", alt: "Jewellery 3" },
  { src: "/images/insta-4.jpg", alt: "Jewellery 4" },
  { src: "/images/insta-5.jpg", alt: "Jewellery 5" },
  { src: "/images/insta-6.jpg", alt: "Jewellery 6" },
];

/**
 * Determines the number of visible images based on screen width.
 * Responsive breakpoints for different device sizes.
 *
 * @returns {number} Number of images to display.
 */
const getVisibleCount = () => {
  if (typeof window === "undefined") return 6;
  const w = window.innerWidth;
  // if (w < 640) return 4;
  if (w < 1024) return 4;
  // if (w < 1280) return 6;
  return 6;
};

/**
 * InstagramGallarySection
 *
 * Renders a responsive Instagram-style gallery with hover effects and a "Follow Us" call-to-action.
 * Features dynamic image count based on screen size and smooth transitions.
 *
 * @returns {JSX.Element} The Instagram gallery section with responsive grid.
 *
 * @example
 * <InstagramGallarySection />
 */
const InstagramGallarySection = () => {
  // ⚙️ Local variables / hooks
  const [visibleCount, setVisibleCount] = useState(getVisibleCount());

  /**
   * Handle window resize to update visible image count.
   * Updates the gallery layout when screen size changes.
   */
  useEffect(() => {
    const handleResize = () => setVisibleCount(getVisibleCount());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calculate which images to show based on visible count
  const gallaryImages = [];
  for (let i = 0; i < visibleCount; i++) {
    const idx = i % instagramImages.length;
    gallaryImages.push(instagramImages[idx]);
  }

  return (
    <section className="bg-white py-12 md:py-16 md:pt-8">
      <div className=" max-w-md sm:max-w-lg md:max-w-3xl lg:max-w-6xl mx-auto px-4">
        {/* Section title */}
        <h2 className="font-quiche text-[32px] text-primary text-center mb-10">
          Stay Connected with Maedric
        </h2>

        {/* Gallery grid container */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 grid-rows-1 overflow-hidden">
          {/* Follow Us call-to-action block */}
          <div className="h-full min-h-[200px] sm:min-h-14 max-h-[400px] col-span-2 flex flex-col items-center justify-center bg-primary text-center cursor-pointer group">
            <span className="font-figtree text-white text-[24px] group-hover:scale-105 transition-transform duration-700">
              Follow Us
            </span>
            <span className="font-figtree text-accent text-[36px] font-semibold transition-transform duration-700">
              <AnimatedUnderline underlineColor="accent">
                @Maedric
              </AnimatedUnderline>
            </span>
          </div>

          {/* Map through gallery images */}
          {gallaryImages.map(
            (img, i) =>
              i < 6 && (
                <div
                  key={i}
                  className="relative aspect-square overflow-hidden cursor-pointer"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={400}
                    height={400}
                    className="object-cover w-full h-full hover:scale-110 opacity-80 bg-neutral transition-all duration-700"
                    priority
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-primary/50 opacity-0 hover:opacity-100 transition-all duration-700">
                    <PiInstagramLogoBold className="w-14 h-14 text-neutral" />
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </section>
  );
};

export default InstagramGallarySection;
