"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface FeaturedPageHeroSectionProps {
  title: string;
  description: string;
  breadcrumb: { label: string; href?: string }[];
  desktopImage: string;
  mobileImage: string;
  mobileImagePosition?: string;
}

const FeaturedPageHeroSection: React.FC<
  FeaturedPageHeroSectionProps
> = ({
  title,
  description,
  breadcrumb,
  desktopImage,
  mobileImage,
  mobileImagePosition = "object-left",
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative transition-transform duration-1000 h-full">
      <div className="min-h-[500px] max-h-[85vh] xs:min-h-screen xs:max-h-screen z-10">
        {/* Desktop Hero Image */}
        <div className="hidden sm:block">
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
            className={`w-full h-full min-h-[500px] max-h-[85vh] xs:max-h-screen object-cover ${mobileImagePosition}`}
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPageHeroSection;
