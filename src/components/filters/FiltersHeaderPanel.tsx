import { RotateCcw } from "lucide-react";
import React, { useState } from "react";
import { FilterSort } from "./FilterSort";

interface FiltersHeaderPanelProps {
  totalResults: number;
  isAdvancedFiltersOpen: boolean;
  setAdvancedFiltersOpen: (open: boolean) => void;
  resetAllFilters: () => void;
  sortBy:
    | "top-rated"
    | "relevance"
    | "newest"
    | "low-to-high"
    | "high-to-low"
    | "discount";
  setSortBy: (
    sort:
      | "top-rated"
      | "relevance"
      | "newest"
      | "low-to-high"
      | "high-to-low"
      | "discount"
  ) => void;
  isAllFiltersOpen: boolean;
  setIsAllFiltersOpen: (open: boolean) => void;
}

const FiltersHeaderPanel: React.FC<FiltersHeaderPanelProps> = ({
  totalResults,
  isAdvancedFiltersOpen,
  setAdvancedFiltersOpen,
  resetAllFilters,
  sortBy,
  setSortBy,
  isAllFiltersOpen,
  setIsAllFiltersOpen,
}) => {
  const [isResetFilterAnimating, setIsResetFilterAnimating] = useState(false);

  // Handle animation for reset all button
  const resetFilter = () => {
    console.log("Resetting all filters");

    resetAllFilters();

    // Trigger the animation by setting isAnimating to true
    setIsResetFilterAnimating(true);

    // Remove the animation class after 1 sec (duration of the animation)
    setTimeout(() => {
      setIsResetFilterAnimating(false);
    }, 1000); // Match the duration in your CSS
  };

  return (
    <div>
      {/* Filters Heading */}
      <div className=" hidden sm:block text-center text-primary py-6">
        <h1 className="font-quiche text-[34px] leading-none">Filters</h1>
      </div>

      {/* Top Control Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between p-1 md:bg-[#f4f4f4] text-secondary mb-4 text-lg ">
        <div className="w-full flex justify-between md:justify-normal items-center gap-4">
          {/* Results Count */}
          <span className="font-figtree font-medium">
            {totalResults} Results
          </span>

          {/* Advanced Filters Checkbox */}
          <label className=" hidden md:flex items-center gap-2 cursor-pointer hover:text-primary">
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

          <div className="md:hidden">
            <FilterSort sortBy={sortBy} setSortBy={setSortBy} />
          </div>
        </div>

        <div className=" w-full flex justify-between md:justify-end items-center px-3 p-1.5 md:p-0 md:px-0 mt-2 md:mt-0 gap-4 bg-[#f4f4f4]">
          {/* Sort By */}
          <div className="hidden md:block">
            <FilterSort sortBy={sortBy} setSortBy={setSortBy} />
          </div>

          {/* All Filters*/}
          <button
            onClick={() => setIsAllFiltersOpen(!isAllFiltersOpen)}
            className="flex md:hidden items-center gap-1 font-figtree font-medium text-primary md:text-secondary hover:text-secondary md:hover:text-primary"
          >
            All Filters
          </button>

          {/* Reset All */}
          <button
            onClick={resetFilter}
            className="flex items-center gap-1 font-figtree font-medium text-primary md:text-secondary hover:text-secondary md:hover:text-primary"
          >
            Reset All
            <RotateCcw
              className={`w-5 h-5 ${isResetFilterAnimating ? "resetFilterAnimation" : ""}`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FiltersHeaderPanel;
