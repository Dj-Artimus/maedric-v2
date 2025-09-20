"use client";

import { Check, RotateCcw } from "lucide-react";
import { useState } from "react";

interface FilterMetalTypeProps {
  selectedMetals: string[];
  onChange: (selected: string[]) => void;
  onReset: () => void;
}

export const FilterMetalType: React.FC<FilterMetalTypeProps> = ({
  selectedMetals,
  onChange,
  onReset,
}) => {
  const [isResetFilterAnimating, setIsResetFilterAnimating] = useState(false);

  const metals = [
    { id: "gold", label: "Gold", color: "bg-gradient-tri-gold" },
    { id: "platinum", label: "Platinum", color: "bg-platinum" },
    { id: "titanium", label: "Titanium", color: "bg-titanium" },
    {
      id: "silver",
      label: "Silver",
      color: "bg-silver border-2 border-border-light",
    },
    { id: "stainless-steel", label: "Stainless Steel", color: "bg-stainless" },
  ];

  const resetFilter = () => {
    onReset();
    setIsResetFilterAnimating(true);
    setTimeout(() => setIsResetFilterAnimating(false), 1000);
  };

  const toggleMetal = (id: string) => {
    const newSelected = selectedMetals.includes(id)
      ? selectedMetals.filter((item) => item !== id)
      : [...selectedMetals, id];
    onChange(newSelected);
  };

  return (
    <div className="relative border bg-white p-3 pb-1">
      {/* Header */}
      <div className="flex items-center justify-between mb-1">
        <h3 className="font-figtree font-medium text-primary">Metal Type</h3>
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
      <div className="flex w-full gap-6 overflow-x-auto p-2">
        {metals.map((metal) => (
          <div
            key={metal.id}
            className=" w-8 flex flex-col items-center gap-1 flex-shrink-0 grow-0"
          >
            <button
              onClick={() => toggleMetal(metal.id)}
              className={`
                relative w-8 h-8 rounded-full ${metal.color}
                ${
                  selectedMetals.includes(metal.id)
                    ? "ring-2 ring-primary ring-offset-1"
                    : "hover:ring-1 hover:ring-border-light hover:ring-offset-1"
                }
                transition-all duration-200
              `}
            >
              {selectedMetals.includes(metal.id) && (
                <Check className="w-4 h-4 text-primary/80 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              )}
            </button>
            <span className="text-xs font-figtree text-primary w-12 text-center">
              {metal.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
