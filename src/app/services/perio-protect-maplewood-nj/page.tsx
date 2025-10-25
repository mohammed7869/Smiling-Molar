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

export default function PerioProtectPage() {
  const features = [
    {
      icon: "/Images/icons/Immediate Pain Relief.png",
      title: "Targeted Medication Delivery",
      description:
        "Reaches bacteria deep below the gums with medication that reduces inflammation and supports healing.",
      points: [
        "Reaches bacteria deep below the gums",
        "Reduces inflammation, bleeding, and tenderness",
        "Helps prevent infection from spreading",
        "Supports tissue healing for long-term stability",
      ],
    },
    {
      icon: "/Images/icons/Smart Treatment Decisions Under Pressure.png",
      title: "Comfortable, At-Home Treatment",
      description:
        "Easy daily use with custom-fit trays that ensure accuracy and comfort without injections or surgery.",
      points: [
        "Easy daily use-just minutes a day",
        "Custom-fit trays ensure accuracy and comfort",
        "No injections, surgery, or complicated steps",
        "Simple addition to your daily routine",
      ],
    },
    {
      icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
      title: "Long-Term Periodontal Benefits",
      description:
        "Protects teeth from bone and gum loss while freshening breath and enhancing professional treatment results.",
      points: [
        "Protects teeth from bone and gum loss",
        "Freshens breath by controlling bacteria",
        "Helps stabilize gum health between cleanings",
        "Enhances results of professional treatments",
      ],
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <main className="details-page-container">
        <div className="details-page">
          <div className="details-page-header-section">
            <Fade direction="up" duration={1000}>
              <h1>Perio Protect Gum Treatment in Plainfield, NJ</h1>
            </Fade>
            <Fade direction="down" duration={1000}>
              <h2 className="text-center">
                Modern, Non-Surgical Gum Care | Smiling Molar Dental
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
                    src="/Images/perio-protect.avif"
                    alt="Perio Protect gum disease treatment at Smiling Molar Dental in Plainfield, NJ"
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
              <div className="desc-text-subtitle">Perio Protect</div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                Understanding Perio Protect
              </h2>
              <p>
                Healthy gums are the foundation of a healthy smile - but when
                gum disease develops, routine brushing and flossing aren't
                always enough. At Smiling Molar Dental, we offer Perio Protect,
                an innovative, non-surgical treatment that delivers medication
                deep below the gumline, helping combat harmful bacteria where
                toothbrushes can't reach.
              </p>
              <p>
                Patients from Plainfield (07060), North Plainfield (07062,
                07063), South Plainfield (07080), Scotch Plains (07076), and
                surrounding communities often search for "non-surgical gum
                treatment near me" and trust our skilled dental team for safe,
                effective periodontal care that fits easily into their daily
                routine.
              </p>
              {/* </Fade> */}
            </div>
          </div>
          <div className="wcu-section">
            <div className="wcu-text-section">
              {/* <Fade cascade direction="up" delay={1000} duration={600}> */}
              <div className="wcu-title">
                <h2>
                  Why Choose Smiling Molar Dental for Gum Disease Treatment
                </h2>
              </div>
              <div className="wcu-points-section">
                <ul className="wcu-points">
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> Customized,
                      Patient-Focused Solutions
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> No Surgery
                      or Injections Needed
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> Fresher
                      Breath & Healthier Gums
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> Affordable
                      & Insurance-Friendly Options
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> Convenient
                      Plainfield Location Near You
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
              How Perio Protect Improves Gum Health
            </h2>
            <p className="features-description">
              At Smiling Molar Dental, we combine personalized treatment with
              innovative technology to stop gum disease from progressing and to
              promote healthier smiles.
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
            <h2 className="faq-heading">Perio Protect FAQs</h2>
            <div className="faq-acc-container">
              <Accordion type="single" className="w-full space-y-5">
                <AccordionItem value="q1" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      How is Perio Protect different from regular brushing and
                      flossing?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Perio Protect trays deliver medication below the gumline,
                      where toothbrushes and mouth rinses can't reach, making it
                      far more effective for managing gum infections.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q2" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      How often will I need to use the trays?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Most patients wear their trays for just a few minutes
                      daily, depending on their personalized treatment plan.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q3" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Can Perio Protect replace deep cleanings?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      No. It works best as a complement to professional
                      periodontal care, helping maintain gum health between
                      visits.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q4" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Does Perio Protect help with bad breath?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Yes - by eliminating bacteria below the gumline, it often
                      significantly improves breath freshness.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q5" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Is Perio Protect covered by insurance?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Coverage varies by plan, but many insurance policies
                      provide some support. Our team will review your benefits
                      and financing options.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          <div className="features-section">
            {/* <Fade direction="up" duration={1000}> */}
            <h2 className="features-heading">
              Looking for Advanced Gum Disease Treatment in Plainfield, NJ?
            </h2>
            <p className="features-description">
              At Smiling Molar Dental, we make periodontal care simple, gentle,
              and effective with Perio Protect trays. Whether you're managing
              early signs of gum disease or looking for a non-surgical
              alternative to surgery, our team is here to help you protect your
              smile for years to come.
              <br />
              <br />
              Patients from Plainfield, North Plainfield, South Plainfield, and
              Scotch Plains trust our team for advanced gum care tailored to
              their needs.
            </p>
            {/* </Fade> */}
          </div>

          <BookCallBtn />
        </div>
      </main>
    </div>
  );
}
