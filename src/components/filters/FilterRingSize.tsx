import { useRingFiltersStore } from "@/store/useFiltersStore";
import { ChevronDown, RotateCcw } from "lucide-react";
import { useMemo, useState } from "react";

// --- START: Ring Size Data ---
// FIX: Define types to allow string indexing on mmMap, resolving the TypeScript error.
type MmMap = { [key: string]: string };
interface RingUnitData {
  display: string;
  sizes: string[];
  mmMap: MmMap;
}

// The single source of truth for all ring size conversions
const RING_SIZE_DATA: { [key: string]: RingUnitData } = {
  // UK/AU Sizes and MM
  AU: {
    display: "AU/UK",
    sizes: [
      "A",
      "A 1/2",
      "B",
      "B 1/2",
      "C",
      "C 1/2",
      "D",
      "D 1/2",
      "E",
      "E 1/2",
      "F",
      "F 1/2",
      "G",
      "G 1/2",
      "H",
      "H 1/2",
      "I",
      "J",
      "J 1/2",
      "K",
      "K 1/2",
      "L",
      "L 1/2",
      "M",
      "M 1/2",
      "N",
      "N 1/2",
      "O",
      "O 1/2",
      "P",
      "P 1/2",
      "Q",
      "Q 1/2",
      "R",
      "R 1/2",
      "S",
      "S 1/2",
      "T",
      "T 1/2",
      "U",
      "U 1/2",
      "V",
      "V 1/2",
      "W",
      "W 1/2",
      "X",
      "X 1/2",
      "Y",
      "Z",
      "Z 1/2",
      "Z1",
      "Z2",
    ],
    mmMap: {
      A: "12.04",
      "A 1/2": "12.24",
      B: "12.45",
      "B 1/2": "12.65",
      C: "12.85",
      "C 1/2": "13.06",
      D: "13.26",
      "D 1/2": "13.46",
      E: "13.67",
      "E 1/2": "13.87",
      F: "14.07",
      "F 1/2": "14.27",
      G: "14.48",
      "G 1/2": "14.68",
      H: "14.88",
      "H 1/2": "15.09",
      I: "15.29",
      J: "15.49",
      "J 1/2": "15.7",
      K: "15.9",
      "K 1/2": "16.1",
      L: "16.31",
      "L 1/2": "16.51",
      M: "16.71",
      "M 1/2": "16.92",
      N: "17.12",
      "N 1/2": "17.32",
      O: "17.53",
      "O 1/2": "17.73",
      P: "17.93",
      "P 1/2": "18.14",
      Q: "18.34",
      "Q 1/2": "18.54",
      R: "18.75",
      "R 1/2": "18.95",
      S: "19.15",
      "S 1/2": "19.35",
      T: "19.56",
      "T 1/2": "19.76",
      U: "19.96",
      "U 1/2": "20.17",
      V: "20.37",
      "V 1/2": "20.57",
      W: "20.78",
      "W 1/2": "20.98",
      X: "21.18",
      "X 1/2": "21.39",
      Y: "21.59",
      Z: "21.79",
      "Z 1/2": "22",
      Z1: "22.61",
      Z2: "23.01",
    },
  },
  // US Sizes and MM
  US: {
    display: "US",
    sizes: [
      "3",
      "3.25",
      "3.5",
      "3.75",
      "4",
      "4.25",
      "4.5",
      "4.75",
      "5",
      "5.25",
      "5.5",
      "5.75",
      "6",
      "6.25",
      "6.5",
      "6.75",
      "7",
      "7.25",
      "7.5",
      "7.75",
      "8",
      "8.25",
      "8.5",
      "8.75",
      "9",
      "9.25",
      "9.5",
      "9.75",
      "10",
      "10.25",
      "10.5",
      "10.75",
      "11",
      "11.25",
      "11.5",
      "11.75",
      "12",
      "12.25",
      "12.5",
      "12.75",
      "13",
      "13.25",
      "13.5",
      "13.75",
      "14",
      "14.25",
      "14.5",
      "14.75",
      "15",
      "15.25",
      "15.5",
      "15.75",
      "16",
    ],
    mmMap: {
      "3": "14.1",
      "3.25": "14.3",
      "3.5": "14.5",
      "3.75": "14.7",
      "4": "14.9",
      "4.25": "15.1",
      "4.5": "15.3",
      "4.75": "15.5",
      "5": "15.7",
      "5.25": "15.9",
      "5.5": "16.1",
      "5.75": "16.3",
      "6": "16.5",
      "6.25": "16.7",
      "6.5": "16.9",
      "6.75": "17.1",
      "7": "17.3",
      "7.25": "17.5",
      "7.5": "17.7",
      "7.75": "17.9",
      "8": "18.1",
      "8.25": "18.3",
      "8.5": "18.5",
      "8.75": "18.7",
      "9": "18.9",
      "9.25": "19.2",
      "9.5": "19.4",
      "9.75": "19.6",
      "10": "19.8",
      "10.25": "20",
      "10.5": "20.2",
      "10.75": "20.4",
      "11": "20.6",
      "11.25": "20.8",
      "11.5": "21",
      "11.75": "21.2",
      "12": "21.4",
      "12.25": "21.6",
      "12.5": "21.8",
      "12.75": "22",
      "13": "22.2",
      "13.25": "22.4",
      "13.5": "22.6",
      "13.75": "22.8",
      "14": "23",
      "14.25": "23.2",
      "14.5": "23.4",
      "14.75": "23.6",
      "15": "23.8",
      "15.25": "24",
      "15.5": "24.2",
      "15.75": "24.4",
      "16": "24.6",
    },
  },
  // HK Sizes and MM
  HK: {
    display: "HK",
    sizes: [
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30",
    ],
    mmMap: {
      "5": "13.8",
      "6": "14.1",
      "7": "14.5",
      "8": "14.8",
      "9": "15.2",
      "10": "15.5",
      "11": "15.9",
      "12": "16.2",
      "13": "16.6",
      "14": "16.9",
      "15": "17.3",
      "16": "17.7",
      "17": "18",
      "18": "18.3",
      "19": "18.7",
      "20": "19",
      "21": "19.4",
      "22": "19.7",
      "23": "20.1",
      "24": "20.4",
      "25": "20.8",
      "26": "21.1",
      "27": "21.5",
      "28": "21.8",
      "29": "22.2",
      "30": "22.5",
    },
  },
};

// Available Units for the dropdown
const AVAILABLE_UNITS = ["US", "AU", "HK"];

// NEW: Default size selection for each unit
const DEFAULT_SIZE_SELECTIONS: { [key: string]: string } = {
  US: "3.25",
  AU: "B 1/2",
  HK: "9",
};
// --- END: Ring Size Data ---

export const FilterRingSize = () => {
  // ringSize.unit will be one of "US", "AU", or "HK"
  const { ringSize, setRingSize, resetRingSizeFilter } = useRingFiltersStore();
  const [isResetFilterAnimating, setIsResetFilterAnimating] = useState(false);

  // Use the current unit to determine which data to use
  const currentUnitData = useMemo(() => {
    // Default to US if the unit is not set or is invalid, to provide a valid size list
    return (
      RING_SIZE_DATA[ringSize.unit as keyof typeof RING_SIZE_DATA] ||
      RING_SIZE_DATA.US
    );
  }, [ringSize.unit]);

  const sizes = currentUnitData.sizes;

  // Handle animation for reset all button
  const resetFilter = () => {
    // Reset all ring size filters
    resetRingSizeFilter();

    // Trigger the animation by setting isAnimating to true
    setIsResetFilterAnimating(true);

    // Remove the animation class after 1 sec (duration of the animation)
    setTimeout(() => {
      setIsResetFilterAnimating(false);
    }, 1000); // Match the duration in your CSS
  };

  const sizeToMm = (size: string): string => {
    const mmMap = currentUnitData.mmMap;
    const defaultMM = RING_SIZE_DATA.US.mmMap["6"]; // Fallback to US size 6 mm
    // The type definition change above fixes the issue on the next line
    return `${mmMap[size] || defaultMM} mm`;
  };

  const handleUnitChange = (newUnit: string) => {
    const defaultSize = DEFAULT_SIZE_SELECTIONS[newUnit];

    // Get the corresponding millimeter map for the new unit
    const newUnitData = RING_SIZE_DATA[newUnit]; // Type is now safe due to explicit type on RING_SIZE_DATA
    // Calculate the millimeter value for the default size
    const defaultMM = newUnitData.mmMap[defaultSize];

    // Set the new unit, the default size, and its corresponding mm
    setRingSize({
      unit: newUnit,
      size: defaultSize,
      mm: defaultSize ? `${defaultMM} mm` : "",
    });
    setIsUnitDropdownOpen(false);
    setIsSizeDropdownOpen(false);
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

  // Determine the display value for the unit button
  const currentUnitDisplay = ringSize.unit
    ? RING_SIZE_DATA[ringSize.unit]?.display || ringSize.unit
    : "Select Unit";

  return (
    <div className="relative flex flex-col justify-start gap-2 border bg-white p-3">
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
            <span>{currentUnitDisplay}</span>
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
                {AVAILABLE_UNITS.map((unit) => (
                  <button
                    key={unit}
                    onClick={() => handleUnitChange(unit)}
                    className={`
                      w-full text-left px-2 py-1 text-md font-figtree hover:bg-primary/10
                      ${
                        ringSize.unit === unit
                          ? "bg-secondary text-white"
                          : "text-secondary"
                      }
                    `}
                  >
                    {RING_SIZE_DATA[unit].display}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Size dropdown */}
        <div className="relative w-full">
          <button
            onClick={() => {
              if (ringSize.unit) {
                setIsSizeDropdownOpen(!isSizeDropdownOpen);
              }
            }}
            className={`flex items-center justify-center gap-0.5 px-2 py-1.5 w-full border border-primary text-center text-md font-figtree bg-white ${!ringSize.unit ? "opacity-50 cursor-not-allowed" : ""}`}
            disabled={!ringSize.unit}
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
