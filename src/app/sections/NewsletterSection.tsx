"use client";
import EditText from "@/components/ui/EditText";
import SlantedFillButton from "@/components/ui/SlantedFillButton";
import { useNewsletter } from "@/hooks/useNewsletter";
import React from "react";
import { SlArrowRight } from "react-icons/sl";

const NewsletterSection: React.FC = () => {
  const { email, setEmail, isSubscribing, message, handleSubscribe } =
    useNewsletter();

  return (
    <section className="w-full -mb-16">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-accent flex flex-col gap-5 lg:gap-0 lg:flex-row justify-between items-center w-full py-6 xs:py-8 px-6">
          <div className="flex flex-col xs:max-lg:justify-center justify-start xs:max-lg:items-center items-start w-full mb-[6px]">
            <h2 className="text-[36px] font-quiche font-normal leading-[45px] text-center lg:text-left capitalize text-primary">
              Newsletter
            </h2>
            <p className="w-full text-[20px] font-figtree font-normal leading-[24px] xs:max-lg:text-center text-primary">
              Be the first to discover new collections, stories, and exclusive
              offers.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-2 xs:gap-4 sm:gap-6 md:gap-2 w-fit">
            <EditText
              value={email}
              onChange={setEmail}
              size={"md"}
              placeholder="sarah@yahoomail.com"
              type="email"
              className="w-[82vw] xs:w-80 text-[19px] font-figtree font-light text-primary placeholder:text-primary border"
            />
            <SlantedFillButton
              onClick={handleSubscribe}
              disabled={isSubscribing}
              loading={isSubscribing}
              backgroundColor="#051e33"
              fillColor="#ffffff"
              className="w-[82vw] xs:w-80 sm:w-full shrink-0 text-[16px] font-figtree flex justify-center items-center gap-2 tracking-[2px] sm:tracking-[3px] uppercase text-white hover:text-primary hover:font-semibold hover:bg-opacity-90 px-5 py-3"
            >
              <span>{isSubscribing ? "Subscribing..." : "Subscribe"}</span>
              <SlArrowRight className="w-3 h-3 sm:w-4 sm:h-4 hover:scale-110 transition-transform" />
            </SlantedFillButton>
            {message && (
              <div className="w-full mt-4 text-center">
                <p
                  className={`text-sm ${message.includes("Thank you") ? "text-green-600" : "text-red-600"}`}
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
