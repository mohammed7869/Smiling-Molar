"use client";

import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

const providers = [
  {
    name: "Dr. Neetu Bhanushali, DDS",
    image: "/Images/Team/Neetu Bhanushali.png",
    link: "/providers/dr-neetu-bhanushali-plainfield-nj-dentist",
    alt: "Dr. Neetu Bhanushali, DDS at Smiling Molar Dental in Plainfield",
  },
  {
    name: "Dr. Steven Reff, DDS",
    image: "/Images/Team/Steven Reff.png",
    link: "/providers/dr-steven-reff-plainfield-nj-dentist",
    alt: "Dr. Steven Reff, DDS at Smiling Molar Dental in Plainfield",
  },
];

export default function ProvidersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white pb-12">
      {/* Header Section with blue background */}
      <div className="details-page-header-section">
        <h1>Meet Our Dentists at Smiling Molar Dental </h1>
        <h2>Compassionate, Experienced Care for Children & Adults</h2>
      </div>
      <div className="max-w-7xl mt-6 mx-auto px-2 sm:px-4 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8 md:gap-3 justify-items-center">
          {providers.map((provider, idx) => (
            <div
              key={provider.name}
              className={clsx(
                "relative bg-white rounded-xl shadow-lg overflow-hidden flex flex-col items-center w-full max-w-[450px] transition-transform hover:-translate-y-2 hover:shadow-xl border border-blue-100"
              )}
            >
              <div className="w-full h-1/3 relative min-h-[260px]">
                <Image
                  src={provider.image}
                  alt={provider.alt}
                  fill
                  className="object-contain object-center rounded-t-xl"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px"
                  priority={idx < 3}
                />
                <div className="absolute" />
              </div>
              <hr className="w-full border-t border-gray-500" />
              <div className="flex-1 bg-secondary flex flex-col justify-end items-center p-3 sm:p-4 w-full">
                <h2 className="text-sm sm:text-base lg:text-lg font-bold text-white mb-2 text-center leading-tight">
                  {provider.name}
                </h2>
                <Link
                  href={provider.link}
                  className="border border-white text-white rounded-lg px-3 py-2 hover:bg-primary text-sm font-medium mb-2 transition"
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
