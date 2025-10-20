"use client";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#3E3E3E] text-white py-8 px-2 sm:px-4 md:px-8">
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
        {/* Left: Logo & About */}
        <div className="space-y-4 col-span-1">
          <div className="flex items-center gap-2 mb-2">
            <Image
              src="/Images/Smiling Molar Header.png"
              alt="Smiling Molar Dental Logo"
              width={160}
              height={100}
              className="w-32 sm:w-40 md:w-48 h-auto"
              loading="lazy"
              sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, 192px"
              quality={95} // High quality for logo
            />
          </div>
          <p className="text-xs sm:text-sm text-white">
            At Smiling Molar Dental, your trusted dentist in Plainfield, NJ, our
            mission is to keep families across Plainfield, North Plainfield,
            South Plainfield, Scotch Plains, and nearby communities smiling with
            confidence. Conveniently located in the heart of Plainfield (07060),
            we offer complete dental care for all ages - including preventive
            checkups, cosmetic dentistry, Invisalign®, dental implants, and
            same-day treatments.
          </p>
          <div className="flex items-center gap-3 mt-4">
            <a href="#" onClick={(e) => e.preventDefault()}>
              <Image
                src="/Images/facebook.webp"
                alt="Facebook"
                width={24}
                height={24}
                className="w-6 h-6"
                loading="lazy"
                sizes="24px"
                quality={95} // High quality for social icons
              />
            </a>
            <a href="#" onClick={(e) => e.preventDefault()}>
              <Image
                src="/Images/instagram.webp"
                alt="Instagram"
                width={24}
                height={24}
                className="w-6 h-6"
                loading="lazy"
                sizes="24px"
                quality={95} // High quality for social icons
              />
            </a>
            <a href="#" onClick={(e) => e.preventDefault()}>
              <Image
                src="/Images/twitter.webp"
                alt="Twitter"
                width={24}
                height={24}
                className="w-6 h-6"
                loading="lazy"
                sizes="24px"
                quality={95} // High quality for social icons
              />
            </a>
          </div>
        </div>

        {/* Middle: Services Columns */}
        <div className="col-span-1 sm:col-span-1 lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-3 text-base sm:text-lg">
              Services
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link
                  href="/services/emergency-dentistry-plainfield-nj"
                  className="hover:underline"
                >
                  Emergency Dentistry
                </Link>
              </li>
              <li>
                <Link
                  href="/services/root-canal-treatment-plainfield-nj"
                  className="hover:underline"
                >
                  Root Canal
                </Link>
              </li>
              <li>
                <Link
                  href="/services/oral-surgery-plainfield-nj"
                  className="hover:underline"
                >
                  Oral Surgery
                </Link>
              </li>
              <li>
                <Link
                  href="/services/cosmetic-dentistry-plainfield-nj"
                  className="hover:underline"
                >
                  Cosmetic Dentistry
                </Link>
              </li>
              <li>
                <Link
                  href="/services/dental-fillings-plainfield-nj"
                  className="hover:underline"
                >
                  Dental Fillings
                </Link>
              </li>
              <li>
                <Link
                  href="/services/dental-implants-plainfield-nj"
                  className="hover:underline"
                >
                  Dental Implants
                </Link>
              </li>
              {/* <li><Link href="/services/orthodontics" className="hover:underline">Orthodontics</Link></li>
              <li><Link href="/services/crowns-and-bridges" className="hover:underline">Crowns and Bridges</Link></li>
              <li><Link href="/services/dental-emergencies" className="hover:underline">Dental Emergencies</Link></li>
              <li><Link href="/services/tooth-extraction" className="hover:underline">Tooth Extraction</Link></li> */}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-base sm:text-lg">
              Importance
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link
                  href="/about-smiling-molar-dental-plainfield-nj"
                  className="hover:underline"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link href="/dental-blog" className="hover:underline">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="hover:underline">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              {/* <li><Link href="/accessibility" className="hover:underline">Accessibility</Link></li> */}
              <li>
                <Link
                  href="/contact-smiling-molar-dental-plainfield-nj"
                  className="hover:underline"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/sitemap" className="hover:underline">
                  Site map
                </Link>
              </li>

              {/* <li><Link href="/services/endodontics" className="hover:underline">Endodontics</Link></li>
              <li><Link href="/services/same-day-dentistry" className="hover:underline">Same-Day Dentistry</Link></li> 
              <li><Link href="/services/painless-treatment" className="hover:underline">Painless Treatment</Link></li> 
              <li><Link href="/services/perio-protect" className="hover:underline">Perio Protect</Link></li>
              <li><Link href="/services/halitosis" className="hover:underline">Halitosis</Link></li> */}
            </ul>
          </div>
        </div>

        {/* Right: Contact Info */}
        <div className="space-y-4 col-span-1">
          <h4 className="font-semibold mb-3 text-base sm:text-lg">
            Contact Us
          </h4>
          <div className="text-xs sm:text-sm text-gray-200">
            <a
              href="https://maps.app.goo.gl/UudK2cWrBQXjdaMV9"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-2 text-sm text-[#FFFFFF] flex gap-2 items-start underline"
            >
              <MapPin size={16} className="mt-0.5" />
              1024 Park Ave Suite 6C, Plainfield, NJ 07060
            </a>

            <p className="mb-2 text-sm text-[#FFFFFF] flex gap-2 items-center">
              <Phone size={16} />{" "}
              <a href="tel:9082642357" className="underline">
                (908) 264-2357
              </a>
            </p>
            <p className="mb-2 text-sm text-[#FFFFFF] flex gap-2 items-center">
              <Mail size={16} />{" "}
              <a
                href="mailto:info@smilingmolardental.com"
                className="underline"
              >
                info@smilingmolardental.com
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="border-t border-white/20 mt-8 pt-4 flex flex-col md:flex-row items-center justify-between text-xs text-gray-300 gap-2">
        <div className="flex items-center text-white">
          {/* <div className="flex items-center"> */}
          <span>
            &copy; {new Date().getFullYear()} Smiling Molar Dental. All rights
            reserved.
          </span>
          {/* <span className="hidden md:inline"></span> */}
          {/* <span> */}
        </div>
        <div className="flex items-center text-white">
          <span>
            Designed by{" "}
            <a
              href="https://clearconceptsolutions.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300"
            >
              Clear Concept Solutions
            </a>
          </span>
          {/* </div> */}
        </div>
        <div className="flex flex-wrap gap-2 sm:gap-4 justify-center md:justify-end w-full md:w-auto text-white">
          <Link href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </Link>
          <Link href="/terms-and-conditions" className="hover:underline">
            Terms & Conditions
          </Link>
          <Link href="/accessibility" className="hover:underline">
            Accessibility
          </Link>
          <Link
            href="/contact-smiling-molar-dental-plainfield-nj"
            className="hover:underline"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </footer>
  );
}
