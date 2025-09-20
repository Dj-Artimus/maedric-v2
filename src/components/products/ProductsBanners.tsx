// src/components/products/ProductsBanners.tsx

"use client";
import React, { useEffect, useState } from "react";
import { BannerCTA } from "./BannerCTA";

interface ProductsBannersProps {
  index: number;
  bannerImages: {
    src: string;
    alt: string;
    href: string;
    title: string;
    subtitle: string;
    buttonText: string;
  }[];
}

const ProductsBanners: React.FC<ProductsBannersProps> = ({
  index,
  bannerImages,
}) => {
  const getBannerCycle = (cols: number) => {
    if (cols === 3) {
      return [9, 14];
    }
    return [8, 12];
  };

  const [cols, setCols] = useState(4);
  useEffect(() => {
    const updateCols = () => {
      if (window.innerWidth < 640) setCols(1);
      else if (window.innerWidth < 1024) setCols(2);
      else if (window.innerWidth < 1280) setCols(3);
      else setCols(4);
    };
    updateCols();
    window.addEventListener("resize", updateCols);
    return () => window.removeEventListener("resize", updateCols);
  }, []);

  const cycle = getBannerCycle(cols);

  let total = 0;
  let stepIndex = 0;

  while (total < index + 1) {
    const step = cycle[stepIndex % cycle.length];
    total += step;
    if (total === index + 1) {
      const bannerData = bannerImages[stepIndex % 2];
      return (
        <div className="xs:col-span-2">
          <BannerCTA
            image={bannerData.src}
            title={bannerData.title}
            subtitle={bannerData.subtitle}
            buttonText={bannerData.buttonText}
            href={bannerData.href}
          />
        </div>
      );
    }
    stepIndex++;
  }

  return null;
};

export default ProductsBanners;
