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
      icon: "/Images/icons/Immediate Pain Relief.png",
      title: "Thorough Wisdom Tooth Evaluations",
      description: "",
      points: [
        "Digital X-rays to identify impacted or misaligned teeth",
        "Assessing jaw space and eruption patterns early",
        "Monitoring growth during teenage years",
        "Preventive recommendations to avoid complications",
      ],
    },
    {
      icon: "/Images/icons/tooth-extraction.png",
      title: "Simple & Surgical Extractions",
      description: "",
      points: [
        "Gentle removal of erupted wisdom teeth",
        "Safe, precise surgical extractions for impacted teeth",
        "Local anesthesia or sedation options to keep you relaxed",
        "Techniques designed to minimize swelling and recovery time",
      ],
    },
    {
      icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
      title: "Recovery Guidance & Support",
      description: "",
      points: [
        "Clear instructions for at-home healing",
        "Pain management and medication guidance if needed",
        "Follow-up visits to monitor healing progress",
        "Continued care to maintain oral health post-extraction",
      ],
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <main className="details-page-container">
        <div className="details-page">
          <div className="details-page-header-section">
            <Fade direction="up" duration={1000}>
              <h1>Wisdom Tooth Extractions in Plainfield, NJ</h1>
            </Fade>
            <Fade direction="down" duration={1000}>
              <h2 className="text-center">
                Gentle Wisdom Tooth Removal Near You | Smiling Molar Dental
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
                    src="/Images/wisdom-tooth.avif"
                    alt="Wisdom Teeth Removal at Smiling Molar Dental in Plainfield"
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
              <div className="desc-text-subtitle">Wisdom Teeth Removal</div>
              <h3 className="desc-text-title">
                Understanding Wisdom Tooth Extractions
              </h3>
              <p>
                Wisdom teeth typically make their appearance between the ages of
                17 and 25, but not everyone has enough space in their mouth to
                accommodate them comfortably. When these third molars erupt
                incorrectly, become impacted, or cause crowding, they can lead
                to pain, infection, and misalignment.
              </p>
              <p>
                At Smiling Molar Dental in Plainfield, NJ, our experienced team
                offers comprehensive evaluations and gentle extractions to keep
                your smile healthy. We provide treatment in a calm, supportive
                environment, using advanced imaging and modern surgical
                techniques to ensure safe, predictable results.
              </p>
              <p>
                Patients from Plainfield (07060), North Plainfield (07062,
                07063), South Plainfield (07080), Scotch Plains (07076), and
                nearby communities trust us when searching for "wisdom tooth
                removal near me" - because we make the process clear,
                comfortable, and stress-free.
              </p>
              {/* </Fade> */}
            </div>
          </div>
          <div className="wcu-section">
            <div className="wcu-text-section">
              {/* <Fade cascade direction="up" delay={1000} duration={600}> */}
              <div className="wcu-title">
                <h2>
                  Why Choose Smiling Molar Dental for Wisdom Tooth Extractions
                </h2>
              </div>
              <div className="wcu-points-section">
                <ul className="wcu-points">
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> Detailed
                      Evaluations & Digital Imaging
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> Customized
                      Treatment Plans
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> Gentle
                      Surgical Techniques & Sedation
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> Affordable
                      & Insurance-Friendly Care
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
                src="/Images/about-hand.avif"
                alt="Expert Oral Surgery Team at Smiling Molar Dental in Plainfield"
              />
              {/* </Zoom> */}
            </div>
          </div>

          <div className="features-section">
            {/* <Fade direction="up" duration={1000}> */}
            <h2 className="features-heading">
              Wisdom Tooth Services at Smiling Molar Dental
            </h2>
            <p className="features-description">
              We provide comprehensive care for patients before, during, and
              after wisdom tooth removal.
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
            <h2 className="faq-heading">Wisdom Teeth FAQs</h2>
            <div className="faq-acc-container">
              <Accordion type="single" className="w-full space-y-5">
                <AccordionItem value="q1" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      When should wisdom teeth be removed?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Most wisdom teeth are extracted in the late teens or early
                      20s, before they cause pain, infection, or crowding.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q2" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Do all wisdom teeth need to be taken out?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      No. If they’re healthy, fully erupted, and don’t affect
                      your bite, they may not require extraction. We evaluate
                      each case individually.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q3" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">Will the procedure hurt?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      With local anesthesia and sedation options, most patients
                      feel little to no discomfort during the procedure.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q4" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      How long is the recovery period?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Simple extractions typically heal within a few days.
                      Surgical extractions may take about a week, depending on
                      complexity.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q5" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Does insurance cover wisdom tooth extraction?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Many dental insurance plans offer partial or full
                      coverage. We’ll review your benefits and help you
                      understand your options.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          <div className="features-section">
            {/* <Fade direction="up" duration={1000}> */}
            <h2 className="features-heading">
              Considering Wisdom Tooth Removal in Plainfield, NJ?
            </h2>
            <p className="features-description">
              At Smiling Molar Dental, we make wisdom tooth care simple, safe,
              and stress-free. From digital evaluations to gentle surgical
              removal and supportive aftercare, our team helps patients from
              Plainfield, North Plainfield, South Plainfield, and Scotch Plains
              get back to smiling comfortably.
            </p>
            {/*</Fade> */}
          </div>

          <BookCallBtn />
        </div>
      </main>
    </div>
  );
}
