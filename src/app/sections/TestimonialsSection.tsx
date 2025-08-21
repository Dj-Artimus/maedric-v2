"use client";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import AnimatedUnderline from "@/components/ui/AnimatedUnderline";
import Image from "next/image";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

/**
 * Array of client testimonials with photos, jewellery images, quotes, names, and locations.
 * Each testimonial represents a satisfied customer's experience with Maedric.
 */
const testimonials = [
  {
    img: "/images/Testimonial_1.png",
    ring: "/images/Testimonial_Jew1.png",
    quote:
      "I am beyond grateful to Maedric for helping me create the perfect engagement ring. With his/their expert guidance on diamond selection and design, we crafted a ring that my girlfriend absolutely adores. The craftsmanship and attention to detail were impeccable, and it was clear that Maedric genuinely cares about delivering the best. My fiancé hasn't stopped admiring the ring since I proposed, and I couldn't be happier with the final result. If you're looking for a beautiful, custom-made ring with exceptional service, I highly recommend Maedric.",
    name: "Ivan Teo",
    location: "Singapore",
  },
  {
    img: "/images/Testimonial_2.png",
    ring: "/images/Testimonial_Jew2.png",
    quote:
      "The craftsmanship and attention to detail are unmatched. I loved being part of the design journey and now have a piece that is truly one-of-a-kind.",
    name: "Sarah Lim",
    location: "Singapore",
  },
];

/**
 * TestimonialsSection
 *
 * Renders a testimonials section with client photos, jewellery images, and quotes.
 * Features a Swiper carousel for navigation between testimonials with responsive design.
 *
 * @returns {JSX.Element} The testimonials section with client feedback display.
 *
 * @example
 * <TestimonialsSection />
 */
const TestimonialsSection = () => {
  const [expandedQuotes, setExpandedQuotes] = useState<number[]>([]);

  const toggleQuote = (index: number) => {
    setExpandedQuotes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="max-w-[100vw] md:max-w-3xl md1:max-w-4xl lg:max-w-5xl xl:max-w-7xl mx-auto px-4">
        {/* Section title */}
        <h2 className="font-quiche text-primary text-[36px] md:text-[40px] mb-2 text-center capitalize">
          Experiences to cherish
        </h2>

        {/* Section description */}
        <p className="font-figtree text-secondary text-[18px] md:text-[20px] text-center mb-10">
          Real stories from those who wear Maedric with pride.
        </p>

        {/* Testimonials carousel container */}
        <div className="relative flex items-start md:items-stretch justify-center">
          {/* Custom Previous Button */}
          <button
            aria-label="Previous"
            className="testimonial-prev md:text-primary/70 hover:text-accent transition-colors duration-200 translate-y-44 md:translate-y-0 me-2 hidden sm:block"
          >
            <FiChevronLeft className="w-9 h-9" />
          </button>

          {/* Swiper carousel for testimonials */}
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: ".testimonial-prev",
              nextEl: ".testimonial-next",
            }}
            loop
            className="w-full"
          >
            {/* Map through testimonials */}
            {testimonials.map((item, idx) => (
              <SwiperSlide key={idx}>
                <div className="flex flex-col md:flex-row xs:items-center justify-center lg:gap-4 xl:gap-12 group mx-2">
                  {/* Client photo container */}
                  <div className="relative md:w-[400px] lg:w-[500px] p-2 -ms-2 xs:ms-0">
                    {/* Client image */}
                    <Image
                      src={item.img}
                      alt={item.name}
                      width={400}
                      height={400}
                      className="w-[85%] xs:w-[300px] md:w-[400px] lg:w-[500px] shadow-[0px_0px_7px_#0000003f] shadow-primary/40"
                    />
                    {/* Ring overlay - desktop only */}
                    <div className="absolute bottom-1/2 right-0 xs:translate-x-1/3 sm:translate-x-[40%] md:translate-x-2/3 translate-y-1/2 shadow-[0px_0px_12px_#0000003f] shadow-primary/50">
                      <Image
                        src={item.ring}
                        alt="Ring"
                        width={180}
                        height={180}
                        className="w-[120px] lg:w-[120px] xl:w-[180px] aspect-square"
                      />
                    </div>
                  </div>

                  {/* Quote and client info */}
                  <div className=" w-full md:max-w-sm lg:max-w-xl text-center md:text-left md:px-4 mt-5 pb-1">
                    {/* Client quote */}
                    <div className="font-figtree text-secondary text-[16px] lg:text-[20px] mb-6 leading-relaxed text-left sm:text-justify md:ps-24 lg:ps-24 xl:ps-32 md:pe-0">
                      <div className="relative">
                        <p
                          className={`${expandedQuotes.includes(idx) ? "" : "sm:line-clamp-none line-clamp-3"} relative`}
                        >
                          &quot;{item.quote}&quot;
                        </p>
                        <span className="sm:hidden">
                          {item.quote.length > 100 &&
                            !expandedQuotes.includes(idx) && (
                              <span
                                className="sm:hidden hover:text-accent text-primary transition-colors duration-200 font-medium cursor-pointer"
                                style={{
                                  position: "absolute",
                                  right: 0,
                                  bottom: 0,
                                  backgroundColor: "white",
                                  paddingLeft: "4px",
                                  paddingRight: "0",
                                  display: "inline-block",
                                  zIndex: 10,
                                  marginLeft: "4px",
                                }}
                                onClick={() => toggleQuote(idx)}
                              >
                                ...read more
                              </span>
                            )}
                          {item.quote.length > 100 &&
                            expandedQuotes.includes(idx) && (
                              <span
                                className="sm:hidden block text-accent hover:text-primary transition-colors duration-200 font-medium cursor-pointer text-right mt-2"
                                onClick={() => toggleQuote(idx)}
                              >
                                read less
                              </span>
                            )}
                        </span>
                      </div>
                    </div>
                    {/* Client name and location with animated underline */}
                    <div className="font-figtree text-primary font-semibold text-[28px] md:text-[30px] text-center sm:text-end">
                      <AnimatedUnderline underlineColor="accent">
                        {item.name}, {item.location}
                      </AnimatedUnderline>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Next Button */}
          <button
            aria-label="Next"
            className="testimonial-next md:text-primary/70 hover:text-accent transition-colors duration-200 translate-y-44 md:translate-y-0 ms-2 hidden sm:block"
          >
            <FiChevronRight className="w-9 h-9" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
