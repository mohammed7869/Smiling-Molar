"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import BookCallBtn from "@/app/services/book-call-btn";
import { Bounce, Fade, Zoom } from "react-awesome-reveal";
import BookCallBtnForServiceAreas from "@/app/services/book-call-btn-for-serviceAreas";
import { useWorkingHours } from "@/lib/hooks/useWorkingHours";

export default function PlainfieldServiceAreaClient() {
  const { workingHours, loading } = useWorkingHours();
  const locations = [
    {
      id: "plainfield",
      name: "Plainfield, NJ",
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
        // "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1234567890123!2d-74.27123456789012!3d40.73123456789012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3a8b123456789%3A0x1234567890abcdef!2sMaplewood%2C%20NJ!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus",
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3028.88156681386!2d-74.4101914!3d40.6104366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3b94a401bb39b%3A0xab3665a251b45a35!2sSmiling%20Molar%20Dental!5e0!3m2!1sen!2sin!4v1760968474950!5m2!1sen!2sin",
    },
  ];

  const [selected, setSelected] = useState(locations[0]);

  return (
    <div>
      {/* Header Section */}
      <div className="details-page-header-section ">
        <h1>Complete Dental Care for North Plainfield, NJ Families </h1>
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
                  src="/Images/maplewood.webp"
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
              Personalized Dentistry Near You in North Plainfield, NJ
            </h2>
            <p>
              At Smiling Molar Dental, we're proud to be a trusted dental home
              for families in North Plainfield, New Jersey (07062, 07063). Our
              practice blends compassionate care with advanced dental technology
              to deliver services tailored to every age and every smile.
            </p>
            <p>
              Whether you're looking for routine checkups, cosmetic smile
              transformations, same-day emergency treatments, or specialized
              restorative procedures, our experienced team - led by Dr. Neetu
              and Dr. Steven Reff - ensures every patient feels comfortable and
              cared for from the moment they walk in.
            </p>
            <p>
              Families throughout North Plainfield, Plainfield (07060), South
              Plainfield (07080), and Scotch Plains (07076) choose us for
              modern, high-quality dentistry that's convenient and close to
              home.
            </p>
            {/* </Fade> */}
          </div>
        </div>

        {/* Comprehensive Dental Care Section */}
        <div className="flex flex-col gap-4 p-6 md:p-0">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
            Dental Services We Offer in North Plainfield, NJ
          </h2>
          {/* <Fade cascade direction="up" delay={1000} duration={600}> */}
          <p>
            We provide a wide range of family and cosmetic dental services, so
            you can receive comprehensive care all under one roof without the
            need to travel far.
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
                Dental pain or injuries can happen suddenly. That's why we offer
                same-day emergency appointments for issues like toothaches,
                broken teeth, lost fillings, or dental trauma - so you can get
                fast relief when you need it most.
              </p>
            </li>

            <li>
              <h3 className="text-lg font-semibold">Preventive Dentistry</h3>
              <p>
                Healthy smiles start with prevention. We offer thorough dental
                exams, professional cleanings, fluoride treatments, sealants,
                and digital X-rays to keep your teeth and gums strong while
                identifying issues early.
              </p>
            </li>

            <li>
              <h3 className="text-lg font-semibold">
                <a
                  href="/services/dental-implants-maplewood-nj"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  Dental Implants & Restorations
                </a>
              </h3>
              <p>
                For patients with missing or damaged teeth, we offer dental
                implants, crowns, and bridges that restore both the function and
                beauty of your smile. Our restorations are designed to look
                natural and last for years.
              </p>
            </li>

            <li>
              <h3 className="text-lg font-semibold">
                <a
                  href="/services/kids-and-children-dentistry-maplewood-nj"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  Kids & Family Dentistry
                </a>
              </h3>
              <p>
                We make dental care fun and stress-free for children of all
                ages. From first checkups to cavity prevention and early
                orthodontic evaluations, our team provides gentle, kid-friendly
                visits that help build lifelong healthy habits.
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
                Enhance your smile with customized cosmetic treatments including
                veneers, teeth whitening, bonding, and Invisalign®. We design
                smile makeovers that complement your unique facial features and
                goals.
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
              <h2>Why Maplewood Families Choose Tulip Dental</h2>
            </div>
            <div className="wcu-desc">
              Families across Maplewood (07040) and nearby South Orange (07079),
              Vauxhall (07088), Irvington (07111), and Newark (07106, 07112)
              trust us because:
            </div>
            <div className="wcu-points-section">
              <ul className="wcu-points space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="service-point-icon mt-1 shrink-0" />
                  <span>We provide personalized, patient-first care</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="service-point-icon mt-1 shrink-0" />
                  <span>
                    Our technology ensures accurate, comfortable treatments
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="service-point-icon mt-1 shrink-0" />
                  <span>
                    We offer flexible scheduling, including{" "}
                    <a
                      href="/services/same-day-dentistry-maplewood-nj"
                      className="text-blue-600 hover:text-blue-800 hover:underline"
                    >
                      same-day visits
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="service-point-icon mt-1 shrink-0" />
                  <span>
                    We’re insurance-friendly and provide payment plan options
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="service-point-icon mt-1 shrink-0" />
                  <span>Our location is convenient and easy to access</span>
                </li>
              </ul>
            </div>
            {/* </Fade> */}
          </div>
          <div className="wcu-img-section">
            {/* <Zoom cascade damping={0.3} duration={800}> */}
            <img
              src="/Images/maplewood-1.webp"
              alt="Tulip Dental in Maplewood"
              className="rounded-xl"
            />
            {/* </Zoom> */}
          </div>
        </div>

        {/* Schedule Appointment Section */}
        <div className="features-section">
          {/* <Fade direction="up" duration={1000}> */}
          <h2 className="features-heading">
            Schedule Your Appointment in Maplewood Today
          </h2>
          <p className="features-description">
            Whether you’re in the heart of Maplewood or nearby neighborhoods,
            Tulip Dental is just minutes away. If you’ve been looking for a
            “dentist near me” who blends compassion with expertise, your search
            ends here.
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
