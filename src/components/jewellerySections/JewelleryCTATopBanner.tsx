"use client";
import ReadMoreBox from "@/components/ui/ReadMoreButtonBox";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaXmark } from "react-icons/fa6";

const ANIMATION_DURATION = 700; // ms, must match Tailwind duration

interface JewelleryCTATopBannerProps {
  isVisible: boolean;
  setIsVisible: (v: boolean) => void;
  onClose?: () => void;
  ctaBannerRef?: React.RefObject<HTMLDivElement>;

  // New props for reusability
  image: string;
  alt: string;
  title: string;
  description: string[]; // multiple paragraphs
}

const JewelleryCTATopBanner: React.FC<JewelleryCTATopBannerProps> = ({
  isVisible,
  setIsVisible,
  onClose,
  ctaBannerRef,
  image,
  alt,
  title,
  description,
}) => {
  const [show, setShow] = useState(isVisible);
  const [isBannerActive, setIsBannerActive] = useState(false);

  useEffect(() => {
    let openTimeout: NodeJS.Timeout | null = null;
    let closeTimeout: NodeJS.Timeout | null = null;

    if (isVisible) {
      setShow(true);
      openTimeout = setTimeout(() => {
        setIsBannerActive(true);
        const bannerElement = ctaBannerRef?.current;
        if (bannerElement) {
          const bannerRect = bannerElement.getBoundingClientRect();
          const targetScrollY =
            window.scrollY +
            bannerRect.top +
            bannerRect.height / 0.85 -
            window.innerHeight / 2;
          window.scrollTo({
            top: targetScrollY,
            behavior: "smooth",
          });
        }
      }, 100);
    } else {
      setIsBannerActive(false);
      closeTimeout = setTimeout(() => setShow(false), ANIMATION_DURATION);
    }

    return () => {
      if (openTimeout) clearTimeout(openTimeout);
      if (closeTimeout) clearTimeout(closeTimeout);
    };
  }, [isVisible, ctaBannerRef]);

  if (!show) return null;

  const handleClose = () => {
    if (onClose) onClose();
    setIsVisible(false);
  };

  return (
    <div
      ref={ctaBannerRef}
      id="cta-top-banner"
      className={`
        w-full z-30
        transition-all duration-500 ease-out
        ${
          isBannerActive
            ? "opacity-100 translate-y-6 -mb-2 xs:translate-y-10 sm:translate-y-[-60px] sm:mb-[60px] md1:mb-[-70px] lg:mb-[-60px] scale-100 pointer-events-auto"
            : "opacity-0 -translate-y-96 scale-90 pointer-events-none"
        }
      `}
      style={{ transformOrigin: "top center" }}
    >
      <div className="md1:container mx-auto">
        <div className="relative bg-card border mx-auto max-w-[512px] sm:max-w-full border-accent overflow-hidden shadow-elegant">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-0 right-0 z-10 p-0.5 flex items-center justify-center text-white bg-accent hover:text-primary transition-colors duration-200 cursor-pointer"
            aria-label="Close banner"
          >
            <FaXmark className="w-5 h-5" />
          </button>

          {/* Banner Content */}
          <div className="relative w-full sm:flex">
            <Image
              src={image}
              alt={alt}
              className="w-full max-w-[512px] sm:max-w-[38vw] sm:max-lg:max-h-[38vw] lg:max-w-[432px] xl:max-w-lg aspect-square object-cover"
              width={512}
              height={512}
            />

            {/* Overlay Content */}
            <div className="bg-black w-full flex items-center">
              <div className="px-6 py-4 lg:px-12 max-w-2xl">
                <h3 className="font-quiche text-2xl md:text-3xl text-white mb-3">
                  {title}
                </h3>

                {/* Mobile ReadMoreBox */}
                {description && (
                  <div className="font-figtree text-white/90 text-md sm:hidden">
                    <ReadMoreBox
                      bgButton="bg-black"
                      textColor="text-white"
                      readMoreColor="text-white/60"
                      readLessColor="text-accent"
                      idx={1}
                      buttonPosition="right-0"
                      text={description}
                    />
                  </div>
                )}

                {/* Desktop Scrollable Description */}
                <div className="hidden sm:block font-figtree text-white/90 text-md space-y-3 sm:pr-3 lg:pr-0 sm:max-lg:max-h-[26vw] overflow-y-scroll lg:overflow-y-hidden">
                  {description.map((para, idx) => (
                    <p key={idx} className="leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JewelleryCTATopBanner;
