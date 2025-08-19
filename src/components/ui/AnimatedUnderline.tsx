/**
 * --------------------------------------------------------
 * ✏️ Author: DjArtimus
 * 📅 Created: 11-07-2025 - 14-07-2025
 *
 * 📌 Description:
 *   AnimatedUnderline is a React component that renders its children with an animated underline effect. The underline color is customizable via props.
 * --------------------------------------------------------
 */

/**
 * Returns the Tailwind class for the underline color.
 *
 * @param {string} color - The color name (e.g., 'primary', 'accent', etc.)
 * @returns {string} Tailwind class for the underline color.
 */
const getUnderlineClass = (color) => {
  switch (color) {
    case "primary":
      return "after:bg-primary";
    case "accent":
      return "after:bg-accent";
    case "white":
      return "after:bg-white";
    case "black":
      return "after:bg-black";
    case "secondary":
      return "after:bg-secondary";
    case "tertiary":
      return "after:bg-tertiary";
    case "neutral":
      return "after:bg-neutral";
    default:
      return "after:bg-primary";
  }
};

/**
 * AnimatedUnderline
 *
 * Renders children with an animated underline that appears on hover.
 *
 * @param {object} props
 * @param {React.ReactNode} props.children - The content to underline.
 * @param {string} [props.underlineColor="primary"] - The color of the underline.
 * @returns {JSX.Element} The wrapped content with animated underline effect.
 *
 * @example
 * <AnimatedUnderline underlineColor="accent">Text</AnimatedUnderline>
 */
const AnimatedUnderline = ({ children, underlineColor = "primary" }) => {
  return (
    <span
      className={`
        relative inline-block tracking-wide
        after:absolute after:bottom-[-3] after:right-0 after:h-[2px] after:w-0
        ${getUnderlineClass(underlineColor)} after:block after:content-['']
        after:transition-all after:duration-200 after:ease-in
        group-hover:after:left-0 group-hover:after:right-auto group-hover:after:w-full
      `}
    >
      {/* Need to add "group" class to its parent component to work */}
      {/* Render the children with underline effect */}
      {children}
    </span>
  );
};

export default AnimatedUnderline;
