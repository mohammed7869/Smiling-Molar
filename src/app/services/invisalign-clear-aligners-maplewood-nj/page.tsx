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

export default function InvisilinePage() {
  const features = [
    {
      icon: "/Images/icons/Immediate Pain Relief.png",
      title: "Invisalign for Teens & Adults",
      description:
        "Clear aligners for a discreet treatment experience that fits seamlessly into your lifestyle.",
      points: [
        "Clear aligners for a discreet treatment experience",
        "Custom trays designed to gradually shift teeth",
        "Easy to clean and maintain",
        "Regular check-ins to ensure progress stays on track",
      ],
    },
    {
      icon: "/Images/icons/Smart Treatment Decisions Under Pressure.png",
      title: "Correcting Bite & Alignment Issues",
      description:
        "Effective treatment for various orthodontic concerns with digital planning for accurate results.",
      points: [
        "Effective treatment for crowding, spacing, and bite misalignments",
        "Digital planning for accurate, efficient tooth movement",
        "Consistent pressure for gentle realignment",
        "Improved oral health along with aesthetic results",
      ],
    },
    {
      icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
      title: "Lifestyle-Friendly Orthodontics",
      description:
        "No food restrictions, comfortable fit, and removable trays perfect for busy teens and professionals.",
      points: [
        "No food restrictions - eat what you love",
        "Comfortable fit with no sharp wires or brackets",
        "Removable trays for brushing, flossing, and special occasions",
        "Perfect choice for busy teens and professionals",
      ],
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <main className="details-page-container">
        <div className="details-page">
          <div className="details-page-header-section">
            <Fade direction="up" duration={1000}>
              <h1>Invisalign in Plainfield, NJ </h1>
            </Fade>
            <Fade direction="down" duration={1000}>
              <h2 className="text-center">
                Clear Aligners for Confident Smiles | Smiling Molar Dental{" "}
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
                    src="/Images/invisalign.avif"
                    alt="Invisalign treatment at Smiling Molar Dental in Plainfield, NJ"
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
              <div className="desc-text-subtitle">Invisalign</div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                Understanding Invisalign
              </h2>
              <p>
                A straighter smile doesn't have to mean metal braces. At Smiling
                Molar Dental, we offer Invisalign® clear aligners - a modern,
                comfortable, and nearly invisible way to align your teeth and
                improve your bite. Whether you're a teen starting your
                orthodontic journey or an adult ready for a subtle
                transformation, Invisalign fits seamlessly into your daily life.
              </p>
              <p>
                Our skilled dental team uses advanced digital technology to
                design personalized Invisalign treatment plans for patients from
                Plainfield (07060), North Plainfield (07062, 07063), South
                Plainfield (07080), Scotch Plains (07076), and nearby
                communities. If you're searching for "Invisalign near me", we're
                your trusted local provider for clear, convenient orthodontic
                care.
              </p>
              {/* </Fade> */}
            </div>
          </div>
          <div className="wcu-section">
            <div className="wcu-text-section">
              {/* <Fade cascade direction="up" delay={1000} duration={600}> */}
              <div className="wcu-title">
                <h2>Why Patients Choose Smiling Molar Dental for Invisalign</h2>
              </div>
              <div className="wcu-points-section">
                <ul className="wcu-points">
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> Discreet &
                      Modern Orthodontic Option
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> Customized
                      Treatment for Every Smile
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> Experienced
                      Invisalign Providers
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> Affordable
                      & Flexible Payment Options
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
                src="/Images/top-reasons.webp"
                alt="Expert Dentist at Tulip Dental Maplewood"
              />
              {/* </Zoom> */}
            </div>
          </div>
          <div className="features-section">
            {/* <Fade direction="up" duration={1000}> */}
            <h2 className="features-heading">
              Invisalign Services at Smiling Molar Dental
            </h2>
            <p className="features-description">
              We provide Invisalign solutions designed to fit your lifestyle
              while achieving beautiful, long-lasting results.
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
            <h2 className="faq-heading">Invisalign FAQs</h2>
            <div className="faq-acc-container">
              <Accordion type="single" className="w-full space-y-5">
                <AccordionItem value="q1" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">How does Invisalign work?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Invisalign uses a series of clear, removable aligners that
                      gradually shift teeth into their ideal position over time.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q2" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">How long does treatment take?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Most Invisalign treatments take 12-18 months, depending on
                      the complexity of your case.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q3" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">Is Invisalign painful?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      You may feel slight pressure when starting a new set of
                      aligners, but it usually subsides within a few days as
                      your teeth adjust.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q4" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">Can teens get Invisalign?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Yes. Invisalign Teen is designed specifically for younger
                      patients and includes features like compliance indicators
                      to track wear time.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q5" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Is Invisalign covered by insurance?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Many dental insurance plans offer orthodontic coverage
                      that applies to Invisalign. We'll help you understand your
                      benefits and payment options before treatment begins.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          <div className="features-section">
            {/* <Fade direction="up" duration={1000}> */}
            <h2 className="features-heading">
              Ready to Straighten Your Smile with Invisalign in Plainfield, NJ?
            </h2>
            <p className="features-description">
              At Smiling Molar Dental, we make orthodontic treatment simple,
              discreet, and effective with Invisalign clear aligners. Whether
              you're a teen or adult, our customized treatment plans help you
              achieve a straighter, more confident smile without the hassle of
              traditional braces.
              <br />
              <br />
              We proudly serve patients from Plainfield, North Plainfield, South
              Plainfield, Scotch Plains, and nearby areas.
            </p>
            {/* </Fade> */}
          </div>

          <BookCallBtn />
        </div>
      </main>
    </div>
  );
}
