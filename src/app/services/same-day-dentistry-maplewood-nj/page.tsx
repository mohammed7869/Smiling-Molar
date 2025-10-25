"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";
import { Fade } from "react-awesome-reveal";
import BookCallBtn from "../book-call-btn";
import { CheckCircle } from "lucide-react";

export default function SameDayPage() {
  const features = [
    {
      icon: "/Images/icons/Immediate Pain Relief.png",
      title: "Emergency Dental Treatments",
      description:
        "Immediate relief for toothaches or infections with repair of broken or knocked-out teeth.",
      points: [
        "Immediate relief for toothaches or infections",
        "Repair of broken or knocked-out teeth",
        "Antibiotics or root canal therapy when necessary",
        "Pain management to restore comfort quickly",
      ],
    },
    {
      icon: "/Images/icons/Smart Treatment Decisions Under Pressure.png",
      title: "Restorative Repairs",
      description:
        "Quick fixes for damaged fillings, crowns, or bridges with same-day placement of temporary restorations when needed.",
      points: [
        "Quick fixes for damaged fillings, crowns, or bridges",
        "Same-day placement of temporary restorations when needed",
        "Adjustments for loose dentures or appliances",
        "Durable solutions to protect your smile",
      ],
    },
    {
      icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
      title: "Cosmetic & Preventive Care",
      description:
        "In-office professional whitening, same-day exams and cleanings for new patients, and repair or rebonding of veneers.",
      points: [
        "In-office professional whitening (subject to availability)",
        "Same-day exams and cleanings for new patients",
        "Repair or rebonding of veneers or chipped edges",
        "Preventive guidance to avoid future emergencies",
      ],
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <main className="details-page-container">
        <div className="details-page">
          <div className="details-page-header-section">
            <Fade direction="up" duration={1000}>
              <h1>Same-Day Dentistry in Plainfield, NJ</h1>
            </Fade>
            <Fade direction="down" duration={1000}>
              <h2 className="text-center">
                Prompt Dental Care Without the Wait | Smiling Molar Dental
              </h2>
            </Fade>
            {/* <div className='flex items-center justify-center gap-2'> <Link href={'/'} className='font-medium'>Home </Link><span><ChevronRight/></span> <span className='text-white/80'>Emergency Dentistry</span></div> */}
          </div>
          <div className="details-page-desc-section">
            {/* Image Section */}
            <div className="image_section">
              <div className="image_section-cover">
                {/* <Zoom cascade damping={0.3} duration={800}> */}
                <div className="main-image">
                  <img
                    src="/Images/same-day-dentistry.avif"
                    alt="Same-Day Dental Care at Smiling Molar Dental in Plainfield, NJ"
                  />
                </div>
                {/* <img
              src="/Images/s1.webp"
              className="overlay-image"
              alt="Overlay"
            /> */}
                {/* </Zoom> */}
              </div>
            </div>

            {/* Text Section with Fade-in after delay */}
            <div className="desc-text-section">
              {/* <Fade cascade direction="up" delay={1000} duration={600}> */}
              <div className="desc-text-subtitle">Same-Day Dentistry</div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                Understanding Same-Day Dentistry
              </h2>
              <p>
                Life happens fast - and sometimes, so do dental problems.
                Whether you're dealing with a sudden toothache, a chipped tooth,
                or simply need treatment completed quickly, our same-day
                dentistry services ensure you get the care you need when you
                need it most.
              </p>
              <p>
                At Smiling Molar Dental, we set aside dedicated time every day
                to accommodate same-day appointments for both new and existing
                patients. Families from Plainfield (07060), North Plainfield
                (07062, 07063), South Plainfield (07080), and Scotch Plains
                (07076) trust us when searching for a "same-day dentist near me"
                because we deliver fast, high-quality dental care - without
                compromising comfort or results.
              </p>
              {/* </Fade> */}
            </div>
          </div>
          <div className="wcu-section">
            <div className="wcu-text-section">
              {/* <Fade cascade direction="up" delay={1000} duration={600}> */}
              <div className="wcu-title">
                <h2>
                  Why Patients Choose Smiling Molar Dental for Same-Day
                  Dentistry
                </h2>
              </div>
              <div className="wcu-points-section">
                <ul className="wcu-points">
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> Fast,
                      Reliable Appointments
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />{" "}
                      Comprehensive Treatment Options
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> Gentle,
                      Patient-Focused Team
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> Affordable
                      & Insurance-Friendly
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />{" "}
                      Conveniently Located in Plainfield, NJ
                    </h3>
                  </li>
                </ul>
              </div>
              {/* </Fade> */}
            </div>

            <div className="wcu-img-section">
              {/* <Zoom cascade damping={0.3} duration={800}> */}
              <img
                className="bdr-doctor-img"
                src="/Images/about-hand.avif"
                alt="Expert Dentist at Tulip Dental Maplewood"
              />
              {/* </Zoom> */}
            </div>
          </div>

          <div className="features-section">
            {/* <Fade direction="up" duration={1000}> */}
            <h2 className="features-heading">
              Same-Day Dentistry Services at Smiling Molar Dental
            </h2>
            <p className="features-description">
              Our team provides a wide range of same-day dental treatments
              tailored to your specific situation. Here's what we can often
              address in a single appointment:
            </p>
            {/* </Fade> */}

            <div className="features-grid">
              {features.map((service, idx) => (
                <div className="feature-card" key={idx}>
                  <div className="flex flex-col items-start mb-3">
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="w-12 h-12 mb-2 primary-icon"
                    />
                    <h3>{service.title}</h3>
                  </div>
                  {/* <p>{service.description}</p> */}
                  <ul className="feature-list">
                    {service.points.map((point, i) => (
                      <li
                        key={i}
                        className="feature-list-item flex items-start gap-2"
                      >
                        <CheckCircle className="text-primary shrink-0 mt-[2px]" />
                        <span className="leading-snug">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="faq-section">
            <h2 className="faq-heading">Same Day Dentistry FAQs</h2>
            <div className="faq-acc-container">
              <Accordion type="single" className="w-full space-y-5">
                <AccordionItem value="q1" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      What counts as same-day dentistry?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Same-day dentistry includes emergency treatments, urgent
                      restorative repairs, and select cosmetic or preventive
                      services that can be done during a single visit.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q2" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      How soon can I get an appointment?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      We keep dedicated time each day for urgent cases. Calling
                      early in the day increases your chances of same-day
                      scheduling.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q3" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Can I get a filling or crown the same day?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      In many cases, yes. Depending on your situation, we can
                      provide temporary or permanent solutions during the same
                      visit.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q4" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Is same-day treatment more expensive?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      No - pricing is similar to standard appointments. We work
                      with insurance and offer payment options to keep care
                      affordable.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q5" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">Do you accept walk-ins?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Yes. While calling ahead helps us prepare, we welcome
                      walk-ins for emergencies and same-day care whenever
                      possible.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          <div className="features-section">
            {/* <Fade direction="up" duration={1000}> */}
            <h2 className="features-heading">
              Need Same-Day Dental Care in Plainfield, NJ?
            </h2>
            <p className="features-description">
              At Smiling Molar Dental, we understand that dental issues can't
              always wait for the next available appointment. Whether it's an
              emergency, a broken tooth, or a last-minute need, our team
              provides fast, trusted same-day dental care to keep your smile
              healthy and strong.
              <br />
              <br />
              Patients from Plainfield, North Plainfield, South Plainfield, and
              Scotch Plains rely on us for efficient treatment with a gentle
              touch - all on the same day you call.
            </p>
            {/* </Fade> */}
          </div>

          <BookCallBtn />
        </div>
      </main>
    </div>
  );
}
