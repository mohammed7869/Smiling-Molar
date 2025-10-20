import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata("services");

const services = [
  {
    title: "Emergency Dentistry",
    image: "/Images/emergency-dentistry.avif",
    alt: "Emergency dental care services for urgent oral health issues and dental emergencies",
    link: "/services/emergency-dentistry-maplewood-nj",
  },
  {
    title: "Root Canal",
    image: "/Images/root-canal.avif",
    alt: "Root Canal Specialists at Smiling Molar Dental in Plainfield",
    link: "/services/root-canal-treatment-maplewood-nj",
  },
  {
    title: "Oral Surgery",
    image: "/Images/oral-surgery.avif",
    alt: "Oral Surgery at Smiling Molar Dental in Plainfield, New Jersey",
    link: "/services/oral-surgery-maplewood-nj",
  },
  {
    title: "Cosmetic Dentistry",
    image: "/Images/cosmetic-dentistry.avif",
    alt: "Cosmetic Dentistry at Smiling Molar Dental in Plainfield",
    link: "/services/cosmetic-dentistry-maplewood-nj",
  },
  {
    title: "Dental Fillings",
    image: "/Images/dental-filling.avif",
    alt: "Dental Fillings at Smiling Molar Dental in Plainfield, NJ",
    link: "/services/dental-fillings-maplewood-nj",
  },
  {
    title: "Dental Implants",
    image: "/Images/dental-implant.avif",
    alt: "Dental Implants at Smiling Molar Dental in Plainfield, NJ",
    link: "/services/dental-implants-maplewood-nj",
  },
  {
    title: "Orthodontics",
    image: "/Images/orthodontics.avif",
    alt: "Orthodontics treatment at Smiling Molar Dental in Plainfield",
    link: "/services/orthodontics-maplewood-nj",
  },
  {
    title: "Crowns and Bridges",
    image: "/Images/dental crown n bridge.avif",
    alt: "Dental Crowns & Bridges at Smiling Molar Dental in Plainfield, NJ",
    link: "/services/crowns-and-bridges-maplewood-nj",
  },
  {
    title: "Dental Emergencies",
    image: "/Images/dental emergencies.avif",
    alt: "Dental emergencies at Smiling Molar Dental in Plainfield",
    link: "/services/dental-emergencies-maplewood-nj",
  },
  {
    title: "Tooth Extraction",
    image: "/Images/tooth-extraction.avif",
    alt: "Tooth extractions at Smiling Molar Dental in Plainfield, New Jersey",
    link: "/services/tooth-extraction-maplewood-nj",
  },
  {
    title: "Whitening & Veneers",
    image: "/Images/whiteningveneers.avif",
    alt: "Teeth Whitening & Veneers at Tulip Dental Maplewood",
    link: "/services/teeth-whitening-and-veneers-maplewood-nj",
  },
  {
    title: "Invisalign",
    image: "/Images/invisalign.avif",
    alt: "Invisalign treatment at Smiling Molar Dental in Plainfield, NJ",
    link: "/services/invisalign-clear-aligners-maplewood-nj",
  },
  {
    title: "Kids & Children Dentistry",
    image: "/Images/kids-dentistry.avif",
    alt: "Kids & Children’s Dentistry at Smiling Molar Dental in Plainfield",
    link: "/services/kids-and-children-dentistry-maplewood-nj",
  },
  {
    title: "Permanent Teeth Replacement",
    image: "/Images/permanenet-teeth-replacement.avif",
    alt: "Permanent Teeth Replacement at Smiling Molar Dental in Plainfield, NJ",
    link: "/services/permanent-teeth-replacement-maplewood-nj",
  },
  {
    title: "Sports Dentistry",
    image: "/Images/sports-dentistry.avif",
    alt: "Sports Dentistry at Smiling Molar Dental in Plainfield, NJ",
    link: "/services/sports-dentistry-maplewood-nj",
  },
  {
    title: "Wisdom Teeth",
    image: "/Images/wisdom-tooth.avif",
    alt: "Wisdom Teeth Removal at Smiling Molar Dental in Plainfield",
    link: "/services/wisdom-teeth-removal-maplewood-nj",
  },
  {
    title: "Endodontics",
    image: "/Images/endodontics.avif",
    alt: "Endodontics at Smiling Molar Dental in Plainfield, New Jersey",
    link: "/services/endodontics-maplewood-nj",
  },
  {
    title: "Same-day Dentistry",
    image: "/Images/same-day-dentistry.avif",
    alt: "Same-Day Dental Care at Smiling Molar Dental in Plainfield, NJ",
    link: "/services/same-day-dentistry-maplewood-nj",
  },
  {
    title: "Painless Treatment",
    image: "/Images/painless-treatment.avif",
    alt: "Painless Dentistry at Smiling Molar Dental in Plainfield",
    link: "/services/painless-dental-treatment-maplewood-nj",
  },
  {
    title: "Perio Protect",
    image: "/Images/perio-protect.avif",
    alt: "Perio Protect gum disease treatment at Smiling Molar Dental in Plainfield, NJ",
    link: "/services/perio-protect-maplewood-nj",
  },
  {
    title: "Halitosis",
    image: "/Images/halitosis.avif",
    alt: "Halitosis treatment at Tulip Dental Maplewood",
    link: "/services/halitosis-treatment-maplewood-nj",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white pb-8 sm:pb-12">
      {/* Header Section with blue background */}
      <div className="w-full details-page-header-section py-8 sm:py-12 px-4 md:px-0 mb-8 sm:mb-12">
        <div className="text-center">
          <h1>Comprehensive Dental Services in Maplewood, NJ</h1>
          <h2 className="text-center">
            Family, Cosmetic & Restorative Dentistry Designed for You{" "}
          </h2>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="relative bg-white rounded-xl shadow-lg overflow-hidden flex flex-col items-center w-full transition-transform hover:-translate-y-2 hover:shadow-xl border border-blue-100 h-64 sm:h-72 lg:h-80"
            >
              <div className="w-full h-2/3 relative">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  className="object-cover object-center rounded-t-xl"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, (max-width: 1536px) 25vw, 20vw"
                  priority={services.indexOf(service) < 5}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent" />
              </div>
              <div className="flex-1 flex flex-col justify-end items-center p-3 sm:p-4 w-full">
                <h2 className="text-sm sm:text-base lg:text-lg font-bold text-primary mb-2 text-center leading-tight">
                  {service.title}
                </h2>
                <Link
                  href={service.link}
                  className=" flex flex-col bg-primary hover:bg-secondary/80 text-white rounded-lg px-1 md:px-4 py-3 text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
