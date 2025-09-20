"use client";
import { useEffect, useState } from "react";

import EarringsFiltersPanel from "@/components/filters/EarringsFiltersPanel";
import { ProductGrid } from "@/components/products/ProductGrid";
import ScrollToTopButton from "@/components/ui/ScrollToTopButton";
import { mockApi } from "@/lib/mockApi";
import { useEarringFiltersStore } from "@/store/useFiltersStore";
import JewelleryHeroSection from "../../components/jewellerySections/JewelleryHeroSection";
import NewsletterSection from "../sections/NewsletterSection";

const EarringsPage: React.FC = () => {
  const [totalResults, setTotalResults] = useState(105);
  const filters = useEarringFiltersStore();

  const earringsBannerImages = [
    {
      src: "/images/earringsBanner1.png",
      alt: "Earrings Banner 1",
      href: "/earrings",
      title: "Looking For Something Truly One Of A Kind?",
      subtitle: "Discover our exclusive custom earrings collection",
      buttonText: "SHOP NOW",
    },
    {
      src: "/images/earringsBanner2.png",
      alt: "Earrings Banner 2",
      href: "/earrings",
      title: "Discover The Beauty Of Uniqueness",
      subtitle: "Handcrafted perfection in every detail",
      buttonText: "SHOP NOW",
    },
  ];

  useEffect(() => {
    const fetchMeta = async () => {
      try {
        const params = mockApi.earringsFiltersToApiParams(filters);
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
    filters.karats,
    filters.gemstoneUsage,
    filters.sortBy,
    filters.attachmentMethod,
    filters.weight,
  ]);

  return (
    <div className="h-full w-full">
      <main className="min-h-screen">
        <JewelleryHeroSection
          title="Elevate your look with stunning earrings"
          description="Timeless studs to bold statement pieces. Perfect for any occasion, they add just the right touch of sparkle."
          breadcrumb={[{ label: "Home", href: "/" }, { label: "Earrings" }]}
          desktopImage="/images/earringsHero.jpg"
          mobileImage="/images/earringsHero.jpg"
          mobileImagePosition="object-right"
          ctaImage="/images/earringsTopBanner.png"
          ctaImageAlt="Discover our exclusive earrings collection"
          ctaTitle="Header Title Goes Here"
          ctaDescription={[
            "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
            "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
            "Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of &quot; Dede Finibus Bonorum et Malorum &quot; (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.",
          ]}
        />
        <div className="px-4 mx-auto mt-16">
          <EarringsFiltersPanel totalResults={totalResults} />
          {/* CORRECTED: Specify the generic type parameter */}
          <ProductGrid<typeof filters>
            useFiltersStore={useEarringFiltersStore}
            bannerImages={earringsBannerImages}
            filtersToApiParams={mockApi.earringsFiltersToApiParams}
          />
        </div>
      </main>
      <NewsletterSection />
      <ScrollToTopButton />
    </div>
  );
};

export default EarringsPage;
