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

export default function OrthodonticsPage() {
  const features = [
    {
      icon: "/Images/icons/braces1.png",
      title: "Invisalign® Clear Aligners",
      description:
        "We offer orthodontic treatments tailored to the needs of each patient - from early intervention for kids to clear aligners for adults who want discreet straightening.",
      points: [
        "Nearly invisible trays for a discreet smile journey",
        "Removable for easy eating and cleaning",
        "Customized aligners designed for gradual, precise tooth movement",
        "A popular option for teens and adults who want flexibility",
      ],
    },
    {
      icon: "/Images/icons/Smart Treatment Decisions Under Pressure.png",
      title: "Traditional Metal & Ceramic Braces",
      description:
        "We offer orthodontic treatments tailored to the needs of each patient - from early intervention for kids to clear aligners for adults who want discreet straightening.",
      points: [
        "Ideal for moderate to complex alignment cases",
        "Modern, low-profile brackets for improved comfort",
        "Ceramic options available for a more aesthetic look",
        "Regular checkups to track progress and make adjustments",
      ],
    },
    {
      icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
      title: "Early Orthodontic Evaluations for Children",
      description:
        "We offer orthodontic treatments tailored to the needs of each patient - from early intervention for kids to clear aligners for adults who want discreet straightening.",
      points: [
        "Early screenings to detect potential problems",
        "Growth-guided treatments to reduce the need for extensive future care",
        "Expanders and interceptive treatments when needed",
        "A gentle, child-friendly approach to set the foundation for healthy smiles",
      ],
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <main className="details-page-container">
        <div className="details-page">
          <div className="details-page-header-section">
            <Fade direction="up" duration={1000}>
              <h1>Orthodontics Treatment in Plainfield, NJ</h1>
            </Fade>
            <Fade direction="down" duration={1000}>
              <h2 className="text-center">
                Straighten Your Smile with Braces & Invisalign® | Smiling Molar
                Dental
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
                    src="/Images/Orthodontics.webp"
                    alt="Orthodontics treatment at Tulip Dental Maplewood"
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
              <div className="desc-text-subtitle">Orthodontic Treatment</div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                Understanding Orthodontics Treatment
              </h2>
              <p>
                Crooked teeth, gaps, or bite issues can affect both your oral
                health and your confidence. At Smiling Molar Dental, we offer a
                complete range of orthodontic treatments - including traditional
                braces and Invisalign® clear aligners - to help patients of all
                ages achieve beautifully aligned, healthy smiles.
              </p>
              <p>
                Located in Plainfield, NJ, our experienced dental team creates
                personalized orthodontic plans for children, teens, and adults.
                Patients from Plainfield (07060), North Plainfield (07062,
                07063), South Plainfield (07080), Scotch Plains (07076), and
                nearby areas trust us when searching for "Invisalign near me" or
                "braces near me" because we combine modern orthodontic
                techniques with patient-first care.
              </p>
              {/* </Fade> */}
            </div>
          </div>
          <div className="wcu-section">
            <div className="wcu-text-section">
              {/* <Fade cascade direction="up" delay={1000} duration={600}> */}
              <div className="wcu-title">
                <h2>Why Choose Smiling Molar Dental for Orthodontics</h2>
              </div>
              <div className="wcu-points-section">
                <ul className="wcu-points">
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Comprehensive Options for All Ages
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Invisalign® & Braces Available
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Experienced & Caring Team
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Flexible Financing & Insurance Support
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Convenient Location in Plainfield
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
              Orthodontic Services at Smiling Molar Dental
            </h2>
            <p className="features-description">
              We offer orthodontic treatments tailored to the needs of each
              patient - from early intervention for kids to clear aligners for
              adults who want discreet straightening.
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
            <h2 className="faq-heading">Orthodontics FAQs</h2>
            <div className="faq-acc-container">
              <Accordion type="single" className="w-full space-y-5">
                <AccordionItem value="q1" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      What age is best to start orthodontic treatment?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      The American Association of Orthodontists recommends a
                      checkup by age 7, but treatment can be successful at any
                      age.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q2" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      How long does orthodontic treatment usually take?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Most cases take between 12-24 months, depending on
                      complexity and patient cooperation.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q3" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Is Invisalign® as effective as braces?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Yes - Invisalign can correct most mild to moderate
                      alignment issues. Braces may be recommended for more
                      complex cases.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q4" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">Will braces or aligners hurt?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Mild soreness after adjustments is normal but temporary.
                      Most patients adapt quickly.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q5" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Does insurance cover orthodontic treatment?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Many dental insurance plans offer partial coverage for
                      orthodontics. We'll help you review your benefits and
                      financing options.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          <div className="features-section">
            {/* <Fade direction="up" duration={1000}> */}
            <h2 className="features-heading">
              Ready for a Straighter Smile with Braces or Invisalign® in
              Plainfield, NJ?
            </h2>
            <p className="features-description">
              At Smiling Molar Dental, we make orthodontic care comfortable and
              customized for every patient - whether you're a child starting
              early treatment or an adult ready for Invisalign®. Patients from
              Plainfield, North Plainfield, South Plainfield, Scotch Plains, and
              surrounding communities trust us to deliver exceptional
              orthodontic results with a caring touch.
            </p>
            {/* </Fade> */}
          </div>

          <BookCallBtn />
        </div>
      </main>
    </div>
  );
}
