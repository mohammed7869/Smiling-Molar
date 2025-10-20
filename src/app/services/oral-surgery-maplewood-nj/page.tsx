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

export default function OralSurgeryPage() {
  const features = [
    {
      icon: "/Images/icons/Immediate Pain Relief.png",
      title: "Tooth Extractions & Wisdom Teeth Removal",
      description:
        "Our oral surgery services are designed to address a wide range of dental concerns - from preventive extractions to implant preparation - with the goal of restoring function and supporting long-term oral health.",
      points: [
        "Safe removal of impacted or problematic teeth",
        "Gentle wisdom tooth extractions with anesthesia options",
        "Sedation available to ease anxiety during the procedure",
        "Post-operative guidance to support a smooth, quick recovery",
      ],
    },
    {
      icon: "/Images/icons/Smart Treatment Decisions Under Pressure.png",
      title: "Bone Grafting & Implant Site Preparation",
      description:
        "Our oral surgery services are designed to address a wide range of dental concerns - from preventive extractions to implant preparation - with the goal of restoring function and supporting long-term oral health.",
      points: [
        "Preparation of bone for strong, stable implant placement",
        "Bone grafting and ridge augmentation when extra support is needed",
        "Precise planning with digital imaging to ensure optimal results",
        "Seamless coordination with restorative treatment for natural aesthetics",
      ],
    },
    {
      icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
      title: "Surgical Treatment for Infections & Trauma",
      description:
        "Our oral surgery services are designed to address a wide range of dental concerns - from preventive extractions to implant preparation - with the goal of restoring function and supporting long-term oral health.",
      points: [
        "Drainage and treatment of abscesses and oral infections",
        "Repair and stabilization of teeth and gums after injury",
        "Targeted antibiotic therapy and follow-up monitoring",
        "Comprehensive care to restore both health and function",
      ],
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <main className="details-page-container">
        <div className="details-page">
          <div className="details-page-header-section">
            <Fade direction="up" duration={1000}>
              <h1>Oral Surgery in Plainfield, NJ</h1>
            </Fade>
            <Fade direction="down" duration={1000}>
              <h2 className="text-center">
                Trusted Surgical Dental Care in Plainfield | Smiling Molar
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
                    src="/Images/Oral Surgery.webp"
                    alt="Oral Surgery at Tulip Dental Maplewood"
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
              <div className="desc-text-subtitle">Oral Surgery</div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                Understanding Oral Surgery
              </h2>
              <p>
                When dental issues require more than routine treatment, oral
                surgery can help restore comfort, function, and long-term oral
                health. At Smiling Molar Dental, our experienced team provides a
                full range of surgical procedures with a focus on safety,
                precision, and patient comfort.
              </p>
              <p>
                From wisdom tooth extractions to bone grafting and implant site
                preparation, we make surgical dental care stress-free and
                accessible for patients of all ages. Located in Plainfield, NJ,
                we proudly serve patients from Plainfield (07060), North
                Plainfield (07062, 07063), South Plainfield (07080), Scotch
                Plains (07076), and nearby neighborhoods. If you're looking for
                "oral surgery near me", Smiling Molar Dental is your trusted
                local destination for expert surgical dentistry.
              </p>
              {/* </Fade> */}
            </div>
          </div>
          <div className="wcu-section">
            <div className="wcu-text-section">
              {/* <Fade cascade direction="up" delay={1000} duration={600}> */}
              <div className="wcu-title">
                <h2>
                  Why Patients Choose Smiling Molar Dental for Oral Surgery
                </h2>
              </div>
              <div className="wcu-points-section">
                <ul className="wcu-points">
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Expert Surgical Skills You Can Trust
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Advanced Technology for Accurate Planning
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Patient Comfort Is Our Priority
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Transparent Pricing & Insurance Support
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
              Oral Surgery Services at Smiling Molar Dental
            </h2>
            <p className="features-description">
              Our oral surgery services are designed to address a wide range of
              dental concerns - from preventive extractions to implant
              preparation - with the goal of restoring function and supporting
              long-term oral health.
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
            <h2 className="faq-heading">Oral Surgery FAQs</h2>
            <div className="faq-acc-container">
              <Accordion type="single" className="w-full space-y-5">
                <AccordionItem value="q1" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Is oral surgery safe for kids and adults?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Yes. Our team follows strict safety protocols, reviews
                      your medical history, and tailors anesthesia and surgical
                      techniques to your individual needs.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q2" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      How long does recovery usually take?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Recovery time depends on the procedure. Simple extractions
                      may heal within a few days, while bone grafting or implant
                      surgery can take several weeks to fully integrate. We
                      provide clear timelines and aftercare instructions for
                      every case.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q3" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Do you offer sedation during surgery?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Yes. We offer safe sedation options, including nitrous
                      oxide and oral sedation, to help patients stay calm and
                      comfortable throughout their procedure.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q4" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Will my insurance cover oral surgery?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Many dental insurance plans cover part or all of surgical
                      procedures. Our team will review your benefits and explain
                      costs and payment options beforehand.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q5" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      When should I see an oral surgeon instead of a general
                      dentist?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      If a tooth is impacted, fractured below the gumline, or
                      requires complex extraction or implant preparation,
                      surgical evaluation is recommended. Our team can determine
                      the best course of action for your specific situation.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          <div className="features-section">
            {/* <Fade direction="up" duration={1000}> */}
            <h2 className="features-heading">
              Looking for an Oral Surgeon in Plainfield, NJ?
            </h2>
            <p className="features-description">
              At Smiling Molar Dental, we make oral surgery safe, comfortable,
              and straightforward. Whether you need wisdom teeth removal,
              implant preparation, or surgical treatment for infections, our
              skilled team is here to help. Patients from Plainfield, North
              Plainfield, South Plainfield, Scotch Plains, and nearby areas
              trust us for expert, compassionate oral surgery that restores
              comfort and confidence.
            </p>
            {/* </Fade> */}
          </div>

          <BookCallBtn />
        </div>
      </main>
    </div>
  );
}
