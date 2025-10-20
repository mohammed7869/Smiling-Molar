"use client";

import React, { useState } from "react";
import { CheckCircle } from "lucide-react";
import { Bounce, Fade } from "react-awesome-reveal";
import BookCallBtnForServiceAreas from "@/app/services/book-call-btn-for-serviceAreas";
import { useWorkingHours } from "@/lib/hooks/useWorkingHours";

export default function PlainfieldServiceAreaClient() {
  const { workingHours, loading } = useWorkingHours();
  const locations = [
    {
      id: "plainfield",
      name: "Plainfield, NJ",
      address: "1585 Springfield Avenue, Store #1, Plainfield, NJ 07060",
      phone: "908-264-2357",
      hours: [
        "Monday: 9:00 AM - 6:00 PM",
        "Tuesday: 9:00 AM - 6:00 PM",
        "Wednesday: 9:00 AM - 6:00 PM",
        "Thursday: 9:00 AM - 6:00 PM",
        "Friday: 9:00 AM - 6:00 PM",
        "Saturday: 9:00 AM - 3:30 PM",
        "Sunday: Closed",
      ],
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6047.5999171140365!2d-74.256008!3d40.72242!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3acfa56220c03%3A0x4ed24acaf264373a!2s1585%20Springfield%20Ave%2C%20Plainfield%2C%20NJ%2007060%2C%20USA!5e0!3m2!1sen!2sin!4v1755873013308!5m2!1sen!2sin",
    },
  ];

  const [selected] = useState(locations[0]);

  return (
    <div>
      {/* Header Section */}
      <div className="details-page-header-section ">
        <h1>Comprehensive Dental Care for Plainfield, NJ Families </h1>
      </div>

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col gap-16">
        {/* Top Section: Image + Intro */}
        <div className="details-page-desc-section">
          {/* Image Section */}
          <div className="image_section">
            <div className="image_section-cover">
              {/* <Zoom cascade damping={0.3} duration={800}> */}
              <div className="main-image">
                <img
                  src="/Images/Irvington.webp"
                  alt="Family & Cosmetic Dentist in Plainfield, NJ 07060"
                  className="rounded-xl"
                />
              </div>
              {/* </Zoom> */}
            </div>
          </div>

          {/* Text Section with Fade-in after delay */}
          <div className="desc-text-section">
            {/* <Fade cascade direction="up" delay={1000} duration={600}> */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
              Trusted Family & Cosmetic Dentistry in Plainfield, NJ
            </h2>
            <p>
              At Smiling Molar Dental, we're proud to be a leading dental care
              provider for families across Plainfield, New Jersey (07060). Our
              practice combines compassionate care with advanced dental
              technology to deliver services tailored to every age and smile.
            </p>
            <p>
              Whether you're looking for routine preventive checkups, cosmetic
              smile enhancements, or same-day emergency treatments, our skilled
              team ensures every visit is comfortable, personalized, and
              effective.
            </p>
            <p>
              Patients from Plainfield, North Plainfield (07062, 07063), South
              Plainfield (07080), Scotch Plains (07076), and surrounding
              communities trust us for modern dentistry that puts your comfort
              and oral health first.
            </p>
            {/* </Fade> */}
          </div>
        </div>

        {/* Comprehensive Dental Care Section */}
        <div className="flex flex-col gap-4 p-6 md:p-0">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
            Dental Services We Offer in Plainfield, NJ
          </h2>
          {/* <Fade cascade direction="up" delay={1000} duration={600}> */}
          <p>
            We go beyond basic care to provide comprehensive dental services all
            under one roof, making it easy for you and your family to receive
            consistent, high-quality treatment close to home.
          </p>

          <ul className="list-disc pl-6 space-y-4 text-sm md:text-lg">
            <li>
              <h3 className="text-lg font-semibold">
                <a
                  href="/services/emergency-dentistry-maplewood-nj"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  Emergency Dental Care
                </a>
              </h3>
              <p>
                Dental pain or accidents can happen when you least expect it.
                That's why we offer same-day emergency appointments for issues
                like severe toothaches, chipped teeth, broken crowns, or
                knocked-out teeth - ensuring you get fast, reliable relief when
                you need it most.
              </p>
            </li>

            <li>
              <h3 className="text-lg font-semibold">
                <a
                  href="/services/kids-and-children-dentistry-maplewood-nj"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  Children's & Family Dentistry
                </a>
              </h3>
              <p>
                We make dental visits fun and stress-free for kids while
                supporting families with preventive care, sealants, fluoride
                treatments, and education to build lifelong healthy habits -
                right here in Plainfield.
              </p>
            </li>

            <li>
              <h3 className="text-lg font-semibold">
                <a
                  href="/services/invisalign-clear-aligners-maplewood-nj"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  Orthodontic Treatments
                </a>
              </h3>
              <p>
                Our practice offers modern orthodontic solutions including
                Invisalign® clear aligners and traditional braces. Whether it's
                for teens or adults, we help you achieve a straight, confident
                smile with precision and comfort.
              </p>
            </li>

            <li>
              <h3 className="text-lg font-semibold">
                <a
                  href="/services/cosmetic-dentistry-maplewood-nj"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  Cosmetic Dentistry
                </a>
              </h3>
              <p>
                Transform your smile with treatments like veneers, professional
                teeth whitening, and bonding. We design customized solutions
                that enhance your natural teeth while maintaining a beautiful,
                balanced look.
              </p>
            </li>

            <li>
              <h3 className="text-lg font-semibold">
                <a
                  href="/services/crowns-and-bridges-maplewood-nj"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  Restorative & Surgical Services
                </a>
              </h3>
              <p>
                From crowns and bridges to dental implants, dentures, and tooth
                extractions, we restore function and aesthetics with care. Our
                experienced team uses advanced techniques to make procedures
                efficient and comfortable.
              </p>
            </li>
          </ul>
          {/* </Fade> */}
        </div>

        <div className="wcu-section">
          <div className="wcu-text-section">
            {/* <Fade cascade direction="up" delay={1000} duration={600}> */}
            <div className="wcu-title">
              <h2>Why Plainfield Patients Choose Smiling Molar Dental</h2>
            </div>
            <div className="wcu-desc">
              Families throughout Plainfield (07060) and nearby towns count on
              our team for more than just beautiful smiles. Here's why:
            </div>
            <div className="wcu-points-section">
              <ul className="wcu-points space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="service-point-icon mt-1 shrink-0" />
                  <span>
                    Comprehensive care for all ages - from toddlers to seniors
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="service-point-icon mt-1 shrink-0" />
                  <span>
                    State-of-the-art dental technology for precise, comfortable
                    treatments
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="service-point-icon mt-1 shrink-0" />
                  <span>
                    Flexible scheduling & same-day appointments for convenience
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="service-point-icon mt-1 shrink-0" />
                  <span>
                    Clear communication on treatment plans and insurance
                    coverage
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="service-point-icon mt-1 shrink-0" />
                  <span>
                    Friendly, patient-centered team focused on your comfort
                  </span>
                </li>
              </ul>
            </div>
            {/* </Fade> */}
          </div>
          <div className="wcu-img-section">
            {/* <Zoom cascade damping={0.3} duration={800}> */}
            <img
              src="/Images/maplewood-1.webp"
              alt="Smiling Molar Dental in Plainfield"
              className="rounded-xl"
            />
            {/* </Zoom> */}
          </div>
        </div>

        {/* Schedule Appointment Section */}
        <div className="features-section">
          {/* <Fade direction="up" duration={1000}> */}
          <h2 className="features-heading">
            Schedule Your Dental Visit in Plainfield, NJ Today
          </h2>
          <p className="features-description">
            If you've been searching for a trusted "dentist near me in
            Plainfield", look no further than Smiling Molar Dental. Whether you
            need a routine cleaning, a cosmetic upgrade, or urgent care, our
            team is here to make every visit smooth, comfortable, and effective.
          </p>

          <BookCallBtnForServiceAreas />
          {/* </Fade> */}
        </div>

        {/* Map Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          {/* Info Block */}
          <div className="flex-1 h-[400px] text-center relative bg-[#0087ce] rounded-lg p-8 text-white shadow-lg overflow-hidden space-y-4">
            <Bounce>
              <h2 className="text-2xl font-bold">{selected.name}</h2>
            </Bounce>
            <p className="whitespace-pre-line text-center text-white">
              {selected.address}
            </p>

            <h3 className="text-md font-medium mt-4">Hours of Operation:</h3>
            <Fade delay={400}>
              {loading ? (
                <ul className="text-sm text-gray-700">
                  {[...Array(7)].map((_, i) => (
                    <li key={i} className="text-white">
                      <div className="h-4 bg-white/20 rounded animate-pulse mb-1"></div>
                    </li>
                  ))}
                </ul>
              ) : (
                <ul className="text-sm text-gray-700">
                  {workingHours.map((hour, i) => {
                    const isToday = new Date().getDay() === hour.dayOfWeek;
                    return (
                      <li
                        key={i}
                        className={`text-white ${
                          isToday
                            ? "bg-white/10 rounded-md border-2 border-secondary"
                            : ""
                        }`}
                      >
                        {hour.day}: {hour.time}
                      </li>
                    );
                  })}
                </ul>
              )}
            </Fade>
          </div>

          {/* Single Map */}
          <div className="flex-1 w-full h-[400px] rounded-xl overflow-hidden shadow">
            <iframe
              src={selected.mapUrl}
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="border-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
