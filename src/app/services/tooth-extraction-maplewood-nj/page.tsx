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

export default function ToothExtractionPage() {
  const features = [
    {
      icon: "/Images/icons/tooth-extraction.png",
      title: "Simple Extractions",
      description:
        "We make tooth removal as smooth and painless as possible, whether it's part of a planned procedure or an urgent need.",
      points: [
        "Safe removal of severely decayed or damaged teeth",
        "Local anesthesia for a comfortable, pain-free experience",
        "Same-day appointments available for urgent cases",
        "Detailed aftercare to support healthy healing",
      ],
    },
    {
      icon: "/Images/icons/Smart Treatment Decisions Under Pressure.png",
      title: "Wisdom Teeth Removal",
      description:
        "We make tooth removal as smooth and painless as possible, whether it's part of a planned procedure or an urgent need.",
      points: [
        "Thorough evaluation to determine if removal is needed",
        "Surgical extractions for impacted or problematic wisdom teeth",
        "Sedation options to keep you relaxed during the procedure",
        "Personalized instructions to minimize swelling and complications",
      ],
    },
    {
      icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
      title: "Emergency Tooth Extractions",
      description:
        "We make tooth removal as smooth and painless as possible, whether it's part of a planned procedure or an urgent need.",
      points: [
        "Fast relief for severe pain or infection",
        "Safe extraction to prevent further oral health issues",
        "Temporary and long-term solutions based on your situation",
        "Follow-up care to ensure proper healing and recovery",
      ],
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <main className="details-page-container">
        <div className="details-page">
          <div className="details-page-header-section">
            <Fade direction="up" duration={1000}>
              <h1>Tooth Extractions in Plainfield, NJ</h1>
            </Fade>
            <Fade direction="down" duration={1000}>
              <h2 className="text-center">
                Gentle & Stress-Free Tooth Removal | Smiling Molar Dental
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
                    src="/Images/tooth-extraction.avif"
                    alt="Tooth extractions at Smiling Molar Dental in Plainfield, New Jersey"
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
              <div className="desc-text-subtitle">Tooth Extractions</div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                Understanding Tooth Extractions
              </h2>
              <p>
                Sometimes, removing a tooth is the best way to protect your
                long-term oral health. At Smiling Molar Dental, we perform
                gentle tooth extractions in a comfortable, stress-free
                environment, ensuring that your experience is smooth from start
                to finish.
              </p>
              <p>
                Whether you need a simple extraction, wisdom tooth removal, or
                an emergency extraction, our experienced team uses modern
                techniques and precise care to keep you comfortable every step
                of the way.
              </p>
              <p>
                We proudly serve patients from Plainfield (07060), North
                Plainfield (07062, 07063), South Plainfield (07080), Scotch
                Plains (07076), and surrounding communities. If you're searching
                for a "tooth extraction near me" or "wisdom tooth removal near
                me", you can trust our team for safe, efficient treatment.
              </p>
              {/* </Fade> */}
            </div>
          </div>
          <div className="wcu-section">
            <div className="wcu-text-section">
              {/* <Fade cascade direction="up" delay={1000} duration={600}> */}
              <div className="wcu-title">
                <h2>
                  Why Patients Choose Smiling Molar Dental for Tooth Extractions
                </h2>
              </div>
              <div className="wcu-points-section">
                <ul className="wcu-points">
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Gentle Techniques & Patient Comfort First
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Simple & Surgical Extractions Available
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Experienced Team for Children & Adults
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Affordable Care & Insurance Accepted
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Convenient Plainfield Location
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
                src="/Images/about-hand.jpg"
                alt="Expert Dentist at Tulip Dental Maplewood"
              />
              {/* </Zoom> */}
            </div>
          </div>
          <div className="features-section">
            {/* <Fade direction="up" duration={1000}> */}
            <h2 className="features-heading">
              Tooth Extraction Services at Smiling Molar Dental
            </h2>
            <p className="features-description">
              We make tooth removal as smooth and painless as possible, whether
              it's part of a planned procedure or an urgent need.
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
            <h2 className="faq-heading">Tooth Extraction FAQs</h2>
            <div className="faq-acc-container">
              <Accordion type="single" className="w-full space-y-5">
                <AccordionItem value="q1" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">Does a tooth extraction hurt?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      With local anesthesia and gentle techniques, most patients
                      experience little to no discomfort during the procedure.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q2" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">How long does recovery take?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Most patients recover within a few days. Surgical
                      extractions, like wisdom teeth removal, may take a bit
                      longer, but we'll guide you every step of the way.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q3" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Do all wisdom teeth need to be removed?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Not always. If wisdom teeth are impacted, infected, or
                      causing overcrowding, removal is recommended to prevent
                      complications.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q4" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      What can I eat after an extraction?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Stick to soft foods for the first 24-48 hours, then
                      gradually return to your normal diet as healing
                      progresses.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q5" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Is extraction covered by insurance?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Most dental insurance plans cover extractions. Our team
                      will help you understand your coverage and payment
                      options.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          <div className="features-section">
            {/* <Fade direction="up" duration={1000}> */}
            <h2 className="features-heading">
              Looking for Gentle Tooth Extractions in Plainfield, NJ?
            </h2>
            <p className="features-description">
              At Smiling Molar Dental, we provide gentle, safe, and precise
              tooth extractions for patients of all ages. Whether you need a
              routine removal, wisdom tooth extraction, or emergency care, our
              experienced team is here to help you protect your oral health and
              feel comfortable throughout the process. <br />
              <br /> We proudly serve patients from Plainfield, North
              Plainfield, South Plainfield, Scotch Plains, and surrounding
              communities.
            </p>
            {/* </Fade> */}
          </div>

          <BookCallBtn />
        </div>
      </main>
    </div>
  );
}
