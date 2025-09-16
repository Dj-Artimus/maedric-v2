import Image from "next/image";
import { useEffect, useState } from "react";
import { FaXmark } from "react-icons/fa6";

const ANIMATION_DURATION = 700; // ms, must match your Tailwind duration-500

const CTATopBanner: React.FC<{
  isVisible: boolean;
  setIsVisible: (v: boolean) => void;
  onClose?: () => void;
  ctaBannerRef?: React.RefObject<HTMLDivElement>;
}> = ({ isVisible, setIsVisible, onClose, ctaBannerRef }) => {
  const [show, setShow] = useState(isVisible);
  const [isBannerActive, setIsBannerActive] = useState(false);

  useEffect(() => {
    let openTimeout: NodeJS.Timeout | null = null;
    let closeTimeout: NodeJS.Timeout | null = null;

    if (isVisible) {
      setShow(true);
      // Wait for the element to mount, then activate animation and scroll
      openTimeout = setTimeout(() => {
        setIsBannerActive(true);
        const bannerElement = ctaBannerRef?.current;
        if (bannerElement) {
          const bannerRect = bannerElement.getBoundingClientRect();
          const targetScrollY =
            window.scrollY +
            bannerRect.top +
            bannerRect.height / 0.78 -
            window.innerHeight / 2;
          window.scrollTo({
            top: targetScrollY,
            behavior: "smooth",
          });
        }
      }, 100);
    } else {
      setIsBannerActive(false);
      // Wait for animation to finish before unmounting
      closeTimeout = setTimeout(() => setShow(false), ANIMATION_DURATION);
    }

    return () => {
      if (openTimeout) clearTimeout(openTimeout);
      if (closeTimeout) clearTimeout(closeTimeout);
    };
  }, [isVisible, ctaBannerRef]);

  // Only render when show is true
  if (!show) return null;

  // When closing: start scroll immediately, then hide after animation
  const handleClose = () => {
    if (onClose) onClose(); // triggers scroll in parent
    setIsVisible(false); // triggers exit animation
  };

  return (
    <div
      ref={ctaBannerRef}
      id="cta-top-banner"
      className={`
        w-full z-20 absolute left-1/2 -translate-x-1/2 -bottom-96 overflow-hidden
        transition-all duration-500 ease-out
        ${
          isBannerActive
            ? "opacity-100 translate-y-24 scale-100 pointer-events-auto"
            : "opacity-0 -translate-y-80 scale-90 pointer-events-none"
        }
      `}
      style={{ transformOrigin: "top center" }} // ensures scale animates from top
    >
      <div className="container mx-auto px-4 py-6">
        <div className="relative bg-card border border-accent overflow-hidden shadow-elegant">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-0 right-0 z-10 p-0.5 flex items-center justify-center text-white bg-accent hover:text-primary transition-colors duration-200 cursor-pointer"
            aria-label="Close banner"
          >
            <FaXmark className="w-5 h-5" />
          </button>

          {/* Banner Content */}
          <div className="relative flex">
            <Image
              src="/images/cta-banner.png"
              alt="Discover our exclusive ring collection"
              className="w-full lg:max-w-lg aspect-square object-cover"
              width={512}
              height={512}
            />

            {/* Overlay Content */}
            <div className="bg-black w-full flex items-center">
              <div className="px-6 md:px-12 max-w-2xl">
                <h3 className="font-quiche text-2xl md:text-3xl text-white mb-3">
                  Header Title Goes Here
                </h3>
                <div className="font-figtree text-white/90 text-md space-y-3">
                  <p className="leading-relaxed">
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old.
                  </p>
                  <p className="leading-relaxed">
                    Richard McClintock, a Latin professor at Hampden-Sydney
                    College in Virginia, looked up one of the more obscure Latin
                    words, consectetur, from a Lorem Ipsum passage, and going
                    through the cites of the word in classical literature,
                    discovered the undoubtable source.
                  </p>
                  <p className="leading-relaxed">
                    Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of &quot;de
                    Finibus Bonorum et Malorum&quot; (The Extremes of Good and Evil)
                    by Cicero, written in 45 BC. This book is a treatise on the
                    theory of ethics, very popular during the Renaissance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTATopBanner;
