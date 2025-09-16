import { useFiltersStore } from "@/store/useFiltersStore";
import { Check, RotateCcw } from "lucide-react";

export const FilterGemstoneUsage = () => {
  const { gemstoneUsage, setGemstoneUsage, resetGemstoneFilter } =
    useFiltersStore();

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
    <div className="relative border bg-white p-3 ">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-figtree font-medium text-primary">
          Gemstone Usage
        </h3>
        <button
          onClick={resetGemstoneFilter}
          className="p-1 hover:bg-filter-bg rounded"
        >
          <RotateCcw className="w-4 h-4 text-secondary" />
        </button>
      </div>

      <div className="flex gap-5">
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
