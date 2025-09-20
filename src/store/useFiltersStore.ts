import { create } from "zustand";

// Base filter state interface
interface BaseFiltersState {
  isAdvancedFiltersOpen: boolean;
  currentPage: number;
  priceRange: {
    min: number;
    max: number;
  };
  metalTypes: string[];
  karats: string[];
  gemstoneUsage: string[];
  sortBy:
    | "relevance"
    | "newest"
    | "low-to-high"
    | "high-to-low"
    | "discount"
    | "top-rated";

  setAdvancedFiltersOpen: (open: boolean) => void;
  setCurrentPage: (page: number) => void;
  setPriceRange: (range: { min: number; max: number }) => void;
  setMetalTypes: (types: string[]) => void;
  setKarats: (karats: string[]) => void;
  setGemstoneUsage: (usage: string[]) => void;
  setSortBy: (sort: BaseFiltersState["sortBy"]) => void;
  resetPriceFilter: () => void;
  resetMetalTypeFilter: () => void;
  resetKaratFilter: () => void;
  resetGemstoneFilter: () => void;
}

// Ring-specific filter state
export interface RingFiltersState extends BaseFiltersState {
  ringSize: {
    unit: string;
    size: string;
    mm: string;
  };

  setRingSize: (size: { unit: string; size: string; mm: string }) => void;
  resetRingSizeFilter: () => void;
  resetAllFilters: () => void;
}

// Earring-specific filter state
export interface EarringFiltersState extends BaseFiltersState {
  attachmentMethod: string[];
  weight: {
    min: number;
    max: number;
  };

  setAttachmentMethod: (methods: string[]) => void;
  setWeight: (weight: { min: number; max: number }) => void;
  resetAttachmentMethodFilter: () => void;
  resetWeightFilter: () => void;
  resetAllFilters: () => void;
}

// Necklace-specific filter state
export interface NecklaceFiltersState extends BaseFiltersState {
  necklaceTypes: string[];
  length: {
    min: number;
    max: number;
  };

  setNecklaceTypes: (types: string[]) => void;
  setLength: (length: { min: number; max: number }) => void;
  resetNecklaceTypesFilter: () => void;
  resetLengthFilter: () => void;
  resetAllFilters: () => void;
}

// Bracelet-specific filter state
export interface BraceletFiltersState extends BaseFiltersState {
  // ADDED: attachmentMethod property for bracelets
  attachmentMethod: string[];
  circumference: {
    min: number;
    max: number;
  };

  // ADDED: setAttachmentMethod for bracelets
  setAttachmentMethod: (methods: string[]) => void;
  setCircumference: (circumference: { min: number; max: number }) => void;
  // ADDED: resetAttachmentMethodFilter for bracelets
  resetAttachmentMethodFilter: () => void;
  resetCircumferenceFilter: () => void;
  resetAllFilters: () => void;
}

// Initial states
const baseInitialState = {
  isAdvancedFiltersOpen: true,
  currentPage: 1,
  priceRange: { min: 500, max: 12000 },
  metalTypes: [],
  karats: [],
  gemstoneUsage: [],
  sortBy: "relevance" as const,
};

const ringInitialState = {
  ...baseInitialState,
  ringSize: { unit: "US", size: "", mm: "" },
};

const earringInitialState = {
  ...baseInitialState,
  attachmentMethod: [],
  weight: { min: 0.5, max: 12 },
};

const necklaceInitialState = {
  ...baseInitialState,
  necklaceTypes: [],
  length: { min: 28, max: 45 },
};

const braceletInitialState = {
  ...baseInitialState,
  // ADDED: Initialize attachmentMethod for bracelets
  attachmentMethod: [],
  circumference: { min: 8, max: 25 },
};

// Ring Filter Store
export const useRingFiltersStore = create<RingFiltersState>((set) => ({
  ...ringInitialState,

  setAdvancedFiltersOpen: (open) => set({ isAdvancedFiltersOpen: open }),
  setCurrentPage: (page) => set({ currentPage: page }),
  setPriceRange: (range) => set({ priceRange: range, currentPage: 1 }),
  setMetalTypes: (types) => set({ metalTypes: types, currentPage: 1 }),
  setRingSize: (size) => set({ ringSize: size, currentPage: 1 }),
  setKarats: (karats) => set({ karats, currentPage: 1 }),
  setGemstoneUsage: (usage) => set({ gemstoneUsage: usage, currentPage: 1 }),
  setSortBy: (sort) => set({ sortBy: sort, currentPage: 1 }),

  resetAllFilters: () =>
    set({
      ...ringInitialState,
      isAdvancedFiltersOpen: true,
    }),

  resetPriceFilter: () =>
    set({ priceRange: ringInitialState.priceRange, currentPage: 1 }),
  resetMetalTypeFilter: () => set({ metalTypes: [], currentPage: 1 }),
  resetRingSizeFilter: () =>
    set({ ringSize: { unit: "US", size: "", mm: "" }, currentPage: 1 }),
  resetKaratFilter: () => set({ karats: [], currentPage: 1 }),
  resetGemstoneFilter: () => set({ gemstoneUsage: [], currentPage: 1 }),
}));

// Earring Filter Store
export const useEarringFiltersStore = create<EarringFiltersState>((set) => ({
  ...earringInitialState,

  setAdvancedFiltersOpen: (open) => set({ isAdvancedFiltersOpen: open }),
  setCurrentPage: (page) => set({ currentPage: page }),
  setPriceRange: (range) => set({ priceRange: range, currentPage: 1 }),
  setMetalTypes: (types) => set({ metalTypes: types, currentPage: 1 }),
  setAttachmentMethod: (methods) =>
    set({ attachmentMethod: methods, currentPage: 1 }),
  setWeight: (weight) => set({ weight, currentPage: 1 }),
  setKarats: (karats) => set({ karats, currentPage: 1 }),
  setGemstoneUsage: (usage) => set({ gemstoneUsage: usage, currentPage: 1 }),
  setSortBy: (sort) => set({ sortBy: sort, currentPage: 1 }),

  resetAllFilters: () =>
    set({
      ...earringInitialState,
      isAdvancedFiltersOpen: true,
    }),

  resetPriceFilter: () =>
    set({ priceRange: earringInitialState.priceRange, currentPage: 1 }),
  resetMetalTypeFilter: () => set({ metalTypes: [], currentPage: 1 }),
  resetAttachmentMethodFilter: () =>
    set({ attachmentMethod: [], currentPage: 1 }),
  resetWeightFilter: () =>
    set({ weight: earringInitialState.weight, currentPage: 1 }),
  resetKaratFilter: () => set({ karats: [], currentPage: 1 }),
  resetGemstoneFilter: () => set({ gemstoneUsage: [], currentPage: 1 }),
}));

// Necklace Filter Store
export const useNecklaceFiltersStore = create<NecklaceFiltersState>((set) => ({
  ...necklaceInitialState,

  setAdvancedFiltersOpen: (open) => set({ isAdvancedFiltersOpen: open }),
  setCurrentPage: (page) => set({ currentPage: page }),
  setPriceRange: (range) => set({ priceRange: range, currentPage: 1 }),
  setMetalTypes: (types) => set({ metalTypes: types, currentPage: 1 }),
  setNecklaceTypes: (types) => set({ necklaceTypes: types, currentPage: 1 }),
  setLength: (length) => set({ length, currentPage: 1 }),
  setKarats: (karats) => set({ karats, currentPage: 1 }),
  setGemstoneUsage: (usage) => set({ gemstoneUsage: usage, currentPage: 1 }),
  setSortBy: (sort) => set({ sortBy: sort, currentPage: 1 }),

  resetAllFilters: () =>
    set({
      ...necklaceInitialState,
      isAdvancedFiltersOpen: true,
    }),

  resetPriceFilter: () =>
    set({ priceRange: necklaceInitialState.priceRange, currentPage: 1 }),
  resetMetalTypeFilter: () => set({ metalTypes: [], currentPage: 1 }),
  resetNecklaceTypesFilter: () => set({ necklaceTypes: [], currentPage: 1 }),
  resetLengthFilter: () =>
    set({ length: necklaceInitialState.length, currentPage: 1 }),
  resetKaratFilter: () => set({ karats: [], currentPage: 1 }),
  resetGemstoneFilter: () => set({ gemstoneUsage: [], currentPage: 1 }),
}));

// Bracelet Filter Store
export const useBraceletFiltersStore = create<BraceletFiltersState>((set) => ({
  ...braceletInitialState,

  setAdvancedFiltersOpen: (open) => set({ isAdvancedFiltersOpen: open }),
  setCurrentPage: (page) => set({ currentPage: page }),
  setPriceRange: (range) => set({ priceRange: range, currentPage: 1 }),
  setMetalTypes: (types) => set({ metalTypes: types, currentPage: 1 }),
  // ADDED: setAttachmentMethod for bracelets
  setAttachmentMethod: (methods) =>
    set({ attachmentMethod: methods, currentPage: 1 }),
  setCircumference: (circumference) => set({ circumference, currentPage: 1 }),
  setKarats: (karats) => set({ karats, currentPage: 1 }),
  setGemstoneUsage: (usage) => set({ gemstoneUsage: usage, currentPage: 1 }),
  setSortBy: (sort) => set({ sortBy: sort, currentPage: 1 }),

  resetAllFilters: () =>
    set({
      ...braceletInitialState,
      isAdvancedFiltersOpen: true,
    }),

  resetPriceFilter: () =>
    set({ priceRange: braceletInitialState.priceRange, currentPage: 1 }),
  resetMetalTypeFilter: () => set({ metalTypes: [], currentPage: 1 }),
  // ADDED: resetAttachmentMethodFilter for bracelets
  resetAttachmentMethodFilter: () =>
    set({ attachmentMethod: [], currentPage: 1 }),
  resetCircumferenceFilter: () =>
    set({ circumference: braceletInitialState.circumference, currentPage: 1 }),
  resetKaratFilter: () => set({ karats: [], currentPage: 1 }),
  resetGemstoneFilter: () => set({ gemstoneUsage: [], currentPage: 1 }),
}));

// Union type for all filter states
export type FiltersState =
  | RingFiltersState
  | EarringFiltersState
  | NecklaceFiltersState
  | BraceletFiltersState;
