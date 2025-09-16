"use client";
import { useEffect, useState } from "react";

import { FiltersPanel } from "@/components/filters/FiltersPanel";
import { ProductGrid } from "@/components/products/ProductGrid";
// import { useToast } from "@/hooks/use-toast";
import { mockApi } from "@/lib/mockApi";
import { useFiltersStore } from "@/store/useFiltersStore";
import RingsHeroSection from "./sections/RingsHeroSection";

const RingsPage: React.FC = () => {
  // const [isLoading, setIsLoading] = useState(true);
  // const { toast } = useToast();
  const [totalResults, setTotalResults] = useState(105);

  const filters = useFiltersStore();

  // Load products based on current filters
  useEffect(() => {
    const fetchMeta = async () => {
      try {
        const params = mockApi.filtersToApiParams(filters);
        const response = await mockApi.getProducts(params);
        setTotalResults(response.meta.total);
      } catch (error) {
        console.error("Error fetching meta:", error);
      }
    };

    fetchMeta();
  }, [
    filters,
    filters.priceRange,
    filters.metalTypes,
    filters.ringSize,
    filters.karats,
    filters.gemstoneUsage,
    filters.sortBy,
  ]);

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <RingsHeroSection />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto mt-16">
        {/* Filters Panel */}
        <FiltersPanel totalResults={totalResults} />

        {/* Product Grid */}
        <ProductGrid />
      </div>

      {/* Mobile Filters Modal */}
      {/* {filters.isMobileFiltersOpen && (
        <div className="lg:hidden">
          <FiltersPanel />
        </div>
      )} */}
    </main>
  );
};

export default RingsPage;
