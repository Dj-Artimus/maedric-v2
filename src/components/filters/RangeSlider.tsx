import { RotateCcw } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

export interface RangeValue {
  min: number;
  max: number;
}

interface RangeSliderProps {
  title: string; // e.g. "Price", "Weight"
  value: RangeValue; // controlled state
  onChange: (range: RangeValue) => void; // fired on release
  onReset?: () => void; // optional reset handler
  min: number;
  max: number;
  step?: number;
  formatValue?: (val: number) => string; // custom formatter
}

const RangeSlider: React.FC<RangeSliderProps> = ({
  title,
  value,
  onChange,
  onReset,
  min,
  max,
  step = 1,
  formatValue = (val) => val.toString(),
}) => {
  const [isDragging, setIsDragging] = useState<"min" | "max" | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [localRange, setLocalRange] = useState<RangeValue>(value);
  const [isResetAnimating, setIsResetAnimating] = useState(false);

  useEffect(() => {
    setLocalRange(value);
  }, [value]);

  const getPositionFromValue = (val: number) =>
    ((val - min) / (max - min)) * 100;

  const handleStart =
    (type: "min" | "max") => (e: React.MouseEvent | React.TouchEvent) => {
      e.preventDefault();
      setIsDragging(type);
    };

  useEffect(() => {
    const getValueFromPosition = (pos: number) => {
      const val = (pos / 100) * (max - min) + min;
      return Math.round(val / step) * step;
    };

    const handleMove = (clientX: number) => {
      if (!isDragging || !sliderRef.current) return;

      const rect = sliderRef.current.getBoundingClientRect();
      const pos = ((clientX - rect.left) / rect.width) * 100;
      const val = getValueFromPosition(Math.max(0, Math.min(100, pos)));

      if (isDragging === "min" && val <= localRange.max) {
        setLocalRange({ ...localRange, min: val });
      } else if (isDragging === "max" && val >= localRange.min) {
        setLocalRange({ ...localRange, max: val });
      }
    };

    const handleMouseMove = (e: MouseEvent) => handleMove(e.clientX);
    const handleTouchMove = (e: TouchEvent) => handleMove(e.touches[0].clientX);

    const handleEnd = () => {
      if (isDragging) {
        onChange(localRange); // ✅ apply filter only on release
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
  }, [isDragging, localRange, onChange, min, max, step]);

  const reset = () => {
    onReset?.();
    setIsResetAnimating(true);
    setTimeout(() => setIsResetAnimating(false), 1000);
  };

  return (
    <div className="relative md:h-full border bg-white p-3">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-figtree font-medium text-primary">{title}</h3>
        {onReset && (
          <button
            onClick={reset}
            className="p-1 text-secondary hover:text-primary rounded"
          >
            <RotateCcw
              className={`w-4 h-4 ${isResetAnimating ? "resetFilterAnimation" : ""}`}
            />
          </button>
        )}
      </div>

      {/* Slider Track */}
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

      {/* Value Labels */}
      <div className="flex justify-between pt-1">
        <input
          type="text"
          value={formatValue(localRange.min)}
          className="w-16 px-1 border text-primary text-md font-figtree text-center"
          readOnly
        />
        <input
          type="text"
          value={formatValue(localRange.max)}
          className="w-16 px-1 border text-primary text-md font-figtree text-center"
          readOnly
        />
      </div>
    </div>
  );
};

export default RangeSlider;
