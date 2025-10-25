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

export default function DentalEmergencyPage() {
  const features = [
    {
      icon: "/Images/icons/Immediate Pain Relief.png",
      title: "Tooth Pain & Infections",
      description:
        "Our goal is to relieve pain, protect your oral health, and restore your smile quickly and effectively. Here's how we help during dental emergencies:",
      points: [
        "Immediate evaluation to pinpoint the cause",
        "Root canal therapy when needed to save the tooth",
        "Antibiotics and medication to control infection and swelling",
        "Gentle treatment focused on fast, lasting relief",
      ],
    },
    {
      icon: "/Images/icons/Smart Treatment Decisions Under Pressure.png",
      title: "Broken or Knocked-Out Teeth",
      description:
        "Our goal is to relieve pain, protect your oral health, and restore your smile quickly and effectively. Here's how we help during dental emergencies:",
      points: [
        "Emergency bonding, crowns, or repairs to restore function",
        "Attempted re-implantation for knocked-out teeth (if addressed quickly)",
        "Long-term replacement solutions if needed",
        "Personalized treatment to preserve your natural smile",
      ],
    },
    {
      icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
      title: "Damaged Restorations & Appliances",
      description:
        "Our goal is to relieve pain, protect your oral health, and restore your smile quickly and effectively. Here's how we help during dental emergencies:",
      points: [
        "Same-day fixes for broken fillings, crowns, bridges, or dentures",
        "Temporary solutions to keep you comfortable until permanent work is complete",
        "Adjustments for a proper, comfortable fit",
        "Durable restorations designed to last",
      ],
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <main className="details-page-container">
        <div className="details-page">
          <div className="details-page-header-section">
            <Fade direction="up" duration={1000}>
              <h1>Emergency Dental Care in Plainfield, NJ</h1>
            </Fade>
            <Fade direction="down" duration={1000}>
              <h2 className="text-center">
                Fast Relief for Dental Emergencies | Smiling Molar Dental
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
                    src="/Images/dental emergencies.avif"
                    alt="Dental emergencies at Smiling Molar Dental in Plainfield"
                  />
                </div>
                {/* </Zoom> */}
              </div>
            </div>

            {/* Text Section with Fade-in after delay */}
            <div className="desc-text-section">
              {/* <Fade cascade direction="up" delay={1000} duration={600}> */}
              <div className="desc-text-subtitle">Dental Emergencies</div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                Understanding Dental Emergencies
              </h2>
              <p>
                Dental emergencies can happen when you least expect them -
                whether it's a sudden toothache, a cracked tooth during dinner,
                or a dental injury at school or work. At Smiling Molar Dental,
                we understand that urgent dental problems can't wait. That's why
                we offer same-day emergency dental appointments to provide fast,
                effective relief when you need it most.
              </p>
              <p>
                Located in Plainfield, NJ, our caring team is here to handle a
                wide range of urgent dental needs for patients from Plainfield
                (07060), North Plainfield (07062, 07063), South Plainfield
                (07080), Scotch Plains (07076), and nearby neighborhoods. If
                you're searching for an "emergency dentist near me", you can
                rely on us for immediate attention and compassionate care.
              </p>
              {/* </Fade> */}
            </div>
          </div>
          <div className="wcu-section">
            <div className="wcu-text-section">
              {/* <Fade cascade direction="up" delay={1000} duration={600}> */}
              <div className="wcu-title">
                <h2>
                  Why Patients Choose Smiling Molar Dental for Emergency Care
                </h2>
              </div>
              <div className="wcu-points-section">
                <ul className="wcu-points">
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Same-Day Appointments Available
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Full Range of Emergency Services
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Gentle, Compassionate Team
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Insurance Accepted & Flexible Options
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
              Emergency Dental Services at Smiling Molar Dental
            </h2>
            <p className="features-description">
              Our goal is to relieve pain, protect your oral health, and restore
              your smile quickly and effectively. Here's how we help during
              dental emergencies:
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
            <h2 className="faq-heading">Emergency Dental FAQs</h2>
            <div className="faq-acc-container">
              <Accordion type="single" className="w-full space-y-5">
                <AccordionItem value="q1" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      What should I do if I lose a tooth?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Pick up the tooth by the crown only (not the root), keep
                      it moist in milk or saline, and get to our office right
                      away - ideally within 30-60 minutes.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q2" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Should I go to the ER for a dental emergency?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Hospitals can manage pain and infections but typically
                      can't fix dental problems. Seeing an emergency dentist
                      ensures proper treatment of the root cause.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q3" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      How do I know if it's a real emergency?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Severe pain, swelling, bleeding, loose or knocked-out
                      teeth, and damaged dental work are all reasons to call
                      right away.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q4" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      How quickly can I get an appointment?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      We reserve time daily for emergencies and aim to offer
                      same-day appointments whenever possible.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q5" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Will insurance cover emergency visits?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Most dental insurance plans cover emergency services. Our
                      team will help you maximize your benefits and explain your
                      options upfront.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          <div className="features-section">
            {/* <Fade direction="up" duration={1000}> */}
            <h2 className="features-heading">
              Need an Emergency Dentist in Plainfield, NJ?
            </h2>
            <p className="features-description">
              When dental pain or accidents strike, don't wait - fast treatment
              can make all the difference. At Smiling Molar Dental, we're ready
              to handle dental emergencies for children and adults, helping
              patients from Plainfield, North Plainfield, South Plainfield,
              Scotch Plains, and nearby areas get back to smiling comfortably.
            </p>
            {/* </Fade> */}
          </div>

          <BookCallBtn />
        </div>
      </main>
    </div>
  );
}
