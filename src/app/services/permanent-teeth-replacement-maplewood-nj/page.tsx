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
      title: "Dental Implants",
      description:
        "Permanent solution for one or multiple missing teeth with titanium posts that act as strong, artificial roots.",
      points: [
        "Permanent solution for one or multiple missing teeth",
        "Titanium posts act as strong, artificial roots",
        "Custom-made crowns for a natural, seamless finish",
        "Long-lasting with proper oral care and maintenance",
      ],
    },
    {
      icon: "/Images/icons/Smart Treatment Decisions Under Pressure.png",
      title: "Dental Bridges",
      description:
        "Ideal for replacing one or more teeth in a row, anchored to nearby teeth or implants for stability.",
      points: [
        "Ideal for replacing one or more teeth in a row",
        "Anchored to nearby teeth or implants for stability",
        "Restores bite function and aesthetics",
        "Crafted to match the color and shape of your natural teeth",
      ],
    },
    {
      icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
      title: "Implant-Supported Dentures",
      description:
        "Secure alternative to traditional removable dentures that eliminates slipping, discomfort, and adhesives.",
      points: [
        "Secure alternative to traditional removable dentures",
        "Eliminates slipping, discomfort, and adhesives",
        "Restores confidence with a natural, stable feel",
        "Designed for everyday comfort and long-term reliability",
      ],
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <main className="details-page-container">
        <div className="details-page">
          <div className="details-page-header-section">
            <Fade direction="up" duration={1000}>
              <h1>Permanent Teeth Replacement in Plainfield, NJ </h1>
            </Fade>
            <Fade direction="down" duration={1000}>
              <h2 className="text-center">
                Long-Lasting Smile Restorations | Smiling Molar Dental
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
                    src="/Images/permanenet-teeth-replacement.avif"
                    alt="Permanent Teeth Replacement at Smiling Molar Dental in Plainfield, NJ"
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
                Permanent Teeth Replacement
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                Understanding Permanent Teeth Replacement
              </h2>
              <p>
                Missing teeth can affect the way you eat, speak, and smile - but
                modern dentistry offers reliable, long-term solutions to help
                you regain full confidence. At Smiling Molar Dental, we provide
                permanent teeth replacement options, including dental implants,
                bridges, and implant-supported dentures, designed to look, feel,
                and function just like natural teeth.
              </p>
              <p>
                Our experienced team creates customized treatment plans tailored
                to your needs, helping patients from Plainfield (07060), North
                Plainfield (07062, 07063), South Plainfield (07080), Scotch
                Plains (07076), and surrounding communities restore their smiles
                with lasting results.
              </p>
              <p>
                If you're searching for "permanent teeth replacement near me",
                our advanced restorative solutions are designed for comfort,
                strength, and beauty.
              </p>
              {/* </Fade> */}
            </div>
          </div>
          <div className="wcu-section">
            <div className="wcu-text-section">
              {/* <Fade cascade direction="up" delay={1000} duration={600}> */}
              <div className="wcu-title">
                <h2>
                  Why Patients Choose Smiling Molar Dental for Teeth Replacement
                </h2>
              </div>
              <div className="wcu-points-section">
                <ul className="wcu-points">
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> Multiple
                      Restorative Options to Fit Every Smile
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />{" "}
                      Natural-Looking & Durable Results
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> Experienced
                      Restorative Dental Team
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> Affordable
                      Options & Flexible Payments
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
              Teeth Replacement Options at Smiling Molar Dental
            </h2>
            <p className="features-description">
              We provide personalized solutions to restore your smile's function
              and appearance with long-lasting results.
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
            <h2 className="faq-heading">Permanent Teeth Replacement FAQs</h2>
            <div className="faq-acc-container">
              <Accordion type="single" className="w-full space-y-5">
                <AccordionItem value="q1" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      What's the best option for replacing missing teeth?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Dental implants are often considered the gold standard for
                      their durability and natural feel, but bridges and
                      implant-supported dentures are excellent alternatives
                      depending on your needs.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q2" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      How long do dental implants last?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      With proper care, dental implants can last decades - often
                      a lifetime, making them one of the most reliable
                      replacement options.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q3" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Are implant-supported dentures better than traditional
                      dentures?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Yes. Implant-supported dentures offer better stability,
                      comfort, and chewing ability compared to traditional
                      removable dentures.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q4" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">Will my new teeth look natural?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Absolutely. Our restorations are custom-designed to match
                      your natural teeth in color, shape, and size.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q5" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Does insurance cover permanent teeth replacement?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Some insurance plans offer partial coverage. We'll help
                      you maximize benefits and explore financing options to fit
                      your budget.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          <div className="features-section">
            {/* <Fade direction="up" duration={1000}> */}
            <h2 className="features-heading">
              Searching for a Lasting Tooth Replacement Solution in Plainfield,
              NJ?
            </h2>
            <p className="features-description">
              At Smiling Molar Dental, we offer permanent, natural-looking
              solutions for missing teeth - from dental implants and bridges to
              implant-supported dentures. Our team combines advanced technology
              with compassionate care to help you regain your smile, confidence,
              and quality of life.
              <br />
              <br />
              We proudly serve patients from Plainfield, North Plainfield, South
              Plainfield, Scotch Plains, and surrounding communities.
            </p>
            {/* </Fade> */}
          </div>

          <BookCallBtn />
        </div>
      </main>
    </div>
  );
}
