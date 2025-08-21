"use client";
import Image from "next/image";
import React, { useRef } from "react";

import AnimatedUnderline from "@/components/ui/AnimatedUnderline";
import SlantedFillButton from "@/components/ui/SlantedFillButton";
import { PROCESS_STEPS } from "@/utils/constants";
import type { Swiper as SwiperClass } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import { FreeMode, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const ProcessSection: React.FC = () => {
  // Process steps data
  const processSteps = PROCESS_STEPS;
  const swiperRef = useRef<SwiperClass | null>(null);

  return (
    <section className="w-full md:max-w-4xl lg:max-w-6xl mx-auto px-4 sm:px-6 mt-[62px]">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-14 lg:max-h-[590px] overflow-hidden">
        {/* Left Content */}
        <div className="flex flex-col gap-[40px] justify-start items-center w-full">
          <div className="flex flex-col gap-5 justify-start items-center w-full px-[24px]">
            <h2 className="text-[24px] md:text-[30px] font-quiche font-normal leading-[32px] sm:leading-[38px] md:leading-[42px] text-center capitalize text-primary w-full">
              How did we get here?
            </h2>
            <p className="text-[16px] md:text-[18px] font-figtree font-normal leading-[22px] sm:leading-[26px] md:leading-[28px] text-center text-black/70 w-full">
              Every journey has a start and an end, hover over the buttons on
              the right to learn more about how we get from a cup of tea to your
              masterpiece.
            </p>
            <SlantedFillButton
              className="text-[14px] sm:text-[16px] font-figtree font-normal leading-[18px] sm:leading-[20px] tracking-[2px] sm:tracking-[3px] text-center uppercase text-primary border border-primary bg-transparent hover:bg-button-1 hover:text-white px-[20px] py-[14px]"
              backgroundColor="transparent"
              fillColor="#051e33"
              href="#"
              onClick={() => console.log("Learn more clicked")}
            >
              learn more
            </SlantedFillButton>
          </div>
          <div className="flex flex-col justify-start items-center w-full bg-white sm:px-12">
            <div className="xs:max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-3xl w-full overflow-hidden shadow-[0px_0px_12px_#0000003f]">
              <Image
                src="/images/processImg.png"
                alt="process"
                width={600}
                height={500}
                className="w-full mx-auto aspect-square sm:aspect-[4/3] max-w-[600px] h-auto object-cover object-center  hover:scale-110 transition-all duration-1000"
              />
            </div>
          </div>
        </div>
        {/* Right Content - Process Steps */}
        <div className="lg:max-h-[56%] hidden sm:flex flex-col justify-center mx-auto lg:justify-start items-center xs:max-w-sm sm:max-w-md md:max-w-xl md1:max-w-2xl lg:w-full sm:divide-y divide-black/20 overflow-auto scrollbar-thin">
          {processSteps.map((step) => (
            <div
              key={step.number}
              className="flex flex-col gap-6 text-wrap shrink-0 w-full py-4 group"
            >
              <div className="flex flex-row gap-[14px] justify-start items-start w-full">
                <div className="flex flex-col justify-center items-center w-[56px] mt-[6px]">
                  <div className="w-[56px] h-[56px] border border-tertiary text-tertiary rounded-full flex items-center justify-center group-hover:bg-accent group-hover:border-primary group-hover:text-primary transition-all duration-300">
                    <span className="text-[18px] sm:text-[20px] font-figtree font-semibold leading-[22px] sm:leading-[24px] text-center">
                      {step.number}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5 justify-start items-start self-center flex-1">
                  <h3 className="text-[18px] md:text-[20px] font-figtree font-medium leading-[22px] sm:leading-[25px] md:leading-[27px] text-left text-primary">
                    <AnimatedUnderline underlineColor="accent">
                      {step.title}
                    </AnimatedUnderline>
                  </h3>
                  <p className="text-[16px] md:text-[18px] font-figtree font-normal leading-[22px] sm:leading-[26px] md:leading-[28px] text-left text-black/70 w-full">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Swiper for Process Steps (visible only below sm breakpoint) */}
        <div className="sm:hidden w-full overflow-hidden process-swiper">
          <style jsx global>{`
            .process-swiper .swiper-scrollbar {
              height: 2px;
              background-color: rgba(0, 0, 0, 0.1);
            }
            .process-swiper .swiper-scrollbar-drag {
              background-color: #d2ae6d;
              border-radius: 4px;
              height: 4px;
              margin-top: -1px;
            }
          `}</style>
          <Swiper
            modules={[FreeMode, Scrollbar]}
            spaceBetween={20}
            slidesPerView={1}
            // freeMode={true}7
            scrollbar={{
              hide: false,
              draggable: true,
              enabled: true,
            }}
            className="w-full scrollbar-thin"
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            {processSteps.map((step) => (
              <SwiperSlide key={step.number}>
                <div className="flex flex-col gap-6 text-wrap shrink-0 w-full py-4 group">
                  <div className="flex flex-row gap-[14px] justify-start items-start w-full">
                    <div className="flex flex-col justify-center items-center w-[56px] mt-[6px]">
                      <div className="w-[56px] h-[56px] border border-tertiary text-tertiary rounded-full flex items-center justify-center group-hover:bg-accent group-hover:border-primary group-hover:text-primary transition-all duration-300">
                        <span className="text-[18px] font-figtree font-semibold leading-[22px] text-center">
                          {step.number}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[6px] justify-start items-start self-center flex-1">
                      <h3 className="text-[18px] font-figtree font-medium leading-[22px] text-left text-primary">
                        <AnimatedUnderline underlineColor="accent">
                          {step.title}
                        </AnimatedUnderline>
                      </h3>
                      <p className="text-[16px] font-figtree font-normal leading-[22px] text-left text-black/70 w-full">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
