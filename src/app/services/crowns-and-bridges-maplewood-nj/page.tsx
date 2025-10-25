"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";
import BookCallBtn from "../book-call-btn";
import { CheckCircle } from "lucide-react";

export default function CrownsPage() {
  const features = [
    {
      icon: "/Images/icons/Teeth Replacement.png",
      title: "Dental Crowns for Weakened or Damaged Teeth",
      description:
        "Our crowns and bridges are designed to restore function, protect teeth, and improve your smile - whether you need a single tooth repaired or several replaced.",
      points: [
        "Protect cracked, worn, or fractured teeth",
        "Restore strength after root canal treatment",
        "Custom-crafted from porcelain, ceramic, or metal",
        "Seamlessly match surrounding teeth for a natural look",
      ],
    },
    {
      icon: "/Images/icons/x-ray.png",
      title: "Dental Bridges to Replace Missing Teeth",
      description:
        "Our crowns and bridges are designed to restore function, protect teeth, and improve your smile - whether you need a single tooth repaired or several replaced.",
      points: [
        "Fill gaps caused by one or more missing teeth",
        "Anchored to natural teeth or implants for stability",
        "Restore chewing function and proper bite alignment",
        "Enhance appearance with lifelike restorations",
      ],
    },
    {
      icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
      title: "Long-Lasting Restorative Solutions",
      description:
        "Our crowns and bridges are designed to restore function, protect teeth, and improve your smile - whether you need a single tooth repaired or several replaced.",
      points: [
        "Durable designs built for years of everyday use",
        "Prevent shifting of surrounding teeth and bite changes",
        "Preserve facial structure and oral health",
        "Comfortable fit for confidence in every smile",
      ],
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <main className="details-page-container">
        <div className="details-page">
          <div className="details-page-header-section">
            <h1>Dental Crowns & Bridges in Plainfield, NJ</h1>
            <h2 className="text-center">
              Reliable Restorative Solutions for Damaged or Missing Teeth |
              Smiling Molar Dental
            </h2>
            {/* <div className='flex items-center justify-center gap-2'> <Link href={'/'} className='font-medium'>Home </Link><span><ChevronRight/></span> <span className='text-white/80'>Emergency Dentistry</span></div> */}
          </div>
          <div className="details-page-desc-section">
            {/* Image Section */}
            <div className="image_section">
              <div className="image_section-cover">
                {/* <Zoom cascade damping={0.3} duration={800}> */}
                <div className="main-image">
                  <img
                    src="/Images/dental crown n bridge.avif"
                    alt="Dental Crowns & Bridges at Smiling Molar Dental in Plainfield, NJ"
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
              <div className="desc-text-subtitle">Dental Crowns & Bridges</div>
              <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-semibold desc-text-title">
                Understanding Crowns & Bridges
              </h2>
              <p>
                When teeth are damaged, weakened, or missing, dental crowns and
                bridges offer long-lasting, natural-looking solutions to restore
                your smile's function and beauty. At Smiling Molar Dental, our
                team designs custom restorations that blend seamlessly with your
                natural teeth, helping you chew, speak, and smile with
                confidence again.
              </p>
              <p>
                Conveniently located in Plainfield, NJ, we proudly serve
                Plainfield (07060), North Plainfield (07062, 07063), South
                Plainfield (07080), Scotch Plains (07076), and surrounding
                communities. Patients searching for "dental crowns near me" or
                "dental bridges near me" trust us for precision, quality, and
                comfort.
              </p>
              {/* </Fade> */}
            </div>
          </div>
          <div className="wcu-section">
            <div className="wcu-text-section">
              {/* <Fade cascade direction="up" delay={1000} duration={600}> */}
              <div className="wcu-title">
                <h2>
                  Why Patients Choose Smiling Molar Dental for Crowns & Bridges
                </h2>
              </div>
              <div className="wcu-points-section">
                <ul className="wcu-points">
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Custom Restorations That Feel Natural
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      High-Quality Materials for Durability
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Gentle, Experienced Dental Team
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Affordable Options & Insurance Support
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
              Dental Crowns & Bridges at Smiling Molar Dental
            </h2>
            <p className="features-description">
              Our crowns and bridges are designed to restore function, protect
              teeth, and improve your smile - whether you need a single tooth
              repaired or several replaced.
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
            <h2 className="faq-heading">Dental Crowns & Bridges FAQs</h2>
            <div className="faq-acc-container">
              <Accordion type="single" className="w-full space-y-5">
                <AccordionItem value="q1" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      How long do crowns and bridges last?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      With proper care, crowns and bridges can last 10-15 years
                      or more, depending on materials and oral hygiene.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q2" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">What materials are used?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      We offer porcelain, ceramic, and metal-based options. The
                      best choice depends on your tooth location, goals, and
                      budget.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q3" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">Does the procedure hurt?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      No. With local anesthesia and gentle techniques, most
                      patients experience little to no discomfort during
                      treatment.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q4" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Will my crown or bridge look natural?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Yes. Each restoration is custom-made to blend seamlessly
                      with your natural teeth for a flawless smile.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q5" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Is treatment covered by insurance?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Most dental insurance plans cover part of the cost for
                      crowns and bridges. Our team will review your benefits and
                      provide clear estimates.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          <div className="features-section">
            <h2 className="features-heading">
              Want to Restore Your Smile with Dental Crowns & Bridges in
              Plainfield, NJ?
            </h2>
            <p className="features-description">
              At Smiling Molar Dental, we specialize in custom crowns and
              bridges that strengthen damaged teeth and replace missing ones
              with durable, natural-looking results. <br />
              <br /> Patients from Plainfield, North Plainfield, South
              Plainfield, Scotch Plains, and surrounding areas trust our team
              for restorative solutions that look great and last.
            </p>
          </div>

          <BookCallBtn />
        </div>
      </main>
    </div>
  );
}
