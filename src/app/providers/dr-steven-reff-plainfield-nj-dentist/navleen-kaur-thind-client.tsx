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
    name: "Dr. Navleen Kaur Thind, DDS",
    title: "Family Dentist",
    image: "/Images/Team/Dr. Navleen Kaur Thind, DDS.avif",
    description: `Dr. Navleen Kaur Thind, DDS, is a highly trained and experienced dentist practicing in Trenton, NJ. She provides all general dentistry services including, but not limited to, Extractions, Fillings, Whitening, Scaling and Root Planning, Crowns, Bridges, Root Canals, Quick Ortho/Invisible Braces (Six Month Smiles®), Dentures, Oral Cancer Screenings, Smile Makeover, Pediatric Dentistry, and Mouth Guards. Dr. Thind aims to provide the most advanced and pain-free dental care to our patients at very affordable prices during times that suit them the best.

The brand new Capitol Smiles Dental practice is warm and welcoming to all members of the community seeking dental treatment. Dr. Thind uses the most advanced equipment and techniques available including digital x-rays, Zoom Whitening and Six Month Smiles®. The office includes a game room with an X-Box and a separate meditation and healing room, to allow patients a variety of options to unwind and relax from their day, before or after receiving treatment.

Dr. Thind trained at the New York University College of Dentistry and is certified by the National Board of Dental Examiners. She completed her General Practice Residency at the University of Medicine and Dentistry of New Jersey.

As a proud New Jerseyan, Dr. Thind currently lives in the nearby Lawrenceville community. She is an active community volunteer with local school activities and annual fairs. When she is not providing gentle and caring dental services, she spends time with her husband and two children, practices yoga and travels.

Dr. Thind's practice welcomes you to make your appointment conveniently online 24 hours a week, or by calling us. We accept walk-ins, and offers appointments six days a week. She accepts all major insurances and is welcoming new patients.`,
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="details-page-header-section">
        <h1>
          Dr. Navleen Kaur Thind, DDS | Personalized Dental Care for Every
          Patient
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
                alt="Dr. Navleen Kaur Thind, DDS at Capitol Smiles Dental in Trenton"
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
