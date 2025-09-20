// src/components/products/ProductGrid.tsx
import { mockApi } from "@/lib/mockApi";
import { Product } from "@/lib/products";
import { FiltersState } from "@/store/useFiltersStore";
import React, { useEffect, useState } from "react";
import { StoreApi, UseBoundStore } from "zustand";
import { ProductCard } from "./ProductCard";
import ProductsBanners from "./ProductsBanners";

// Define a generic interface for the component's props
interface ProductGridProps<T extends FiltersState> {
  useFiltersStore: UseBoundStore<StoreApi<T>>;
  bannerImages: {
    src: string;
    alt: string;
    href: string;
    title: string;
    subtitle: string;
    buttonText: string;
  }[];
  filtersToApiParams: (filters: T) => Record<string, unknown>;
}

// Define the component as a generic function
export const ProductGrid = <T extends FiltersState>({
  useFiltersStore,
  bannerImages,
  filtersToApiParams,
}: ProductGridProps<T>) => {
  const filters = useFiltersStore();
  const [products, setProducts] = useState<Product[]>([]);
  const [meta, setMeta] = useState<{
    total: number;
    hasNextPage: boolean;
  } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [offset, setOffset] = useState(0);

  const loadMoreRef = React.useRef<HTMLDivElement | null>(null);

  // Watch for filters change
  useEffect(() => {
    setOffset(0); // reset pagination
    setProducts([]); // clear old products
  }, [filters]);

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const params = filtersToApiParams(filters);
        const { products: newProducts, meta: newMeta } =
          await mockApi.getProducts(params, 20, offset);

        setProducts((prev) =>
          offset === 0 ? newProducts : [...prev, ...newProducts]
        );
        setMeta(newMeta);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [filters, offset, filtersToApiParams]);

  // Infinite scroll observer
  useEffect(() => {
    if (!loadMoreRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && meta?.hasNextPage && !isLoading) {
          setOffset((prev) => prev + 20);
        }
      },
      {
        root: null,
        rootMargin: "800px", // start fetching early
        threshold: 0,
      }
    );

    observer.observe(loadMoreRef.current);
    return () => observer.disconnect();
  }, [meta, isLoading]);

  return (
    <div className="sm:container sm:mx-auto">
      {/* Products Grid */}
      <div className="w-full overflow-hidden grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-10">
        {products.length === 0 && !isLoading ? (
          <div className="col-span-full text-center py-16">
            <h3 className="font-figtree text-xl text-text-secondary mb-2">
              No products found
            </h3>
            <p className="font-figtree text-text-secondary">
              Try adjusting your filters to see more results
            </p>
          </div>
        ) : (
          products.map((product, index) => (
            <React.Fragment key={product.id}>
              <ProductCard product={product} />
              <ProductsBanners index={index} bannerImages={bannerImages} />
            </React.Fragment>
          ))
        )}

        {/* Inline loading skeletons */}
        {isLoading &&
          Array.from({ length: 4 }).map((_, i) => (
            <div key={`loader-${i}`} className="animate-pulse">
              <div className="aspect-square bg-gray-200 rounded-lg mb-3" />
              <div className="h-4 bg-gray-200 rounded mb-2" />
              <div className="h-3 bg-gray-200 rounded w-3/4 mb-2" />
              <div className="h-4 bg-gray-200 rounded w-1/2" />
            </div>
          ))}
      </div>

      {/* Sentinel for infinite scroll */}
      <div ref={loadMoreRef} className="h-1 w-full" />
    </div>
  );
};
