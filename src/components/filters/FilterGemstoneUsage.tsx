import { useFiltersStore } from "@/store/useFiltersStore";
import { Check, RotateCcw } from "lucide-react";
import { useState } from "react";

export const FilterGemstoneUsage = () => {
  const { gemstoneUsage, setGemstoneUsage, resetGemstoneFilter } =
    useFiltersStore();
  const [isResetFilterAnimating, setIsResetFilterAnimating] = useState(false);

  // Handle animation for reset all button
  const resetFilter = () => {
    resetGemstoneFilter();

    // Trigger the animation by setting isAnimating to true
    setIsResetFilterAnimating(true);

    // Remove the animation class after 1 sec (duration of the animation)
    setTimeout(() => {
      setIsResetFilterAnimating(false);
    }, 1000); // Match the duration in your CSS
  };

  const gemstones = [
    { id: "metal-only", label: "Metal Only", color: "bg-gray-400" },
    { id: "ruby", label: "Ruby", color: "bg-[#aa3d66]" },
    { id: "sapphire", label: "Sapphire", color: "bg-[#3b36d6]" },
    { id: "emerald", label: "Emerald", color: "bg-[#186a40]" },
    { id: "diamonds", label: "Diamonds", color: "bg-gray-200" },
  ];

  const toggleGemstone = (gemstoneId: string) => {
    const newUsage = gemstoneUsage.includes(gemstoneId)
      ? gemstoneUsage.filter((id) => id !== gemstoneId)
      : [...gemstoneUsage, gemstoneId];
    setGemstoneUsage(newUsage);
  };

  return (
    <div className="relative border bg-white p-3 pb-1">
      <div className="flex items-center justify-between mb-1">
        <h3 className="font-figtree font-medium text-primary">
          Gemstone Usage
        </h3>
        <button
          onClick={resetFilter}
          className="p-1 text-secondary hover:text-primary rounded"
        >
          <RotateCcw
            className={`w-4 h-4 ${isResetFilterAnimating ? "resetFilterAnimation" : ""}`}
          />
        </button>
      </div>

      <div className="flex gap-5 overflow-x-auto p-2">
        {gemstones.map((gemstone) => (
          <div key={gemstone.id} className="flex flex-col items-center gap-1">
            <button
              onClick={() => toggleGemstone(gemstone.id)}
              className={`
                relative w-8 h-8 rounded-full ${gemstone.color} 
                ${
                  gemstoneUsage.includes(gemstone.id)
                    ? "ring-2 ring-primary ring-offset-1"
                    : "hover:ring-1 hover:ring-border-light hover:ring-offset-1"
                }
                transition-all duration-200
              `}
            >
              {gemstoneUsage.includes(gemstone.id) && (
                <Check className="w-4 h-4 text-primary/80 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              )}
            </button>
            <span className="text-xs font-figtree text-primary text-center">
              {gemstone.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
