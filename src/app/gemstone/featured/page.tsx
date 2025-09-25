"use client";
import NewsletterSection from "@/app/sections/NewsletterSection";
import FeaturedPageCriteriaSection from "@/components/jewellerySections/FeaturedPageCriteriaSection";
import FeaturedPageHeroSection from "@/components/jewellerySections/FeaturedPageHeroSection";
import FeaturedPageProductsSection from "@/components/jewellerySections/FeaturedPageProductsSection";
import ScrollToTopButton from "@/components/ui/ScrollToTopButton";
import { useSmartWindowSnap } from "@/hooks/useSmartWindowSnap";

const GemestoneFeaturedPage: React.FC = () => {
  useSmartWindowSnap({ debounceMs: 120, threshold: 0.1, settleMs: 700 });

  const featuredGemstones = [
    {
      id: 1,
      name: "Oval Red Garnet",
      description:
        "A classic oval-cut garnet with a rich, deep red and purplish color. The stone’s surface shows natural wear and distinct inclusions, adding to its unique, earthy character and authenticity.",

      image: "/images/featuredGemstoneProduct1.png",
      price: "$8,500",
    },
    {
      id: 2,
      name: "Oval Magenta Garnet",
      description:
        "An oval-cut garnet with a vibrant, translucent magenta hue. The stone has a slightly irregular shape and visible internal markings, which are characteristic of natural gemstones and give it a captivating, raw beauty.",

      image: "/images/featuredGemstoneProduct2.png",
      price: "$45,200",
    },
    {
      id: 3,
      name: "Oval Pink Sapphire",
      description:
        "An enchanting oval-cut sapphire displaying a clear and lively pinkish-purple color. Its smooth facets and brilliant shine make it an elegant and eye-catching gem, radiating a sophisticated brilliance.",
      image: "/images/featuredGemstoneProduct3.png",
      price: "$4,900",
    },
    {
      id: 4,
      name: "Natural Moonstone",
      description:
        "A rare and beautiful cushion-cut moonstone displaying ethereal adularescence and exceptional clarity. This natural feldspar exhibits the characteristic blue sheen and milky transparency that makes moonstone so highly prized by collectors.",
      image: "/images/featuredGemstoneProduct4.png",
      price: "$18,700",
    },
    {
      id: 5,
      name: "Cushion-Cut Blue Sapphire",
      description:
        "A magnificent cushion-cut blue sapphire with royal blue color and exceptional clarity. This premium corundum displays the coveted cornflower blue hue with remarkable transparency and brilliance, representing the finest quality sapphires available.",
      image: "/images/featuredGemstoneProduct5.png",
      price: "$15,800",
    },
    {
      id: 6,
      name: "Fiery Red Ruby",
      description:
        "An expertly cut, octagonal-shaped ruby with a brilliant red luster. The sharp, clean facets maximize its light reflection, giving it a powerful and fiery presence and a flawless, polished appearance.",
      image: "/images/featuredGemstoneProduct6.png",
      price: "$3,300",
    },
    {
      id: 7,
      name: "Round Brilliant Diamond",
      description:
        "A perfectly round brilliant-cut diamond, renowned for its superior sparkle and light return. The intricate faceting ensures a stunning, eye-catching display of brilliance and scintillation, embodying timeless elegance.",
      image: "/images/featuredGemstoneProduct7.png",
      price: "$2,800",
    },
    {
      id: 8,
      name: "Vibrant Green Peridot",
      description:
        "A polished, brilliant-cut peridot stone with a clear, vibrant green color. Its elegant faceting and lustrous appearance create a fresh and captivating gemstone that seems to glow from within.",
      image: "/images/featuredGemstoneProduct8.png",
      price: "$28,500",
    },
  ];

  const criteriasData = [
    {
      number: 1,
      title: "Rarity & Exclusivity",
      description:
        "The gemstone is among the best of its class in multiple facets.",
    },
    {
      number: 2,
      title: "Spectacular colour & Cut",
      description:
        "The gemstone has a strong colour for it's category and an exceptional cut.",
    },
    {
      number: 3,
      title: "Hidden Beauty",
      description:
        "The gemstone has quirks such as inclusions or colour change that few outside of connoisseurs know and appreciate.",
    },
  ];

  const criteriaImagesData = [
    "/images/featuredGemstoneCriteriaImg.jpg",
    "/images/featuredGemstoneCriteriaImg1.png",
    "/images/featuredGemstoneCriteriaImg2.png",
    "/images/featuredGemstoneCriteriaImg3.jpg",
  ];

  const criteriaBackgroundImagesData = [
    "/images/featuredGemstoneStaticBgImg.jpg",
    "/images/featuredGemstoneStaticBgImg1.png",
    "/images/featuredGemstoneStaticBgImg2.png",
    "/images/featuredGemstoneStaticBgImg3.png",
  ];

  return (
    <div className="h-full w-full relative">
      <main
        className="min-h-screen"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        <div data-snap>
          <FeaturedPageHeroSection
            title="Nature’s Art, Forever Yours"
            description="Pressure, time, and a helping of luck unite underground to make these beauties."
            breadcrumb={[
              { label: "Home", href: "/" },
              { label: "Gemestone", href: "/gemestone" },
              { label: "Featured" },
            ]}
            desktopImage="/images/featuredGemstoneHeroDesktop.jpg"
            mobileImage="/images/featuredGemstoneHeroDesktop.jpg"
          />
        </div>
        <FeaturedPageCriteriaSection
          criteriaTitle="Featured Gemstones have one or more of these criteria"
          criterias={criteriasData}
          criteriaImages={criteriaImagesData}
          backgroundImages={criteriaBackgroundImagesData}
        />

        <div data-snap>
          <FeaturedPageProductsSection products={featuredGemstones} />
        </div>
      </main>
      <div data-snap>
        <NewsletterSection />
      </div>
      <ScrollToTopButton />
    </div>
  );
};

export default GemestoneFeaturedPage;
