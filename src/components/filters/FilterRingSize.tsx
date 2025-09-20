import { useRingFiltersStore } from "@/store/useFiltersStore";
import { ChevronDown, RotateCcw } from "lucide-react";
import { useState } from "react";

export const FilterRingSize = () => {
  const { ringSize, setRingSize, resetRingSizeFilter } = useRingFiltersStore();
  const [isResetFilterAnimating, setIsResetFilterAnimating] = useState(false);

  // Handle animation for reset all button
  const resetFilter = () => {
    // Trigger your filter reset logic here
    console.log("Resetting all filters");

    resetRingSizeFilter();

    // Trigger the animation by setting isAnimating to true
    setIsResetFilterAnimating(true);

    // Remove the animation class after 1 sec (duration of the animation)
    setTimeout(() => {
      setIsResetFilterAnimating(false);
    }, 1000); // Match the duration in your CSS
  };

  const sizes = [
    "3.25",
    "4",
    "4.5",
    "5",
    "5.5",
    "6",
    "6.5",
    "7",
    "7.5",
    "8",
    "8.5",
    "9",
    "9.5",
    "10",
  ];

  const sizeToMm = (size: string): string => {
    const sizeMap: { [key: string]: string } = {
      "3.25": "14.1",
      "4": "14.8",
      "4.5": "15.3",
      "5": "15.7",
      "5.5": "16.1",
      "6": "16.5",
      "6.5": "16.9",
      "7": "17.3",
      "7.5": "17.7",
      "8": "18.2",
      "8.5": "18.5",
      "9": "19.0",
      "9.5": "19.4",
      "10": "19.8",
    };
    return `${sizeMap[size] || "16.5"} mm`;
  };

  const handleSizeChange = (newSize: string) => {
    setRingSize({
      ...ringSize,
      size: newSize,
      mm: newSize ? sizeToMm(newSize) : "",
    });
  };

  /** State logic for dropdowns */
  const [isUnitDropdownOpen, setIsUnitDropdownOpen] = useState(false);
  const [isSizeDropdownOpen, setIsSizeDropdownOpen] = useState(false);

  return (
    <div className="relative flex flex-col justify-start gap-3 lg:gap-5 border bg-white p-3">
      {/* Header with reset button */}
      <div className="flex items-center justify-between">
        <h3 className="font-figtree font-medium text-primary">
          Your Ring Size
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

      <div className="flex w-full gap-2 mb-2 justify-center items-center h-full text-secondary">
        {/* Unit dropdown */}
        <div className="relative w-full">
          <button
            onClick={() => setIsUnitDropdownOpen(!isUnitDropdownOpen)}
            className="flex items-center justify-center gap-0.5 px-2 py-1.5 w-full border border-primary text-center text-md font-figtree bg-white"
          >
            <span>{ringSize.unit || "Select Unit"}</span>
            <ChevronDown
              className={`w-5 h-5 text-secondary transition-transform ${
                isUnitDropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>
          {isUnitDropdownOpen && (
            <>
              {/* Overlay to close dropdown */}
              <div
                className="fixed w-full inset-0 z-10"
                onClick={() => setIsUnitDropdownOpen(false)}
              />
              <div className="absolute w-full right-0 top-full mt-1 bg-white border border-primary shadow-lg z-20">
                {["US", "AU"].map((unit) => (
                  <button
                    key={unit}
                    onClick={() => {
                      setRingSize({ ...ringSize, unit });
                      setIsUnitDropdownOpen(false);
                    }}
                    className={`
                      w-full text-left px-2 py-1 text-md font-figtree hover:bg-primary/10
                      ${
                        ringSize.unit === unit
                          ? "bg-secondary text-white"
                          : "text-secondary"
                      }
                    `}
                  >
                    {unit}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Size dropdown */}
        <div className="relative w-full">
          <button
            onClick={() => setIsSizeDropdownOpen(!isSizeDropdownOpen)}
            className="flex items-center justify-center gap-0.5 px-2 py-1.5 w-full border border-primary text-center text-md font-figtree bg-white"
          >
            <span>{ringSize.size || "Select Size"}</span>
            <ChevronDown
              className={`w-5 h-5 text-secondary transition-transform ${
                isSizeDropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>
          {isSizeDropdownOpen && (
            <>
              {/* Overlay to close dropdown */}
              <div
                className="fixed inset-0 z-10"
                onClick={() => setIsSizeDropdownOpen(false)}
              />
              <div className="absolute right-0 top-full mt-1 bg-white border border-primary shadow-lg z-20 max-h-40 overflow-y-auto">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => {
                      handleSizeChange(size);
                      setIsSizeDropdownOpen(false);
                    }}
                    className={`
                      w-full text-left px-2 py-1 text-lg font-figtree hover:bg-primary/10
                      ${
                        ringSize.size === size
                          ? "bg-secondary text-white"
                          : "text-secondary"
                      }
                    `}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>

        {/* MM display */}
        <input
          type="text"
          value={ringSize.mm}
          readOnly
          className="w-full px-2 py-1.5 border text-md font-figtree bg-neutral/30 text-center"
        />
      </div>
    </div>
  );
};
