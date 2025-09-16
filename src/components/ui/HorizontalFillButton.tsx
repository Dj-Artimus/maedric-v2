/**
 * --------------------------------------------------------
 * ✏️ Author: DjArtimus
 * 📅 Created: Based on SlantedFillButton
 *
 * 📌 Description:
 *   HorizontalFillButton is a styled button component with a left-to-right fill animation, supporting custom colors and links.
 * --------------------------------------------------------
 */

"use client";

import Link from "next/link";
import { CSSProperties } from "react";

/**
 * HorizontalFillButton
 *
 * Renders a button with a left-to-right fill animation, supporting custom colors and links.
 *
 * @param {object} props
 * @param {React.ReactNode} props.children - The content to display inside the button.
 * @param {string} [props.className] - Additional class names for styling.
 * @param {string} [props.backgroundColor="transparent"] - The background color.
 * @param {string} [props.fillColor="#051e33"] - The fill color for the animation (defaults to primary color).
 * @param {string} [props.href="#"] - The link URL.
 * @param {string} [props.ariaLabel="Button"] - The aria-label for accessibility.
 * @param {string} [props.rel="noopener noreferrer"] - The rel attribute for the link.
 * @param {string} [props.target="_self"] - The target attribute for the link.
 * @param {() => void} [props.onClick] - The click handler function.
 * @returns {JSX.Element} The horizontal fill button component.
 *
 * @example
 * <HorizontalFillButton href="/about" backgroundColor="#fff" fillColor="#051e33">About</HorizontalFillButton>
 */
interface HorizontalFillButtonProps {
  children: React.ReactNode;
  className?: string;
  backgroundColor?: string;
  fillColor?: string;
  href?: string;
  ariaLabel?: string;
  rel?: string;
  target?: string;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
}

const HorizontalFillButton: React.FC<HorizontalFillButtonProps> = ({
  children,
  className,
  backgroundColor = "transparent",
  fillColor = "#051e33", // Default to primary color
  href = "#",
  ariaLabel = "Button",
  rel = "noopener noreferrer",
  target = "_self",
  onClick,
  disabled = false,
  loading = false,
}) => {
  const styleVars = {
    "--bg-color": backgroundColor,
    "--fill-color": fillColor,
  } as CSSProperties;

  return (
    <div
      className={`horizontal-fill-btn w-fit h-fit relative overflow-hidden${disabled ? " opacity-50 pointer-events-none" : ""}`}
      style={{
        ...styleVars,
      }}
      onClick={disabled ? undefined : onClick ? onClick : undefined}
    >
      <Link
        href={href}
        aria-label={ariaLabel}
        rel={rel}
        target={target}
        className={`block ${className}${disabled ? " cursor-not-allowed" : ""}`}
        tabIndex={disabled ? -1 : 0}
      >
        {loading ? <span className="loader mr-2" /> : null}
        {children}
      </Link>
    </div>
  );
};

export default HorizontalFillButton;
