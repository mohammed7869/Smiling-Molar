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

export default function DentalFillingPage() {
  const features = [
    {
      icon: "/Images/icons/Immediate Pain Relief.png",
      title: "Cavity Treatment & Restoration",
      description:
        "Our filling treatments are designed to protect your teeth and restore their natural beauty - whether you're addressing new decay or upgrading older restorations.",
      points: [
        "Careful removal of decay and bacteria",
        "Placement of composite fillings that match your tooth shade",
        "Smooth, comfortable restorations for natural bite function",
        "Preventative sealing to reduce future decay",
      ],
    },
    {
      icon: "/Images/icons/Smart Treatment Decisions Under Pressure.png",
      title: "Repairing Worn or Chipped Teeth",
      description:
        "Our filling treatments are designed to protect your teeth and restore their natural beauty - whether you're addressing new decay or upgrading older restorations.",
      points: [
        "Cosmetic bonding to fix chips or small cracks",
        "Reinforcement of weakened enamel with strong composites",
        "Natural-looking finishes for seamless integration",
        "Long-lasting durability for daily function",
      ],
    },
    {
      icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
      title: "Replacing Old or Metal Fillings",
      description:
        "Our filling treatments are designed to protect your teeth and restore their natural beauty - whether you're addressing new decay or upgrading older restorations.",
      points: [
        "Safe removal of outdated amalgam or failing fillings",
        "Replacement with modern tooth-colored materials",
        "Aesthetic improvement for a brighter, healthier-looking smile",
        "Strong, reliable results designed to last for years",
      ],
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <main className="details-page-container">
        <div className="details-page">
          <div className="details-page-header-section">
            <Fade direction="up" duration={1000}>
              <h1>Dental Fillings in Plainfield, NJ</h1>
            </Fade>
            <Fade direction="down" duration={1000}>
              <h2 className="text-center">
                Strong, Natural-Looking Dental Fillings | Smiling Molar Dental
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
                    src="/Images/dental-filling.avif"
                    alt="Dental Fillings at Smiling Molar Dental in Plainfield, NJ"
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
              <div className="desc-text-subtitle">Dental Fillings</div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                Understanding Dental Fillings
              </h2>
              <p>
                When cavities or minor damage affect your teeth, tooth-colored
                dental fillings offer a quick, durable, and aesthetically
                pleasing solution. At Smiling Molar Dental, we use modern
                composite materials that blend seamlessly with your natural
                teeth - restoring strength, function, and appearance without
                compromising your smile.
              </p>
              <p>
                Whether you're repairing a small cavity or replacing an old
                filling, our experienced dental team provides gentle, precise
                care for patients of all ages. We proudly serve Plainfield
                (07060), North Plainfield (07062, 07063), South Plainfield
                (07080), Scotch Plains (07076), and surrounding communities.
                When patients search for "dental fillings near me", they choose
                Smiling Molar Dental for quality and comfort.
              </p>
              {/* </Fade> */}
            </div>
          </div>
          <div className="wcu-section">
            <div className="wcu-text-section">
              {/* <Fade cascade direction="up" delay={1000} duration={600}> */}
              <div className="wcu-title">
                <h2>Why Patients Choose Smiling Molar Dental for Fillings</h2>
              </div>
              <div className="wcu-points-section">
                <ul className="wcu-points">
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Aesthetic, Tooth-Colored Restorations
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Gentle & Efficient Treatments
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Precision You Can Trust
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Affordable & Insurance-Friendly Care
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
                src="/Images/top-reasons.webp"
                alt="Expert Dentist at Tulip Dental Maplewood"
              />
              {/* </Zoom> */}
            </div>
          </div>
          <div className="features-section">
            {/* <Fade direction="up" duration={1000}> */}
            <h2 className="features-heading">
              Dental Filling Services at Smiling Molar Dental
            </h2>
            <p className="features-description">
              Our filling treatments are designed to protect your teeth and
              restore their natural beauty - whether you're addressing new decay
              or upgrading older restorations.
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
            <h2 className="faq-heading">Dental Fillings FAQs</h2>
            <div className="faq-acc-container">
              <Accordion type="single" className="w-full space-y-5">
                <AccordionItem value="q1" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">Do dental fillings hurt?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      No. We use local anesthesia to ensure you feel little to
                      no discomfort during the procedure.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q2" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">How long do fillings last?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Tooth-colored fillings typically last 7-10 years or more
                      with good oral hygiene and regular dental visits.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q3" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Can children get dental fillings?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Yes. Fillings are a safe and effective way to treat
                      cavities in both children and adults.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q4" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">What type of filling is best?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Composite (tooth-colored) fillings are most popular today
                      because they look natural, bond strongly to teeth, and
                      don't contain metal.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q5" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Are fillings covered by insurance?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Most dental insurance plans cover fillings. Our team will
                      help you understand your coverage and payment options
                      before treatment.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          <div className="features-section">
            {/* <Fade direction="up" duration={1000}> */}
            <h2 className="features-heading">
              Looking for Durable, Natural-Looking Fillings in Plainfield, NJ?
            </h2>
            <p className="features-description">
              At Smiling Molar Dental, we specialize in aesthetic, durable
              fillings that restore the strength and appearance of your teeth
              with care and precision. <br />
              <br />
              Whether it's your child's first cavity or replacing old
              restorations, our friendly team provides high-quality,
              personalized care for patients from Plainfield, North Plainfield,
              South Plainfield, Scotch Plains, and surrounding communities.
            </p>
            {/* </Fade> */}
          </div>

          <BookCallBtn />
        </div>
      </main>
    </div>
  );
}
