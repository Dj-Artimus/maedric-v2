"use client";
import React, { useEffect, useState } from "react";
import { BannerCTA } from "./BannerCTA";

const ProductsBanners: React.FC<{ index: number }> = ({ index }) => {
  // Helper: get banner cycle for given columns
  const getBannerCycle = (cols: number) => {
    if (cols === 3) {
      return [9, 14]; // cycle: 9 → banner-1, 14 → banner-2
    }
    return [8, 12]; // cycle: 8 → banner-1, 12 → banner-2
  };

  // 👉 detect current cols (1,2,3,4)
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

  // 🧮 figure out which banner belongs at this index
  let total = 0;
  let stepIndex = 0;

  while (total < index + 1) {
    const step = cycle[stepIndex % cycle.length];
    total += step;
    if (total === index + 1) {
      const bannerType = stepIndex % 2 === 0 ? "banner-1" : "banner-2";
      return (
        <div className="xs:col-span-2">
          <BannerCTA type={bannerType} />
        </div>
      );
    }
    stepIndex++;
  }

  return null;
};

export default ProductsBanners;
