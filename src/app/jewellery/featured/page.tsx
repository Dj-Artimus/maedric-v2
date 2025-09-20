"use client";
import NewsletterSection from "@/app/sections/NewsletterSection";
import FeaturedJewelleryHeroSection from "@/components/jewellerySections/FeaturedJewelleryHeroSection";
import ScrollToTopButton from "@/components/ui/ScrollToTopButton";
import { mockApi } from "@/lib/mockApi";
import { useRingFiltersStore } from "@/store/useFiltersStore";
import { useEffect, useState } from "react";

const JewelleryFeaturedPage: React.FC = () => {
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
        <FeaturedJewelleryHeroSection
          title="Timeless Pieces for Every Moment"
          description="Celebrate life’s precious moments with exquisite jewellery."
          breadcrumb={[
            { label: "Home", href: "/" },
            { label: "Jewellery", href: "/jewellery" },
            { label: "Featured" },
          ]}
          desktopImage="/images/featuredJewelleryHeroDesktop.png"
          mobileImage="/images/featuredJewelleryHeroDesktop.png"
        />
      </main>
      <NewsletterSection />
      <ScrollToTopButton />
    </div>
  );
};

export default JewelleryFeaturedPage;
