"use client";

import React, { useState } from "react";
import { CheckCircle } from "lucide-react";
import { Bounce } from "react-awesome-reveal";
import BookCallBtnForServiceAreas from "@/app/services/book-call-btn-for-serviceAreas";
import { useWorkingHours } from "@/lib/hooks/useWorkingHours";

export default function ScotchPlainsServiceAreaClient() {
  const { workingHours, loading } = useWorkingHours();
  const locations = [
    {
      id: "scotch-plains",
      name: "Scotch Plains, NJ",
      address: "1024 Park Ave Suite 6C, Plainfield, NJ 07060",
      phone: "(908) 264-2357",
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
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3028.88156681386!2d-74.4101914!3d40.6104366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3b94a401bb39b%3A0xab3665a251b45a35!2sSmiling%20Molar%20Dental!5e0!3m2!1sen!2sin!4v1760968474950!5m2!1sen!2sin",
    },
  ];

  const [selected] = useState(locations[0]);

  return (
    <div>
      {/* Header Section */}
      <div className="details-page-header-section ">
        <h1>Compassionate Dental Care for Scotch Plains, NJ Families </h1>
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
                  src="/Images/scotch.avif"
                  alt="Family & Cosmetic Dentist in Scotch Plains, NJ 07076"
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
              Personalized Dentistry in Scotch Plains, NJ | Smiling Molar Dental
            </h2>
            <p>
              At Smiling Molar Dental, we're proud to serve families in Scotch
              Plains, NJ (07076) with a full range of modern dental services.
              Whether you're due for a routine checkup, want to explore cosmetic
              dentistry, or need urgent dental care, our experienced team is
              here to help you achieve and maintain a healthy, confident smile.
            </p>
            <p>
              Patients from Scotch Plains, Plainfield (07060), South Plainfield
              (07080), and North Plainfield (07062, 07063) rely on our warm
              environment, advanced technology, and personalized treatment plans
              designed to make every visit smooth and stress-free.
            </p>
            {/* </Fade> */}
          </div>
        </div>

        {/* Comprehensive Dental Care Section */}
        <div className="flex flex-col gap-4 p-6 md:p-0">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
            Dental Services We Offer in Scotch Plains, NJ
          </h2>
          {/* <Fade cascade direction="up" delay={1000} duration={600}> */}
          <p>
            We offer a complete selection of preventive, restorative, cosmetic,
            and emergency dental treatments - all under one roof.
          </p>

          <ul className="list-disc pl-6 space-y-4 text-sm md:text-lg">
            <li>
              <h3 className="text-lg font-semibold">
                <a
                  href="/services/emergency-dentistry-maplewood-nj"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  Emergency Dental Appointments
                </a>
              </h3>
              <p>
                We understand dental emergencies can happen at any time. Our
                team provides same-day appointments for severe toothaches,
                broken teeth, knocked-out teeth, or sudden infections, so you
                get the relief you need right away.
              </p>
            </li>

            <li>
              <h3 className="text-lg font-semibold">
                <a
                  href="/services/kids-and-children-dentistry-maplewood-nj"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  Pediatric & Family Dentistry
                </a>
              </h3>
              <p>
                We create positive dental experiences for kids, teens, and
                families. From gentle cleanings and fluoride treatments to
                sealants and cavity prevention, our approach helps children
                build healthy habits that last a lifetime.
              </p>
            </li>

            <li>
              <h3 className="text-lg font-semibold">
                <a
                  href="/services/invisalign-clear-aligners-maplewood-nj"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  Invisalign® & Orthodontic Options
                </a>
              </h3>
              <p>
                Straighten your smile with Invisalign® clear aligners, a
                comfortable and discreet alternative to braces that fits easily
                into your lifestyle. Ideal for both teens and adults in Scotch
                Plains.
              </p>
            </li>

            <li>
              <h3 className="text-lg font-semibold">
                <a
                  href="/services/dental-implants-maplewood-nj"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  Dental Implants & Restorative Solutions
                </a>
              </h3>
              <p>
                For missing or damaged teeth, we offer dental implants, crowns,
                and bridges to restore strength, function, and aesthetics. Each
                restoration is custom-designed for a natural, lasting result.
              </p>
            </li>

            <li>
              <h3 className="text-lg font-semibold">
                <a
                  href="/services/cosmetic-dentistry-maplewood-nj"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  Cosmetic Dentistry & Whitening
                </a>
              </h3>
              <p>
                Enhance your smile with veneers, bonding, and professional teeth
                whitening. Whether you want to correct chips, close gaps, or
                brighten discoloration, our cosmetic services deliver radiant
                results.
              </p>
            </li>
          </ul>
          {/* </Fade> */}
        </div>

        {/* Why Choose Us Section */}
        <div className="wcu-section">
          <div className="wcu-text-section">
            {/* <Fade cascade direction="up" delay={1000} duration={600}> */}
            <div className="wcu-title">
              <h2>Why Families in Scotch Plains Choose Smiling Molar Dental</h2>
            </div>
            <div className="wcu-desc">
              Patients from Scotch Plains (07076) and surrounding areas trust
              our practice for several key reasons:
            </div>
            <div className="wcu-points-section">
              <ul className="wcu-points space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="service-point-icon mt-1 shrink-0" />
                  <span>
                    Comprehensive dental care for children, teens, and adults
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="service-point-icon mt-1 shrink-0" />
                  <span>
                    Gentle, patient-centered approach for maximum comfort
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="service-point-icon mt-1 shrink-0" />
                  <span>
                    Same-day appointments and flexible scheduling options
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="service-point-icon mt-1 shrink-0" />
                  <span>
                    Affordable care with insurance acceptance and financing
                    solutions
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="service-point-icon mt-1 shrink-0" />
                  <span>
                    Convenient location near Scotch Plains and nearby Plainfield
                    communities
                  </span>
                </li>
              </ul>
            </div>
            {/* </Fade> */}
          </div>
          <div className="wcu-img-section">
            {/* <Zoom cascade damping={0.3} duration={800}> */}
            <img
              src="/Images/scotch-1.avif"
              alt="Smiling Molar Dental in Scotch Plains"
              className="rounded-xl"
            />
            {/* </Zoom> */}
          </div>
        </div>

        {/* Schedule Appointment Section */}
        <div className="features-section">
          {/* <Fade direction="up" duration={1000}> */}
          <h2 className="features-heading">
            Book Your Dental Appointment in Scotch Plains, NJ Today
          </h2>
          <p className="features-description">
            Whether you're searching for a family dentist near you, planning a
            cosmetic upgrade, or dealing with a dental emergency, Smiling Molar
            Dental is here to help.
            <br />
            <br />
            Our experienced team proudly serves Scotch Plains (07076) and nearby
            communities with compassionate, high-quality dental care designed
            for every age and every smile.
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
            {/* <Fade delay={400}> */}
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
            {/* </Fade> */}
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
