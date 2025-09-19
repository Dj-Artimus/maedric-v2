import { mockApi } from "@/lib/mockApi";
import { Product } from "@/lib/products";
import { useFiltersStore } from "@/store/useFiltersStore";
import React, { useEffect, useState } from "react";
import { BannerCTA } from "./BannerCTA";
import { ProductCard } from "./ProductCard";

interface ApiResponse {
  data: Product[];
  meta: {
    total: number;
    page: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  };
}

export const ProductGrid = () => {
  const filters = useFiltersStore();
  const [products, setProducts] = useState<Product[]>([]);
  const [meta, setMeta] = useState<{
    total: number;
    hasNextPage: boolean;
  } | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const [offset, setOffset] = useState(0);
  const gridRef = React.useRef<HTMLDivElement>(null);
  const loadMoreRef = React.useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const params = mockApi.filtersToApiParams(filters);
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
  }, [
    filters.priceRange,
    filters.metalTypes,
    filters.ringSize,
    filters.karats,
    filters.gemstoneUsage,
    filters.sortBy,
    offset,
  ]);

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
        root: null, // use viewport
        rootMargin: "500px", // trigger 500px before sentinel enters
        threshold: 0.1,
      }
    );

    observer.observe(loadMoreRef.current);

    return () => {
      if (loadMoreRef.current) observer.unobserve(loadMoreRef.current);
    };
  }, [meta, isLoading]);

  const handleScroll = () => {
    console.log("handleScroll called");
    if (gridRef.current) {
      const offsetHeight = gridRef.current.offsetHeight;
      const scrollHeight = gridRef.current.scrollHeight;
      const scrollTop = gridRef.current.scrollTop;

      if (
        scrollTop + offsetHeight >= scrollHeight * 0.9 &&
        meta &&
        meta.hasNextPage
      ) {
        console.log("Loading next batch of products...");
        setOffset(offset + 20);
      }
    }
  };

  // const renderProductsWithBanners = () => {
  //   const items = [];

  //   products.forEach((product, index) => {
  //     items.push(<ProductCard key={product.id} product={product} />);

  //     // Add banner after 8th product (index 7)
  //     if (index === 7 && products.length > 8) {
  //       items.push(<BannerCTA key="banner-1" type="banner-1" />);
  //     }

  //     // Add banner after 24th product (index 23)
  //     if (index === 23 && products.length > 24) {
  //       items.push(<BannerCTA key="banner-2" type="banner-2" />);
  //     }
  //   });

  //   return items;
  // };

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="aspect-square bg-gray-200 rounded-lg mb-3" />
            <div className="h-4 bg-gray-200 rounded mb-2" />
            <div className="h-3 bg-gray-200 rounded w-3/4 mb-2" />
            <div className="h-4 bg-gray-200 rounded w-1/2" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      ref={gridRef}
      onScroll={handleScroll}
      className="sm:container sm:mx-auto"
    >
      {/* Products Grid */}
      <div className="w-full overflow-hidden grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-10">
        {products.length === 0 ? (
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

              {/* Banner 1 - After 9th product */}
              {index === 8 && (
                <div className="lg:max-xl:inline-block hidden xs:col-span-2">
                  <BannerCTA type="banner-1" />
                </div>
              )}

              {/* Banner 2 - After 23rd product from banner 1 (index 22) */}
              {index === 22 && (
                <div className="lg:max-xl:inline-block hidden xs:col-span-2">
                  <BannerCTA type="banner-2" />
                </div>
              )}

              {/* Banner 1 - After 8th product */}
              {index === 7 && (
                <div className="lg:max-xl:hidden inline-block xs:col-span-2">
                  <BannerCTA type="banner-1" />
                </div>
              )}

              {/* Banner 2 - After 12th product from banner 1 (index 19) */}
              {index === 19 && (
                <div className="lg:max-xl:hidden inline-block xs:col-span-2">
                  <BannerCTA type="banner-2" />
                </div>
              )}
            </React.Fragment>
          ))
        )}
      </div>
      {/* Sentinel for infinite scroll */}
      <div ref={loadMoreRef} className="h-1 w-full bg-accent" />

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
  );
};
