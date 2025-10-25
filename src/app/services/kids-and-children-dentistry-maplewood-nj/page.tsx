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

export default function KidsAndChildrenPage() {
  const features = [
    {
      icon: "/Images/icons/Immediate Pain Relief.png",
      title: "Routine Checkups & Gentle Cleanings",
      description:
        "Regular dental visits help prevent problems and keep children's teeth healthy and strong.",
      points: [
        "Dental sealants to protect back teeth from decay",
        "Early treatment for small cavities before they worsen",
        "Tooth-colored fillings for natural results",
        "Preventive strategies to reduce future dental problems",
      ],
    },
    {
      icon: "/Images/icons/Smart Treatment Decisions Under Pressure.png",
      title: "Cavity Prevention & Fillings",
      description:
        "We focus on preventing cavities and treating them early when they do occur.",
      points: [
        "Dental sealants to protect back teeth from decay",
        "Early treatment for small cavities",
        "Tooth-colored fillings for natural results",
        "Preventive care designed to reduce future dental problems",
      ],
    },
    {
      icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
      title: "Emergency & Specialized Care for Kids",
      description:
        "When dental emergencies happen, we're here to provide immediate, gentle care for your child.",
      points: [
        "Same-day appointments for injuries, toothaches, or accidents",
        "Expert guidance for knocked-out or broken teeth",
        "Early orthodontic assessments to catch spacing or bite issues",
        "Personalized care tailored to each child's unique needs",
      ],
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <main className="details-page-container">
        <div className="details-page">
          <div className="details-page-header-section">
            <Fade direction="up" duration={1000}>
              <h1>Children's Dentistry in Plainfield, NJ </h1>
            </Fade>
            <Fade direction="down" duration={1000}>
              <h2 className="text-center">
                Building Bright Smiles from the Start | Smiling Molar Dental
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
                    src="/Images/kids-dentistry.avif"
                    alt="Kids & Children’s Dentistry at Smiling Molar Dental in Plainfield"
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
              <div className="desc-text-subtitle">
                Kids & Children's Dentistry
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                Understanding Kids & Children's Dentistry
              </h2>
              <p>
                At Smiling Molar Dental, we believe great oral health begins
                early. Our kids and children's dentistry services are designed
                to create positive, comfortable experiences that set the
                foundation for lifelong healthy smiles.
              </p>
              <p>
                From your child's very first dental visit to routine cleanings,
                cavity prevention, and early orthodontic guidance, our
                experienced dental team ensures that every appointment is
                gentle, encouraging, and even fun.
              </p>
              <p>
                We proudly serve families from Plainfield (07060), North
                Plainfield (07062, 07063), South Plainfield (07080), Scotch
                Plains (07076), and surrounding communities. If you're searching
                for a "children's dentist near me" who truly cares, Smiling
                Molar Dental is your trusted family-friendly practice.
              </p>
              {/* </Fade> */}
            </div>
          </div>
          <div className="wcu-section">
            <div className="wcu-text-section">
              {/* <Fade cascade direction="up" delay={1000} duration={600}> */}
              <div className="wcu-title">
                <h2>
                  Why Families Choose Smiling Molar Dental for Children's
                  Dentistry
                </h2>
              </div>
              <div className="wcu-points-section">
                <ul className="wcu-points">
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> A Warm,
                      Kid-Friendly Environment
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> Gentle &
                      Patient Dental Team
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />{" "}
                      Prevention-Focused Pediatric Care
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> Affordable
                      Care with Insurance & Medicaid Options
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />{" "}
                      Conveniently Located for Families in Plainfield
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
              Children's Dentistry Services at Smiling Molar Dental
            </h2>
            <p className="features-description">
              We offer a comprehensive range of pediatric dental services
              designed to support healthy growth and development at every stage.
              <br />
              <br />
              Here's how we care for children's smiles:
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
            <h2 className="faq-heading">Kids’ Dentistry FAQs</h2>
            <div className="faq-acc-container">
              <Accordion type="single" className="w-full space-y-5">
                <AccordionItem value="q1" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      When should my child visit the dentist for the first time?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      The American Academy of Pediatric Dentistry recommends a
                      first visit by age one or within six months of the first
                      tooth erupting.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q2" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      How often should children see the dentist?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Most kids should visit the dentist every six months for
                      checkups and cleanings to maintain healthy teeth and gums.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q3" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Are dental sealants safe for children?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Yes. Sealants are a safe, effective way to protect molars
                      from cavities by creating a barrier against bacteria and
                      food particles.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q4" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      What if my child is anxious or afraid?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Our team specializes in gentle, compassionate
                      communication. We take time to build trust so children
                      feel at ease during treatment.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q5" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Is children's dentistry covered by insurance?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Yes. Most insurance plans and Medicaid cover preventive
                      and restorative care for kids. We'll help you navigate
                      coverage and options.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          <div className="features-section">
            {/* <Fade direction="up" duration={1000}> */}
            <h2 className="features-heading">
              Looking for a Gentle Children's Dentist in Plainfield, NJ?
            </h2>
            <p className="features-description">
              At Smiling Molar Dental, we're passionate about caring for young
              smiles. From baby teeth to braces, we provide compassionate,
              age-appropriate care that makes every child feel comfortable and
              confident.
              <br />
              <br />
              Families from Plainfield, North Plainfield, South Plainfield,
              Scotch Plains, and surrounding communities trust us to make dental
              visits positive and stress-free.
            </p>
            {/* </Fade> */}
          </div>

          <BookCallBtn />
        </div>
      </main>
    </div>
  );
}
