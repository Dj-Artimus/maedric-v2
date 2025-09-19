import { Product } from "@/lib/products";
import Image from "next/image";
import React, { useState } from "react";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isFavorited, setIsFavorited] = useState(product.isFavorited || false);

  return (
    <div className="group cursor-pointer">
      {/* Product Image Container */}
      <div className="relative aspect-square mb-3 bg-gray-50 overflow-hidden">
        <Image
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
          fill
          priority
        />

        {/* Favorite Icon */}
        <button
          onClick={() => setIsFavorited(!isFavorited)}
          className="absolute top-2 right-2 p-2.5 rounded-full text-secondary hover:text-primary hover:bg-white/40 shadow-inner shadow-white transition-colors"
        >
          {isFavorited ? (
            <IoMdHeart className={`w-6 h-6 transition-colors text-accent`} />
          ) : (
            <IoMdHeartEmpty className={`w-6 h-6 transition-colors`} />
          )}
        </button>
      </div>

      {/* Product Info */}
      <div className="">
        <h3 className="font-figtree text-secondary font-medium line-clamp-1">
          {product.name}
        </h3>
        <p className="text-sm text-secondary font-figtree line-clamp-2">
          {product.description}
        </p>

        {/* Price and Stock Info */}
        <div className="flex items-center justify-between mt-1.5">
          <div className="flex items-center gap-2">
            <span className="font-figtree font-semibold text-primary">
              SGD {product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span className="font-figtree text-sm text-secondary line-through">
                SGD {product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>

          {/* Stock Info */}
          {(product.stockCount || product.isOutOfStock) && (
            <span className="text-xs font-figtree text-red-700 font-medium">
              {product.isOutOfStock
                ? "Out of Stock"
                : `Only ${product.stockCount} left`}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
