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

export default function WhiteningVeneersPage() {
  const features = [
    {
      icon: "/Images/icons/Immediate Pain Relief.png",
      title: "Professional Teeth Whitening",
      points: [
        "Fast, in-office whitening for immediate results",
        "Custom take-home whitening trays for gradual brightening",
        "Safe techniques that protect enamel and minimize sensitivity",
        "Long-lasting outcomes with simple aftercare",
      ],
    },
    {
      icon: "/Images/icons/Smart Treatment Decisions Under Pressure.png",
      title: "Custom Porcelain Veneers",
      points: [
        "Conceal chips, stains, gaps, and irregularities",
        "Designed for a precise, natural look",
        "Made with durable, stain-resistant materials",
        "Long-lasting cosmetic enhancement with proper care",
      ],
    },
    {
      icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
      title: "Complete Smile Makeovers",
      points: [
        "Combination of whitening, veneers, and other cosmetic treatments",
        "Personalized plans to match your goals and facial aesthetics",
        "Balanced improvements in both appearance and function",
        "A boost of confidence that shines through every smile",
      ],
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <main className="details-page-container">
        <div className="details-page">
          <div className="details-page-header-section">
            <Fade direction="up" duration={1000}>
              <h1>Teeth Whitening & Veneers in Plainfield, NJ</h1>
            </Fade>
            <Fade direction="down" duration={1000}>
              <h2 className="text-center">
                Achieve a Radiant, Flawless Smile | Smiling Molar Dental
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
                    src="/Images/whiteningveneers.avif"
                    alt="Teeth Whitening & Veneers at Smiling Molar Dental in Plainfield"
                  />
                </div>
              </div>
            </div>

            {/* Text Section with Fade-in after delay */}
            <div className="desc-text-section">
              {/* <Fade cascade direction="up" delay={1000} duration={600}> */}
              <div className="desc-text-subtitle">Whitening & Veneers</div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                Understanding Teeth Whitening & Veneers
              </h2>
              <p>
                A bright, attractive smile can make all the difference in how
                you look and feel. At Smiling Molar Dental, we offer
                professional teeth whitening and custom veneers to help you
                achieve the smile of your dreams - safely, effectively, and with
                lasting results.
              </p>
              <p>
                Our experienced cosmetic dental team uses advanced technology to
                design treatments that enhance both the appearance and health of
                your teeth. Whether you want to whiten away years of stains or
                transform your smile with veneers, we’re here to create a
                personalized plan that fits your goals.
              </p>
              <p>
                We proudly serve patients from Plainfield (07060), North
                Plainfield (07062, 07063), South Plainfield (07080), Scotch
                Plains (07076), and surrounding communities. If you’ve been
                searching for “teeth whitening near me” or “veneers dentist near
                me”, your trusted local cosmetic dental experts are right here.
              </p>
              {/* </Fade> */}
            </div>
          </div>
          <div className="wcu-section">
            <div className="wcu-text-section">
              {/* <Fade cascade direction="up" delay={1000} duration={600}> */}
              <div className="wcu-title">
                <h2>
                  Why Patients Choose Smiling Molar Dental for Whitening &
                  Veneers
                </h2>
              </div>
              <div className="wcu-points-section">
                <ul className="wcu-points">
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> Safe &
                      Effective Professional Whitening
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> Custom
                      Veneers for a Natural Finish
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> Experienced
                      Cosmetic Team
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> Flexible
                      Financing & Transparent Pricing
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> Convenient
                      Plainfield Location
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
                alt="Expert Cosmetic Dentist at Smiling Molar Dental in Plainfield"
              />
              {/* </Zoom> */}
            </div>
          </div>
          <div className="features-section">
            {/* <Fade direction="up" duration={1000}> */}
            <h2 className="features-heading">
              Whitening & Veneer Services at Smiling Molar Dental
            </h2>
            <p className="features-description">
              We offer a range of cosmetic solutions to help you achieve your
              ideal smile.
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
            <h2 className="faq-heading">Teeth Whitening & Veneers FAQs</h2>
            <div className="faq-acc-container">
              <Accordion type="single" className="w-full space-y-5">
                <AccordionItem value="q1" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Is professional whitening better than drugstore kits?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Yes. Professional whitening delivers faster, safer, and
                      more noticeable results without damaging your enamel.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q2" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">How long do veneers last?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Porcelain veneers typically last 10-15 years or more with
                      good oral hygiene and routine dental visits.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q3" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">Are veneers permanent?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Yes. Veneers require slight reshaping of the natural
                      tooth, making the treatment a long-term cosmetic
                      investment.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q4" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Can I combine whitening and veneers?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Absolutely. Whitening is often performed first, followed
                      by veneer placement to ensure a perfect shade match.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q5" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Does insurance cover these treatments?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Most cosmetic treatments like whitening and veneers are
                      not covered by insurance, but we offer flexible payment
                      and financing options to make treatment more affordable.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          <div className="features-section">
            {/* <Fade direction="up" duration={1000}> */}
            <h2 className="features-heading">
              Ready to Transform Your Smile with Whitening or Veneers in
              Plainfield, NJ?
            </h2>
            <p className="features-description">
              If you’re ready to brighten your smile or correct imperfections
              with custom veneers, the team at Smiling Molar Dental is here to
              help. Our cosmetic treatments are designed to be natural-looking,
              safe, and long-lasting, giving you a smile you’ll love to share.
              <br /> <br />
              We proudly serve Plainfield, North Plainfield, South Plainfield,
              Scotch Plains, and nearby communities.
            </p>
            {/* </Fade> */}
          </div>

          <BookCallBtn />
        </div>
      </main>
    </div>
  );
}
