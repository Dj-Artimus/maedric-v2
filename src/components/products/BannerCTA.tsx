import React from "react";
import HorizontalFillButton from "../ui/HorizontalFillButton";

interface BannerCTAProps {
  type: "banner-1" | "banner-2";
}

export const BannerCTA: React.FC<BannerCTAProps> = ({ type }) => {
  const bannerConfig = {
    "banner-1": {
      image: "/images/banner-1.png",
      title: "Looking For Something Truly One Of A Kind?",
      subtitle: "Discover our exclusive custom ring collection",
      buttonText: "SHOP NOW",
    },
    "banner-2": {
      image: "/images/banner-2.png",
      title: "Discover The Beauty Of Uniqueness",
      subtitle: "Handcrafted perfection in every detail",
      buttonText: "SHOP NOW",
    },
  };

  const config = bannerConfig[type];

  return (
    <div className="col-span-2 relative h-[412px] border border-accent overflow-hidden group cursor-pointer">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
        style={{ backgroundImage: `url(${config.image})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 " />

      {/* Content */}
      <div className="absolute bottom-0 left-0 h-fit flex justify-between items-center p-8 z-10">
        <h2 className="font-quiche text-white text-2xl mb-2 max-w-[50%]">
          {config.title}
        </h2>
        <HorizontalFillButton
          backgroundColor="transparent"
          fillColor="#d2ae6d"
          className="w-full h-fit xl:w-fit flex items-center gap-3 xl:text-nowrap text-[15px] font-figtree font-normal tracking-[3px] text-center uppercase text-white border-[1.5px] border-white bg-transparent hover:text-primary px-3 py-3 sm:px-4 xl:px-5 xl:ps-5 sm:py-3 group"
          href=""
        >
          {config.buttonText}
        </HorizontalFillButton>
      </div>
    </div>
  );
};
