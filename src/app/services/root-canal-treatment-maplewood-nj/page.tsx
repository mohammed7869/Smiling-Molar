import type { Metadata } from "next";
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
import { generateServiceMetadata } from "@/lib/metadata";

export const metadata: Metadata = generateServiceMetadata(
  "root-canal-treatment-maplewood-nj",
  "/Images/root-canal.avif"
);

export default function RootCanalClient() {
  const features = [
    {
      icon: "/Images/icons/Immediate Pain Relief.png",
      title: "Relieving Tooth Pain & Infection",
      description:
        "Root canal therapy doesn't just relieve pain - it protects your natural smile. Our approach is focused on stopping infection, restoring strength, and preventing future problems.",
      points: [
        "Comprehensive exams and X-rays to diagnose the issue",
        "Precise removal of infected or inflamed pulp",
        "Thorough cleaning and sealing of the root canals",
        "Antibiotic support and follow-ups to ensure full recovery",
      ],
    },
    {
      icon: "/Images/icons/tooth-implant.png",
      title: "Restoring Tooth Strength & Function",
      description:
        "Root canal therapy doesn't just relieve pain - it protects your natural smile. Our approach is focused on stopping infection, restoring strength, and preventing future problems.",
      points: [
        "Placement of protective fillings or custom crowns",
        "Natural-looking restorations that blend with your smile",
        "Durable results designed to withstand daily function",
        "Comfortable, fully restored bite alignment",
      ],
    },
    {
      icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
      title: "Preventing Tooth Loss",
      description:
        "Root canal therapy doesn't just relieve pain - it protects your natural smile. Our approach is focused on stopping infection, restoring strength, and preventing future problems.",
      points: [
        "Saving teeth whenever possible to avoid extractions",
        "Offering alternative solutions if a tooth cannot be preserved",
        "Long-term monitoring and personalized care plans",
        "Guidance to keep your restored tooth healthy for years",
      ],
    },
  ];
  return (
    <div className="flex min-h-screen bg-gray-50">
      <main className="details-page-container">
        <div className="details-page">
          <div className="details-page-header-section">
            <Fade direction="up" duration={1000}>
              <h1>Root Canal Treatment in Plainfield, NJ</h1>
            </Fade>
            <Fade direction="down" duration={1000}>
              <h2 className="text-center">
                Gentle & Effective Root Canal Therapy in Plainfield | Smiling
                Molar Dental
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
                    src="/Images/root-canal.avif"
                    alt="Root Canal Specialists at Smiling Molar Dental in Plainfield"
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
              <div className="desc-text-subtitle">Root Canal</div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                Understanding Root Canal Treatment
              </h2>
              <p>
                When tooth pain strikes, fast and effective treatment can make
                all the difference. At Smiling Molar Dental, we offer modern,
                comfortable root canal therapy designed to relieve pain,
                eliminate infection, and save your natural tooth.
              </p>
              <p>
                Our skilled dental team uses advanced techniques and technology
                to make the experience as smooth and stress-free as possible. We
                proudly serve patients from Plainfield (07060), North Plainfield
                (07062, 07063), South Plainfield (07080), Scotch Plains (07076),
                and nearby neighborhoods - making us a trusted local choice when
                searching for "root canal dentist near me."
              </p>
              <p>
                At Smiling Molar Dental, our focus is on comfort, precision, and
                long-term results - so you can leave your appointment pain-free
                and confident in your smile.
              </p>
              {/* </Fade> */}
            </div>
          </div>
          <div className="wcu-section">
            <div className="wcu-text-section">
              {/* <Fade cascade direction="up" delay={1000} duration={600}> */}
              <div className="wcu-title">
                <h2>
                  Why Patients Trust Smiling Molar Dental for Root Canal Care
                </h2>
              </div>
              <div className="wcu-points-section">
                <ul className="wcu-points">
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Comfortable, Pain-Relieving Treatment
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Advanced Technology for Precise Results
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Skilled Dental Professionals
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Affordable Options & Insurance Support
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
                src="/Images/about-hand.avif"
                alt="Expert Dentist at Tulip Dental Maplewood"
              />
              {/* </Zoom> */}
            </div>
          </div>
          <div className="features-section">
            {/* <Fade direction="up" duration={1000}> */}
            <h2 className="features-heading">
              Root Canal Services at Smiling Molar Dental
            </h2>
            <p className="features-description">
              Root canal therapy doesn't just relieve pain - it protects your
              natural smile. Our approach is focused on stopping infection,
              restoring strength, and preventing future problems.
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
            <h2 className="faq-heading">Root Canal Treatment FAQs</h2>
            <div className="faq-acc-container">
              <Accordion type="single" collapsible className="w-full space-y-6">
                <AccordionItem value="q1" className="faq-acc">
                  <AccordionTrigger className="faq-qn rounded-md">
                    <h3 className="text-lg">Does a root canal hurt?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans ">
                    No - root canals are designed to relieve pain, not cause it.
                    With modern anesthesia and techniques, most patients feel
                    little to no discomfort.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q2" className="faq-acc">
                  <AccordionTrigger className="faq-qn rounded-md">
                    <h3 className="text-lg">
                      How do I know if I need a root canal?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    Signs include persistent tooth pain, sensitivity to hot or
                    cold, swelling, or a darkened tooth. A dental exam and
                    X-rays confirm if treatment is needed.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q3" className="faq-acc">
                  <AccordionTrigger className="faq-qn rounded-md">
                    <h3 className="text-lg">
                      How long does a root canal take?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    Most procedures can be completed in one or two visits,
                    depending on the complexity and location of the tooth.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q4" className="faq-acc">
                  <AccordionTrigger className="faq-qn rounded-md">
                    <h3 className="text-lg">
                      What happens after the procedure?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    The tooth is restored with a filling or crown to strengthen
                    it and protect it from future damage.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q5" className="faq-acc">
                  <AccordionTrigger className="faq-qn rounded-md">
                    <h3 className="text-lg">Will my insurance cover it?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    Most dental insurance plans offer coverage for root canal
                    therapy. Our team will explain your benefits and financing
                    options before treatment begins.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          <div className="features-section">
            {/* <Fade direction="up" duration={1000}> */}
            <h2 className="features-heading">
              Looking for a Root Canal Dentist in Plainfield, NJ?
            </h2>
            <p className="features-description">
              Tooth pain and infection shouldn't wait. At Smiling Molar Dental,
              we provide gentle, effective root canal treatment to save your
              tooth, relieve pain, and restore your smile. Patients from
              Plainfield, North Plainfield, South Plainfield, Scotch Plains, and
              nearby communities trust our team for precise, compassionate care.
            </p>
            {/* </Fade> */}
          </div>
          <BookCallBtn />
        </div>
      </main>
    </div>
  );
}
