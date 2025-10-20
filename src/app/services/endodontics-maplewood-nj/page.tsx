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

export default function Page() {
  const features = [
    {
      icon: "/Images/icons/root-canal.png",
      title: "Root Canal Therapy",
      description:
        "Removal of infected or inflamed pulp with thorough cleaning and sealing of canals to preserve your natural tooth.",
      points: [
        "Removal of infected or inflamed pulp",
        "Thorough cleaning and sealing of canals",
        "Crown placement to restore strength and structure",
        "Pain relief and long-term tooth preservation",
      ],
    },
    {
      icon: "/Images/icons/braces1.png",
      title: "Treatment for Dental Abscesses",
      description:
        "Diagnosis and treatment of infection-related swelling or pain with drainage or root canal to remove infection.",
      points: [
        "Diagnosis of infection-related swelling or pain",
        "Drainage or root canal to remove infection",
        "Antibiotic support when needed",
        "Monitoring to ensure complete healing",
      ],
    },
    {
      icon: "/Images/icons/emergency denstiry.png",
      title: "Endodontic Retreatment",
      description:
        "Specialized care for teeth that need a second root canal with advanced methods to address persistent infection.",
      points: [
        "Specialized care for teeth that need a second root canal",
        "Advanced methods to address persistent infection",
        "Thorough evaluation to determine the best approach",
        "Designed to avoid extractions whenever possible",
      ],
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <main className="details-page-container">
        <div className="details-page">
          <div className="details-page-header-section">
            <Fade direction="up" duration={1000}>
              <h1>Endodontics in Plainfield, NJ</h1>
            </Fade>
            <Fade direction="down" duration={1000}>
              <h2 className="text-center">
                Advanced Root Canal & Endodontic Treatments Near You | Smiling
                Molar Dental
              </h2>
            </Fade>
            {/* <div className='flex items-center justify-center gap-2'> <Link href={'/'} className='font-medium'>Home </Link><span><ChevronRight/></span> <span className='text-white/80'>Emergency Dentistry</span></div> */}
          </div>
          <div className="details-page-desc-section">
            {/* Image Section */}
            <div className="image_section">
              <div className="image_section-cover">
                {/* <Zoom cascade damping={0.3} duration={800}> */}
                {/* </Fade> */}
                <div className="main-image">
                  <img
                    src="/Images/Endodontics.webp"
                    alt="Endodontics at Tulip Dental Maplewood"
                  />
                </div>
                {/* <img
              src="/Images/s1.webp"
              className="overlay-image"
              alt="Overlay"
            /> */}
                {/* </Fade> */}
                {/* </Zoom> */}
              </div>
            </div>

            {/* Text Section with Fade-in after delay */}
            <div className="desc-text-section">
              {/* <Fade cascade direction="up" delay={1000} duration={600}> */}
              <div className="desc-text-subtitle">Endodontics </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                Understanding Endodontics
              </h2>
              <p>
                When infection or inflammation reaches the inner pulp of your
                tooth, it can cause intense pain, swelling, and even jeopardize
                your tooth's health. Endodontic care focuses on diagnosing and
                treating these internal dental issues to save your natural teeth
                and prevent the need for extractions.
              </p>
              <p>
                At Smiling Molar Dental in Plainfield, NJ, we provide modern,
                gentle root canal treatments and other endodontic procedures to
                restore comfort and protect your smile. Using state-of-the-art
                technology and precise techniques, our team ensures your
                experience is smooth, efficient, and virtually pain-free.
              </p>
              <p>
                Patients from Plainfield (07060), North Plainfield (07062,
                07063), South Plainfield (07080), and Scotch Plains (07076)
                trust us when searching for "root canal near me" because we
                combine clinical expertise with compassionate care.
              </p>
              {/* </Fade> */}
            </div>
          </div>
          <div className="wcu-section">
            <div className="wcu-text-section">
              {/* <Fade cascade direction="up" delay={1000} duration={600}> */}
              <div className="wcu-title">
                <h2>Why Choose Smiling Molar Dental for Endodontic Care</h2>
              </div>
              <div className="wcu-points-section">
                <ul className="wcu-points">
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> Expert Root
                      Canal Therapy
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> Advanced
                      Imaging & Modern Equipment
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />{" "}
                      Comfortable, Patient-Focused Approach
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> Affordable
                      Care & Insurance Support
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> Convenient
                      Location in Plainfield, NJ
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
                src="/Images/top-reasons.webp"
                alt="Expert Dentist at Tulip Dental Maplewood"
              />
              {/* </Zoom> */}
            </div>
          </div>

          <div className="features-section">
            {/* <Fade direction="up" duration={1000}> */}
            <h2 className="features-heading">
              Endodontic Services at Smiling Molar Dental
            </h2>
            <p className="features-description">
              Our goal is to save natural teeth whenever possible, relieve
              discomfort, and restore full function with minimally invasive
              treatments.
            </p>
            {/* </Fade> */}

            <div className="features-grid">
              {features.map((service, idx) => (
                <div className="feature-card" key={idx}>
                  <div className="flex flex-col items-start mb-3">
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="w-12 h-12 mb-2"
                    />
                    <h3>{service.title}</h3>
                  </div>
                  <p>{service.description}</p>
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
            <h2 className="faq-heading">Endodontics FAQs</h2>
            <div className="faq-acc-container">
              <Accordion type="single" className="w-full space-y-5">
                <AccordionItem value="q1" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">What exactly is endodontics?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Endodontics is the branch of dentistry that treats issues
                      affecting the dental pulp and root tissues. Root canals
                      are the most common endodontic procedure.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q2" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">Do root canals hurt?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Modern root canal therapy is typically no more
                      uncomfortable than a dental filling. With local anesthesia
                      and gentle techniques, discomfort is minimal.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q3" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      How do I know if I need a root canal?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Persistent pain, swelling, extreme sensitivity, or tooth
                      discoloration may indicate pulp infection. A dental exam
                      and X-rays will confirm the need for treatment.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q4" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      How long will the treated tooth last?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      With proper restoration (usually a crown) and good oral
                      hygiene, root canal-treated teeth can last for decades,
                      often a lifetime.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q5" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Is endodontic treatment covered by insurance?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Yes - most dental insurance plans cover root canal therapy
                      and related procedures. We help maximize your benefits and
                      explain all costs upfront.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          <div className="features-section">
            {/* <Fade direction="up" duration={1000}> */}
            <h2 className="features-heading">
              Looking for Trusted Endodontic Care in Plainfield, NJ?
            </h2>
            <p className="features-description">
              If you're experiencing tooth pain, swelling, or signs of
              infection, don't wait. At Smiling Molar Dental, we provide gentle,
              precise endodontic treatments to save your natural teeth and
              restore your comfort.
              <br />
              <br />
              Patients from Plainfield, North Plainfield, South Plainfield, and
              Scotch Plains rely on our experienced team for care that's both
              advanced and compassionate.
            </p>
            {/* </Fade> */}
          </div>

          <BookCallBtn />
        </div>
      </main>
    </div>
  );
}
