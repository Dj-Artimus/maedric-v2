import AnimatedUnderline from "@/components/ui/AnimatedUnderline";
import SlantedFillButton from "@/components/ui/SlantedFillButton";
import Image from "next/image";
import React from "react";

const FounderAndContactSection: React.FC = () => (
  <section className="bg-white py-12 md:py-16 w-full border-y">
    <div className="lg:max-w-5xl xl:max-w-6xl mx-auto xs:max-sm:px-6 px-4">
      {/* Top Heading and Tabs */}
      <div className="mb-11">
        {/* Main heading */}
        <h2 className="font-quiche text-[36px] md:text-[40px] text-primary text-center mb-2">
          Let Us Begin Your Jewellery, Your Way
        </h2>

        {/* Description text */}
        <p className="font-figtree text-[20px] text-secondary text-center mb-6 max-w-2xl mx-auto">
          Let us source rare gemstones or craft bespoke pieces tailored just for
          you.
        </p>

        {/* Category selection tabs */}
        <div className="w-full max-w-3xl mx-auto flex flex-col items-center sm:flex-row justify-center gap-2 md:gap-4 text-primary">
          <SlantedFillButton
            className="font-figtree text-[16px] border border-primary rounded-[1px] w-[70vw] sm:w-48 md:w-56 md1:w-60 content-stretch text-center py-2 cursor-pointer hover:text-white transition-colors duration-300 uppercase tracking-[4px]"
            backgroundColor="transparent"
            fillColor="#051e33"
            href="#"
          >
            Bridal
          </SlantedFillButton>
          <SlantedFillButton
            className="font-figtree text-[16px] border border-primary rounded-[1px] w-[70vw] sm:w-48 md:w-56 md1:w-60 text-center py-2 cursor-pointer hover:text-white transition-colors duration-300 uppercase tracking-[4px]"
            backgroundColor="transparent"
            fillColor="#051e33"
            href="#"
          >
            Boutique
          </SlantedFillButton>
          <SlantedFillButton
            className="font-figtree text-[16px] border border-primary rounded-[1px] w-[70vw] sm:w-48 md:w-56 md1:w-60 text-center py-2 cursor-pointer hover:text-white transition-colors duration-300 uppercase tracking-[4px]"
            backgroundColor="transparent"
            fillColor="#051e33"
            href="#"
          >
            Gemstone
          </SlantedFillButton>
        </div>
      </div>

      {/* Two Column Layout */}
      <div className="flex flex-col text-center lg:text-left lg:flex-row lg:gap-12 items-center group">
        {/* Left: Text content */}
        <div className="flex-1 grow w-full min-w-[60%]">
          {/* Founder introduction with animated underlines */}
          <h3 className="font-quiche text-[32px] text-secondary mb-2 border-b border-[#E7EAEE] pb-2">
            Hi There,{" "}
            <AnimatedUnderline underlineColor="accent">
              Isaiah Here.
            </AnimatedUnderline>
            <br />
            I&apos;m{" "}
            <AnimatedUnderline underlineColor="accent">
              The Artisan
            </AnimatedUnderline>{" "}
            behind Your Story
          </h3>

          <div className="hidden lg:flex flex-col gap-2">
            {/* Founder's story paragraphs */}
            <p className="font-figtree text-[16px] text-secondary">
              I am the founder and the principal designer of Maedric, working
              closely with you from initial sketch to final polish to provide a
              refreshing perspective on quality, provenance, and pricing.
            </p>
            <p className="font-figtree text-[16px] text-secondary">
              I got into jewellery from the prospect of crafting personal
              belongings that represented me and my journey.
            </p>
            <p className="font-figtree text-[16px] text-secondary">
              The idea of owning a story set in rock and stone appealed to my
              senses, even if it was just a pendant resembling a baguette.
            </p>
            <p className="font-figtree text-[16px] text-secondary">
              For the past five years, following my graduation with a Diploma in
              Fine Jewellery Design from JDMIS, I established Maedric to expand
              the jewellery landscape of Singapore beyond gold and diamonds, and
              to set the standard for the coloured gemstone industry.
            </p>
            <p className="font-figtree text-[16px] text-secondary">
              Keen to see what we can accomplish together?
            </p>
            <p className="font-figtree text-[16px] text-secondary">
              Feel free to drop me a message or have a look at our latest
              creations. We would love to learn more about you.
            </p>
          </div>
        </div>

        {/* Right: Founder image */}
        <div className="flex-1 shrink flex justify-center md:justify-end">
          <div className="w-full h-full aspect-auto max-w-md md:max-w-lg lg:max-w-[400px] lg:max-h-[450px] relative rounded-[2px] overflow-hidden bg-[#F7F8FA] shadow-md">
            <Image
              src="/images/founder.png"
              alt="Isaiah, Founder of Maedric"
              width={400}
              height={450}
              loading="lazy"
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FounderAndContactSection;
