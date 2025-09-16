import { useFiltersStore } from "@/store/useFiltersStore";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export const FilterSort = () => {
  const { sortBy, setSortBy } = useFiltersStore();
  const [isOpen, setIsOpen] = useState(false);

  const sortOptions = [
    { id: "relevance", label: "Relevance" },
    { id: "newest", label: "Newest" },
    { id: "low-to-high", label: "Low to High" },
    { id: "high-to-low", label: "High to Low" },
    { id: "discount", label: "Discount" },
    { id: "top-rated", label: "Top Rated" },
  ] as const;

  const currentOption =
    sortOptions.find((opt) => opt.id === sortBy) || sortOptions[0];

  const handleSelect = (option: (typeof sortOptions)[number]) => {
    setSortBy(option.id);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-lg font-figtree text-secondary hover:text-primary"
      >
        <span className="font-semibold">Sort by:</span> {currentOption.label}
        <ChevronDown
          className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 top-full mt-1 bg-white border border-black shadow-lg z-20 max-w-[130px]">
            {sortOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => handleSelect(option)}
                className={`
                  w-full text-left px-1 py-0.5 text-lg font-figtree hover:bg-primary/10
                  ${option.id === sortBy ? "bg-secondary text-white" : "text-secondary"}
                `}
              >
                {option.label}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
