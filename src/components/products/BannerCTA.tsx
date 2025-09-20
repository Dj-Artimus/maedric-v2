// src/components/products/BannerCTA.tsx
import React from "react";
import HorizontalFillButton from "../ui/HorizontalFillButton";

interface BannerCTAProps {
  image: string;
  title: string;
  subtitle: string;
  buttonText: string;
  href: string;
}

export const BannerCTA: React.FC<BannerCTAProps> = ({
  image,
  title,
  subtitle,
  buttonText,
  href,
}) => {
  return (
    <div className="col-span-2 relative min-h-[412px] h-full border border-accent overflow-hidden group cursor-pointer">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 " />

      {/* Content */}
      <div className="absolute bottom-0 left-0 h-fit flex flex-col justify-end p-8 z-10">
        <h2 className="font-quiche text-white text-2xl mb-2 max-w-[50%]">
          {title}
        </h2>
        <p className="text-white text-sm mb-4">{subtitle}</p>
        <HorizontalFillButton
          backgroundColor="transparent"
          fillColor="#d2ae6d"
          className="w-full h-fit xl:w-fit flex items-center gap-3 xl:text-nowrap text-[15px] font-figtree font-normal tracking-[3px] text-center uppercase text-white border-[1.5px] border-white bg-transparent hover:text-primary px-3 py-3 sm:px-4 xl:px-5 xl:ps-5 sm:py-3 group"
          href={href}
        >
          {buttonText}
        </HorizontalFillButton>
      </div>
    </div>
  );
};
