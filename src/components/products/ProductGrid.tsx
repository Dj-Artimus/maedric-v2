import { mockApi } from "@/lib/mockApi";
import { Product } from "@/lib/products";
import { useFiltersStore } from "@/store/useFiltersStore";
import React, { useEffect, useState } from "react";
import { BannerCTA } from "./BannerCTA";
import { Pagination } from "./Pagination";
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
  const [meta, setMeta] = useState<ApiResponse["meta"] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const gridRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const params = mockApi.filtersToApiParams(filters);
        const response = await mockApi.getProducts(params);
        setProducts(response.data);
        setMeta(response.meta);
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
    filters.currentPage,
    filters
  ]);

  const handlePageChange = (page: number) => {
    filters.setCurrentPage(page);
    // Scroll to the product grid
    if (gridRef.current) {
      // Calculate the scroll position with an offset
      const offset = -250; // Adjust this for your desired offset (e.g., 100px above the grid)
      const topPosition =
        gridRef.current.getBoundingClientRect().top + window.scrollY + offset;

      // Scroll to the adjusted position
      window.scrollTo({
        top: topPosition,
        behavior: "smooth", // Enables smooth scrolling
      });
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
    <div ref={gridRef}>
      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-10">
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

              {/* Banner 1 - After 8th product */}
              {index === 7 && (
                <div className="col-span-2">
                  <BannerCTA type="banner-1" />
                </div>
              )}

              {/* Banner 2 - After 12th product from banner 1 (index 19) */}
              {index === 19 && (
                <div className="col-span-2">
                  <BannerCTA type="banner-2" />
                </div>
              )}
            </React.Fragment>
          ))
        )}
      </div>

      {/* Pagination */}
      {meta && (
        <Pagination
          currentPage={meta.page}
          totalPages={meta.totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};
