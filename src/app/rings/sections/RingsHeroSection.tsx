import HorizontalFillButton from "@/components/ui/HorizontalFillButton";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import CTATopBanner from "./CTATopBanner";

const RingsHeroSection: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isCTABannerVisible, setIsCTABannerVisible] = useState(false);

  // Add refs for smooth scrolling
  const heroRef = useRef<HTMLDivElement>(null);
  const ctaBannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Smooth scroll to CTA Banner and show at the same time
  const handleLearnMore = () => {
    setIsCTABannerVisible(true);
  };

  // Hide banner and scroll to Hero at the same time
  const handleCloseBanner = () => {
    setIsCTABannerVisible(false);
    heroRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="hero-section"
      ref={heroRef}
      className={`relative h-screen transition-transform duration-1000 ${isCTABannerVisible ? "mb-[500px]" : "mb-0"}`}
    >
      {/* Desktop Hero Image */}
      <div className="hidden md:block absolute inset-0">
        <Image
          src="/images/hero-desktop.jpg"
          alt="Elegant woman wearing luxury ring"
          className="w-full h-full object-cover object-top"
          fill
          priority
        />
      </div>

      {/* Mobile Hero Image */}
      <div className="md:hidden absolute inset-0">
        <Image
          src="/images/hero-mobile.png"
          alt="Beautiful woman in traditional attire showcasing jewelry"
          className="w-full h-full object-cover object-center"
          fill
          priority
        />
      </div>

      {/* Black Overlay */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-black from-20% to-transparent" />
      {/* White Overlay */}
      <div className="absolute inset-0 w-full h-32 bg-gradient-to-b from-neutral/70 via-neutral/30 to-transparent" />

      {/* Content */}
      <div
        className={`relative z-10 h-full flex items-center transition-all duration-1000 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <div className="space-y-2 text-white">
              <div className="text-gray-500 text-[15px] -mb-1">
                <Link href="/">Home</Link>{" "}
                <span className="text-[14px]">
                  {"  "}&gt;{"  "}
                </span>
                <span className="text-neutral">Rings</span>
              </div>

              <div>
                <h1 className="font-quiche text-2xl md:text-3xl lg:text-4xl">
                  One ring to say it all
                </h1>
              </div>

              <div>
                <p className="font-figtree text-sm md:text-[16px] max-w-md tracking-wide">
                  Rings hold a variety of meanings depending on ring selection.
                  Whether to engagement, marriage or promise between a couple to
                  a show of prestige for a business partner.
                </p>
              </div>

              <div className="pt-4">
                <HorizontalFillButton
                  backgroundColor="transparent"
                  fillColor="#d2ae6d"
                  className="w-full h-fit xl:w-fit flex items-center gap-3 xl:text-nowrap text-[15px] font-figtree font-normal tracking-[3px] text-center uppercase text-white border-[1.5px] border-white bg-transparent hover:text-primary px-3 py-3 sm:px-4 xl:px-5 xl:ps-5 sm:py-3 group"
                  onClick={handleLearnMore}
                >
                  Learn More
                </HorizontalFillButton>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CTATopBanner
        isVisible={isCTABannerVisible}
        setIsVisible={setIsCTABannerVisible}
        onClose={handleCloseBanner}
        ctaBannerRef={ctaBannerRef}
      />
    </section>
  );
};

export default RingsHeroSection;
