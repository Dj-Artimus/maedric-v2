"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { HiArrowLongRight } from "react-icons/hi2";
import { IoCloseOutline, IoSearchOutline } from "react-icons/io5";
import { LiaPhoneSolid } from "react-icons/lia";
import { PiHeart, PiShoppingCartSimple, PiUser } from "react-icons/pi";
import AnimatedUnderline from "../ui/AnimatedUnderline";

// Navigation links for the header
const navLinks = [
  { name: "About", href: "/about" },
  { name: "Jewellery", href: "/jewellery" },
  { name: "Gemstones", href: "/gemstones" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

function useBodyScrollLock(lock = false) {
  const scrollY = useRef(0);

  useEffect(() => {
    if (lock) {
      scrollY.current = window.scrollY;

      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY.current}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.width = "100%";
    } else {
      const y = scrollY.current;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      window.scrollTo(0, y);
    }

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
    };
  }, [lock]);
}

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // To track scrolling

  useEffect(() => {
    // Scroll event listener to update `isScrolled`
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80); // Adjust scroll height here
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useBodyScrollLock(mobileMenuOpen);

  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (e) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push("/");
    }
  };

  return (
    <header className={`w-full sticky h-0 top-0 left-0 z-50 backdrop-blur-md`}>
      <div
        className={`w-full flex flex-col mx-auto text-primary transition-all duration-300 ${isScrolled ? "px-6" : " px-4 sm:px-6 lg:px-24 xl:px-[166px] lg:py-2 lg:pb-12"} ${mobileMenuOpen ? "h-screen" : ""}  ${isScrolled || (!isScrolled && mobileMenuOpen) ? "bg-white" : "bg-white/40"}`}
      >
        <div className="mb-2">
          <div className="flex flex-row justify-between items-center lg:items-end w-full transition-all duration-300">
            {/* Contact Info */}
            <div
              className={`${mobileMenuOpen ? "flex" : isScrolled ? "hidden" : "hidden lg:flex"} absolute lg:w-[13%] lg:static top-[90vh] left-1/2 -translate-x-1/2 flex-row gap-[6px] items-center lg:max-xl:items-start lg:max-xl:mb-[14px] mb-[26px] text-nowrap overflow-visible cursor-pointer group`}
            >
              <LiaPhoneSolid className="w-[18px] h-[18px] shrink-0 group-hover:scale-110 group-hover:animate-bounce group-hover:text-tertiary transition-all duration-200" />
              <span className="text-[12px] sm:text-[14px] md:text-[16px] font-figtree font-light leading-[16px] sm:leading-[18px] md:leading-[20px] text-center uppercase text-primary tracking-wide">
                Call or WhatsApp <br className="lg:max-xl:block hidden" /> 65
                8343 3698
              </span>
            </div>

            {/* Logo */}
            <Link
              href="/"
              aria-label="Logo"
              className="flex flex-col justify-start items-center self-center cursor-pointer"
              onClick={handleClick}
            >
              <span className="text-[28px] sm:text-[40px] lg:text-[48px] -mb-2 sm:mb-[-3] font-cinzel font-normal text-left text-[#051e33]">
                MAEDRIC
              </span>
              <span className="text-[10px] sm:text-[14px] lg:text-[17px] font-cinzel font-normal leading-none tracking-[1px] text-left text-primary">
                Gemstones & Jewellery
              </span>
            </Link>

            {/* Divider Line */}
            {!isScrolled && (
              <div
                className={`${!isScrolled ? "hidden lg:block absolute top-[100px] left-0" : "hidden"} w-full h-[1px] bg-white/50`}
              ></div>
            )}

            <nav
              className={`${isScrolled ? "mb-[25px]" : "absolute top-28 left-1/2 -translate-x-1/2"} transition-all duration-300 ${mobileMenuOpen ? "flex" : "hidden"} lg:flex`}
            >
              <div
                className={`flex flex-col lg:flex-row lg:justify-between sm:items-center gap-4 lg:gap-8 xl:gap-16 ${mobileMenuOpen ? "flex-col items-start max-sm:w-screen px-4" : "flex-row"}`}
              >
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    role="menuitem"
                    className="flex gap-2 w-full sm:w-fit text-[14px] sm:text-[16px] font-figtree font-light leading-[18px] sm:leading-[20px] tracking-[3px] sm:tracking-[4px] text-center lg:text-left uppercase text-primary hover:text-tertiary transition-colors py-2 lg:py-0 border-b lg:border-b-0 group"
                  >
                    <AnimatedUnderline underlineColor="tertiary">
                      {link.name}
                    </AnimatedUnderline>
                    {link.name == "Jewellery" || link.name == "Gemstones" ? (
                      <HiArrowLongRight className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] md:hidden hover:scale-110 transition-transform" />
                    ) : null}
                  </Link>
                ))}
              </div>
            </nav>

            {/* Action Icons */}
            <div className="flex flex-row justify-end items-center lg:mb-[26px] mt-2 lg:mt-0 sm:gap-6">
              {/* Icons */}
              <div
                className={`${mobileMenuOpen ? "flex" : "hidden"} md:flex flex-row items-center gap-2 sm:gap-6`}
              >
                <button aria-label="Search">
                  <IoSearchOutline className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] hover:scale-110 transition-transform" />
                </button>

                <button aria-label="Wishlist">
                  <PiHeart className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] hover:scale-110 transition-transform" />
                </button>

                <div className="relative">
                  <button aria-label="Shopping cart">
                    <PiShoppingCartSimple className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] hover:scale-110 transition-transform -mb-1.5" />
                  </button>
                  <span className="absolute top-0 sm:top-[-1] -right-1 bg-white text-primary text-[8px] sm:text-[10px] font-figtree font-bold leading-[4px] w-[10px] h-[10px] sm:w-[12px] sm:h-[12px] rounded-[6px] flex items-center justify-center border border-primary">
                    1
                  </span>
                </div>

                <button aria-label="User account">
                  <PiUser className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] hover:scale-110 transition-transform" />
                </button>
              </div>
              {/* Hamburger Menu (Mobile only) */}
              <button
                className="block lg:hidden p-2"
                aria-label="Open menu"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <IoCloseOutline className="w-6 h-6 text-primary" />
                ) : (
                  <FiMenu className="w-6 h-6 text-primary" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
