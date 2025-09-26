// src/lib/mockApi.ts

import {
  BraceletProduct,
  EarringProduct,
  generateBraceletProducts,
  generateEarringProducts,
  generateNecklaceProducts,
  generateRingProducts,
  NecklaceProduct,
  Product,
  RingProduct,
} from "./products";

export const RING_SIZES_MAP = [
  // US Sizes (3 to 16, in 0.25 increments) - Based on Measurements (1).xlsx - US.csv
  { unit: "US", size: "3", diameter_mm: 14.1, circumference_mm: 44.3 },
  { unit: "US", size: "3.25", diameter_mm: 14.3, circumference_mm: 44.9 },
  { unit: "US", size: "3.5", diameter_mm: 14.5, circumference_mm: 45.6 },
  { unit: "US", size: "3.75", diameter_mm: 14.7, circumference_mm: 46.2 },
  { unit: "US", size: "4", diameter_mm: 14.9, circumference_mm: 46.8 },
  { unit: "US", size: "4.25", diameter_mm: 15.1, circumference_mm: 47.4 },
  { unit: "US", size: "4.5", diameter_mm: 15.3, circumference_mm: 48.1 },
  { unit: "US", size: "4.75", diameter_mm: 15.5, circumference_mm: 48.7 },
  { unit: "US", size: "5", diameter_mm: 15.7, circumference_mm: 49.3 },
  { unit: "US", size: "5.25", diameter_mm: 15.9, circumference_mm: 50.0 },
  { unit: "US", size: "5.5", diameter_mm: 16.1, circumference_mm: 50.6 },
  { unit: "US", size: "5.75", diameter_mm: 16.3, circumference_mm: 51.2 },
  { unit: "US", size: "6", diameter_mm: 16.5, circumference_mm: 51.8 },
  { unit: "US", size: "6.25", diameter_mm: 16.7, circumference_mm: 52.5 },
  { unit: "US", size: "6.5", diameter_mm: 16.9, circumference_mm: 53.1 },
  { unit: "US", size: "6.75", diameter_mm: 17.1, circumference_mm: 53.7 },
  { unit: "US", size: "7", diameter_mm: 17.3, circumference_mm: 54.3 },
  { unit: "US", size: "7.25", diameter_mm: 17.5, circumference_mm: 55.0 },
  { unit: "US", size: "7.5", diameter_mm: 17.7, circumference_mm: 55.6 },
  { unit: "US", size: "7.75", diameter_mm: 17.9, circumference_mm: 56.2 },
  { unit: "US", size: "8", diameter_mm: 18.1, circumference_mm: 56.9 },
  { unit: "US", size: "8.25", diameter_mm: 18.3, circumference_mm: 57.5 },
  { unit: "US", size: "8.5", diameter_mm: 18.5, circumference_mm: 58.1 },
  { unit: "US", size: "8.75", diameter_mm: 18.7, circumference_mm: 58.7 },
  { unit: "US", size: "9", diameter_mm: 18.9, circumference_mm: 59.4 },
  { unit: "US", size: "9.25", diameter_mm: 19.2, circumference_mm: 60.3 },
  { unit: "US", size: "9.5", diameter_mm: 19.4, circumference_mm: 60.9 },
  { unit: "US", size: "9.75", diameter_mm: 19.6, circumference_mm: 61.5 },
  { unit: "US", size: "10", diameter_mm: 19.8, circumference_mm: 62.2 },
  { unit: "US", size: "10.25", diameter_mm: 20.0, circumference_mm: 62.8 },
  { unit: "US", size: "10.5", diameter_mm: 20.2, circumference_mm: 63.4 },
  { unit: "US", size: "10.75", diameter_mm: 20.4, circumference_mm: 64.0 },
  { unit: "US", size: "11", diameter_mm: 20.6, circumference_mm: 64.6 },
  { unit: "US", size: "11.25", diameter_mm: 20.8, circumference_mm: 65.3 },
  { unit: "US", size: "11.5", diameter_mm: 21.0, circumference_mm: 65.9 },
  { unit: "US", size: "11.75", diameter_mm: 21.2, circumference_mm: 66.5 },
  { unit: "US", size: "12", diameter_mm: 21.4, circumference_mm: 67.2 },
  { unit: "US", size: "12.25", diameter_mm: 21.6, circumference_mm: 67.8 },
  { unit: "US", size: "12.5", diameter_mm: 21.8, circumference_mm: 68.4 },
  { unit: "US", size: "12.75", diameter_mm: 22.0, circumference_mm: 69.1 },
  { unit: "US", size: "13", diameter_mm: 22.2, circumference_mm: 69.7 },
  { unit: "US", size: "13.25", diameter_mm: 22.4, circumference_mm: 70.3 },
  { unit: "US", size: "13.5", diameter_mm: 22.6, circumference_mm: 71.0 },
  { unit: "US", size: "13.75", diameter_mm: 22.8, circumference_mm: 71.6 },
  { unit: "US", size: "14", diameter_mm: 23.0, circumference_mm: 72.2 },
  { unit: "US", size: "14.25", diameter_mm: 23.2, circumference_mm: 72.8 },
  { unit: "US", size: "14.5", diameter_mm: 23.4, circumference_mm: 73.5 },
  { unit: "US", size: "14.75", diameter_mm: 23.6, circumference_mm: 74.1 },
  { unit: "US", size: "15", diameter_mm: 23.8, circumference_mm: 74.7 },
  { unit: "US", size: "15.25", diameter_mm: 24.0, circumference_mm: 75.4 },
  { unit: "US", size: "15.5", diameter_mm: 24.2, circumference_mm: 76.0 },
  { unit: "US", size: "15.75", diameter_mm: 24.4, circumference_mm: 76.6 },
  { unit: "US", size: "16", diameter_mm: 24.6, circumference_mm: 77.2 }, // AU/UK Sizes (A to Z2) - Based on Measurements (1).xlsx - UK.csv
  { unit: "UK", size: "A", diameter_mm: 12.04, circumference_mm: 37.8 },
  { unit: "UK", size: "A 1/2", diameter_mm: 12.24, circumference_mm: 38.5 },
  { unit: "UK", size: "B", diameter_mm: 12.45, circumference_mm: 39.1 },
  { unit: "UK", size: "B 1/2", diameter_mm: 12.65, circumference_mm: 39.7 },
  { unit: "UK", size: "C", diameter_mm: 12.85, circumference_mm: 40.4 },
  { unit: "UK", size: "C 1/2", diameter_mm: 13.06, circumference_mm: 41.0 },
  { unit: "UK", size: "D", diameter_mm: 13.26, circumference_mm: 41.7 },
  { unit: "UK", size: "D 1/2", diameter_mm: 13.46, circumference_mm: 42.3 },
  { unit: "UK", size: "E", diameter_mm: 13.67, circumference_mm: 42.9 },
  { unit: "UK", size: "E 1/2", diameter_mm: 13.87, circumference_mm: 43.6 },
  { unit: "UK", size: "F", diameter_mm: 14.07, circumference_mm: 44.2 },
  { unit: "UK", size: "F 1/2", diameter_mm: 14.27, circumference_mm: 44.8 },
  { unit: "UK", size: "G", diameter_mm: 14.48, circumference_mm: 45.5 },
  { unit: "UK", size: "G 1/2", diameter_mm: 14.68, circumference_mm: 46.1 },
  { unit: "UK", size: "H", diameter_mm: 14.88, circumference_mm: 46.8 },
  { unit: "UK", size: "H 1/2", diameter_mm: 15.09, circumference_mm: 47.4 },
  { unit: "UK", size: "I", diameter_mm: 15.29, circumference_mm: 48.0 },
  { unit: "UK", size: "J", diameter_mm: 15.49, circumference_mm: 48.7 },
  { unit: "UK", size: "J 1/2", diameter_mm: 15.7, circumference_mm: 49.3 },
  { unit: "UK", size: "K", diameter_mm: 15.9, circumference_mm: 50.0 },
  { unit: "UK", size: "K 1/2", diameter_mm: 16.1, circumference_mm: 50.6 },
  { unit: "UK", size: "L", diameter_mm: 16.31, circumference_mm: 51.2 },
  { unit: "UK", size: "L 1/2", diameter_mm: 16.51, circumference_mm: 51.9 },
  { unit: "UK", size: "M", diameter_mm: 16.71, circumference_mm: 52.5 },
  { unit: "UK", size: "M 1/2", diameter_mm: 16.92, circumference_mm: 53.1 },
  { unit: "UK", size: "N", diameter_mm: 17.12, circumference_mm: 53.8 },
  { unit: "UK", size: "N 1/2", diameter_mm: 17.32, circumference_mm: 54.4 },
  { unit: "UK", size: "O", diameter_mm: 17.53, circumference_mm: 55.0 },
  { unit: "UK", size: "O 1/2", diameter_mm: 17.73, circumference_mm: 55.7 },
  { unit: "UK", size: "P", diameter_mm: 17.93, circumference_mm: 56.3 },
  { unit: "UK", size: "P 1/2", diameter_mm: 18.14, circumference_mm: 56.9 },
  { unit: "UK", size: "Q", diameter_mm: 18.34, circumference_mm: 57.6 },
  { unit: "UK", size: "Q 1/2", diameter_mm: 18.54, circumference_mm: 58.2 },
  { unit: "UK", size: "R", diameter_mm: 18.75, circumference_mm: 58.9 },
  { unit: "UK", size: "R 1/2", diameter_mm: 18.95, circumference_mm: 59.5 },
  { unit: "UK", size: "S", diameter_mm: 19.15, circumference_mm: 60.1 },
  { unit: "UK", size: "S 1/2", diameter_mm: 19.36, circumference_mm: 60.8 },
  { unit: "UK", size: "T", diameter_mm: 19.56, circumference_mm: 61.4 },
  { unit: "UK", size: "T 1/2", diameter_mm: 19.76, circumference_mm: 62.0 },
  { unit: "UK", size: "U", diameter_mm: 19.96, circumference_mm: 62.7 },
  { unit: "UK", size: "U 1/2", diameter_mm: 20.17, circumference_mm: 63.3 },
  { unit: "UK", size: "V", diameter_mm: 20.37, circumference_mm: 64.0 },
  { unit: "UK", size: "V 1/2", diameter_mm: 20.57, circumference_mm: 64.6 },
  { unit: "UK", size: "W", diameter_mm: 20.78, circumference_mm: 65.2 },
  { unit: "UK", size: "W 1/2", diameter_mm: 20.98, circumference_mm: 65.9 },
  { unit: "UK", size: "X", diameter_mm: 21.18, circumference_mm: 66.5 },
  { unit: "UK", size: "X 1/2", diameter_mm: 21.39, circumference_mm: 67.1 },
  { unit: "UK", size: "Y", diameter_mm: 21.59, circumference_mm: 67.8 },
  { unit: "UK", size: "Z", diameter_mm: 21.79, circumference_mm: 68.4 },
  { unit: "UK", size: "Z 1/2", diameter_mm: 22.0, circumference_mm: 69.1 },
  { unit: "UK", size: "Z1", diameter_mm: 22.2, circumference_mm: 69.7 },
  { unit: "UK", size: "Z2", diameter_mm: 22.4, circumference_mm: 70.3 }, // HK Sizes (5 to 30) - Based on Measurements (1).xlsx - HK.csv
  { unit: "HK", size: "5", diameter_mm: 13.8, circumference_mm: 43.3 },
  { unit: "HK", size: "6", diameter_mm: 14.1, circumference_mm: 44.3 },
  { unit: "HK", size: "7", diameter_mm: 14.5, circumference_mm: 45.5 },
  { unit: "HK", size: "8", diameter_mm: 14.8, circumference_mm: 46.5 },
  { unit: "HK", size: "9", diameter_mm: 15.2, circumference_mm: 47.7 },
  { unit: "HK", size: "10", diameter_mm: 15.5, circumference_mm: 48.7 },
  { unit: "HK", size: "11", diameter_mm: 15.9, circumference_mm: 49.9 },
  { unit: "HK", size: "12", diameter_mm: 16.2, circumference_mm: 50.9 },
  { unit: "HK", size: "13", diameter_mm: 16.6, circumference_mm: 52.1 },
  { unit: "HK", size: "14", diameter_mm: 16.9, circumference_mm: 53.1 },
  { unit: "HK", size: "15", diameter_mm: 17.3, circumference_mm: 54.3 },
  { unit: "HK", size: "16", diameter_mm: 17.7, circumference_mm: 55.6 },
  { unit: "HK", size: "17", diameter_mm: 18.0, circumference_mm: 56.5 },
  { unit: "HK", size: "18", diameter_mm: 18.3, circumference_mm: 57.5 },
  { unit: "HK", size: "19", diameter_mm: 18.7, circumference_mm: 58.7 },
  { unit: "HK", size: "20", diameter_mm: 19.0, circumference_mm: 59.7 },
  { unit: "HK", size: "21", diameter_mm: 19.4, circumference_mm: 60.9 },
  { unit: "HK", size: "22", diameter_mm: 19.7, circumference_mm: 61.9 },
  { unit: "HK", size: "23", diameter_mm: 20.1, circumference_mm: 63.1 },
  { unit: "HK", size: "24", diameter_mm: 20.4, circumference_mm: 64.1 },
  { unit: "HK", size: "25", diameter_mm: 20.8, circumference_mm: 65.3 },
  { unit: "HK", size: "26", diameter_mm: 21.1, circumference_mm: 66.3 },
  { unit: "HK", size: "27", diameter_mm: 21.5, circumference_mm: 67.5 },
  { unit: "HK", size: "28", diameter_mm: 21.8, circumference_mm: 68.5 },
  { unit: "HK", size: "29", diameter_mm: 22.2, circumference_mm: 69.7 },
  { unit: "HK", size: "30", diameter_mm: 22.5, circumference_mm: 70.7 },
];


// Ring-specific filter params
export interface RingFilterParams {
  type: "ring";
  priceRange: { min: number; max: number };
  metalTypes: string[]; // Retained structure but with better data: { unit: 'US', size: '6', mm: '16.5' }
  ringSize: { unit: string; size: string; mm: string };
  karats: string[];
  gemstoneUsage: string[];
  sortBy:
    | "relevance"
    | "newest"
    | "low-to-high"
    | "high-to-low"
    | "discount"
    | "top-rated";
  page: number;
  limit: number;
  currentPage: number;
}

// Earring-specific filter params
export interface EarringFilterParams {
  type: "earring";
  priceRange: { min: number; max: number };
  metalTypes: string[];
  attachmentMethod: string[];
  weight: { min: number; max: number }; // in grams
  karats: string[];
  gemstoneUsage: string[];
  sortBy:
    | "relevance"
    | "newest"
    | "low-to-high"
    | "high-to-low"
    | "discount"
    | "top-rated";
  page: number;
  limit: number;
  currentPage: number;
}

// Necklace-specific filter params
export interface NecklaceFilterParams {
  type: "necklace";
  priceRange: { min: number; max: number };
  metalTypes: string[];
  necklaceTypes: string[];
  length: { min: number; max: number }; // in cm
  karats: string[];
  gemstoneUsage: string[];
  sortBy:
    | "relevance"
    | "newest"
    | "low-to-high"
    | "high-to-low"
    | "discount"
    | "top-rated";
  page: number;
  limit: number;
  currentPage: number;
}

// Bracelet-specific filter params
export interface BraceletFilterParams {
  type: "bracelet";
  priceRange: { min: number; max: number };
  metalTypes: string[]; // ADDED: attachment method filter for bracelets
  attachmentMethod: string[];
  circumference: { min: number; max: number }; // in cm
  karats: string[];
  gemstoneUsage: string[];
  sortBy:
    | "relevance"
    | "newest"
    | "low-to-high"
    | "high-to-low"
    | "discount"
    | "top-rated";
  page: number;
  limit: number;
  currentPage: number;
}

// Union type for all filter params
export type FilterParams =
  | RingFilterParams
  | EarringFilterParams
  | NecklaceFilterParams
  | BraceletFilterParams;

export interface ApiResponse<T> {
  data: T;
  meta: {
    total: number;
    page: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  };
}

export class MockApiService {
  private ringProducts: RingProduct[] = [];
  private earringProducts: EarringProduct[] = [];
  private necklaceProducts: NecklaceProduct[] = [];
  private braceletProducts: BraceletProduct[] = [];

  constructor() {
    this.generateAllProducts();
  }

  private generateAllProducts() {
    // Generate products for each category
    this.ringProducts = this.generateRingProductsWithFilters();
    this.earringProducts = this.generateEarringProductsWithFilters();
    this.necklaceProducts = this.generateNecklaceProductsWithFilters();
    this.braceletProducts = this.generateBraceletProductsWithFilters(); // console.log(
    //   `10 Rings Products : ${JSON.stringify(this.ringProducts.slice(0, 10), null, 2)}, \n 10 Earrings Products : ${JSON.stringify(this.earringProducts.slice(0, 10), null, 2)}, \n 10 Necklace Products : ${JSON.stringify(this.necklaceProducts.slice(0, 10), null, 2)}, \n 10 Bracelet Products : ${JSON.stringify(this.braceletProducts.slice(0, 10), null, 2)}`
    // );
  }

  private generateRingProductsWithFilters(): RingProduct[] {
    const baseProducts = generateRingProducts(495);
    const metalTypes: RingProduct["metalType"][] = [
      "gold",
      "platinum",
      "titanium",
      "silver",
      "stainless-steel",
    ];
    const gemstoneTypes: RingProduct["gemstoneUsage"][] = [
      "metal-only",
      "ruby",
      "sapphire",
      "emerald",
      "diamonds",
    ];
    const karatTypes = [
      "14k",
      "18k",
      "23k",
      "14k-rose",
      "18k-rose",
      "14k-white",
      "18k-white",
    ]; // UPDATED: Use the full list of size strings from the new map
    const ringSizes = RING_SIZES_MAP.map((item) => item.size); // Add guaranteed products for each filter

    metalTypes.forEach((metalType) => {
      for (let i = 0; i < 2; i++) {
        const ringSize =
          ringSizes[Math.floor(Math.random() * ringSizes.length)];
        const gemstoneUsage =
          gemstoneTypes[Math.floor(Math.random() * gemstoneTypes.length)];
        const basePrice = Math.floor(Math.random() * 8000) + 1000;

        baseProducts.push({
          type: "ring",
          id: `guaranteed-ring-metal-${metalType}-${i}`,
          name: `Premium ${metalType.charAt(0).toUpperCase() + metalType.slice(1)} Ring`,
          description: `Beautiful ${metalType} ring with exceptional craftsmanship.`,
          price: basePrice,
          originalPrice: undefined,
          images: [baseProducts[0].images[0]],
          metalType,
          karat:
            metalType === "gold" || metalType === "silver"
              ? karatTypes[Math.floor(Math.random() * 3)]
              : undefined,
          gemstoneUsage,
          ringSize,
          tags: [],
          isNew: false,
          isSale: false,
          isTopRated: Math.random() < 0.3,
          stockCount:
            Math.random() < 0.1 ? Math.floor(Math.random() * 5) + 1 : 999,
          isOutOfStock: false,
          isFavorited: false,
        });
      }
    });

    console.log(`Generated ${baseProducts.length} ring products`);
    return baseProducts;
  }

  private generateEarringProductsWithFilters(): EarringProduct[] {
    const baseProducts = generateEarringProducts(95);
    const metalTypes: EarringProduct["metalType"][] = [
      "gold",
      "platinum",
      "titanium",
      "silver",
      "stainless-steel",
    ];
    const attachmentMethods: EarringProduct["attachmentMethod"][] = [
      "clip-on",
      "post-and-back",
    ]; // Add guaranteed products

    metalTypes.forEach((metalType) => {
      attachmentMethods.forEach((method) => {
        baseProducts.push({
          type: "earring",
          id: `guaranteed-earring-${metalType}-${method}`,
          name: `${metalType.charAt(0).toUpperCase() + metalType.slice(1)} ${method === "clip-on" ? "Clip" : "Post"} Earrings`,
          description: `Elegant ${metalType} earrings with ${method} attachment.`,
          price: Math.floor(Math.random() * 5000) + 500,
          images: [baseProducts[0].images[0]],
          metalType,
          attachmentMethod: method,
          weight: Math.round((Math.random() * 12 + 0.5) * 10) / 10, // 0.5g to 12g
          gemstoneUsage: "diamonds",
          tags: [],
          isNew: false,
          isSale: false,
          isTopRated: true,
          stockCount: 999,
          isOutOfStock: false,
          isFavorited: false,
        });
      });
    });

    console.log(`Generated ${baseProducts.length} earring products`);
    return baseProducts;
  }

  private generateNecklaceProductsWithFilters(): NecklaceProduct[] {
    const baseProducts = generateNecklaceProducts(90);
    const necklaceTypes: NecklaceProduct["necklaceType"][] = [
      "collar",
      "choker",
      "princess",
      "matinee",
      "opera",
      "rope",
    ]; // Add guaranteed products for each necklace type

    necklaceTypes.forEach((type, index) => {
      for (let i = 0; i < 2; i++) {
        baseProducts.push({
          type: "necklace",
          id: `guaranteed-necklace-${type}-${i}`,
          name: `${type.charAt(0).toUpperCase() + type.slice(1)} Style Necklace`,
          description: `Beautiful ${type} style necklace with premium craftsmanship.`,
          price: Math.floor(Math.random() * 8000) + 1000,
          images: [baseProducts[0].images[0]],
          metalType: "gold",
          karat: "18k",
          gemstoneUsage: "diamonds",
          necklaceType: type,
          length: 32 + index * 5,
          tags: [],
          isNew: false,
          isSale: false,
          isTopRated: true,
          stockCount: 999,
          isOutOfStock: false,
          isFavorited: false,
        });
      }
    });

    console.log(`Generated ${baseProducts.length} necklace products`);
    return baseProducts;
  }

  private generateBraceletProductsWithFilters(): BraceletProduct[] {
    const baseProducts = generateBraceletProducts(95);
    const metalTypes: BraceletProduct["metalType"][] = [
      "gold",
      "platinum",
      "titanium",
      "silver",
      "stainless-steel",
    ];
    const attachmentMethods: EarringProduct["attachmentMethod"][] = [
      "clip-on",
      "post-and-back",
    ]; // Add guaranteed products

    metalTypes.forEach((metalType) => {
      // MODIFIED: Loop through attachment methods to ensure products exist for filters
      attachmentMethods.forEach((method) => {
        baseProducts.push({
          type: "bracelet",
          id: `guaranteed-bracelet-${metalType}-${method}`,
          name: `${metalType.charAt(0).toUpperCase() + metalType.slice(1)} Designer Bracelet`,
          description: `Luxurious ${metalType} bracelet with exceptional design.`,
          price: Math.floor(Math.random() * 7000) + 800,
          images: [baseProducts[0].images[0]],
          metalType,
          karat:
            metalType === "gold" || metalType === "silver" ? "18k" : undefined,
          gemstoneUsage: "diamonds", // ADDED: Assign a random attachment method
          attachmentMethod: method,
          circumference: 8 + Math.floor(Math.random() * 18), // 8cm to 25cm
          tags: [],
          isNew: false,
          isSale: false,
          isTopRated: true,
          stockCount: 999,
          isOutOfStock: false,
          isFavorited: false,
        });
      });
    });

    console.log(`Generated ${baseProducts.length} bracelet products`);
    return baseProducts;
  } // --- Start of completed code ---

  private applyCommonFilters<T extends Product>(
    products: T[],
    filters: Partial<FilterParams>
  ): T[] {
    let filteredProducts = products; // Price range filter

    if (filters.priceRange) {
      filteredProducts = filteredProducts.filter(
        (p) =>
          p.price >= filters.priceRange!.min &&
          p.price <= filters.priceRange!.max
      );
    } // Metal type filter

    if (filters.metalTypes && filters.metalTypes.length > 0) {
      filteredProducts = filteredProducts.filter((p) =>
        filters.metalTypes!.includes(p.metalType)
      );
    } // Karat filter

    if (filters.karats && filters.karats.length > 0) {
      filteredProducts = filteredProducts.filter(
        (p) => p.karat && filters.karats!.includes(p.karat)
      );
    } // Gemstone usage filter

    if (filters.gemstoneUsage && filters.gemstoneUsage.length > 0) {
      filteredProducts = filteredProducts.filter((p) =>
        filters.gemstoneUsage!.includes(p.gemstoneUsage)
      );
    }

    return filteredProducts;
  }

  private applySorting<T extends Product>(
    products: T[],
    sortBy: FilterParams["sortBy"]
  ): T[] {
    switch (sortBy) {
      case "low-to-high":
        return [...products].sort((a, b) => a.price - b.price);
      case "high-to-low":
        return [...products].sort((a, b) => b.price - a.price);
      case "discount":
        return [...products].sort((a, b) => {
          const discountA = a.originalPrice
            ? (a.originalPrice - a.price) / a.originalPrice
            : 0;
          const discountB = b.originalPrice
            ? (b.originalPrice - b.price) / b.originalPrice
            : 0;
          return discountB - discountA;
        });
      case "top-rated":
        return [...products].sort(
          (a, b) => (b.isTopRated ? 1 : 0) - (a.isTopRated ? 1 : 0)
        );
      case "newest":
        return [...products].sort(
          (a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0)
        );
      case "relevance":
      default:
        return products;
    }
  } // Get Ring Products

  async getRingProducts(
    filters: Partial<RingFilterParams>,
    limit: number = 20,
    offset: number = 0
  ): Promise<{
    products: RingProduct[];
    meta: {
      total: number;
      hasNextPage: boolean;
    };
  }> {
    await new Promise((resolve) => setTimeout(resolve, Math.random() * 500));
    let filteredProducts = this.applyCommonFilters(this.ringProducts, filters); // UPDATED: Filter by ring size string
    if (filters.ringSize?.size) {
      filteredProducts = filteredProducts.filter(
        (p) => p.ringSize === filters.ringSize?.size
      );
    }
    const sortedProducts = this.applySorting(
      filteredProducts,
      filters.sortBy || "relevance"
    );
    const paginatedProducts = sortedProducts.slice(offset, offset + limit);

    return {
      products: paginatedProducts as RingProduct[],
      meta: {
        total: filteredProducts.length,
        hasNextPage: offset + limit < filteredProducts.length,
      },
    };
  } // Get Earring Products

  async getEarringProducts(
    filters: Partial<EarringFilterParams>,
    limit: number = 20,
    offset: number = 0
  ): Promise<{
    products: EarringProduct[];
    meta: {
      total: number;
      hasNextPage: boolean;
    };
  }> {
    await new Promise((resolve) => setTimeout(resolve, Math.random() * 500));
    let filteredProducts = this.applyCommonFilters(
      this.earringProducts,
      filters
    );
    if (filters.attachmentMethod && filters.attachmentMethod.length > 0) {
      filteredProducts = filteredProducts.filter((p) =>
        filters.attachmentMethod!.includes(p.attachmentMethod)
      );
    }
    if (filters.weight) {
      filteredProducts = filteredProducts.filter(
        (p) =>
          p.weight !== undefined &&
          p.weight >= filters.weight!.min &&
          p.weight <= filters.weight!.max
      );
    }
    const sortedProducts = this.applySorting(
      filteredProducts,
      filters.sortBy || "relevance"
    );
    const paginatedProducts = sortedProducts.slice(offset, offset + limit);

    return {
      products: paginatedProducts as EarringProduct[],
      meta: {
        total: filteredProducts.length,
        hasNextPage: offset + limit < filteredProducts.length,
      },
    };
  } // Get Necklace Products

  async getNecklaceProducts(
    filters: Partial<NecklaceFilterParams>,
    limit: number = 20,
    offset: number = 0
  ): Promise<{
    products: NecklaceProduct[];
    meta: {
      total: number;
      hasNextPage: boolean;
    };
  }> {
    await new Promise((resolve) => setTimeout(resolve, Math.random() * 500));
    let filteredProducts = this.applyCommonFilters(
      this.necklaceProducts,
      filters
    );
    if (filters.necklaceTypes && filters.necklaceTypes.length > 0) {
      filteredProducts = filteredProducts.filter((p) =>
        filters.necklaceTypes!.includes(p.necklaceType)
      );
    }
    if (filters.length) {
      filteredProducts = filteredProducts.filter(
        (p) =>
          p.length !== undefined &&
          p.length >= filters.length!.min &&
          p.length <= filters.length!.max
      );
    }
    const sortedProducts = this.applySorting(
      filteredProducts,
      filters.sortBy || "relevance"
    );
    const paginatedProducts = sortedProducts.slice(offset, offset + limit);

    return {
      products: paginatedProducts as NecklaceProduct[],
      meta: {
        total: filteredProducts.length,
        hasNextPage: offset + limit < filteredProducts.length,
      },
    };
  } // Get Bracelet Products

  async getBraceletProducts(
    filters: Partial<BraceletFilterParams>,
    limit: number = 20,
    offset: number = 0
  ): Promise<{
    products: BraceletProduct[];
    meta: {
      total: number;
      hasNextPage: boolean;
    };
  }> {
    await new Promise((resolve) => setTimeout(resolve, Math.random() * 500));
    let filteredProducts = this.applyCommonFilters(
      this.braceletProducts,
      filters
    ); // ADDED: Filter logic for bracelet attachment method
    if (filters.attachmentMethod && filters.attachmentMethod.length > 0) {
      filteredProducts = filteredProducts.filter((p) =>
        filters.attachmentMethod!.includes(p.attachmentMethod)
      );
    }
    if (filters.circumference) {
      filteredProducts = filteredProducts.filter(
        (p) =>
          p.circumference !== undefined &&
          p.circumference >= filters.circumference!.min &&
          p.circumference <= filters.circumference!.max
      );
    }
    const sortedProducts = this.applySorting(
      filteredProducts,
      filters.sortBy || "relevance"
    );
    const paginatedProducts = sortedProducts.slice(offset, offset + limit);

    return {
      products: paginatedProducts as BraceletProduct[],
      meta: {
        total: filteredProducts.length,
        hasNextPage: offset + limit < filteredProducts.length,
      },
    };
  } // Unified getProducts method

  async getProducts(
    filters: Partial<FilterParams>,
    limit: number = 20,
    offset: number = 0
  ): Promise<{
    products: Product[];
    meta: { total: number; hasNextPage: boolean };
  }> {
    switch (filters.type) {
      case "ring":
        return this.getRingProducts(
          filters as Partial<RingFilterParams>,
          limit,
          offset
        );
      case "earring":
        return this.getEarringProducts(
          filters as Partial<EarringFilterParams>,
          limit,
          offset
        );
      case "necklace":
        return this.getNecklaceProducts(
          filters as Partial<NecklaceFilterParams>,
          limit,
          offset
        );
      case "bracelet":
        return this.getBraceletProducts(
          filters as Partial<BraceletFilterParams>,
          limit,
          offset
        );
      default: // If no type is provided, return a default set of products or an empty array
        return {
          products: [],
          meta: { total: 0, hasNextPage: false },
        };
    }
  } // Rings

  ringsFiltersToApiParams = (
    filters: Partial<RingFilterParams>
  ): Partial<RingFilterParams> => ({
    type: "ring",
    priceRange: filters.priceRange,
    metalTypes: filters.metalTypes,
    karats: filters.karats,
    gemstoneUsage: filters.gemstoneUsage,
    ringSize: filters.ringSize,
    sortBy: filters.sortBy || "relevance",
    page: filters.page || 1,
    limit: filters.limit || 20,
    currentPage: filters.currentPage || 1,
  }); // Earrings

  earringsFiltersToApiParams = (
    filters: Partial<EarringFilterParams>
  ): Partial<EarringFilterParams> => ({
    type: "earring",
    priceRange: filters.priceRange,
    metalTypes: filters.metalTypes,
    karats: filters.karats,
    gemstoneUsage: filters.gemstoneUsage,
    attachmentMethod: filters.attachmentMethod,
    weight: filters.weight,
    sortBy: filters.sortBy || "relevance",
    page: filters.page || 1,
    limit: filters.limit || 20,
    currentPage: filters.currentPage || 1,
  }); // Necklaces

  necklacesFiltersToApiParams = (
    filters: Partial<NecklaceFilterParams>
  ): Partial<NecklaceFilterParams> => ({
    type: "necklace",
    priceRange: filters.priceRange,
    metalTypes: filters.metalTypes,
    karats: filters.karats,
    gemstoneUsage: filters.gemstoneUsage,
    necklaceTypes: filters.necklaceTypes,
    length: filters.length,
    sortBy: filters.sortBy || "relevance",
    page: filters.page || 1,
    limit: filters.limit || 20,
    currentPage: filters.currentPage || 1,
  }); // Bracelets

  braceletsFiltersToApiParams = (
    filters: Partial<BraceletFilterParams>
  ): Partial<BraceletFilterParams> => ({
    type: "bracelet",
    priceRange: filters.priceRange,
    metalTypes: filters.metalTypes,
    karats: filters.karats,
    gemstoneUsage: filters.gemstoneUsage, // ADDED: Include attachmentMethod in the filter conversion
    attachmentMethod: filters.attachmentMethod,
    circumference: filters.circumference,
    sortBy: filters.sortBy || "relevance",
    page: filters.page || 1,
    limit: filters.limit || 20,
    currentPage: filters.currentPage || 1,
  });
}

// Instantiate the class and export it.
export const mockApi = new MockApiService();
