"use client";
import NewsletterSection from "@/app/sections/NewsletterSection";
import FeaturedJewelleryHeroSection from "@/components/jewellerySections/FeaturedJewelleryHeroSection";
import ScrollToTopButton from "@/components/ui/ScrollToTopButton";

const JewelleryFeaturedPage: React.FC = () => {
  // const ringBannerImages = [
  //   {
  //     src: "/images/ringBanner1.png",
  //     alt: "Ring Banner 1",
  //     href: "/rings",
  //     title: "Looking For Something Truly One Of A Kind?",
  //     subtitle: "Discover our exclusive custom ring collection",
  //     buttonText: "SHOP NOW",
  //   },
  //   {
  //     src: "/images/ringBanner2.png",
  //     alt: "Ring Banner 2",
  //     href: "/rings",
  //     title: "Discover The Beauty Of Uniqueness",F
  //     subtitle: "Handcrafted perfection in every detail",
  //     buttonText: "SHOP NOW",
  //   },
  // ];

  // Load products based on current filters

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
