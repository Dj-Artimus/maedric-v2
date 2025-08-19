/**
 * --------------------------------------------------------
 * ✏️ Author: DjArtimus
 * 📅 Updated: 18-07-2025
 *
 * 📌 Description:
 *   SpinFillButton — styled hover-fill rotating background button using Tailwind + custom CSS.
 * --------------------------------------------------------
 */

"use client";

import Link from "next/link";

const getColorClass = (color) => {
  switch (color) {
    case "primary":
      return "bg-primary";
    case "accent":
      return "bg-accent";
    case "white":
      return "bg-white";
    case "transparent":
      return "bg-transparent";
    case "black":
      return "bg-black";
    case "secondary":
      return "bg-secondary";
    case "neutral":
      return "bg-neutral";
    default:
      return "bg-primary";
  }
};

const SpinFillButton = ({
  children,
  className,
  backgroundColor = "transparent",
  fillColor = "#d2ae6d",
  href = "#",
  ariaLabel = "Button",
  rel = "noopener noreferrer",
  target = "_self",
}) => {
  return (
    <button
      className={`w-fit h-fit relative overflow-hidden group ${getColorClass(
        backgroundColor
      )} `}
    >
      <span
        className={`inline-block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 opacity-0 ${getColorClass(
          fillColor
        )} rotate-0 transition-all duration-700 ease-in-out group-hover:w-[200%] group-hover:h-[1000%] group-hover:opacity-100 group-hover:rotate-90`}
      />
      <Link
        href={href}
        aria-label={ariaLabel}
        rel={rel}
        target={target}
        className={`block z-10 relative transition-colors duration-300 ${className}`}
      >
        {children}
      </Link>
    </button>
  );
};

export default SpinFillButton;
