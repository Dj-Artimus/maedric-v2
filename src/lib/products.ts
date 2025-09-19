export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  images: string[];
  metalType: "gold" | "platinum" | "titanium" | "silver" | "stainless-steel";
  karat?: string;
  gemstoneUsage: "metal-only" | "ruby" | "sapphire" | "emerald" | "diamonds";
  tags: string[];
  isNew: boolean;
  isSale: boolean;
  isTopRated: boolean;
  stockCount?: number;
  isOutOfStock?: boolean;
  isFavorited?: boolean;
  ringSize?: string;
}

const productImages = [
  "/images/product-1.png",
  "/images/product-2.png",
  "/images/product-3.png",
  "/images/product-4.png",
];

export function generateProducts(count: number = 100): Product[] {
  const products: Product[] = [];
  const names = [
    "Eternal Blossom Diamond Ring",
    "Royal Sapphire Statement Ring",
    "Classic Gold Band",
    "Emerald Vintage Halo",
    "Diamond Solitaire",
    "Twisted Diamond Band",
    "Vintage Rose Gold Ring",
    "Modern Platinum Set",
    "Art Deco Emerald Ring",
    "Infinity Diamond Band",
    "Princess Cut Engagement Ring",
    "Vintage Pearl Ring",
  ];

  const descriptions = [
    "A stunning floral-inspired ring featuring delicate diamond blossoms that catch light beautifully.",
    "Majestic sapphire centerpiece surrounded by brilliant diamonds in premium platinum setting.",
    "Timeless 14k gold band with polished finish, perfect for everyday elegance.",
    "Vintage-inspired emerald ring with intricate halo design and milgrain detailing.",
    "Classic solitaire setting showcasing a brilliant-cut diamond in elegant simplicity.",
    "Contemporary twisted band design with pavé diamonds for modern sophistication.",
    "Romantic rose gold setting with vintage-inspired details and diamond accents.",
    "Sleek platinum design perfect for contemporary style and lasting beauty.",
    "Art Deco inspired emerald ring with geometric patterns and diamond details.",
    "Symbolic infinity design with continuous diamond band representing eternal love.",
  ];

  const karatTypes = [
    "14k",
    "18k",
    "23k",
    "14k-rose",
    "18k-rose",
    "14k-white",
    "18k-white",
  ];
  const gemstoneTypes: Product["gemstoneUsage"][] = [
    "metal-only",
    "ruby",
    "sapphire",
    "emerald",
    "diamonds",
  ];
  const ringSizes = [
    "3.25",
    "4",
    "4.5",
    "5",
    "5.5",
    "6",
    "6.5",
    "7",
    "7.5",
    "8",
    "8.5",
    "9",
    "9.5",
    "10",
  ];

  const metalTypes: Product["metalType"][] = [
    "gold",
    "platinum",
    "titanium",
    "silver",
    "stainless-steel",
  ];

  for (let i = 0; i < count; i++) {
    const basePrice = Math.floor(Math.random() * 10000) + 500;
    const metalType = metalTypes[Math.floor(Math.random() * metalTypes.length)];
    const gemstoneUsage =
      gemstoneTypes[Math.floor(Math.random() * gemstoneTypes.length)];

    const isOutOfStock = Math.random() < 0.05;
    const isNew = Math.random() < 0.2;
    const isTopRated = Math.random() < 0.25;
    const stockCount =
      Math.random() < 0.1 ? Math.floor(Math.random() * 5) + 1 : 999;

    // Don't allow sale items to be out of stock
    const isSale = !isOutOfStock && Math.random() < 0.3;
    const salePrice = isSale ? Math.floor(basePrice * 0.7) : basePrice;

    const productTags: string[] = [];
    if (isNew) productTags.push("new");
    if (isSale && !isOutOfStock) productTags.push("sale"); // Only add sale tag if not out of stock
    if (isTopRated) productTags.push("top-rated");

    const product: Product = {
      id: `product-${i + 1}`,
      name: names[Math.floor(Math.random() * names.length)],
      description:
        descriptions[Math.floor(Math.random() * descriptions.length)],
      price: salePrice,
      originalPrice: isSale ? basePrice : undefined,
      images: [productImages[i % productImages.length]],
      metalType,
      karat:
        metalType === "gold" || metalType === "silver"
          ? karatTypes[Math.floor(Math.random() * karatTypes.length)]
          : undefined,
      gemstoneUsage,
      ringSize: ringSizes[Math.floor(Math.random() * ringSizes.length)],
      tags: productTags,
      isNew,
      isSale,
      isTopRated,
      stockCount,
      isOutOfStock,
      isFavorited: false,
    };

    products.push(product);
  }

  return products;
}
