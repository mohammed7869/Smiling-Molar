import type { Metadata } from "next";
import clsx from "clsx";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata(
  "patient-reviews-maplewood-nj"
);

const reviews = [
  {
    name: "Alisha M.",
    date: "Dec 15, 2024",
    rating: 5,
    text: "I switched to Smiling Molar Dental after years at another office, and I couldn't be happier. Dr. Neetu took the time to walk me through my treatment options and made me feel completely at ease. The staff is warm, professional, and genuinely cares. My teeth have never looked better!",
    image: "/Images/836.webp",
  },
  {
    name: "Julian P.",
    date: "Dec 10, 2024",
    rating: 5,
    text: "I had sudden tooth pain early in the morning, and they managed to see me the same day. Dr. Steven Reff treated the problem quickly and explained everything clearly. I walked out pain-free within an hour. I'm so grateful for how responsive and kind they were.",
    image: "/Images/837.webp",
  },
  {
    name: "Priya S.",
    date: "Dec 05, 2024",
    rating: 5,
    text: "My 7-year-old needed a small filling, and the entire team made the experience positive for her. Dr. Neetu was patient, gentle, and explained the steps in a way my daughter could understand. She left the appointment smiling and unafraid. ",
    image: "/Images/836.webp",
  },
  {
    name: "Michael L.",
    date: "Nov 28, 2024",
    rating: 5,
    text: "From the moment I walked in, I noticed how modern, clean, and welcoming the office was. The front desk staff was efficient, and my hygienist was incredibly thorough. Dr. Reff gave me a detailed treatment plan and answered all my questions without rushing.",
    image: "/Images/837.webp",
  },
  {
    name: "Tania R.",
    date: "Nov 20, 2024",
    rating: 5,
    text: "I started my Implants treatment with Smiling Molar Dental, and it's been such a smooth process. Dr. Steven Reff customized my plan perfectly, and the team checks in regularly to make sure everything is on track. I already see a huge difference in my smile!",
    image: "/Images/836.webp",
  },
  {
    name: "James K.",
    date: "Nov 15, 2024",
    rating: 5,
    text: "The entire experience at Smiling Molar Dental feels personal and professional. They make scheduling easy, the staff is friendly, and both doctors take their time with each patient. I've referred my family and neighbors because they genuinely care.",
    image: "/Images/837.webp",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center mb-2">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={clsx(
            "w-5 h-5",
            i < rating ? "text-yellow-400" : "text-gray-300"
          )}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white pb-12">
      {/* Header Section */}
      <div className="details-page-header-section">
        <h1>Patient Reviews for Smiling Molar Dental</h1>
        <h2>Real Experiences from Families Across Plainfield & Beyond</h2>
      </div>
      <div className="max-w-7xl mt-10 mx-auto px-2 sm:px-4 md:px-8">
        <h2 className="text-center text-lg sm:text-xl font-semibold mb-8">
          Patient Reviews
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {reviews.map((review) => (
            <div
              key={review.name + review.date}
              className="relative bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col items-center w-full transition-transform hover:-translate-y-2 hover:shadow-2xl border border-teal-100 h-72 sm:h-80 md:h-80 lg:h-80 xl:h-80 mx-auto"
              style={{ minWidth: 0 }}
            >
              <div className="flex-1 flex flex-col justify-between items-center p-4 sm:p-6 w-full">
                <div className="mb-3 flex justify-center w-full">
                  <StarRating rating={review.rating} />
                </div>
                <p className="text-sm sm:text-base  mb-1 leading-relaxed flex-1 flex ">
                  {review.text}
                </p>
                <div className="mt-auto text-xs sm:text-sm text-gray-500 text-center w-full">
                  <span className="font-semibold">{review.name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
