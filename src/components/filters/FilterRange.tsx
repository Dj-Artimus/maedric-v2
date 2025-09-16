import { useFiltersStore } from "@/store/useFiltersStore";
import { RotateCcw } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

export const FilterRange = () => {
  const { priceRange, setPriceRange, resetPriceFilter } = useFiltersStore();
  const [isDragging, setIsDragging] = useState<"min" | "max" | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const min = 500;
  const max = 12000;

  const getPositionFromValue = (value: number) => {
    return ((value - min) / (max - min)) * 100;
  };

  const getValueFromPosition = (position: number) => {
    const value = (position / 100) * (max - min) + min;
    return Math.round(value / 100) * 100; // Round to nearest 100
  };

  const handleMouseDown = (type: "min" | "max") => (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(type);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging || !sliderRef.current) return;

      const rect = sliderRef.current.getBoundingClientRect();
      const position = ((e.clientX - rect.left) / rect.width) * 100;
      const value = getValueFromPosition(Math.max(0, Math.min(100, position)));

      if (isDragging === "min" && value <= priceRange.max) {
        setPriceRange({ ...priceRange, min: value });
      } else if (isDragging === "max" && value >= priceRange.min) {
        setPriceRange({ ...priceRange, max: value });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(null);
    };

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, priceRange, setPriceRange]);

  const formatPrice = (value: number) => {
    if (value >= 1000) {
      return `$${Math.round(value / 1000)}k`;
    }
    return `$${value}`;
  };

  return (
    <div className="relative border bg-white p-3">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-figtree font-medium text-primary">Price</h3>
        <button
          onClick={resetPriceFilter}
          className="p-1 hover:bg-filter-bg rounded"
        >
          <RotateCcw className="w-4 h-4 text-secondary" />
        </button>
      </div>

      <div className="my-4 mt-6 px-2">
        <div
          ref={sliderRef}
          className="relative h-0.5 bg-border-light rounded-full cursor-pointer"
        >
          {/* Active range */}
          <div
            className="absolute h-full bg-primary rounded-full"
            style={{
              left: `${getPositionFromValue(priceRange.min)}%`,
              width: `${getPositionFromValue(priceRange.max) - getPositionFromValue(priceRange.min)}%`,
            }}
          />

          {/* Min handle */}
          <div
            className="absolute w-4 h-4 bg-black shadow-md rounded cursor-grab transform -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition-transform rotate-45"
            style={{
              left: `${getPositionFromValue(priceRange.min)}%`,
              top: "50%",
            }}
            onMouseDown={handleMouseDown("min")}
          />

          {/* Max handle */}
          <div
            className="absolute w-4 h-4 bg-black shadow-md rounded cursor-grab transform -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition-transform rotate-45"
            style={{
              left: `${getPositionFromValue(priceRange.max)}%`,
              top: "50%",
            }}
            onMouseDown={handleMouseDown("max")}
          />
        </div>
      </div>

      <div className="flex justify-between pt-1">
        <input
          type="text"
          value={formatPrice(priceRange.min)}
          className="w-14 px-1 border text-primary text-md font-figtree text-center"
          readOnly
        />
        <input
          type="text"
          value={formatPrice(priceRange.max)}
          className="w-14 px-1 border text-primary text-md font-figtree text-center"
          readOnly
        />
      </div>
    </div>
  );
};
