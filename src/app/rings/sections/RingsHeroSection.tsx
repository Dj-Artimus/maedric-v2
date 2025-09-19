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
    setIsCTABannerVisible(!isCTABannerVisible);
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
      className={`relative transition-transform duration-1000 h-full`}
    >
      <div className="min-h-[500px] max-h-[85vh] xs:min-h-screen xs:max-h-screen z-10">
        {/* Desktop Hero Image */}
        <div className="hidden sm:block absolute inset-0">
          <Image
            src="/images/hero-desktop.jpg"
            alt="Elegant woman wearing luxury ring"
            className="w-full h-full max-h-screen object-cover object-right"
            fill
            priority
          />
        </div>
        {/* Mobile Hero Image */}
        <div className="sm:hidden absolute inset-0">
          <Image
            src="/images/hero-mobile.png"
            alt="Beautiful woman in traditional attire showcasing jewelry"
            className="w-full h-full min-h-[500px] max-h-[85vh] xs:max-h-screen object-cover object-left"
            fill
            priority
          />
        </div>
        {/* Black Overlay */}
        <div className="absolute inset-0 w-full h-[85vh] min-h-[500px] max-h-[85vh] xs:h-screen xs:max-h-full bg-gradient-to-t sm:bg-gradient-to-r from-black lg:from-20% to-transparent" />
        {/* White Overlay */}
        <div className="absolute inset-0 w-full h-24 lg:h-32 bg-gradient-to-b from-neutral/70 via-neutral/30 to-transparent" />

        {/* Content */}
        <div
          className={`relative z-10 px-8 sm:px-4 pb-16 xs:pb-24 sm:py-0 h-[85vh] xs:h-screen flex items-end sm:items-center transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="sm:container sm:mx-auto">
            <div className="max-w-2xl">
              <div className="space-y-2 text-white">
                <div className="text-gray-500 text-md font-figtree -mb-1">
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
                    Rings hold a variety of meanings depending on ring
                    selection. Whether to engagement, marriage or promise
                    between a couple to a show of prestige for a business
                    partner.
                  </p>
                </div>
                <div className="pt-4">
                  <HorizontalFillButton
                    backgroundColor="transparent"
                    fillColor="#d2ae6d"
                    className="w-full h-fit xl:w-fit flex items-center gap-3 xl:text-nowrap text-sm font-figtree font-normal tracking-[3px] text-center uppercase text-white border-[1.5px] border-white bg-transparent hover:text-primary px-3 py-3 sm:px-4 xl:px-5 xl:ps-5 sm:py-3 group"
                    onClick={handleLearnMore}
                  >
                    Learn More
                  </HorizontalFillButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="z-30 relative w-full h-full px-4">
        <CTATopBanner
          isVisible={isCTABannerVisible}
          setIsVisible={setIsCTABannerVisible}
          onClose={handleCloseBanner}
          ctaBannerRef={ctaBannerRef}
        />
      </div>
    </section>
  );
};

export default RingsHeroSection;
