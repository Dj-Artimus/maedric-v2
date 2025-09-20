"use client";
import NecklaceFiltersPanel from "@/components/filters/NecklaceFiltersPanel";
import { ProductGrid } from "@/components/products/ProductGrid";
import ScrollToTopButton from "@/components/ui/ScrollToTopButton";
import { mockApi } from "@/lib/mockApi";
import { useNecklaceFiltersStore } from "@/store/useFiltersStore";
import { useEffect, useState } from "react";
import JewelleryHeroSection from "../../components/jewellerySections/JewelleryHeroSection";
import NewsletterSection from "../sections/NewsletterSection";

const NecklacePage: React.FC = () => {
  const [totalResults, setTotalResults] = useState(105);
  const filters = useNecklaceFiltersStore();

  const necklaceBannerImages = [
    {
      src: "/images/necklaceBanner1.jpg",
      alt: "Necklace Banner 1",
      href: "/necklaces",
      title: "Looking For Something Truly One Of A Kind?",
      subtitle: "Discover our exclusive custom necklace collection",
      buttonText: "SHOP NOW",
    },
    {
      src: "/images/necklaceBanner2.jpg",
      alt: "Necklace Banner 2",
      href: "/necklaces",
      title: "Discover The Beauty Of Uniqueness",
      subtitle: "Handcrafted perfection in every detail",
      buttonText: "SHOP NOW",
    },
  ];

  useEffect(() => {
    const fetchMeta = async () => {
      try {
        const params = mockApi.necklacesFiltersToApiParams(filters);
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
    filters.necklaceTypes,
    filters.length,
  ]);

  return (
    <div className="h-full w-full">
      <main className="min-h-screen">
        <JewelleryHeroSection
          title="shine with a statement necklace"
          description="Adorn your story, one strand at a time. Necklaces that speak louder than words."
          breadcrumb={[{ label: "Home", href: "/" }, { label: "Necklace" }]}
          desktopImage="/images/necklaceHero.jpg"
          mobileImage="/images/necklaceHero.jpg"
          ctaImage="/images/necklaceTopBanner.png"
          ctaImageAlt="Discover our exclusive necklace collection"
          ctaTitle="Header Title Goes Here"
          ctaDescription={[
            "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
            "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
            "Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of &quot; Dede Finibus Bonorum et Malorum &quot; (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.",
          ]}
        />

        <div className="px-4 mx-auto mt-16">
          <NecklaceFiltersPanel totalResults={totalResults} />
          {/* CORRECTED: Specify the generic type parameter */}
          <ProductGrid<typeof filters>
            useFiltersStore={useNecklaceFiltersStore}
            bannerImages={necklaceBannerImages}
            filtersToApiParams={mockApi.necklacesFiltersToApiParams}
          />
        </div>
      </main>
      <NewsletterSection />
      <ScrollToTopButton />
    </div>
  );
};

export default NecklacePage;
