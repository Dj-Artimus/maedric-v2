"use client";
import NewsletterSection from "@/app/sections/NewsletterSection";
import FeaturedPageCriteriaSection from "@/components/jewellerySections/FeaturedPageCriteriaSection";
import FeaturedPageHeroSection from "@/components/jewellerySections/FeaturedPageHeroSection";
import FeaturedPageProductsSection from "@/components/jewellerySections/FeaturedPageProductsSection";
import ScrollToTopButton from "@/components/ui/ScrollToTopButton";
import { useSmartWindowSnap } from "@/hooks/useSmartWindowSnap";

const JewelleryFeaturedPage: React.FC = () => {
  useSmartWindowSnap({ debounceMs: 40, threshold: 0.1, settleMs: 700 });

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
      name: "Sparkling Bloom Ring",
      description:
        "An elegant gold ring featuring two delicate, star-shaped clusters of pavé diamonds. The graceful, curved band enhances the floral design, creating a light and enchanting piece.",
      image: "/images/featuredJewelleryProduct2.png",
      price: "$15,200",
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
      name: "Diamond Blossom Ring",
      description:
        "This graceful gold ring showcases a captivating cluster of diamonds, resembling a blooming flower. The band is a dynamic, split design with one side elegantly wrapped in pavé diamonds, adding a touch of modern sophistication.",
      image: "/images/featuredJewelleryProduct4.png",
      price: "$19,700",
    },
    {
      id: 5,
      name: "Sterling Dragon Ring",
      description:
        "A bold and intricate sterling silver ring, expertly sculpted into the form of a majestic dragon. The finely detailed scales and powerful head make this a statement piece for those who appreciate mythical artistry and strength.",
      image: "/images/featuredJewelleryProduct5.png",
      price: "$9,800",
    },
    {
      id: 6,
      name: "Twisted Pavé Ring",
      description:
        "This stunning gold ring features a fluid, intertwined design with one ribbon of gold and another adorned with a continuous line of brilliant pavé diamonds. It’s a modern and elegant piece that symbolizes unity and continuous flow.",
      image: "/images/featuredJewelleryProduct6.png",
      price: "$14,500",
    },
    {
      id: 7,
      name: "Cushion Cut Diamond Ring",
      description:
        "A graceful white gold ring centered on a brilliant cushion-cut diamond. The split shank is adorned with pavé diamonds, creating a fluid and modern design that enhances the stone's radiance.",
      image: "/images/featuredJewelleryProduct7.png",
      price: "$12,300",
    },
    {
      id: 8,
      name: "Classic Intersecting Ring",
      description:
        "A timeless gold ring with a simple yet striking intersecting design. One band is polished gold, while the other is set with a channel of small, shimmering diamonds, creating a perfect balance of classic style and subtle sparkle.",
      image: "/images/featuredJewelleryProduct8.png",
      price: "$11,200",
    },
  ];

  const criteriasData = [
    {
      number: 1,
      title: "Rarity & Exclusivity",
      description:
        "The jewellery is made of high quality metal and/or gemstones.",
    },
    {
      number: 2,
      title: "Thoughtful design and quality make",
      description:
        "The jewellery piece has a special design and a great finishing.",
    },
    {
      number: 3,
      title: "Hidden Beauty",
      description:
        "Our collections feature exclusive designs that blend classic elegance with contemporary trends, making each piece truly one-of-a-kind.",
    },
  ];

  const criteriaImagesData = [
    "/images/featuredJewelleryCriteriaImg.png",
    "/images/featuredJewelleryCriteriaImg1.png",
    "/images/featuredJewelleryCriteriaImg2.png",
    "/images/featuredJewelleryCriteriaImg3.png",
  ];

  const criteriaBackgroundImagesData = [
    "/images/featuredJewelleryStaticBgImg.jpg",
    "/images/featuredJewelleryStaticBgImg1.png",
    "/images/featuredJewelleryStaticBgImg2.png",
    "/images/featuredJewelleryStaticBgImg3.png",
  ];

  return (
    <div className="h-full w-full relative">
      <main
        className="min-h-screen"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        <div data-snap>
          <FeaturedPageHeroSection
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
        </div>
        <FeaturedPageCriteriaSection
          criteriaTitle="Featured Jewellery pieces have one or more of these criteria"
          criterias={criteriasData}
          criteriaImages={criteriaImagesData}
          backgroundImages={criteriaBackgroundImagesData}
        />

        <div data-snap>
          <FeaturedPageProductsSection products={featuredRings} />
        </div>
      </main>
      <div data-snap>
        <NewsletterSection />
      </div>
      <ScrollToTopButton />
    </div>
  );
};

export default JewelleryFeaturedPage;
