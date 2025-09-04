/**
 * --------------------------------------------------------
 * ✏️ Author: DjArtimus
 * 📅 Created: 12-08-2025 - 04-09-2025
 *
 * 📌 Description:
 *   A call-to-action section that encourages users to request quotes or
 *   discover more about the brand's legacy.
 * --------------------------------------------------------
 */

import Link from "next/link";
import React from "react";

/**
 * CTASection
 *
 * Renders a call-to-action section with heading and action buttons.
 *
 * @returns {JSX.Element} The CTA section component
 *
 * @example
 * <CTASection />
 */
const CTASection: React.FC = () => {
  return (
    <section className="relative w-full lg:max-w-4xl xl:max-w-6xl px-4 py-6 lg:px-32 text-center border-y">
      <div className=" mx-auto flex flex-col items-center gap-10 z-20">
        {/* Banner Content */}
        <div className=" text-center">
          {/* Main heading */}
          <h2 className="mb-4 px-8 font-quiche text-primary text-[36px] capitalize">
            Looking for something truly one-of-a-kind?
          </h2>

          {/* Description text */}
          <p className=" font-figtree text-primary/60 text-[18px] mb-6">
            Let us source rare gemstones or craft bespoke pieces tailored just
            for you.
          </p>

          {/* CTA Buttons */}
          <div className="relative w-full mx-auto flex flex-col items-center justify-center sm:flex-row gap-4 mt-6 max-w-2xl px-4">
            <Link
              href="#"
              aria-label="Request a quote"
              rel="noopener noreferrer"
              className="w-full sm:w-[35%] py-2 text-[14px] border text-black hover:text-white border-black rounded-[2px] transition-all duration-300 font-figtree text-center uppercase tracking-[1px] slanted-fill-btn"
              style={
                {
                  "--bg-color": "transparent",
                  "--fill-color": "#051e33",
                } as React.CSSProperties & Record<string, string>
              }
            >
              <span className="z-10 hover:text-white">Request A Quote!</span>
            </Link>
            <Link
              href="#"
              aria-label="Request a quote"
              rel="noopener noreferrer"
              className="w-full sm:w-[35%] py-2 text-[14px] border text-white border-accent rounded-[2px] transition-all duration-300 font-figtree text-center uppercase tracking-[1px] slanted-fill-btn"
              style={
                {
                  "--bg-color": "#d2ae6d",
                  "--fill-color": "#051e33",
                } as React.CSSProperties & Record<string, string>
              }
            >
              <span className="z-10 hover:text-white">
                Discover Our Legacy!
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
