import type { Metadata } from "next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";
import { Fade, Zoom } from "react-awesome-reveal";
import { CheckCircle } from "lucide-react";
import BookCallBtn from "../book-call-btn";
import { generateServiceMetadata } from "@/lib/metadata";

export const metadata: Metadata = generateServiceMetadata(
  "emergency-dentistry-plainfield-nj",
  "/Images/emergency-dentistry.avif"
);

export default function EmergencyDentistryPage() {
  const features = [
    {
      icon: "/Images/icons/Immediate Pain Relief.png",
      title: "Persistent Toothaches & Infections",
      description:
        "When emergencies happen, our goal is to relieve pain quickly and protect your smile. Whether it's a sudden injury, swelling, or broken dental work, we're ready to help with same-day treatment for patients across Plainfield and surrounding zip codes.",
      points: [
        "Prompt exams to pinpoint the source of pain",
        "Gentle procedures to relieve discomfort immediately",
        "Root canal or restorative treatment if needed",
        "Antibiotics and follow-up care to ensure full healing",
      ],
    },
    {
      icon: "/Images/icons/Smart Treatment Decisions Under Pressure.png",
      title: "Dental Injuries from Accidents",
      description:
        "When emergencies happen, our goal is to relieve pain quickly and protect your smile. Whether it's a sudden injury, swelling, or broken dental work, we're ready to help with same-day treatment for patients across Plainfield and surrounding zip codes.",
      points: [
        "Emergency repair for fractured or displaced teeth",
        "Treatment for gum or soft tissue injuries",
        "Replacement solutions for unsalvageable teeth",
        "Customized treatment plans to restore both function and appearance",
      ],
    },
    {
      icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
      title: "Problems with Restorations or Appliances",
      description:
        "When emergencies happen, our goal is to relieve pain quickly and protect your smile. Whether it's a sudden injury, swelling, or broken dental work, we're ready to help with same-day treatment for patients across Plainfield and surrounding zip codes.",
      points: [
        "Quick fixes for broken crowns, bridges, or fillings",
        "Adjustments or repairs for dentures and partials",
        "Temporary solutions to keep you comfortable until permanent treatment",
        "Durable, natural-looking replacements crafted to last",
      ],
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="details-page-container">
        <div className="details-page">
          <div className="details-page-header-section">
            <Fade direction="up" duration={1000}>
              <h1>Emergency Dental Care in Plainfield, NJ</h1>
            </Fade>
            <Fade direction="down" duration={1000}>
              <h2 className="text-center">
                Same-Day Emergency Dentistry in Plainfield | Smiling Molar
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
                    src="/Images/emergency-dentistry.avif"
                    alt="Emergency Dentistry at Tulip Dental Maplewood"
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
              <div className="desc-text-subtitle">Emergency Dentistry</div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                Understanding Emergency Dentistry
              </h2>
              <p>
                Dental emergencies can happen when you least expect them -
                during meals, at night, while playing sports, or even during
                routine activities. Whether it's a broken tooth, severe
                toothache, infection, or a damaged restoration, waiting for care
                can make things worse.
              </p>
              <p>
                At Smiling Molar Dental, we offer same-day emergency
                appointments because we know that fast treatment is essential to
                ease pain, protect your teeth, and prevent complications. Our
                experienced team is trained to handle a full range of urgent
                dental problems, helping patients return to comfort quickly and
                confidently.
              </p>
              <p>
                We proudly serve patients from Plainfield (07060), North
                Plainfield (07062, 07063), South Plainfield (07080), Scotch
                Plains (07076), and surrounding areas. If you're searching for
                an "emergency dentist near me", you can count on us for
                immediate, compassionate care.
              </p>
            </div>
          </div>

          <div className="wcu-section">
            <div className="wcu-text-section">
              <div className="wcu-title">
                <h2>
                  Why Choose Smiling Molar Dental for Emergency Dental Care
                </h2>
              </div>
              <div className="wcu-points-section">
                <ul className="wcu-points">
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Fast Appointments When Urgency Strikes
                    </h3>
                  </li>

                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Comprehensive Emergency Solutions
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Gentle, Experienced Professionals
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Affordable & Flexible Payment Options
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
            </div>
            <div className="wcu-img-section">
              <Zoom cascade damping={0.3} duration={800}>
                <img
                  className="bdr-doctor-img"
                  src="/Images/about-hand.jpg"
                  alt="Expert Dentist at Tulip Dental Maplewood"
                />
              </Zoom>
            </div>
          </div>
          <div className="features-section">
            <h2 className="features-heading">
              Emergency Dentistry Services at Smiling Molar Dental
            </h2>
            <p className="features-description text-center">
              When emergencies happen, our goal is to relieve pain quickly and
              protect your smile. Whether it's a sudden injury, swelling, or
              broken dental work, we're ready to help with same-day treatment
              for patients across Plainfield and surrounding zip codes.
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
            <h2 className="faq-heading">Emergency Dentistry FAQs </h2>
            <div className="faq-acc-container">
              <Accordion type="single" collapsible className="w-full space-y-6">
                <AccordionItem value="q1" className="faq-acc">
                  <AccordionTrigger className="faq-qn rounded-md">
                    <h3 className="text-lg">
                      How do I know if my dental problem is an emergency?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans ">
                    If you have severe pain, swelling, bleeding, or a
                    broken/knocked-out tooth, treat it as an emergency and call
                    us right away.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q2" className="faq-acc">
                  <AccordionTrigger className="faq-qn rounded-md">
                    <h3 className="text-lg">
                      What should I do if I break a tooth?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    Rinse with warm water, save any fragments, and contact us
                    immediately. Quick action increases the chance of repair.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q3" className="faq-acc">
                  <AccordionTrigger className="faq-qn rounded-md">
                    <h3 className="text-lg">
                      Can I wait a few days to see if the pain goes away?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    Delaying treatment can worsen the issue. Infections and
                    injuries can escalate quickly - it's best to seek help
                    immediately.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q4" className="faq-acc">
                  <AccordionTrigger className="faq-qn rounded-md">
                    <h3 className="text-lg">
                      Are emergency dental visits covered by insurance?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    Most dental insurance plans cover urgent care. Our team will
                    help verify your benefits and discuss your options before
                    treatment.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q5" className="faq-acc">
                  <AccordionTrigger className="faq-qn rounded-md">
                    <h3 className="text-lg">
                      How fast can I be seen at Smiling Molar Dental?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    We reserve daily slots for urgent cases and do our best to
                    offer same-day appointments whenever possible.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          {/* Call to Action Section */}
        </div>
        <div className="features-section">
          <h2 className="features-heading">
            Looking for an Emergency Dentist in Plainfield, NJ?
          </h2>
          <p className="features-description">
            Dental problems don't wait - and neither should you. At Smiling
            Molar Dental, we provide same-day emergency dental appointments for
            toothaches, injuries, infections, and broken restorations. Patients
            from Plainfield, North Plainfield, South Plainfield, Scotch Plains,
            and nearby communities trust our team for quick, compassionate care
            when it matters most.
          </p>
          <BookCallBtn />
        </div>
      </div>
    </div>
  );
}
