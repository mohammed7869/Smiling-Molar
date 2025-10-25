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

export default function SportsDentistryPage() {
  const features = [
    {
      icon: "/Images/icons/Immediate Pain Relief.png",
      title: "Custom Athletic Mouthguards",
      description:
        "Professionally fitted for comfort and durability to protect teeth, lips, and jaws from impact injuries.",
      points: [
        "Professionally fitted for comfort and durability",
        "Protect teeth, lips, and jaws from impact injuries",
        "Ideal for contact sports like football, basketball, hockey - and non-contact activities like gymnastics or biking",
        "More effective and longer-lasting than over-the-counter guards",
      ],
    },
    {
      icon: "/Images/icons/Smart Treatment Decisions Under Pressure.png",
      title: "Emergency Dental Injury Treatment",
      description:
        "Immediate care for chipped, cracked, or fractured teeth with re-implantation of knocked-out teeth when possible.",
      points: [
        "Immediate care for chipped, cracked, or fractured teeth",
        "Re-implantation of knocked-out teeth when possible",
        "Stabilization, pain relief, and follow-up restorative care",
        "Quick response to preserve natural teeth and prevent complications",
      ],
    },
    {
      icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
      title: "Ongoing Prevention & Monitoring",
      description:
        "Regular mouthguard checks for proper fit and adjustments for growing children and teens.",
      points: [
        "Regular mouthguard checks for proper fit",
        "Adjustments for growing children and teens",
        "Education on injury prevention for athletes and parents",
        "Seasonal checkups to ensure continued protection",
      ],
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <main className="details-page-container">
        <div className="details-page">
          <div className="details-page-header-section">
            <Fade direction="up" duration={1000}>
              <h1>Sports Dentistry in Plainfield, NJ</h1>
            </Fade>
            <Fade direction="down" duration={1000}>
              <h2 className="text-center">
                Protecting Smiles for Active Patients | Smiling Molar Dental
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
                    src="/Images/sports-dentistry.avif"
                    alt="Sports Dentistry at Smiling Molar Dental in Plainfield, NJ"
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
              <div className="desc-text-subtitle">Sports Dentistry</div>
              <h3 className="desc-text-title">
                Understanding Sports Dentistry
              </h3>
              <p>
                Whether you're a child playing youth soccer, a teen on a
                competitive team, or an adult who loves staying active, dental
                injuries can happen in an instant. Sports dentistry focuses on
                preventing injuries with protective gear and providing
                immediate, expert care when accidents occur.
              </p>
              <p>
                At Smiling Molar Dental, we help athletes of all ages safeguard
                their smiles with custom-fitted athletic mouthguards and fast
                treatment for sports-related dental emergencies. Patients from
                Plainfield (07060), North Plainfield (07062, 07063), South
                Plainfield (07080), Scotch Plains (07076), and nearby areas
                trust our team for dependable, athlete-focused dental care.
              </p>
              <p>
                If you're searching for "sports mouthguards near me" or need
                urgent help after a dental injury, our experienced team is ready
                to keep your smile in the game.
              </p>
              {/* </Fade> */}
            </div>
          </div>
          <div className="wcu-section">
            <div className="wcu-text-section">
              {/* <Fade cascade direction="up" delay={1000} duration={600}> */}
              <div className="wcu-title">
                <h2>Why Choose Smiling Molar Dental for Sports Dentistry</h2>
              </div>
              <div className="wcu-points-section">
                <ul className="wcu-points">
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />{" "}
                      Professionally Fitted Mouthguards for Superior Protection
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> Same-Day
                      Appointments for Sports-Related Injuries
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> Care for
                      Kids, Teens & Adults
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> Affordable
                      Options & Insurance Support
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
                alt="Expert Dentist at Tulip Dental Maplewood"
              />
              {/* </Zoom> */}
            </div>
          </div>

          <div className="features-section">
            {/* <Fade direction="up" duration={1000}> */}
            <h2 className="features-heading">
              Sports Dentistry Services at Smiling Molar Dental
            </h2>
            <p className="features-description">
              We offer a comprehensive range of services to protect and restore
              smiles for active patients.
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
            <h2 className="faq-heading">Sports Dentistry FAQs</h2>
            <div className="faq-acc-container">
              <Accordion type="single" className="w-full space-y-5">
                <AccordionItem value="q1" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Do athletes really need custom mouthguards?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Yes. Custom mouthguards offer significantly better
                      protection and comfort compared to generic versions,
                      reducing the risk of broken teeth and jaw injuries.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q2" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      What should I do if a tooth is knocked out during a game?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Keep the tooth moist - ideally in milk, saline, or gently
                      placed back in the socket - and visit us immediately.
                      Quick action improves the chances of saving the tooth.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q3" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Are mouthguards only necessary for contact sports?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      No. Even non-contact sports like biking, skateboarding, or
                      gymnastics carry injury risks. Mouthguards help protect
                      your teeth in all types of activities.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q4" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      How often should mouthguards be replaced?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      For children and teens, mouthguards should be updated
                      every sports season to accommodate growth. Adults may keep
                      the same guard for several years with proper care.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q5" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Does insurance cover sports dentistry?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Some insurance plans cover injury treatment and
                      mouthguards. Our team can review your coverage and provide
                      affordable options if needed.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          <div className="features-section">
            {/* <Fade direction="up" duration={1000}> */}
            <h2 className="features-heading">
              Keep Your Smile Safe While You Play in Plainfield, NJ
            </h2>
            <p className="features-description">
              At Smiling Molar Dental, we make it easy to protect your smile
              while enjoying the sports you love. Whether you need a custom
              athletic mouthguard or urgent injury care, our experienced dental
              team is here to support athletes across Plainfield, North
              Plainfield, South Plainfield, Scotch Plains, and surrounding
              communities.
            </p>
            {/* </Fade> */}
          </div>

          <BookCallBtn />
        </div>
      </main>
    </div>
  );
}
