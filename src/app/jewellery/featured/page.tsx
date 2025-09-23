"use client";
import NewsletterSection from "@/app/sections/NewsletterSection";
import FeaturedJewelleryHeroSection from "@/components/jewellerySections/FeaturedJewelleryHeroSection";
import FeaturedJewelleryProductsSection from "@/components/jewellerySections/FeaturedJewelleryProductsSection";
import FeaturedJewellerySectionWithImageSwap from "@/components/jewellerySections/FeaturedJewellerySectionWithImageSwap";
import ScrollToTopButton from "@/components/ui/ScrollToTopButton";

const JewelleryFeaturedPage: React.FC = () => {
  const featuredRings = [
    {
      id: 1,
      name: "Aura of Emerald Ring",
      description:
        "This Ruby from Kashmir originated from a mountainside in conflict among 3 nations: India, Pakistan, and China. The miner scaled the mountainside with a pick and pouch, painstakingly chipping away at the rock for this precious and rare gemstone.",
      image: "/images/featuredJewelleryProduct1.png",
      price: "$18,500",
    },
    {
      id: 2,
      name: "Cushion Cut Diamond Ring",
      description:
        "A graceful white gold ring centered on a brilliant cushion-cut diamond. The split shank is adorned with pavé diamonds, creating a fluid and modern design that enhances the stone's radiance.",
      image: "/images/featuredJewelleryProduct2.png",
      price: "$12,300",
    },
    {
      id: 3,
      name: "Three-Stone Swirl Ring",
      description:
        "This unique white gold ring features a striking three-stone design, with a central round diamond flanked by two smaller round diamonds. The swirling, pavé-set band adds a dynamic and artistic touch to this elegant piece.",
      image: "/images/featuredJewelleryProduct3.png",
      price: "$21,900",
    },
    {
      id: 4,
      name: "Sterling Dragon Ring",
      description:
        "A bold and intricate sterling silver ring, expertly sculpted into the form of a majestic dragon. The finely detailed scales and powerful head make this a statement piece for those who appreciate mythical artistry and strength.",
      image: "/images/featuredJewelleryProduct4.png",
      price: "$9,800",
    },
  ];

  return (
    <div className="h-full w-full relative">
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
        <FeaturedJewellerySectionWithImageSwap />

        <FeaturedJewelleryProductsSection products={featuredRings} />
      </main>
      <NewsletterSection />
      <ScrollToTopButton />
    </div>
  );
};

export default JewelleryFeaturedPage;
