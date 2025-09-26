"use client";
import HorizontalFillButton from "@/components/ui/HorizontalFillButton";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import JewelleryCTATopBanner from "./JewelleryCTATopBanner";

interface JewelleryHeroSectionProps {
  title: string;
  description: string;
  breadcrumb: { label: string; href?: string }[];
  desktopImage: string;
  mobileImage: string;
  mobileImagePosition?: string;
  ctaButtonText?: string;
  ctaImage: string;
  ctaImageAlt: string;
  ctaTitle: string;
  ctaDescription: string[];
}

const JewelleryHeroSection: React.FC<JewelleryHeroSectionProps> = ({
  title,
  description,
  breadcrumb,
  desktopImage,
  mobileImage,
  mobileImagePosition = "object-left",
  ctaButtonText = "Learn More",
  ctaImage,
  ctaImageAlt,
  ctaTitle,
  ctaDescription,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isCTABannerVisible, setIsCTABannerVisible] = useState(false);

  const heroRef = useRef<HTMLDivElement>(null);
  const ctaBannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleLearnMore = () => {
    setIsCTABannerVisible(!isCTABannerVisible);
  };

  const handleCloseBanner = () => {
    setIsCTABannerVisible(false);
    heroRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="hero-section"
      ref={heroRef}
      className="relative transition-transform duration-1000 h-full"
    >
      <div className="min-h-[500px] max-h-[85vh] xs:min-h-screen xs:max-h-screen z-10">
        {/* Desktop Hero Image */}
        <div className="hidden sm:block ">
          <Image
            src={desktopImage}
            alt={title}
            className="w-full h-full max-h-screen object-cover object-right"
            fill
            priority
          />
        </div>
        {/* Mobile Hero Image */}
        <div className="sm:hidden">
          <Image
            src={mobileImage}
            alt={title}
            className={` w-full h-full min-h-[500px] max-h-[85vh] xs:max-h-screen object-cover ${mobileImagePosition}`}
            fill
            priority
          />
        </div>

        {/* Black Overlay */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-t sm:bg-gradient-to-r from-black lg:from-20% to-transparent" />

        {/* White Overlay */}
        <div className="absolute inset-0 w-full h-24 lg:h-32 bg-gradient-to-b from-neutral/70 via-neutral/30 to-transparent" />

        {/* Content */}
        <div
          className={`relative z-10 px-8 xl:px-28 pb-16 xs:pb-24 sm:py-0 h-[85vh] xs:h-screen flex items-end sm:items-center transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className=" sm:max-xl:container sm:max-xl:mx-auto ">
            <div className="max-w-2xl">
              <div className="space-y-2 text-white">
                {/* Breadcrumb */}
                <div className="text-white/60 text-md font-figtree -mb-1">
                  {breadcrumb.map((crumb, idx) => (
                    <span key={idx}>
                      {crumb.href ? (
                        <Link href={crumb.href}>{crumb.label}</Link>
                      ) : (
                        <span className="text-neutral">{crumb.label}</span>
                      )}
                      {idx < breadcrumb.length - 1 && (
                        <span className="text-[14px]">{"  >  "}</span>
                      )}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h1 className="font-quiche capitalize text-2xl md:text-3xl lg:text-4xl">
                  {title}
                </h1>

                {/* Description */}
                <p className="font-figtree text-sm md:text-[16px] max-w-md tracking-wide">
                  {description}
                </p>

                {/* CTA Button */}
                <div className="pt-4">
                  <HorizontalFillButton
                    backgroundColor="transparent"
                    fillColor="#d2ae6d"
                    className="w-full h-fit xl:w-fit flex items-center gap-3 xl:text-nowrap text-sm font-figtree font-normal tracking-[3px] text-center uppercase text-white border-[1.5px] border-white bg-transparent hover:text-primary px-5 py-3 md:px-6 md:py-4 group"
                    onClick={handleLearnMore}
                  >
                    {ctaButtonText}
                  </HorizontalFillButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="z-30 relative w-full h-full px-4">
        <JewelleryCTATopBanner
          isVisible={isCTABannerVisible}
          setIsVisible={setIsCTABannerVisible}
          onClose={handleCloseBanner}
          ctaBannerRef={ctaBannerRef}
          image={ctaImage}
          alt={ctaImageAlt}
          title={ctaTitle}
          description={ctaDescription}
        />
      </div>
    </section>
  );
};

export default JewelleryHeroSection;
