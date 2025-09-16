import { useFiltersStore } from "@/store/useFiltersStore";
import { RotateCcw } from "lucide-react";
import React from "react";
import { FilterGemstoneUsage } from "./FilterGemstoneUsage";
import { FilterKarat } from "./FilterKarat";
import { FilterMetalType } from "./FilterMetalType";
import { FilterRange } from "./FilterRange";
import { FilterRingSize } from "./FilterRingSize";
import { FilterSort } from "./FilterSort";

interface FiltersPanelProps {
  totalResults: number;
}

export const FiltersPanel: React.FC<FiltersPanelProps> = ({ totalResults }) => {
  const { isAdvancedFiltersOpen, setAdvancedFiltersOpen, resetAllFilters } =
    useFiltersStore();

  return (
    <div className="w-full">
      {/* Filters Heading */}
      <div className="text-center text-primary py-6">
        <h1 className="font-quiche text-[34px] leading-none  ">Filters</h1>
      </div>

      {/* Top Control Bar */}
      <div className="flex items-center justify-between px-4 p-1 bg-[#f4f4f4] text-secondary mb-4 text-lg ">
        <div className="flex items-center gap-4">
          {/* Results Count */}
          <span className="font-figtree font-medium">
            {totalResults} Results
          </span>

          {/* Advanced Filters Checkbox */}
          <label className="flex items-center gap-2 cursor-pointer">
            <div className="relative">
              <input
                type="checkbox"
                checked={isAdvancedFiltersOpen}
                onChange={(e) => setAdvancedFiltersOpen(e.target.checked)}
                className="sr-only"
              />
              <div
                className={`
                w-4 h-4 border-2 rounded relative
                ${
                  isAdvancedFiltersOpen
                    ? "bg-primary border-primary"
                    : "bg-white border-border-light"
                }
                transition-colors
              `}
              >
                {isAdvancedFiltersOpen && (
                  <svg
                    className="w-3 h-3 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>
            </div>
            <span className="  font-figtree font-medium  ">
              Advanced Filters
            </span>
          </label>
        </div>

        <div className="flex items-center gap-4">
          {/* Sort By */}
          <FilterSort />

          {/* Reset All */}
          <button
            onClick={resetAllFilters}
            className="flex items-center gap-1   font-figtree font-medium text-text-secondary hover: "
          >
            Reset All
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Filter Components */}
      {isAdvancedFiltersOpen && (
        <div className="space-y-4 pb-6">
          {/* First row - 3 filters */}
          <div className="grid grid-cols-3 gap-4">
            <FilterRange />
            <FilterMetalType />
            <FilterRingSize />
          </div>
          {/* Second row - 2 filters */}
          <div className="grid grid-cols-2 gap-4">
            <FilterKarat />
            <FilterGemstoneUsage />
          </div>
        </div>
      )}
    </div>
  );
};
