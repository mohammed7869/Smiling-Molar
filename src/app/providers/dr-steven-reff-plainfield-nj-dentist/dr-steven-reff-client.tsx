"use client";
import React from "react";
import Image from "next/image";
import clsx from "clsx";
import BookCallBtn from "@/app/services/book-call-btn";

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

export default function ClientPage() {
  const doctor = {
    name: "Dr. Steven Reff, DDS",
    title: "Family Dentist",
    image: "/Images/Team/Steven Reff.png",
    description: `Dr. Steven Reff uses his extensive experience to provide the highest level of surgical care in a gentle, compassionate manner. He received his D.D.S. (Doctor of Dental Surgery) degree from the University of Maryland School of Dentistry. While there, he graduated at the top of his class and was honored by his faculty by being inducted into the Gamma Pi Delta Prosthetic Honors Society. He also served as President on a variety of committees including the Dental School's Global Outreach Program and Oral and Maxillofacial Surgery study group.

Following dental school, Dr. Reff completed his surgical-based training at Columbia University College of Dental Medicine/New York Presbyterian Hospital. Upon completing his training Dr. Reff began treating patients in private practice. He was also invited to take a position at Columbia University College of Dental Medicine teaching postgraduate candidates and future dentists and was additionally appointed admitting privileges.

When he is not practicing dentistry or attending professional obligations, he enjoys hiking with his Yellow Lab, fly fishing, and relaxing with his wife Allison and their children.`,
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="details-page-header-section">
        <h1>
          Dr. Steven Reff, DDS | Dedicated to Healthy Smiles in Plainfield &
          Beyond
        </h1>
      </div>
      {/* Main Content Section */}
      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          {/* Doctor Image */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-start">
            <div className="relative w-64 h-80 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={doctor.image}
                alt="Dr. Steven Reff, DDS at Smiling Molar Dental in Plainfield"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
          {/* Doctor Info */}
          <div className="flex-1 w-full">
            <h2 className="text-3xl font-semibold mb-2">{doctor.name}</h2>
            {/* <div className="text-lg text-gray-700 mb-2">{doctor.title}</div> */}
            {/* <StarRating rating={5} /> */}
            {/* <hr className="mb-6" /> */}
            <p className="leading-relaxed whitespace-pre-line text-justify">
              {doctor.description}
            </p>
          </div>
        </div>
        <BookCallBtn />
      </div>
    </div>
  );
}
