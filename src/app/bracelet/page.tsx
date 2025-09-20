// src/app/bracelet/page.tsx
"use client";
import BraceletFiltersPanel from "@/components/filters/BraceletFiltersPanel";
import { ProductGrid } from "@/components/products/ProductGrid";
import ScrollToTopButton from "@/components/ui/ScrollToTopButton";
import { mockApi } from "@/lib/mockApi";
import { useBraceletFiltersStore } from "@/store/useFiltersStore";
import { useEffect, useState } from "react";
import JewelleryHeroSection from "../../components/jewellerySections/JewelleryHeroSection";
import NewsletterSection from "../sections/NewsletterSection";

const BraceletPage: React.FC = () => {
  const [totalResults, setTotalResults] = useState(105);
  const filters = useBraceletFiltersStore();

  const braceletBannerImages = [
    {
      src: "/images/braceletBanner1.png",
      alt: "Bracelet Banner 1",
      href: "/bracelets",
      title: "Looking For Something Truly One Of A Kind?",
      subtitle: "Discover our exclusive custom bracelet collection",
      buttonText: "SHOP NOW",
    },
    {
      src: "/images/braceletBanner2.png",
      alt: "Bracelet Banner 2",
      href: "/bracelets",
      title: "Discover The Beauty Of Uniqueness",
      subtitle: "Handcrafted perfection in every detail",
      buttonText: "SHOP NOW",
    },
  ];

  useEffect(() => {
    const fetchMeta = async () => {
      try {
        const params = mockApi.braceletsFiltersToApiParams(filters);
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
    filters.circumference,
  ]);

  return (
    <div className="h-full w-full">
      <main className="min-h-screen">
        <JewelleryHeroSection
          title="let your bracelet do the talking"
          description="Grace for your wrist — where elegance meets everyday moments."
          breadcrumb={[{ label: "Home", href: "/" }, { label: "Bracelet" }]}
          desktopImage="/images/braceletHero.jpg"
          mobileImage="/images/braceletHero.jpg"
          ctaImage="/images/braceletTopBanner.png"
          ctaImageAlt="Discover our exclusive bracelet collection"
          ctaTitle="Header Title Goes Here"
          ctaDescription={[
            "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
            "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
            "Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of &quot; Dede Finibus Bonorum et Malorum &quot; (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.",
          ]}
        />

        <div className="px-4 mx-auto mt-16">
          <BraceletFiltersPanel totalResults={totalResults} />
          {/* CORRECTED: Remove the explicit generic type <typeof filters> */}
          <ProductGrid
            useFiltersStore={useBraceletFiltersStore}
            bannerImages={braceletBannerImages}
            filtersToApiParams={mockApi.braceletsFiltersToApiParams}
          />
        </div>
      </main>
      <NewsletterSection />
      <ScrollToTopButton />
    </div>
  );
};

export default BraceletPage;
