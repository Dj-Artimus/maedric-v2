import Image from "next/image";
import Link from "next/link";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import {
  PiFacebookLogoFill,
  PiGlobeHemisphereWest,
  PiInstagramLogoFill,
  PiTelegramLogoFill,
  PiTiktokLogoFill,
  PiWallet,
  PiYoutubeLogoFill,
} from "react-icons/pi";
// import AnimatedUnderline from "../ui/AnimatedUnderline";

// Explore section links
const exploreLinks = [
  { name: "Gemstones", href: "/gemstones" },
  { name: "Jewellery", href: "/jewellery" },
  { name: "Education", href: "/education" },
  { name: "Services", href: "/services" },
];

// Contact section links
const contactLinks = [
  { name: "Contact Us", href: "/contact" },
  { name: "About Us", href: "/about" },
  { name: "Terms & Conditions", href: "/terms" },
  { name: "Privacy Policy", href: "/privacy" },
];

/**
 * Footer
 *
 * Renders the main site footer with navigation, contact, newsletter, and social links.
 *
 * @returns {JSX.Element} The footer component for the Maedric site.
 *
 * @example
 * <Footer />
 */
const Footer: React.FC = () => (
  <footer className="bg-primary text-neutral pt-24 pb-6">
    <div className="sm:max-w-xl md:max-w-2xl md1:max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto px-6 lg:px-4">
      <div className="lg:block grid grid-cols-1 md:gap-12 items-end-safe md:max-lg:px-8 ">
        {/* Upper sections: About, Explore, Contact, Newsletter */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-16 mb-4 md:mb-8">
          {/* About section: Logo, tagline, and description */}
          <div className="sm:col-span-2 md:col-span-1">
            {/* Logo and Tagline */}
            <div className={`transition-all duration-300 flex flex-col mb-5`}>
              <span
                className={`font-cinzel font-normal text-[28px] sm:text-[42px] text-headerText leading-none select-none tracking-[0]`}
              >
                MAEDRIC
              </span>
              <span className="font-cinzel font-normal text-[10px] sm:text-[15px] text-headerText uppercase tracking-[0.12em] select-none">
                Gemstones & Jewellery
              </span>
            </div>
            <p className="font-figtree text-[15px] text-neutral/80 lg:text-justify leading-5">
              At Maedric, we aim to make the beauty of coloured gemstones more
              accessible, inviting new collectors and jewellery lovers to
              appreciate true quality and craftsmanship.
            </p>
          </div>
          {/* Explore section: Navigation links */}
          <div className="md:place-items-center">
            <h4 className="font-quiche text-accent font-semibold text-[20px] py-1 md:-ms-6 mb-3 border-b-[0.5px] border-neutral w-fit">
              Explore
            </h4>
            <ul className="font-figtree text-[15px] text-neutral/50 space-y-2.5">
              {exploreLinks.map((link) => (
                <li
                  key={link.name}
                  className="flex items-center hover:text-white group w-fit"
                >
                  <FiChevronRight className="inline-block w-4 h-4 mr-1" />
                  {/* <AnimatedUnderline underlineColor="accent"> */}
                  <Link href={link.href}>{link.name}</Link>
                  {/* </AnimatedUnderline> */}
                </li>
              ))}
            </ul>
          </div>
          {/* Contact section: Contact and policy links */}
          <div className="">
            <h4 className="font-quiche text-accent font-semibold text-[20px] py-1 ms-2 mb-3 border-b-[0.5px] border-neutral w-fit">
              Contact
            </h4>
            <ul className="font-figtree text-[15px] text-neutral/50 space-y-2.5">
              {contactLinks.map((link) => (
                <li
                  key={link.name}
                  className="flex items-center hover:text-white group w-fit"
                >
                  <FiChevronRight className="inline-block w-4 h-4 mr-1" />
                  {/* <AnimatedUnderline underlineColor="accent"> */}
                  <Link href={link.href}>{link.name}</Link>
                  {/* </AnimatedUnderline> */}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Payment Logos */}
      <div className="flex space-x-2 mx-auto w-full justify-center my-6">
        <Image
          src="/images/stripe.png"
          alt="Stripe"
          width={40}
          height={24}
          loading="lazy"
          className="w-10 h-6 object-contain"
        />
        <Image
          src="/images/american_express.png"
          alt="American Express"
          width={40}
          height={24}
          loading="lazy"
          className="w-10 h-6 object-contain"
        />
        <Image
          src="/images/visa.png"
          alt="Visa"
          width={40}
          height={24}
          loading="lazy"
          className="w-10 h-6 object-contain"
        />
        <Image
          src="/images/mastercard.png"
          alt="Mastercard"
          width={40}
          height={24}
          loading="lazy"
          className="w-10 h-6 object-contain"
        />
        <Image
          src="/images/jcb.png"
          alt="JCB"
          width={40}
          height={24}
          loading="lazy"
          className="w-10 h-6 object-contain"
        />
        <Image
          src="/images/unionpay.png"
          alt="UnionPay"
          width={40}
          height={24}
          loading="lazy"
          className="w-10 h-6 object-contain"
        />
        <Image
          src="/images/atome.png"
          alt="Atome"
          width={40}
          height={24}
          loading="lazy"
          className="w-10 h-6 object-contain"
        />
      </div>

      {/* Divider for desktop */}
      <div className="border-t-[0.3px] border-neutral/20 pt-6" />

      <div className="bg-primary w-full lg:-mt-4 lg:py-2 text-neutral-100 text-sm">
        <div className="relative w-full mx-auto flex items-center justify-between gap-4 pb-16 sm:pb-10 md:pb-0">
          {/* Left Section: Language and Currency Dropdowns */}
          <div className="flex items-center space-x-2 xs:space-x-4">
            {/* Language Dropdown */}
            <div className="relative">
              <button className="flex items-center space-x-2 text-neutral/60 border border-neutral-200 px-2 py-1 rounded-[1px] hover:text-accent">
                <PiGlobeHemisphereWest className="h-5 w-5" />
                <FiChevronDown className="h-5 w-5" />
              </button>
            </div>
            {/* Currency Dropdown */}
            <div className="relative">
              <button className="flex items-center space-x-2 text-neutral/60 border border-neutral-200 px-2 py-1 rounded-[1px] hover:text-accent">
                <PiWallet className="h-5 w-5" />
                <FiChevronDown className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Middle Section: Copyright */}
          <div className="absolute w-full bottom-0 left-0 md:static font-figtree text-[14px] text-neutral text-center">
            <span>
              © 2025 Maedric. All rights reserved. Crafted with care, inspired
              by legacy.
            </span>
          </div>

          {/* Right Section: Social Media Icons */}
          <div className="flex space-x-2 xs:space-x-4">
            <Link
              href="https://www.facebook.com/profile.php?id=61578280781352"
              className="text-neutral hover:text-accent transition duration-150"
              aria-label="Facebook"
            >
              <PiFacebookLogoFill className="h-6 w-6" />
            </Link>
            <Link
              href="https://instagram.com/maedric_gems"
              className="text-neutral-200 hover:text-accent transition duration-150"
              aria-label="Instagram"
            >
              <PiInstagramLogoFill className="h-6 w-6" />
            </Link>
            <Link
              href="https://www.tiktok.com/@maedric_gems"
              className="text-neutral-200 hover:text-accent transition duration-150"
              aria-label="TikTok"
            >
              <PiTiktokLogoFill className="h-6 w-6" />
            </Link>
            <Link
              href="https://www.youtube.com/@Maedric"
              className="text-neutral-200 hover:text-accent transition duration-150"
              aria-label="YouTube"
            >
              <PiYoutubeLogoFill className="h-6 w-6" />
            </Link>
            <Link
              href="https://t.me/@Maedric_Gems"
              className="text-neutral-200 hover:text-accent transition duration-150"
              aria-label="Telegram"
            >
              <PiTelegramLogoFill className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
