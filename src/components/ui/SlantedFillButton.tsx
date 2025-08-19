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
 * @returns {JSX.Element} The slanted fill button component.
 *
 * @example
 * <SlantedFillButton href="/about" backgroundColor="#fff" fillColor="#000">About</SlantedFillButton>
 */
const SlantedFillButton = ({
  children,
  className,
  backgroundColor = "transparent",
  fillColor = "#d2ae6d",
  href = "#",
  ariaLabel = "Button",
  rel = "noopener noreferrer",
  target = "_self",
}) => {
  const styleVars = {
    "--bg-color": backgroundColor,
    "--fill-color": fillColor,
  };

  return (
    <div
      className="slanted-fill-btn w-fit h-fit relative overflow-hidden"
      style={{
        ...styleVars,
      }}
    >
      <Link
        href={href}
        aria-label={ariaLabel}
        rel={rel}
        target={target}
        className={`block ${className}`}
      >
        {children}
      </Link>
    </div>
  );
};

export default SlantedFillButton;
