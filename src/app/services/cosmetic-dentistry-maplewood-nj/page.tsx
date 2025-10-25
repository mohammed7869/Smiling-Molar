import type { Metadata } from "next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";
import { Fade, Zoom } from "react-awesome-reveal";
import BookCallBtn from "../book-call-btn";
import { CheckCircle } from "lucide-react";
import { generateServiceMetadata } from "@/lib/metadata";
// import Link from "next/link";

export const metadata: Metadata = generateServiceMetadata(
  "cosmetic-dentistry-maplewood-nj",
  "/Images/cosmetic-dentistry.avif"
);

export default function CosmeticDentistryPage() {
  const features = [
    {
      icon: "/Images/icons/teeth-whitening.png",
      title: "Professional Teeth Whitening",
      description:
        "Our goal is to provide cosmetic treatments that are safe, effective, and long-lasting, giving you a smile that boosts both your confidence and your oral health.",
      points: [
        "In-office whitening for fast, dramatic results",
        "Take-home kits for flexible treatment options",
        "Safe methods that protect enamel and gums",
        "Noticeably brighter smiles with lasting effects",
      ],
    },
    {
      icon: "/Images/icons/Smart Treatment Decisions Under Pressure.png",
      title: "Veneers & Cosmetic Bonding",
      description:
        "Our goal is to provide cosmetic treatments that are safe, effective, and long-lasting, giving you a smile that boosts both your confidence and your oral health.",
      points: [
        "Custom-crafted veneers for a flawless smile makeover",
        "Tooth-colored bonding to repair chips, gaps, and imperfections",
        "Natural aesthetics that blend seamlessly with surrounding teeth",
        "Durable materials designed to last for years",
      ],
    },
    {
      icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
      title: "Complete Smile Transformations",
      description:
        "Our goal is to provide cosmetic treatments that are safe, effective, and long-lasting, giving you a smile that boosts both your confidence and your oral health.",
      points: [
        "Combination of veneers, crowns, whitening, and Invisalign®",
        "Personalized treatment plans for full smile makeovers",
        "A balanced focus on both appearance and function",
        "Results that leave a lasting impression",
      ],
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <main className="details-page-container">
        <div className="details-page">
          <div className="details-page-header-section">
            <Fade direction="up" duration={1000}>
              <h1>Cosmetic Dentistry in Plainfield, NJ</h1>
            </Fade>
            <Fade direction="down" duration={1000}>
              <h2 className="text-center">
                Enhance Your Smile with Cosmetic Dentistry | Smiling Molar
                Dental
              </h2>
            </Fade>
            {/* <div className='flex items-center justify-center gap-2'> <Link href={'/'} className='font-medium'>Home </Link><span><ChevronRight/></span> <span className='text-white/80'>Emergency Dentistry</span></div> */}
          </div>
          <div className="details-page-desc-section">
            {/* Image Section */}
            <div className="image_section">
              <div className="image_section-cover">
                <div className="main-image">
                  <img
                    src="/Images/cosmetic-dentistry.avif"
                    alt="Cosmetic Dentistry at Smiling Molar Dental in Plainfield"
                  />
                </div>
                {/* <img
              src="/Images/s1.webp"
              className="overlay-image"
              alt="Overlay"
            /> */}
              </div>
            </div>

            {/* Text Section with Fade-in after delay */}
            <div className="desc-text-section">
              <div className="desc-text-subtitle">Cosmetic Dentistry</div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                Understanding Cosmetic Dentistry
              </h2>
              <p>
                A confident smile can transform the way you look and feel. At
                Smiling Molar Dental, we offer comprehensive cosmetic dentistry
                to help you achieve the radiant, natural-looking smile you’ve
                always wanted.
              </p>
              <p>
                Whether you want to fix chips and cracks, brighten stained
                teeth, or completely redesign your smile, our team uses modern
                techniques and high-quality materials to create results that are
                both beautiful and long-lasting.
              </p>
              <p>
                We proudly serve patients from Plainfield (07060), North
                Plainfield (07062, 07063), South Plainfield (07080), Scotch
                Plains (07076), and nearby communities. If you’re searching for
                a “cosmetic dentist near me” in the Plainfield area, we’re here
                to make your dream smile a reality.
              </p>
            </div>
          </div>
          <div className="wcu-section">
            <div className="wcu-text-section">
              {/* <div className="wcu-subtitle">Top Reasons</div> */}
              <div className="wcu-title">
                <h2>Why Choose Smiling Molar Dental for Cosmetic Dentistry</h2>
              </div>
              <div className="wcu-points-section">
                <ul className="wcu-points">
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Comprehensive Aesthetic Solutions
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Modern Technology & Precision Techniques
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Personalized Smile Design
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Flexible Financing Options
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Convenient Location for Local Families
                    </h3>
                  </li>
                </ul>
              </div>
            </div>
            <div className="wcu-img-section">
              <Zoom cascade damping={0.3} duration={800}>
                <img
                  className="bdr-doctor-img"
                  src="/Images/about-hand.jpg"
                  alt="Expert Cosmetic Dentist at Smiling Molar Dental in Plainfield"
                />
              </Zoom>
            </div>
          </div>
          <div className="features-section">
            <h2 className="features-heading">
              Cosmetic Dentistry Services at Smiling Molar Dental
            </h2>
            <p className="features-description">
              Our goal is to provide cosmetic treatments that are safe,
              effective, and long-lasting, giving you a smile that boosts both
              your confidence and your oral health.
            </p>

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
            <h2 className="faq-heading">Cosmetic Dentistry FAQs</h2>
            <div className="faq-acc-container">
              <Accordion type="single" className="w-full space-y-5">
                <AccordionItem value="q1" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      What dental concerns can cosmetic dentistry fix?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Cosmetic treatments can address discoloration, chips,
                      gaps, misshapen teeth, uneven alignment, and more.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q2" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Is cosmetic dentistry only for adults?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      No. Many teens and adults benefit from cosmetic procedures
                      like whitening, bonding, or Invisalign®.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q3" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      How long do cosmetic results last?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      With good oral care and regular checkups, veneers and
                      crowns can last 10–15 years or longer. Whitening results
                      can be maintained with touch-ups.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q4" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Are cosmetic dental treatments painful?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Most procedures are minimally invasive. We use gentle
                      techniques and offer anesthesia or sedation if needed for
                      your comfort.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q5" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Will my insurance cover cosmetic procedures?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Most cosmetic treatments aren’t covered, but we provide
                      transparent pricing and flexible financing to make your
                      new smile achievable.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          {/* Post-FAQ CTA Section */}
          <div className="features-section">
            <h2 className="features-heading">
              Ready to Transform Your Smile with Cosmetic Dentistry in
              Plainfield?
            </h2>
            <p className="features-description">
              If you’re ready to enhance your smile with safe, modern, and
              personalized cosmetic treatments, Smiling Molar Dental is here to
              help.
              <br />
              <br />
              From whitening and veneers to complete smile makeovers, our
              skilled team helps patients from Plainfield, North Plainfield,
              South Plainfield, Scotch Plains, and surrounding communities
              achieve results that look stunning and feel natural.
            </p>
          </div>

          <BookCallBtn />
        </div>
      </main>
    </div>
  );
}
