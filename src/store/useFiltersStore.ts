import { create } from 'zustand';

export interface FiltersState {
  // UI State
  isAdvancedFiltersOpen: boolean;
  currentPage: number;
  
  // Filters
  priceRange: {
    min: number;
    max: number;
  };
  metalTypes: string[];
  ringSize: {
    unit: string;
    size: string;
    mm: string;
  };
  karats: string[];
  gemstoneUsage: string[];
  sortBy: 'relevance' | 'newest' | 'low-to-high' | 'high-to-low' | 'discount' | 'top-rated';
  
  // Actions
  setAdvancedFiltersOpen: (open: boolean) => void;
  setCurrentPage: (page: number) => void;
  setPriceRange: (range: { min: number; max: number }) => void;
  setMetalTypes: (types: string[]) => void;
  setRingSize: (size: { unit: string; size: string; mm: string }) => void;
  setKarats: (karats: string[]) => void;
  setGemstoneUsage: (usage: string[]) => void;
  setSortBy: (sort: FiltersState['sortBy']) => void;
  resetAllFilters: () => void;
  resetPriceFilter: () => void;
  resetMetalTypeFilter: () => void;
  resetRingSizeFilter: () => void;
  resetKaratFilter: () => void;
  resetGemstoneFilter: () => void;
}

const initialState = {
  isAdvancedFiltersOpen: true,
  currentPage: 1,
  priceRange: { min: 500, max: 12000 },
  metalTypes: [],
  ringSize: { unit: 'US', size: '', mm: '' }, // No default ring size filter
  karats: [],
  gemstoneUsage: [],
  sortBy: 'relevance' as const,
};

export const useFiltersStore = create<FiltersState>((set) => ({
  ...initialState,
  
  setAdvancedFiltersOpen: (open) => set({ isAdvancedFiltersOpen: open }),
  setCurrentPage: (page) => set({ currentPage: page }),
  setPriceRange: (range) => set({ priceRange: range, currentPage: 1 }),
  setMetalTypes: (types) => set({ metalTypes: types, currentPage: 1 }),
  setRingSize: (size) => set({ ringSize: size, currentPage: 1 }),
  setKarats: (karats) => set({ karats, currentPage: 1 }),
  setGemstoneUsage: (usage) => set({ gemstoneUsage: usage, currentPage: 1 }),
  setSortBy: (sort) => set({ sortBy: sort, currentPage: 1 }),
  
  resetAllFilters: () => set({ 
    ...initialState,
    isAdvancedFiltersOpen: true // Keep filters open when resetting
  }),
  
  resetPriceFilter: () => set({ priceRange: initialState.priceRange, currentPage: 1 }),
  resetMetalTypeFilter: () => set({ metalTypes: [], currentPage: 1 }),
  resetRingSizeFilter: () => set({ ringSize: { unit: 'US', size: '', mm: '' }, currentPage: 1 }),
  resetKaratFilter: () => set({ karats: [], currentPage: 1 }),
  resetGemstoneFilter: () => set({ gemstoneUsage: [], currentPage: 1 }),
}));