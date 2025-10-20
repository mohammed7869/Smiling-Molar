"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import BookingModal from "@/app/booking/bookingScreen";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isServicesAreasOpen, setIsServicesAreasOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsServicesOpen(false); // Close services submenu when toggling main menu
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const toggleServicesAreas = () => {
    setIsServicesAreasOpen(!isServicesAreasOpen);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 bg-white shadow transition-all duration-300 ${
        isScrolled ? "py-2 lg:py-4" : "py-3 lg:py-6"
      }`}
    >
      <div className=" mx-auto flex items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/Images/Smiling Molar Header.png"
            alt="Smiling Molar Dental Logo"
            width={isScrolled ? 130 : 150}
            height={isScrolled ? 80 : 100}
            className="hidden lg:block transition-all duration-300"
            priority
            sizes="(max-width: 1024px) 0px, 220px"
            quality={95} // High quality for logo
          />
          <Image
            src="/Images/Smiling Molar.png"
            alt="Smiling Molar Dental Logo"
            width={isScrolled ? 32 : 42}
            height={isScrolled ? 18 : 24}
            className="block lg:hidden transition-all duration-300"
            priority
            sizes="(max-width: 1024px) 42px, 0px"
            quality={95} // High quality for logo
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-6 text-sm font-medium text-gray-700">
          <Link href="/" className="hover:text-primary transition">
            Home
          </Link>
          <Link
            href="/about-smiling-molar-dental-plainfield-nj"
            className="hover:text-primary transition"
          >
            About
          </Link>
          <Link href="/providers" className="hover:text-primary transition">
            Providers
          </Link>

          {/* Services with Desktop Dropdown */}
          <div className="relative group">
            <Link
              href="/services"
              className="hover:text-primary transition flex items-center gap-1"
            >
              Services
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </Link>

            {/* Desktop Dropdown */}
            <div className="absolute -left-38 mt-2 w-[100vh] max-w-5xl bg-white border shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-40 rounded-lg">
              <div className="grid grid-cols-4 gap-6 p-6 text-sm">
                {[
                  {
                    name: "Emergency Dentistry",
                    link: "emergency-dentistry-maplewood-nj",
                  },
                  {
                    name: "Root Canal",
                    link: "root-canal-treatment-maplewood-nj",
                  },
                  { name: "Oral Surgery", link: "oral-surgery-maplewood-nj" },
                  {
                    name: "Cosmetic Dentistry",
                    link: "cosmetic-dentistry-maplewood-nj",
                  },
                  {
                    name: "Dental Fillings",
                    link: "dental-fillings-maplewood-nj",
                  },
                  {
                    name: "Dental Implants",
                    link: "dental-implants-maplewood-nj",
                  },
                  { name: "Orthodontics", link: "orthodontics-maplewood-nj" },
                  {
                    name: "Crowns and Bridges",
                    link: "crowns-and-bridges-maplewood-nj",
                  },
                  {
                    name: "Dental Emergencies",
                    link: "dental-emergencies-maplewood-nj",
                  },
                  {
                    name: "Tooth Extraction",
                    link: "tooth-extraction-maplewood-nj",
                  },
                  {
                    name: "Whitening & Veneers",
                    link: "teeth-whitening-and-veneers-maplewood-nj",
                  },
                  {
                    name: "Invisalign",
                    link: "invisalign-clear-aligners-maplewood-nj",
                  },
                  {
                    name: "Kids & Children Dentistry",
                    link: "kids-and-children-dentistry-maplewood-nj",
                  },
                  {
                    name: "Permanent Teeth Replacement",
                    link: "permanent-teeth-replacement-maplewood-nj",
                  },
                  {
                    name: "Sports Dentistry",
                    link: "sports-dentistry-maplewood-nj",
                  },
                  {
                    name: "Wisdom Teeth",
                    link: "wisdom-teeth-removal-maplewood-nj",
                  },
                  { name: "Endodontics", link: "endodontics-maplewood-nj" },
                  {
                    name: "Same-Day Dentistry",
                    link: "same-day-dentistry-maplewood-nj",
                  },
                  {
                    name: "Painless Treatment",
                    link: "painless-dental-treatment-maplewood-nj",
                  },
                  { name: "Perio Protect", link: "perio-protect-maplewood-nj" },
                  {
                    name: "Halitosis",
                    link: "halitosis-treatment-maplewood-nj",
                  },
                ].map((service, index) => (
                  <Link
                    key={index}
                    href={`/services/${service.link}`}
                    className="text-gray-700 hover:text-primary hover:underline transition"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            href="/patient-reviews-plainfield-nj"
            className="hover:text-primary transition"
          >
            Reviews
          </Link>
          <Link href="/dental-blog" className="hover:text-primary transition">
            Blogs
          </Link>
          <Link
            href="/contact-community-smiles-plainfield-nj"
            className="hover:text-primary transition"
          >
            Contact
          </Link>
          <div className="relative group">
            <span className="hover:text-primary transition flex items-center gap-1 cursor-pointer">
              Services Areas
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>

            {/* Desktop Dropdown */}
            <div className="absolute -left-5 mt-2 w-80 max-w-5xl bg-white border shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-40 rounded-lg">
              <div className="grid grid-cols-1 gap-6 p-6 text-sm">
                {[
                  "Plainfield, NJ",
                  "North Plainfield, NJ",
                  "South Plainfield, NJ",
                  "Scotch Plains, NJ",
                ].map((service, index) => {
                  let slug = "";
                  if (service === "Plainfield, NJ") {
                    slug = "plainfield-nj-dentist-near-you";
                  }
                  if (service === "North Plainfield, NJ") {
                    slug = "north-plainfield-nj-dentist-near-you";
                  }
                  if (service === "South Plainfield, NJ") {
                    slug = "south-plainfield-nj-dentist-near-you";
                  }
                  if (service === "Scotch Plains, NJ") {
                    slug = "scotch-plains-nj-dentist-near-you";
                  }
                  return slug ? (
                    <Link
                      key={index}
                      href={`/service-areas/${slug}`}
                      className="text-gray-700 hover:text-primary hover:underline transition"
                    >
                      {service}
                    </Link>
                  ) : (
                    <span key={index} className="text-gray-500">
                      {service}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex gap-3">
          <a
            href="tel:9082642357"
            className="border border-primary text-primary rounded-lg px-4 py-3 hover:bg-blue-50 text-sm font-medium transition"
          >
            (908) 264-2357
          </a>
          <button
            onClick={() => setIsBookingOpen(true)}
            className="bg-primary hover:bg-secondary/80 text-white rounded-lg px-4 py-3 text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Book Online
          </button>
        </div>

        {/* Mobile Buttons and Menu Toggle */}
        <div className="flex lg:hidden items-center gap-2">
          {/* Mobile Action Buttons */}
          <a
            href="tel:9082642357"
            className="border border-primary text-primary rounded-lg px-4 py-3 hover:bg-blue-50 text-xs font-medium transition"
          >
            (908) 264-2357
          </a>
          <button
            onClick={() => setIsBookingOpen(true)}
            className="bg-primary text-white rounded-lg px-4 py-3 hover:from-blue-700 hover:to-cyan-700 text-xs font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Book Online
          </button>

          {/* Hamburger Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="ml-2 p-2 rounded-lg hover:bg-gray-100 transition"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`block w-5 h-0.5 bg-gray-600 transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-1" : ""
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-gray-600 transition-all duration-300 mt-1 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-gray-600 transition-all duration-300 mt-1 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-1" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 lg:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <Image
              src="/Images/Smiling Molar Header.png"
              alt="Smiling Molar Dental Logo"
              width={138}
              height={40}
              loading="lazy"
              sizes="138px"
              quality={95} // High quality for logo
            />
            <button
              onClick={closeMobileMenu}
              className="p-2 rounded-lg hover:bg-gray-100 transition"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Items */}
          <nav className="flex-1 overflow-y-auto">
            <div className="py-2">
              <Link
                href="/"
                className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-primary transition border-b"
                onClick={closeMobileMenu}
              >
                Home
              </Link>
              <Link
                href="/about-smiling-molar-dental-plainfield-nj"
                className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-primary transition border-b"
                onClick={closeMobileMenu}
              >
                About
              </Link>
              <Link
                href="/providers"
                className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-primary transition border-b"
                onClick={closeMobileMenu}
              >
                Providers
              </Link>

              {/* Services with Mobile Submenu */}
              <div className="border-b">
                <button
                  onClick={toggleServices}
                  className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-primary transition"
                >
                  Services
                  <svg
                    className={`w-4 h-4 transform transition-transform ${
                      isServicesOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Services Submenu */}
                {isServicesOpen && (
                  <div className="bg-gray-50 px-4 py-2">
                    <div className="grid grid-cols-2 gap-3 mt-2 text-sm">
                      {[
                        {
                          name: "Emergency Dentistry",
                          link: "emergency-dentistry-maplewood-nj",
                        },
                        {
                          name: "Root Canal",
                          link: "root-canal-treatment-maplewood-nj",
                        },
                        {
                          name: "Oral Surgery",
                          link: "oral-surgery-maplewood-nj",
                        },
                        {
                          name: "Cosmetic Dentistry",
                          link: "cosmetic-dentistry-maplewood-nj",
                        },
                        {
                          name: "Dental Fillings",
                          link: "dental-fillings-maplewood-nj",
                        },
                        {
                          name: "Dental Implants",
                          link: "dental-implants-maplewood-nj",
                        },
                        {
                          name: "Orthodontics",
                          link: "orthodontics-maplewood-nj",
                        },
                        {
                          name: "Crowns and Bridges",
                          link: "crowns-and-bridges-maplewood-nj",
                        },
                        {
                          name: "Dental Emergencies",
                          link: "dental-emergencies-maplewood-nj",
                        },
                        {
                          name: "Tooth Extraction",
                          link: "tooth-extraction-maplewood-nj",
                        },
                        {
                          name: "Whitening & Veneers",
                          link: "teeth-whitening-and-veneers-maplewood-nj",
                        },
                        {
                          name: "Invisalign",
                          link: "invisalign-clear-aligners-maplewood-nj",
                        },
                        {
                          name: "Kids & Children Dentistry",
                          link: "kids-and-children-dentistry-maplewood-nj",
                        },
                        {
                          name: "Permanent Teeth Replacement",
                          link: "permanent-teeth-replacement-maplewood-nj",
                        },
                        {
                          name: "Sports Dentistry",
                          link: "sports-dentistry-maplewood-nj",
                        },
                        {
                          name: "Wisdom Teeth",
                          link: "wisdom-teeth-removal-maplewood-nj",
                        },
                        {
                          name: "Endodontics",
                          link: "endodontics-maplewood-nj",
                        },
                        {
                          name: "Same-Day Dentistry",
                          link: "same-day-dentistry-maplewood-nj",
                        },
                        {
                          name: "Painless Treatment",
                          link: "painless-dental-treatment-maplewood-nj",
                        },
                        {
                          name: "Perio Protect",
                          link: "perio-protect-maplewood-nj",
                        },
                        {
                          name: "Halitosis",
                          link: "halitosis-treatment-maplewood-nj",
                        },
                      ].map((service, index) => (
                        <Link
                          key={index}
                          href={`/services/${service.link}`}
                          onClick={closeMobileMenu}
                          className="text-gray-600 hover:text-primary hover:underline transition"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/patient-reviews-plainfield-nj"
                className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-primary transition border-b"
                onClick={closeMobileMenu}
              >
                Reviews
              </Link>
              <Link
                href="/dental-blog"
                className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-primary transition border-b"
                onClick={closeMobileMenu}
              >
                Blogs
              </Link>
              <Link
                href="/contact-community-smiles-plainfield-nj"
                className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-primary transition border-b"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
              <div className="border-b">
                <button
                  onClick={toggleServicesAreas}
                  className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-primary transition"
                >
                  Service Areas
                  <svg
                    className={`w-4 h-4 transform transition-transform ${
                      isServicesAreasOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Services Submenu */}
                {isServicesAreasOpen && (
                  <div className="bg-gray-50 px-4 py-2">
                    <div className="grid grid-cols-2 gap-3 mt-2 text-sm">
                      {[
                        "Plainfield, NJ",
                        "North Plainfield, NJ",
                        "South Plainfield, NJ",
                        "Scotch Plains, NJ",
                      ].map((service, index) => {
                        let slug = "";
                        if (service === "Plainfield, NJ") {
                          slug = "plainfield-nj-dentist-near-you";
                        }
                        return slug ? (
                          <Link
                            key={index}
                            href={`/service-areas/${slug}`}
                            onClick={closeMobileMenu}
                            className="text-gray-600 hover:text-primary hover:underline transition"
                          >
                            {service}
                          </Link>
                        ) : (
                          <span key={index} className="text-gray-500">
                            {service}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </nav>
        </div>
      </div>
      <BookingModal open={isBookingOpen} setOpen={setIsBookingOpen} />
    </header>
  );
}
