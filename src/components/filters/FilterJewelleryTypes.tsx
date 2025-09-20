// src/components/filters/FilterJewelleryTypes.tsx

"use client";

import { RotateCcw } from "lucide-react";
import React, { useState } from "react";

interface FilterOption {
  id: string;
  label: string;
}

interface FilterJewelleryTypesProps {
  types: FilterOption[];
  selectedTypes: string[];
  onChange: (selected: string[]) => void;
  onReset: () => void;
  cols?: string; // Add the optional cols prop
}

export const FilterJewelleryTypes: React.FC<FilterJewelleryTypesProps> = ({
  types,
  selectedTypes,
  onChange,
  onReset,
  cols = "grid-cols-2 sm:grid-cols-3", // Default value for responsive columns
}) => {
  const [isResetFilterAnimating, setIsResetFilterAnimating] = useState(false);

  const resetFilter = () => {
    onReset();
    setIsResetFilterAnimating(true);
    setTimeout(() => setIsResetFilterAnimating(false), 1000);
  };

  const toggleType = (id: string) => {
    const newSelected = selectedTypes.includes(id)
      ? selectedTypes.filter((item) => item !== id)
      : [...selectedTypes, id];
    onChange(newSelected);
  };

  return (
    <div className="relative border bg-white p-3">
      {/* Header with hardcoded title */}
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-figtree font-medium text-primary">Types</h3>
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

      {/* Options Grid with dynamic columns */}
      <div className={`grid gap-2 ${cols}`}>
        {types.map((type) => (
          <button
            key={type.id}
            onClick={() => toggleType(type.id)}
            className={`
              py-2 px-4 text-center font-figtree text-sm transition-colors duration-300
              ${
                selectedTypes.includes(type.id)
                  ? "bg-accent text-white"
                  : "bg-white text-primary border border-gray-300 hover:bg-gray-50"
              }
            `}
          >
            {type.label}
          </button>
        ))}
      </div>
    </div>
  );
};
