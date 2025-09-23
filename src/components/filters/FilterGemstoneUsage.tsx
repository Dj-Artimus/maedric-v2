"use client";

import { Check, RotateCcw } from "lucide-react";
import { useState } from "react";

interface FilterGemstoneUsageProps {
  selectedGemstones: string[];
  onChange: (selected: string[]) => void;
  onReset: () => void;
}

export const FilterGemstoneUsage: React.FC<FilterGemstoneUsageProps> = ({
  selectedGemstones,
  onChange,
  onReset,
}) => {
  const [isResetFilterAnimating, setIsResetFilterAnimating] = useState(false);

  const gemstones = [
    { id: "metal-only", label: "Metal Only", color: "bg-gray-400" },
    { id: "ruby", label: "Ruby", color: "bg-[#aa3d66]" },
    { id: "sapphire", label: "Sapphire", color: "bg-[#3b36d6]" },
    { id: "emerald", label: "Emerald", color: "bg-[#186a40]" },
    { id: "diamonds", label: "Diamonds", color: "bg-gray-200" },
  ];

  const resetFilter = () => {
    onReset();
    setIsResetFilterAnimating(true);
    setTimeout(() => setIsResetFilterAnimating(false), 1000);
  };

  const toggleGemstone = (id: string) => {
    const newSelected = selectedGemstones.includes(id)
      ? selectedGemstones.filter((item) => item !== id)
      : [...selectedGemstones, id];
    onChange(newSelected);
  };

  return (
    <div className="relative border flex flex-col md:h-full bg-white p-3 pb-1">
      {/* Header */}
      <div className="flex items-center grow-0 justify-between mb-1">
        <h3 className="font-figtree font-medium text-primary">
          Gemstone Usage
        </h3>
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

      {/* Options */}
      <div className="flex gap-8 h-full flex-grow overflow-x-auto scrollbar-thin p-2">
        {gemstones.map((gem) => (
          <div key={gem.id} className=" w-8 flex flex-col items-center gap-1">
            <button
              onClick={() => toggleGemstone(gem.id)}
              className={`
                relative w-8 h-8 rounded-full ${gem.color}
                ${
                  selectedGemstones.includes(gem.id)
                    ? "ring-2 ring-primary ring-offset-1"
                    : "hover:ring-1 hover:ring-border-light hover:ring-offset-1"
                }
                transition-all duration-200
              `}
            >
              {selectedGemstones.includes(gem.id) && (
                <Check className="w-4 h-4 text-primary/80 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              )}
            </button>
            <span className="text-xs font-figtree text-primary text-center">
              {gem.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
