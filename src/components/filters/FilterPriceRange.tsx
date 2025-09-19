import { useFiltersStore } from "@/store/useFiltersStore";
import { RotateCcw } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

export const FilterPriceRange = () => {
  const { priceRange, setPriceRange, resetPriceFilter } = useFiltersStore();
  const [isDragging, setIsDragging] = useState<"min" | "max" | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isResetFilterAnimating, setIsResetFilterAnimating] = useState(false);

  // Local state while dragging (prevents live API calls)
  const [localRange, setLocalRange] = useState(priceRange);

  useEffect(() => {
    setLocalRange(priceRange);
  }, [priceRange]);

  const resetFilter = () => {
    resetPriceFilter();
    setIsResetFilterAnimating(true);
    setTimeout(() => {
      setIsResetFilterAnimating(false);
    }, 1000);
  };

  const min = 500;
  const max = 12000;

  const getPositionFromValue = (value: number) =>
    ((value - min) / (max - min)) * 100;

  const getValueFromPosition = (position: number) => {
    const value = (position / 100) * (max - min) + min;
    return Math.round(value / 100) * 100;
  };

  const handleStart =
    (type: "min" | "max") => (e: React.MouseEvent | React.TouchEvent) => {
      e.preventDefault();
      setIsDragging(type);
    };

  useEffect(() => {
    const handleMove = (clientX: number) => {
      if (!isDragging || !sliderRef.current) return;

      const rect = sliderRef.current.getBoundingClientRect();
      const position = ((clientX - rect.left) / rect.width) * 100;
      const value = getValueFromPosition(Math.max(0, Math.min(100, position)));

      if (isDragging === "min" && value <= localRange.max) {
        setLocalRange({ ...localRange, min: value });
      } else if (isDragging === "max" && value >= localRange.min) {
        setLocalRange({ ...localRange, max: value });
      }
    };

    const handleMouseMove = (e: MouseEvent) => handleMove(e.clientX);
    const handleTouchMove = (e: TouchEvent) => handleMove(e.touches[0].clientX);

    const handleEnd = () => {
      if (isDragging) {
        setPriceRange(localRange); // ✅ apply filter only on release
        setIsDragging(null);
      }
    };

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleEnd);
      document.addEventListener("touchmove", handleTouchMove);
      document.addEventListener("touchend", handleEnd);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleEnd);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleEnd);
    };
  }, [isDragging, localRange, setPriceRange]);

  const formatPrice = (value: number) =>
    value >= 1000 ? `$${Math.round(value / 1000)}k` : `$${value}`;

  return (
    <div className="relative border bg-white p-3">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-figtree font-medium text-primary">Price</h3>
        <button
          onClick={resetFilter}
          className="p-1 text-secondary hover:text-primary rounded"
        >
          <RotateCcw
            className={`w-4 h-4 ${
              isResetFilterAnimating ? "resetFilterAnimation" : ""
            }`}
          />
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
              left: `${getPositionFromValue(localRange.min)}%`,
              width: `${
                getPositionFromValue(localRange.max) -
                getPositionFromValue(localRange.min)
              }%`,
            }}
          />

          {/* Min handle */}
          <div
            className="absolute w-4 h-4 bg-black shadow-md rounded cursor-grab transform -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition-transform rotate-45"
            style={{
              left: `${getPositionFromValue(localRange.min)}%`,
              top: "50%",
            }}
            onMouseDown={handleStart("min")}
            onTouchStart={handleStart("min")}
          />

          {/* Max handle */}
          <div
            className="absolute w-4 h-4 bg-black shadow-md rounded cursor-grab transform -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition-transform rotate-45"
            style={{
              left: `${getPositionFromValue(localRange.max)}%`,
              top: "50%",
            }}
            onMouseDown={handleStart("max")}
            onTouchStart={handleStart("max")}
          />
        </div>
      </div>

      <div className="flex justify-between pt-1">
        <input
          type="text"
          value={formatPrice(localRange.min)}
          className="w-14 px-1 border text-primary text-md font-figtree text-center"
          readOnly
        />
        <input
          type="text"
          value={formatPrice(localRange.max)}
          className="w-14 px-1 border text-primary text-md font-figtree text-center"
          readOnly
        />
      </div>
    </div>
  );
};
