import { useFiltersStore } from "@/store/useFiltersStore";
import { Check, RotateCcw } from "lucide-react";

export const FilterMetalType = () => {
  const { metalTypes, setMetalTypes, resetMetalTypeFilter } = useFiltersStore();

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

  const toggleMetal = (metalId: string) => {
    const newTypes = metalTypes.includes(metalId)
      ? metalTypes.filter((id) => id !== metalId)
      : [...metalTypes, metalId];
    setMetalTypes(newTypes);
  };

  return (
    <div className="relative border bg-white p-3">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-figtree font-medium text-primary">Metal Type</h3>
        <button
          onClick={resetMetalTypeFilter}
          className="p-1 hover:bg-filter-bg rounded"
        >
          <RotateCcw className="w-4 h-4 text-muted-foreground" />
        </button>
      </div>

      <div className="flex w-full justify-around">
        {metals.map((metal) => (
          <div
            key={metal.id}
            className="flex flex-col items-center gap-1 flex-shrink-0 grow-0"
          >
            <button
              onClick={() => toggleMetal(metal.id)}
              className={`
                relative w-8 h-8 rounded-full ${metal.color} 
                ${
                  metalTypes.includes(metal.id)
                    ? "ring-2 ring-primary ring-offset-1"
                    : "hover:ring-1 hover:ring-border-light hover:ring-offset-1"
                }
                transition-all duration-200
              `}
            >
              {metalTypes.includes(metal.id) && (
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
