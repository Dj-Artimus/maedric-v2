/**
 * --------------------------------------------------------
 * ✏️ Author: DjArtimus
 * 📅 Created: 11-07-2025 - 14-07-2025
 *
 * 📌 Description:
 *   SlantedFillButton is a styled button component with a slanted fill animation, supporting custom colors and links.
 * --------------------------------------------------------
 */

"use client";

import Link from "next/link";
import { CSSProperties } from "react";

/**
 * SlantedFillButton
 *
 * Renders a button with a slanted fill animation, supporting custom colors and links.
 *
 * @param {object} props
 * @param {React.ReactNode} props.children - The content to display inside the button.
 * @param {string} [props.className] - Additional class names for styling.
 * @param {string} [props.backgroundColor="transparent"] - The background color.
 * @param {string} [props.fillColor="#d2ae6d"] - The fill color for the animation.
 * @param {string} [props.href="#"] - The link URL.
 * @param {string} [props.ariaLabel="Button"] - The aria-label for accessibility.
 * @param {string} [props.rel="noopener noreferrer"] - The rel attribute for the link.
 * @param {string} [props.target="_self"] - The target attribute for the link.
 * @param {() => void} [props.onClick] - The click handler function.
 * @returns {JSX.Element} The slanted fill button component.
 *
 * @example
 * <SlantedFillButton href="/about" backgroundColor="#fff" fillColor="#000">About</SlantedFillButton>
 */
interface SlantedFillButtonProps {
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

const SlantedFillButton: React.FC<SlantedFillButtonProps> = ({
  children,
  className,
  backgroundColor = "transparent",
  fillColor = "#d2ae6d",
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
      className={`slanted-fill-btn w-fit h-fit relative overflow-hidden${disabled ? " opacity-50 pointer-events-none" : ""}`}
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

export default SlantedFillButton;
