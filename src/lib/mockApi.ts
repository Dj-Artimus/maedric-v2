import { Product, generateProducts } from './products';

export interface FilterParams {
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
  page: number;
  limit: number;
  currentPage: number;
}

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
  private products: Product[] = [];

  constructor() {
    this.generateProductsWithFilters();
  }

  private generateProductsWithFilters() {
    // Generate exactly 105 products with proper distribution
    const baseProducts = generateProducts(95); // Generate 95 base products
    
    // Define all filter options to ensure representation
    const metalTypes: Product['metalType'][] = ['gold', 'platinum', 'titanium', 'silver', 'stainless-steel'];
    const gemstoneTypes: Product['gemstoneUsage'][] = ['metal-only', 'ruby', 'sapphire', 'emerald', 'diamonds'];
    const karatTypes = ['14k', '18k', '23k', '14k-rose', '18k-rose', '14k-white', '18k-white'];
    const ringSizes = ['3.25', '4', '4.5', '5', '5.5', '6', '6.5', '7', '7.5', '8', '8.5', '9', '9.5', '10'];
    
    // Add 10 specific products to ensure each filter has multiple representations
    let additionalProductCount = 0;
    
    // Ensure metal types have good representation (2 products each = 10 total)
    metalTypes.forEach((metalType) => {
      for (let i = 0; i < 2; i++) {
        const ringSize = ringSizes[Math.floor(Math.random() * ringSizes.length)];
        const gemstoneUsage = gemstoneTypes[Math.floor(Math.random() * gemstoneTypes.length)];
        const basePrice = Math.floor(Math.random() * 8000) + 1000;
        
        baseProducts.push({
          id: `guaranteed-metal-${metalType}-${i}`,
          name: `Premium ${metalType.charAt(0).toUpperCase() + metalType.slice(1)} Ring`,
          description: `Beautiful ${metalType} ring with exceptional craftsmanship.`,
          price: basePrice,
          originalPrice: undefined,
          images: [baseProducts[0].images[0]],
          metalType,
          karat: metalType === 'gold' || metalType === 'silver' ? karatTypes[Math.floor(Math.random() * 3)] : undefined,
          gemstoneUsage,
          ringSize,
          tags: [],
          isNew: false,
          isSale: false,
          isTopRated: Math.random() < 0.3,
          stockCount: undefined,
          isOutOfStock: false,
          isFavorited: false,
        });
        additionalProductCount++;
      }
    });
    
    console.log(`Generated ${baseProducts.length} total products (95 base + ${additionalProductCount} guaranteed)`);
    this.products = baseProducts;
  }

async getProducts(filters: Partial<FilterParams>, limit: number, offset: number = 0): Promise<{ 
  products: Product[]; 
  meta: {
    total: number;
    hasNextPage: boolean;
  }; 
}> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));

  let filteredProducts = [...this.products];

  // Apply price filter
  if (filters.priceRange) {
    filteredProducts = filteredProducts.filter(
      product => product.price >= filters.priceRange!.min && product.price <= filters.priceRange!.max
    );
  }

  // Apply metal type filter
  if (filters.metalTypes && filters.metalTypes.length > 0) {
    filteredProducts = filteredProducts.filter(
      product => filters.metalTypes!.includes(product.metalType)
    );
  }

  // Apply ring size filter - only if size is not the default "6"
  if (filters.ringSize && filters.ringSize.size && filters.ringSize.size !== '6') {
    filteredProducts = filteredProducts.filter(
      product => product.ringSize === filters.ringSize!.size
    );
  }

  // Apply karat filter
  if (filters.karats && filters.karats.length > 0) {
    filteredProducts = filteredProducts.filter(
      product => product.karat && filters.karats!.includes(product.karat)
    );
  }

  // Apply gemstone filter
  if (filters.gemstoneUsage && filters.gemstoneUsage.length > 0) {
    filteredProducts = filteredProducts.filter(
      product => filters.gemstoneUsage!.includes(product.gemstoneUsage)
    );
  }

  // Apply sorting
  switch (filters.sortBy) {
    case 'newest':
      filteredProducts.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
      break;
    case 'low-to-high':
      filteredProducts.sort((a, b) => a.price - b.price);
      break;
    case 'high-to-low':
      filteredProducts.sort((a, b) => b.price - a.price);
      break;
    case 'discount':
      filteredProducts.sort((a, b) => (b.isSale ? 1 : 0) - (a.isSale ? 1 : 0));
      break;
    case 'top-rated':
      filteredProducts.sort((a, b) => (b.isTopRated ? 1 : 0) - (a.isTopRated ? 1 : 0));
      break;
    default:
      // Relevance - mix of top rated and sale items
      filteredProducts.sort((a, b) => {
        const aScore = (a.isTopRated ? 2 : 0) + (a.isSale ? 1 : 0);
        const bScore = (b.isTopRated ? 2 : 0) + (b.isSale ? 1 : 0);
        return bScore - aScore;
      });
  }

  const products = filteredProducts.slice(offset, offset + limit);
  const hasNextPage = offset + limit < filteredProducts.length;

  return { 
    products, 
    meta: {
      total: filteredProducts.length,
      hasNextPage
    } 
  };
}

  filtersToApiParams(filters: Partial<FilterParams>): Partial<FilterParams> {
    return {
      priceRange: filters.priceRange,
      metalTypes: filters.metalTypes,
      ringSize: filters.ringSize,
      karats: filters.karats,
      gemstoneUsage: filters.gemstoneUsage,
      sortBy: filters.sortBy,
      page: filters.currentPage,
      limit: 20
    };
  }
}

export const mockApi = new MockApiService();