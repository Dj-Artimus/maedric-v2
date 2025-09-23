"use client";
import RingsFiltersPanel from "@/components/filters/RingsFiltersPanel";
import JewelleryHeroSection from "@/components/jewellerySections/JewelleryHeroSection";
import { ProductGrid } from "@/components/products/ProductGrid";
import ScrollToTopButton from "@/components/ui/ScrollToTopButton";
import { mockApi } from "@/lib/mockApi";
import { useRingFiltersStore } from "@/store/useFiltersStore";
import { useEffect, useState } from "react";
import NewsletterSection from "../sections/NewsletterSection";

const RingsPage: React.FC = () => {
  const [totalResults, setTotalResults] = useState(105);
  const filters = useRingFiltersStore();

  const ringBannerImages = [
    {
      src: "/images/ringBanner1.png",
      alt: "Ring Banner 1",
      href: "/rings",
      title: "Looking For Something Truly One Of A Kind?",
      subtitle: "Discover our exclusive custom ring collection",
      buttonText: "SHOP NOW",
    },
    {
      src: "/images/ringBanner2.png",
      alt: "Ring Banner 2",
      href: "/rings",
      title: "Discover The Beauty Of Uniqueness",
      subtitle: "Handcrafted perfection in every detail",
      buttonText: "SHOP NOW",
    },
  ];

  // Load products based on current filters
  useEffect(() => {
    const fetchMeta = async () => {
      try {
        const params = mockApi.ringsFiltersToApiParams(filters);
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
    <div className="h-full w-full">
      <main className="min-h-screen">
        <JewelleryHeroSection
          title="One ring to say it all"
          description="Rings hold a variety of meanings depending on ring selection. Whether to engagement, marriage or promise between a couple to a show of prestige for a business partner."
          breadcrumb={[{ label: "Home", href: "/" }, { label: "Rings" }]}
          desktopImage="/images/hero-desktop.jpg"
          mobileImage="/images/hero-mobile.png"
          ctaImage="/images/jewelleryCTABanner.png"
          ctaImageAlt="Discover our exclusive ring collection"
          ctaTitle="Header Title Goes Here"
          ctaDescription={[
            "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
            "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
            "Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of &quot; Dede Finibus Bonorum et Malorum &quot; (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.",
          ]}
        />

        <div className="px-4 xl:px-28 mx-auto mt-16">
          <RingsFiltersPanel totalResults={totalResults} />
          <ProductGrid
            useFiltersStore={useRingFiltersStore}
            bannerImages={ringBannerImages}
            filtersToApiParams={mockApi.ringsFiltersToApiParams}
          />
        </div>
      </main>
      <NewsletterSection />
      <ScrollToTopButton />
    </div>
  );
};

export default RingsPage;
