/**
 * --------------------------------------------------------
 * ✏️ Author: DjArtimus
 * 📅 Created: 12-08-2025 - 04-09-2025
 *
 * 📌 Description:
 *   Newsletter section component that allows users to subscribe
 *   to Maedric's newsletter for updates and exclusive offers.
 * --------------------------------------------------------
 */

"use client";

import EditText from "@/components/ui/EditText";
import SlantedFillButton from "@/components/ui/SlantedFillButton";
import { useNewsletter } from "@/hooks/useNewsletter";
import { SlArrowRight } from "react-icons/sl";

/**
 * NewsletterSection
 *
 * Renders a newsletter subscription section with email input and subscribe button.
 * Handles form submission and displays subscription status.
 *
 * @returns {JSX.Element} Newsletter section with subscription form
 *
 * @example
 * <NewsletterSection />
 */
const NewsletterSection: React.FC = () => {
  const { email, setEmail, isSubscribing, message, handleSubscribe } =
    useNewsletter();

  return (
    <section className="w-full -mb-16">
      <div className="sm:max-w-xl md:max-w-2xl md1:max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto px-6 lg:px-4">
        <div className="bg-accent flex flex-col gap-5 lg:gap-0 lg:flex-row justify-between items-center w-full py-6 pb-8 lg:py-6 lg:pb-6 px-6 transition-all duration-1000">
          <div className="flex flex-col xs:max-lg:justify-center justify-start xs:max-lg:items-center items-start w-full mb-[6px]">
            <h2 className="text-[36px] font-quiche font-normal leading-[45px] text-center lg:text-left capitalize text-primary">
              Newsletter
            </h2>
            <p className="w-full text-[15px] font-figtree font-normal leading-[24px] xs:max-lg:text-center text-primary">
              Be the first to discover new collections, stories, and exclusive
              offers.
            </p>
          </div>
          <div className="flex flex-col justify-start relative">
            <div className="flex flex-col md:flex-row items-center gap-2 xs:gap-4 sm:gap-6 md:gap-2 w-fit pb-4 sm:pb-0">
              <EditText
                value={email}
                onValueChange={setEmail}
                placeholder="sarah@yahoomail.com"
                type="email"
                className="w-[82vw] xs:w-80 text-[19px] font-figtree font-light text-primary placeholder:text-primary border px-4 py-2"
              />
              <SlantedFillButton
                onClick={handleSubscribe}
                disabled={isSubscribing}
                loading={isSubscribing}
                backgroundColor="#051e33"
                fillColor="#ffffff"
                className={`w-[82vw] xs:w-80 sm:w-full ${
                  isSubscribing ? "text-[12px]" : "text-[16px]"
                } font-figtree flex justify-center items-center gap-2 tracking-[2px] sm:tracking-[3px] uppercase text-white hover:text-primary hover:bg-opacity-90 px-5 py-3`}
              >
                <span>{isSubscribing ? "Subscribing..." : "Subscribe"}</span>
                <SlArrowRight className="w-3 h-3 sm:w-4 sm:h-4 hover:scale-110 transition-transform" />
              </SlantedFillButton>
            </div>
            {message && (
              <div className="w-full mt-4 absolute top-24 sm:top-10 left-0">
                <p
                  className={`text-sm text-center md:text-left ${
                    message.includes("Thank you")
                      ? "text-green-700"
                      : "text-red-600"
                  }`}
                >
                  {message}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
