import { useEarringFiltersStore } from "@/store/useFiltersStore";
import React, { useEffect, useState } from "react"; // ADDED: useEffect
import { HiOutlineXMark } from "react-icons/hi2";
import { FilterAttachmentMethod } from "./FilterAttachmentMethod"; // Assuming this component exists
import { FilterGemstoneUsage } from "./FilterGemstoneUsage";
import { FilterKarat } from "./FilterKarat";
import { FilterMetalType } from "./FilterMetalType";
import FiltersHeaderPanel from "./FiltersHeaderPanel";
import RangeSlider from "./RangeSlider";

interface EarringsFiltersPanelProps {
  totalResults: number;
}

const EarringsFiltersPanel: React.FC<EarringsFiltersPanelProps> = ({
  totalResults,
}) => {
  const {
    isAdvancedFiltersOpen,
    setAdvancedFiltersOpen,
    resetAllFilters,
    priceRange,
    setPriceRange,
    resetPriceFilter,
    metalTypes,
    setMetalTypes,
    resetMetalTypeFilter,
    karats,
    setKarats,
    resetKaratFilter,
    gemstoneUsage,
    setGemstoneUsage,
    resetGemstoneFilter,
    sortBy,
    setSortBy,
    weight,
    setWeight,
    resetWeightFilter,
    attachmentMethod,
    setAttachmentMethod,
    resetAttachmentMethodFilter,
  } = useEarringFiltersStore();

  const [isAllFiltersOpen, setIsAllFiltersOpen] = useState(false);

  // ADDED: useEffect to control body overflow
  useEffect(() => {
    if (isAllFiltersOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup function to restore body overflow when component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isAllFiltersOpen]);

  return (
    <div className="w-full sm:container mx-auto overflow-visible z-50">
      {/* Filters Heading */}
      <FiltersHeaderPanel
        totalResults={totalResults}
        isAdvancedFiltersOpen={isAdvancedFiltersOpen}
        setAdvancedFiltersOpen={setAdvancedFiltersOpen}
        resetAllFilters={resetAllFilters}
        sortBy={sortBy}
        setSortBy={setSortBy}
        isAllFiltersOpen={isAllFiltersOpen}
        setIsAllFiltersOpen={setIsAllFiltersOpen}
      />

      {/* Mobile Filter Components */}
      <div className="md:hidden relative">
        {isAllFiltersOpen && (
          <div className="flex flex-col justify-between w-screen h-screen fixed top-0 left-0 z-[110] bg-white pb-10">
            <div className="flex flex-col">
              <div className="flex shrink-0 items-center justify-between text-lg text-primary hover:text-secondary border-b p-2 px-4">
                <span>Filter By</span>
                <button onClick={() => setIsAllFiltersOpen(false)}>
                  <HiOutlineXMark className="w-6 h-6" />
                </button>
              </div>
              <div className="shrink overflow-y-auto p-2 px-4">
                <RangeSlider
                  title="Price"
                  value={priceRange}
                  onChange={setPriceRange}
                  onReset={resetPriceFilter}
                  min={600}
                  max={12000}
                  step={100}
                  formatValue={(value: number) =>
                    value >= 1000
                      ? `$${Math.round(value / 1000)}k`
                      : `$${value}`
                  }
                />
                <FilterMetalType
                  selectedMetals={metalTypes}
                  onChange={setMetalTypes}
                  onReset={resetMetalTypeFilter}
                />
                <RangeSlider
                  title="Weight (Per Earring)"
                  value={weight}
                  onChange={setWeight}
                  onReset={resetWeightFilter}
                  min={0.5}
                  max={12}
                  step={0.1}
                  formatValue={(value: number) => `${value.toFixed(1)}gm`}
                />
                <FilterAttachmentMethod
                  selectedMethods={attachmentMethod}
                  onChange={setAttachmentMethod}
                  onReset={resetAttachmentMethodFilter}
                />
                <FilterKarat
                  selectedKarats={karats}
                  onChange={setKarats}
                  onReset={resetKaratFilter}
                />
                <FilterGemstoneUsage
                  selectedGemstones={gemstoneUsage}
                  onChange={setGemstoneUsage}
                  onReset={resetGemstoneFilter}
                />
              </div>
            </div>
            <div className="w-full flex gap-4 shrink-0 border-t p-4">
              <button
                className="text-sm w-full font-figtree font-normal tracking-[3px] text-center uppercase text-primary border-[1.5px] border-primary bg-transparent hover:text-secondary px-3 py-3"
                onClick={() => {
                  resetAllFilters();
                  setIsAllFiltersOpen(false);
                }}
              >
                Reset All
              </button>
              <button
                className="bg-accent w-full text-sm font-figtree font-normal tracking-[3px] text-center uppercase text-white border-[1.5px] border-white hover:text-primary px-3 py-3"
                onClick={() => setIsAllFiltersOpen(false)}
              >
                Apply
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Tablet & Desktop Filter Components */}
      <div className="hidden md:grid md:grid-cols-2 xl:grid-cols-3 gap-4 pb-6">
        {/* First row - 3 filters */}
        <div
          className={`${
            isAdvancedFiltersOpen ? "col-span-1" : "max-xl:col-span-2"
          }`}
        >
          <RangeSlider
            title="Price"
            value={priceRange}
            onChange={setPriceRange}
            onReset={resetPriceFilter}
            min={600}
            max={12000}
            step={100}
            formatValue={(value: number) =>
              value >= 1000 ? `$${Math.round(value / 1000)}k` : `$${value}`
            }
          />
        </div>
        <FilterMetalType
          selectedMetals={metalTypes}
          onChange={setMetalTypes}
          onReset={resetMetalTypeFilter}
        />
        <RangeSlider
          title="Weight (Per Earring)"
          value={weight}
          onChange={setWeight}
          onReset={resetWeightFilter}
          min={0.5}
          max={12}
          step={0.1}
          formatValue={(value: number) => `${value.toFixed(1)}gm`}
        />

        {/* Second row - 2 filters */}
        {isAdvancedFiltersOpen && (
          <>
            <FilterAttachmentMethod
              selectedMethods={attachmentMethod}
              onChange={setAttachmentMethod}
              onReset={resetAttachmentMethodFilter}
            />
            <FilterKarat
              selectedKarats={karats}
              onChange={setKarats}
              onReset={resetKaratFilter}
            />
            <FilterGemstoneUsage
              selectedGemstones={gemstoneUsage}
              onChange={setGemstoneUsage}
              onReset={resetGemstoneFilter}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default EarringsFiltersPanel;
