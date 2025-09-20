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

// Ring-specific filter params
export interface RingFilterParams {
  type: "ring";
  priceRange: { min: number; max: number };
  metalTypes: string[];
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
  metalTypes: string[];
  // ADDED: attachment method filter for bracelets
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
    this.braceletProducts = this.generateBraceletProductsWithFilters();

    // console.log(
    //   `10 Rings Products : ${JSON.stringify(this.ringProducts.slice(0, 10), null, 2)}, \n 10 Earrings Products : ${JSON.stringify(this.earringProducts.slice(0, 10), null, 2)}, \n 10 Necklace Products : ${JSON.stringify(this.necklaceProducts.slice(0, 10), null, 2)}, \n 10 Bracelet Products : ${JSON.stringify(this.braceletProducts.slice(0, 10), null, 2)}`
    // );
  }

  private generateRingProductsWithFilters(): RingProduct[] {
    const baseProducts = generateRingProducts(95);
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
    ];
    const ringSizes = [
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

    // Add guaranteed products for each filter
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
    ];

    // Add guaranteed products
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
    ];

    // Add guaranteed products for each necklace type
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
    ];

    // Add guaranteed products
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
          gemstoneUsage: "diamonds",
          // ADDED: Assign a random attachment method
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
  }

  // --- Start of completed code ---

  private applyCommonFilters<T extends Product>(
    products: T[],
    filters: Partial<FilterParams>
  ): T[] {
    let filteredProducts = products;

    // Price range filter
    if (filters.priceRange) {
      filteredProducts = filteredProducts.filter(
        (p) =>
          p.price >= filters.priceRange!.min &&
          p.price <= filters.priceRange!.max
      );
    }

    // Metal type filter
    if (filters.metalTypes && filters.metalTypes.length > 0) {
      filteredProducts = filteredProducts.filter((p) =>
        filters.metalTypes!.includes(p.metalType)
      );
    }

    // Karat filter
    if (filters.karats && filters.karats.length > 0) {
      filteredProducts = filteredProducts.filter(
        (p) => p.karat && filters.karats!.includes(p.karat)
      );
    }

    // Gemstone usage filter
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
  }

  // Get Ring Products
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
    let filteredProducts = this.applyCommonFilters(this.ringProducts, filters);
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
  }

  // Get Earring Products
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
  }

  // Get Necklace Products
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
  }

  // Get Bracelet Products
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
    );
    // ADDED: Filter logic for bracelet attachment method
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
  }

  // Unified getProducts method
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
      default:
        // If no type is provided, return a default set of products or an empty array
        return {
          products: [],
          meta: { total: 0, hasNextPage: false },
        };
    }
  }

  // Rings
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
  });

  // Earrings
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
  });

  // Necklaces
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
  });

  // Bracelets
  braceletsFiltersToApiParams = (
    filters: Partial<BraceletFilterParams>
  ): Partial<BraceletFilterParams> => ({
    type: "bracelet",
    priceRange: filters.priceRange,
    metalTypes: filters.metalTypes,
    karats: filters.karats,
    gemstoneUsage: filters.gemstoneUsage,
    // ADDED: Include attachmentMethod in the filter conversion
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
