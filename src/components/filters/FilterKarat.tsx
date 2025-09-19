import { useFiltersStore } from "@/store/useFiltersStore";
import { Check, RotateCcw } from "lucide-react";
import { useState } from "react";

export const FilterKarat = () => {
  const { karats, setKarats, resetKaratFilter } = useFiltersStore();
  const [isResetFilterAnimating, setIsResetFilterAnimating] = useState(false);

  // Handle animation for reset all button
  const resetFilter = () => {
    resetKaratFilter();

    // Trigger the animation by setting isAnimating to true
    setIsResetFilterAnimating(true);

    // Remove the animation class after 1 sec (duration of the animation)
    setTimeout(() => {
      setIsResetFilterAnimating(false);
    }, 1000); // Match the duration in your CSS
  };

  const karatOptions = [
    {
      id: "14k",
      label: "14k",
      color: "bg-gradient-to-br from-yellow-200 to-yellow-300",
    },
    {
      id: "18k",
      label: "18k",
      color: "bg-gradient-to-br from-yellow-300 to-yellow-400",
    },
    {
      id: "23k",
      label: "23k",
      color: "bg-gradient-to-br from-yellow-400 to-yellow-500",
    },
    {
      id: "14k-rose",
      label: "14k",
      color: "bg-gradient-to-br from-rose-200 to-rose-300",
    },
    {
      id: "18k-rose",
      label: "18k",
      color: "bg-gradient-to-br from-rose-300 to-rose-400",
    },
    {
      id: "14k-white",
      label: "14k",
      color: "bg-gradient-to-br from-gray-200 to-gray-300",
    },
    {
      id: "18k-white",
      label: "18k",
      color: "bg-gradient-to-br from-gray-300 to-gray-400",
    },
  ];

  const toggleKarat = (karatId: string) => {
    const newKarats = karats.includes(karatId)
      ? karats.filter((id) => id !== karatId)
      : [...karats, karatId];
    setKarats(newKarats);
  };

  return (
    <div className="relative border bg-white p-3 pb-1">
      <div className="flex items-center justify-between mb-1">
        <h3 className="font-figtree font-medium text-primary">Karat</h3>
        <button
          onClick={resetFilter}
          className="p-1 text-secondary hover:text-primary rounded"
        >
          <RotateCcw
            className={`w-4 h-4 ${isResetFilterAnimating ? "resetFilterAnimation" : ""}`}
          />
        </button>
      </div>

      <div className="flex w-full lg:w-5/6 justify-between gap-4 overflow-x-auto p-2">
        {karatOptions.map((karat) => (
          <div key={karat.id} className="flex flex-col items-center gap-1.5">
            <button
              onClick={() => toggleKarat(karat.id)}
              className={`
                relative w-8 h-8 rounded-full ${karat.color}
                ${
                  karats.includes(karat.id)
                    ? "ring-2 ring-primary ring-offset-1"
                    : "hover:ring-1 hover:ring-offset-1"
                }
                transition-all duration-200
              `}
            >
              {karats.includes(karat.id) && (
                <Check className="w-4 h-4 text-primary/80 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              )}
            </button>
            <span className="text-xs font-figtree text-primary">
              {karat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
