import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata("providers");
// };

const providers = [
  {
    name: "Dr. Urvashi Banerjee, DMD",
    image: "/Images/Dr Urvashi Banerjee DMD.webp",
    link: "/providers/urvashi-banerjee-maplewood-nj-dentist",
  },
];

export default function ProvidersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white pb-12">
      {/* Header Section with blue background */}
      <div className="details-page-header-section">
        <h1> Meet Our Trusted Dental Doctor in Maplewood, NJ </h1>
        <h2>Compassionate, Experienced Care from the Tulip Dental Team</h2>
      </div>
      <div className="max-w-7xl mt-6 mx-auto px-2 sm:px-4 md:px-8">
        <div className="flex gap-8 md:gap-12 items-center justify-center">
          {providers.map((provider, idx) => (
            <div
              key={provider.name}
              className={clsx(
                "relative bg-white rounded-xl shadow-lg overflow-hidden flex flex-col items-center w-full transition-transform hover:-translate-y-2 hover:shadow-xl border border-blue-100",
                "md:w-1/3 h-72 sm:h-80 md:h-80 lg:h-72 xl:h-80",
                "mx-auto"
              )}
            >
              <div className="w-full h-2/3 relative min-h-[140px]">
                <Image
                  src={provider.image}
                  alt="Dr. Urvashi Banerjee, DMD at Tulip Dental Maplewood"
                  fill
                  className="object-contain object-center rounded-t-xl"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px"
                  priority={idx < 3}
                />
                <div className="absolute" />
              </div>
              <hr className="w-full border-t border-gray-500" />

              <div className="flex-1 flex flex-col justify-end items-center p-3 sm:p-4 w-full">
                <h2 className="text-sm sm:text-base lg:text-lg font-bold text-primary mb-2 text-center leading-tight">
                  {provider.name}
                </h2>
                <Link
                  href={provider.link}
                  className="bg-primary hover:bg-secondary/80 text-white rounded-lg px-3 py-3 text-xs sm:text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
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
