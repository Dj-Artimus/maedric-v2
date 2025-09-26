// Base Product interface
export interface BaseProduct {
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
}

// Ring Product
export interface RingProduct extends BaseProduct {
  type: "ring";
  ringSize?: string;
}

// Earring Product
export interface EarringProduct extends BaseProduct {
  type: "earring";
  attachmentMethod: "clip-on" | "post-and-back";
  weight?: number; // in grams
}

// Necklace Product
export interface NecklaceProduct extends BaseProduct {
  type: "necklace";
  length?: number; // in cm
  necklaceType: "collar" | "choker" | "princess" | "matinee" | "opera" | "rope";
}

// Bracelet Product
export interface BraceletProduct extends BaseProduct {
  type: "bracelet";
  // ADDED: Attachment method for bracelets
  attachmentMethod: "clip-on" | "post-and-back";
  circumference?: number; // in cm
}

export type Product =
  | RingProduct
  | EarringProduct
  | NecklaceProduct
  | BraceletProduct;

// Image paths for each product type
const ringProductImages = [
  "/images/product-1.png",
  "/images/product-2.png",
  "/images/product-3.png",
  "/images/product-4.png",
];

const earringProductImages = [
  "/images/earringsProduct1.png",
  "/images/earringsProduct2.png",
  "/images/earringsProduct3.png",
  "/images/earringsProduct4.png",
];

const necklaceProductImages = [
  "/images/necklaceProduct1.png",
  "/images/necklaceProduct2.png",
  "/images/necklaceProduct3.png",
  "/images/necklaceProduct4.png",
];

const braceletProductImages = [
  "/images/braceletProduct1.png",
  "/images/braceletProduct2.png",
  "/images/braceletProduct3.png",
  "/images/braceletProduct4.png",
];

// Ring generation
export function generateRingProducts(count: number = 100): RingProduct[] {
  const products: RingProduct[] = [];
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
  const gemstoneTypes: BaseProduct["gemstoneUsage"][] = [
    "metal-only",
    "ruby",
    "sapphire",
    "emerald",
    "diamonds",
  ];
  const ringSizes = [
    // US Sizes (3 to 16, in 0.25 increments)
    "3",
    "3.25",
    "3.5",
    "3.75",
    "4",
    "4.25",
    "4.5",
    "4.75",
    "5",
    "5.25",
    "5.5",
    "5.75",
    "6",
    "6.25",
    "6.5",
    "6.75",
    "7",
    "7.25",
    "7.5",
    "7.75",
    "8",
    "8.25",
    "8.5",
    "8.75",
    "9",
    "9.25",
    "9.5",
    "9.75",
    "10",
    "10.25",
    "10.5",
    "10.75",
    "11",
    "11.25",
    "11.5",
    "11.75",
    "12",
    "12.25",
    "12.5",
    "12.75",
    "13",
    "13.25",
    "13.5",
    "13.75",
    "14",
    "14.25",
    "14.5",
    "14.75",
    "15",
    "15.25",
    "15.5",
    "15.75",
    "16",
    // AU/UK Sizes (A to Z2, including half sizes)
    "A",
    "A 1/2",
    "B",
    "B 1/2",
    "C",
    "C 1/2",
    "D",
    "D 1/2",
    "E",
    "E 1/2",
    "F",
    "F 1/2",
    "G",
    "G 1/2",
    "H",
    "H 1/2",
    "I",
    "J",
    "J 1/2",
    "K",
    "K 1/2",
    "L",
    "L 1/2",
    "M",
    "M 1/2",
    "N",
    "N 1/2",
    "O",
    "O 1/2",
    "P",
    "P 1/2",
    "Q",
    "Q 1/2",
    "R",
    "R 1/2",
    "S",
    "S 1/2",
    "T",
    "T 1/2",
    "U",
    "U 1/2",
    "V",
    "V 1/2",
    "W",
    "W 1/2",
    "X",
    "X 1/2",
    "Y",
    "Z",
    "Z 1/2",
    "Z1",
    "Z2",
    // HK Sizes (5 to 30, in whole numbers)
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
  ];
  const metalTypes: BaseProduct["metalType"][] = [
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
    const isSale = !isOutOfStock && Math.random() < 0.3;
    const salePrice = isSale ? Math.floor(basePrice * 0.7) : basePrice;

    const productTags: string[] = [];
    if (isNew) productTags.push("new");
    if (isSale && !isOutOfStock) productTags.push("sale");
    if (isTopRated) productTags.push("top-rated");

    const product: RingProduct = {
      type: "ring",
      id: `ring-${i + 1}`,
      name: names[Math.floor(Math.random() * names.length)],
      description:
        descriptions[Math.floor(Math.random() * descriptions.length)],
      price: salePrice,
      originalPrice: isSale ? basePrice : undefined,
      images: [ringProductImages[i % ringProductImages.length]],
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

// Earring generation
export function generateEarringProducts(count: number = 100): EarringProduct[] {
  const products: EarringProduct[] = [];
  const names = [
    "Classic Pearl Drops",
    "Diamond Stud Elegance",
    "Chandelier Crystal Cascade",
    "Vintage Ruby Teardrops",
    "Modern Geometric Hoops",
    "Sapphire Cluster Dangles",
    "Gold Filigree Drops",
    "Emerald Art Deco Studs",
    "Platinum Diamond Hoops",
    "Rose Gold Floral Studs",
    "Silver Moon Phase Earrings",
    "Titanium Minimalist Studs",
  ];

  const descriptions = [
    "Elegant pearl drop earrings with delicate gold accents for timeless sophistication.",
    "Brilliant diamond studs in classic four-prong setting, perfect for everyday luxury.",
    "Dramatic chandelier earrings featuring cascading crystals that catch light beautifully.",
    "Vintage-inspired ruby teardrop earrings with intricate metalwork details.",
    "Contemporary geometric hoop design for modern minimalist style.",
    "Luxurious sapphire cluster earrings surrounded by diamond halos.",
    "Intricate gold filigree drops showcasing traditional craftsmanship.",
    "Art Deco inspired emerald studs with geometric diamond patterns.",
    "Classic platinum hoops adorned with pavé diamonds for maximum sparkle.",
    "Romantic rose gold earrings featuring delicate floral motifs.",
  ];

  const attachmentMethods: EarringProduct["attachmentMethod"][] = [
    "clip-on",
    "post-and-back",
  ];
  const metalTypes: BaseProduct["metalType"][] = [
    "gold",
    "platinum",
    "titanium",
    "silver",
    "stainless-steel",
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
  const gemstoneTypes: BaseProduct["gemstoneUsage"][] = [
    "metal-only",
    "ruby",
    "sapphire",
    "emerald",
    "diamonds",
  ];

  for (let i = 0; i < count; i++) {
    const basePrice = Math.floor(Math.random() * 8000) + 300;
    const metalType = metalTypes[Math.floor(Math.random() * metalTypes.length)];
    const gemstoneUsage =
      gemstoneTypes[Math.floor(Math.random() * gemstoneTypes.length)];
    const weight = Math.round((Math.random() * 11.5 + 0.5) * 10) / 10; // 0.5g to 12g

    const isOutOfStock = Math.random() < 0.05;
    const isNew = Math.random() < 0.2;
    const isTopRated = Math.random() < 0.25;
    const stockCount =
      Math.random() < 0.1 ? Math.floor(Math.random() * 5) + 1 : 999;
    const isSale = !isOutOfStock && Math.random() < 0.3;
    const salePrice = isSale ? Math.floor(basePrice * 0.7) : basePrice;

    const productTags: string[] = [];
    if (isNew) productTags.push("new");
    if (isSale && !isOutOfStock) productTags.push("sale");
    if (isTopRated) productTags.push("top-rated");

    const product: EarringProduct = {
      type: "earring",
      id: `earring-${i + 1}`,
      name: names[Math.floor(Math.random() * names.length)],
      description:
        descriptions[Math.floor(Math.random() * descriptions.length)],
      price: salePrice,
      originalPrice: isSale ? basePrice : undefined,
      images: [earringProductImages[i % earringProductImages.length]],
      metalType,
      karat:
        metalType === "gold" || metalType === "silver"
          ? karatTypes[Math.floor(Math.random() * karatTypes.length)]
          : undefined,
      gemstoneUsage,
      attachmentMethod:
        attachmentMethods[Math.floor(Math.random() * attachmentMethods.length)],
      weight,
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

// Necklace generation
export function generateNecklaceProducts(
  count: number = 100
): NecklaceProduct[] {
  const products: NecklaceProduct[] = [];
  const names = [
    "Classic Pearl Strand",
    "Diamond Tennis Necklace",
    "Vintage Locket Chain",
    "Ruby Pendant Elegance",
    "Sapphire Statement Collar",
    "Gold Rope Chain",
    "Emerald Drop Necklace",
    "Platinum Bar Pendant",
    "Rose Gold Infinity",
    "Silver Charm Necklace",
    "Titanium Modern Chain",
    "Diamond Riviera Necklace",
  ];

  const descriptions = [
    "Timeless pearl strand necklace with lustrous cultured pearls and secure clasp.",
    "Brilliant diamond tennis necklace featuring continuous sparkle in elegant setting.",
    "Vintage-inspired locket on delicate chain, perfect for cherished memories.",
    "Stunning ruby pendant surrounded by diamond halo on elegant chain.",
    "Bold sapphire statement collar for dramatic evening elegance.",
    "Classic gold rope chain with intricate weave pattern and secure clasp.",
    "Elegant emerald drop necklace with cascading design and diamond accents.",
    "Modern platinum bar pendant on sleek chain for minimalist sophistication.",
    "Romantic rose gold infinity symbol representing eternal love.",
    "Playful silver charm necklace with customizable pendant options.",
  ];

  const necklaceTypes: NecklaceProduct["necklaceType"][] = [
    "collar",
    "choker",
    "princess",
    "matinee",
    "opera",
    "rope",
  ];
  const metalTypes: BaseProduct["metalType"][] = [
    "gold",
    "platinum",
    "titanium",
    "silver",
    "stainless-steel",
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
  const gemstoneTypes: BaseProduct["gemstoneUsage"][] = [
    "metal-only",
    "ruby",
    "sapphire",
    "emerald",
    "diamonds",
  ];

  for (let i = 0; i < count; i++) {
    const basePrice = Math.floor(Math.random() * 12000) + 500;
    const metalType = metalTypes[Math.floor(Math.random() * metalTypes.length)];
    const gemstoneUsage =
      gemstoneTypes[Math.floor(Math.random() * gemstoneTypes.length)];
    const length = Math.floor(Math.random() * 18) + 28; // 28-45 cm range

    const isOutOfStock = Math.random() < 0.05;
    const isNew = Math.random() < 0.2;
    const isTopRated = Math.random() < 0.25;
    const stockCount =
      Math.random() < 0.1 ? Math.floor(Math.random() * 5) + 1 : 999;
    const isSale = !isOutOfStock && Math.random() < 0.3;
    const salePrice = isSale ? Math.floor(basePrice * 0.7) : basePrice;

    const productTags: string[] = [];
    if (isNew) productTags.push("new");
    if (isSale && !isOutOfStock) productTags.push("sale");
    if (isTopRated) productTags.push("top-rated");

    const product: NecklaceProduct = {
      type: "necklace",
      id: `necklace-${i + 1}`,
      name: names[Math.floor(Math.random() * names.length)],
      description:
        descriptions[Math.floor(Math.random() * descriptions.length)],
      price: salePrice,
      originalPrice: isSale ? basePrice : undefined,
      images: [necklaceProductImages[i % necklaceProductImages.length]],
      metalType,
      karat:
        metalType === "gold" || metalType === "silver"
          ? karatTypes[Math.floor(Math.random() * karatTypes.length)]
          : undefined,
      gemstoneUsage,
      necklaceType:
        necklaceTypes[Math.floor(Math.random() * necklaceTypes.length)],
      length,
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

// Bracelet generation
export function generateBraceletProducts(
  count: number = 100
): BraceletProduct[] {
  const products: BraceletProduct[] = [];
  const names = [
    "Diamond Tennis Bracelet",
    "Gold Cuban Link",
    "Silver Charm Bracelet",
    "Ruby Bangle Elegance",
    "Sapphire Eternity Band",
    "Platinum Cuff Bracelet",
    "Rose Gold Mesh Chain",
    "Titanium Sport Band",
    "Emerald Station Bracelet",
    "Diamond Halo Bangle",
    "Vintage Filigree Cuff",
    "Modern Geometric Bracelet",
  ];

  const descriptions = [
    "Classic tennis bracelet featuring brilliant diamonds in secure prong settings.",
    "Bold Cuban link bracelet in solid gold with high-polish finish.",
    "Customizable charm bracelet with secure clasp and multiple charm options.",
    "Elegant ruby bangle with channel-set stones for sophisticated style.",
    "Continuous sapphire eternity band symbolizing endless love.",
    "Statement platinum cuff with brushed finish and diamond accents.",
    "Delicate rose gold mesh bracelet with adjustable sliding clasp.",
    "Durable titanium bracelet perfect for active lifestyle.",
    "Sophisticated emerald station bracelet with diamond spacers.",
    "Luxurious diamond halo bangle with intricate metalwork.",
  ];

  // UPDATED: Added bracelet attachment types
  const attachmentMethods: BraceletProduct["attachmentMethod"][] = [
    "clip-on",
    "post-and-back",
  ];
  const metalTypes: BaseProduct["metalType"][] = [
    "gold",
    "platinum",
    "titanium",
    "silver",
    "stainless-steel",
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
  const gemstoneTypes: BaseProduct["gemstoneUsage"][] = [
    "metal-only",
    "ruby",
    "sapphire",
    "emerald",
    "diamonds",
  ];

  for (let i = 0; i < count; i++) {
    const basePrice = Math.floor(Math.random() * 10000) + 400;
    const metalType = metalTypes[Math.floor(Math.random() * metalTypes.length)];
    const gemstoneUsage =
      gemstoneTypes[Math.floor(Math.random() * gemstoneTypes.length)];
    const circumference = Math.floor(Math.random() * 18) + 8; // 8-25 cm range

    const isOutOfStock = Math.random() < 0.05;
    const isNew = Math.random() < 0.2;
    const isTopRated = Math.random() < 0.25;
    const stockCount =
      Math.random() < 0.1 ? Math.floor(Math.random() * 5) + 1 : 999;
    const isSale = !isOutOfStock && Math.random() < 0.3;
    const salePrice = isSale ? Math.floor(basePrice * 0.7) : basePrice;

    const productTags: string[] = [];
    if (isNew) productTags.push("new");
    if (isSale && !isOutOfStock) productTags.push("sale");
    if (isTopRated) productTags.push("top-rated");

    const product: BraceletProduct = {
      type: "bracelet",
      id: `bracelet-${i + 1}`,
      name: names[Math.floor(Math.random() * names.length)],
      description:
        descriptions[Math.floor(Math.random() * descriptions.length)],
      price: salePrice,
      originalPrice: isSale ? basePrice : undefined,
      images: [braceletProductImages[i % braceletProductImages.length]],
      metalType,
      karat:
        metalType === "gold" || metalType === "silver"
          ? karatTypes[Math.floor(Math.random() * karatTypes.length)]
          : undefined,
      gemstoneUsage,
      // ADDED: Randomly assign an attachment method
      attachmentMethod:
        attachmentMethods[Math.floor(Math.random() * attachmentMethods.length)],
      circumference,
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

// Export old function for backward compatibility
export function generateProducts(count: number = 100): RingProduct[] {
  return generateRingProducts(count);
}
