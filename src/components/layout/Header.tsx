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

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
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
        className={`w-full flex mx-auto text-primary justify-between lg:justify-center items-start lg:items-center py-1 px-4 pe-2 sm:px-12 lg:px-4 ${isScrolled ? "lg:gap-[6%] xl:gap-[10%]" : "lg:gap-[20%] xl:gap-[27.6%] lg:pb-10"} ${mobileMenuOpen ? "h-screen" : ""}  ${isScrolled || (!isScrolled && mobileMenuOpen) ? "bg-white" : " hover:bg-white transition-colors duration-700"}`}
      >
        {/* Contact Info */}
        <a
          href="https://wa.me/6583433698"
          target="_blank"
          rel="noopener noreferrer"
          className={`${mobileMenuOpen ? "flex" : isScrolled ? "hidden" : "hidden lg:flex"} absolute lg:static top-[90vh] left-1/2 -translate-x-1/2 lg:translate-x-0 flex-row gap-[6px] items-center text-nowrap overflow-visible cursor-pointer group`}
        >
          <LiaPhoneSolid className="w-[16px] h-[16px] shrink-0 group-hover:text-tertiary group-hover:rotate-12 transition-transform duration-300 font-[0]" />
          <span className="text-[12px] sm:text-[14px] font-figtree font-light text-center uppercase tracking-wide">
            Call or WhatsApp <br className="lg:max-xl:block hidden" /> +65 8343
            3698
          </span>
        </a>

        {/* Logo */}
        <Link
          href="/"
          aria-label="Logo"
          className={`flex flex-col justify-center items-center cursor-pointer transition-all duration-700 ${!isScrolled && "lg:ms-[-3.5%] xl:ms-[-9.6%]"}`}
          onClick={handleClick}
        >
          <span className="text-[28px] sm:text-[42px] leading-none font-cinzel font-normal">
            MAEDRIC
          </span>
          <span className="text-[10px] sm:text-[15px] font-cinzel font-normal tracking-[1px]">
            Gemstones & Jewellery
          </span>
        </Link>

        {/* Divider Line */}
        {!isScrolled && (
          <div
            className={`${!isScrolled ? "hidden lg:bl ock absolute top-[74px] left-0" : "hidden"} w-full h-[1px] bg-white/50`}
          ></div>
        )}

        <nav
          className={`${isScrolled ? "" : "absolute top-[81px] left-1/2 -translate-x-1/2"} ${mobileMenuOpen ? "flex" : "hidden"} lg:flex`}
        >
          <div
            className={`flex flex-col lg:flex-row lg:justify-between sm:items-center gap-4 lg:gap-8 ${mobileMenuOpen ? "flex-col items-start max-sm:w-screen px-4" : "flex-row"}`}
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                role="menuitem"
                className="flex gap-2 w-full sm:w-fit text-[14px] font-figtree font-[0] text-center lg:text-left uppercase transition-colors py-2 lg:py-0 border-b lg:border-b-0 group"
              >
                <AnimatedUnderline underlineColor="black">
                  <span className="tracking-[3px] sm:tracking-widest">
                    {link.name}
                  </span>
                </AnimatedUnderline>
                {link.name == "Jewellery" || link.name == "Gemstones" ? (
                  <HiArrowLongRight className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] md:hidden hover:scale-110 transition-transform" />
                ) : null}
              </Link>
            ))}
          </div>
        </nav>

        {/* Action Icons */}
        <div className="flex flex-row justify-end items-center sm:gap-6 transition-all duration-700 mt-1 sm:mt-3 lg:mt-0">
          {/* Icons */}
          <div
            className={`${mobileMenuOpen ? "flex" : "hidden"} md:flex flex-row items-center gap-2 sm:gap-6`}
          >
            <button aria-label="Search">
              <IoSearchOutline className="w-[18px] h-[18px] hover:scale-110 transition-transform" />
            </button>

            <button aria-label="Wishlist">
              <PiHeart className="w-[18px] h-[18px] hover:scale-110 transition-transform" />
            </button>

            <div className="relative">
              <button aria-label="Shopping cart">
                <PiShoppingCartSimple className="w-[18px] h-[18px] hover:scale-110 transition-transform -mb-1.5" />
              </button>
              <span className="absolute top-[1px] sm:top-[2px] right-0 translate-x-1 bg-white text-primary text-[8px] sm:text-[9px] font-figtree font-bold rounded-full flex items-center justify-center border border-primary w-3 h-3 sm:pt-[1px]">
                1
              </span>
            </div>

            <button aria-label="User account">
              <PiUser className="w-[18px] h-[18px] hover:scale-110 transition-transform" />
            </button>
          </div>
          {/* Hamburger Menu (Mobile only) */}
          <button
            className="block lg:hidden p-2"
            aria-label="Open menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <IoCloseOutline className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
