/**
 * --------------------------------------------------------
 * ✏️ Author: DjArtimus
 * 📅 Created: 11-07-2025 - 14-07-2025
 *
 * 📌 Description:
 *   AnimatedUnderlineLoop is a React component that renders its children with an animated underline effect that animates away on hover. The underline color and thickness are customizable via props.
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
    case "neutral":
      return "after:bg-neutral";
    default:
      return "after:bg-primary";
  }
};

/**
 * Returns the Tailwind class for the underline thickness.
 *
 * @param {string} size - The thickness size (e.g., '1', '2', '3', '4').
 * @returns {string|undefined} Tailwind class for the underline thickness.
 */
const getSizeClass = (size) => {
  switch (size) {
    case "1":
      return "after:h-[1px]";
    case "2":
      return "after:h-[2px]";
    case "3":
      return "after:h-[3px]";
    case "4":
      return "after:h-[4px]";
  }
};

/**
 * AnimatedUnderlineLoop
 *
 * Renders children with an animated underline that animates away on hover.
 *
 * @param {object} props
 * @param {React.ReactNode} props.children - The content to underline.
 * @param {string} [props.underlineColor="primary"] - The color of the underline.
 * @param {string} [props.size] - The thickness of the underline ("1", "2", "3", or "4").
 * @returns {JSX.Element} The wrapped content with animated underline effect.
 *
 * @example
 * <AnimatedUnderlineLoop underlineColor="accent" size="2">Text</AnimatedUnderlineLoop>
 */
const AnimatedUnderlineLoop = ({
  children,
  underlineColor = "primary",
  size,
}) => {
  return (
    <span
      className={`
        relative inline-block group
        after:absolute after:bottom-[-5] ${
          size
            ? getSizeClass(size)
            : "after:left-0 after:h-[1px] sm:after:h-[2px] md:after:h-[3px] lg:after:h-[4px]"
        } after:w-full
        ${getUnderlineClass(underlineColor)} after:block after:content-['']
        after:origin-left
        after:transition-all after:duration-300 after:ease-in-out
        group-hover:after:animate-[slide-away_0.6s_forwards]
    `}
    >
      {/* Need to add "group" class to its parent component to work */}
      {/* Render the children with underline effect */}
      {children}
    </span>
  );
};

export default AnimatedUnderlineLoop;
