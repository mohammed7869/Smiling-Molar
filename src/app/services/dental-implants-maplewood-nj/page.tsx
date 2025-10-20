import type { Metadata } from "next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";
import Reveal, { Fade, Zoom } from "react-awesome-reveal";
import Link from "next/link";
import ServiceSidebar from "@/components/ServiceSidebar";
import BookCallBtn from "../book-call-btn";
import { CheckCircle } from "lucide-react";
import { generateServiceMetadata } from "@/lib/metadata";

export const metadata: Metadata = generateServiceMetadata(
  "dental-implants-maplewood-nj",
  "/Images/Dental Implants.webp"
);

export default function DentalImplantsPage() {
  const features = [
    {
      icon: "/Images/icons/tooth-implant.png",
      title: "Single & Multiple Tooth Replacements",
      description:
        "Dental implants offer permanent, secure, and natural-looking tooth replacement for a wide range of situations. Our implant services include:",
      points: [
        "Replace one or several missing teeth with secure implants",
        "Custom crowns designed to match surrounding teeth",
        "Improved bite function and comfort compared to bridges",
        "Long-lasting solution for daily use and confidence",
      ],
    },
    {
      icon: "/Images/icons/Smart Treatment Decisions Under Pressure.png",
      title: "Implant-Supported Bridges & Dentures",
      description:
        "Dental implants offer permanent, secure, and natural-looking tooth replacement for a wide range of situations. Our implant services include:",
      points: [
        "Stable alternatives to traditional removable dentures",
        "Fewer implants needed to support multiple teeth",
        "Comfortable fit with improved chewing ability",
        "No slipping, adhesives, or discomfort",
      ],
    },
    {
      icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
      title: "Bone Grafting & Surgical Support",
      description:
        "Dental implants offer permanent, secure, and natural-looking tooth replacement for a wide range of situations. Our implant services include:",
      points: [
        "Bone grafting and ridge augmentation for patients with low bone density",
        "Advanced imaging for precise surgical planning",
        "Safe, predictable implant placement techniques",
        "Full coordination from surgery through final restoration",
      ],
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <main className="details-page-container">
        <div className="details-page">
          <div className="details-page-header-section">
            <Fade direction="up" duration={1000}>
              <h1>Dental Implants in Plainfield, NJ</h1>
            </Fade>
            <Fade direction="down" duration={1000}>
              <h2 className="text-center">
                Lasting Tooth Replacement with Dental Implants | Smiling Molar
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
                    src="/Images/Dental Implants.webp"
                    alt="Dental Implants at Tulip Dental Maplewood"
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
              <div className="desc-text-subtitle">Dental Implants</div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                Understanding Dental Implants
              </h2>
              <p>
                Missing teeth can affect everything from your confidence to your
                ability to eat and speak comfortably. At Smiling Molar Dental,
                we offer modern dental implant solutions that look, feel, and
                function just like natural teeth.
              </p>
              <p>
                Whether you've lost a single tooth, multiple teeth, or require
                full-arch restoration, dental implants can provide permanent,
                stable results. Patients from Plainfield (07060), North
                Plainfield (07062, 07063), South Plainfield (07080), and Scotch
                Plains (07076) trust our skilled team when searching for "dental
                implants near me" because we combine advanced technology,
                precision, and gentle care to deliver beautiful, lasting smiles.
              </p>
              {/* </Fade> */}
            </div>
          </div>
          <div className="wcu-section">
            <div className="wcu-text-section">
              {/* <Fade cascade direction="up" delay={1000} duration={600}> */}
              <div className="wcu-title">
                <h2>Why Choose Smiling Molar Dental for Dental Implants</h2>
              </div>
              <div className="wcu-points-section">
                <ul className="wcu-points">
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Cutting-Edge Implant Technology
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Tailored Treatment Plans
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Skilled & Gentle Dental Team
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Flexible Payment & Insurance Options
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
              Dental Implant Services at Smiling Molar Dental
            </h2>
            <p className="features-description">
              Dental implants offer permanent, secure, and natural-looking tooth
              replacement for a wide range of situations. Our implant services
              include:
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
                  <p>{service.description}</p>
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
            <h2 className="faq-heading">Dental Implant FAQs</h2>
            <div className="faq-acc-container">
              <Accordion type="single" className="w-full space-y-5">
                <AccordionItem value="q1" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">What are dental implants?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Dental implants are artificial tooth roots made from
                      titanium that are surgically placed into the jawbone to
                      support a crown, bridge, or denture.
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
                      With proper care, dental implants can last 15+ years or
                      even a lifetime. They’re one of the most durable and
                      long-term solutions in restorative dentistry.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q3" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Am I a candidate for dental implants?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Most healthy adults with sufficient jawbone density are
                      good candidates. We’ll perform a full evaluation to ensure
                      you're eligible and discuss any preparation needed.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q4" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Are implants better than dentures?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Implants are more stable and function like natural teeth.
                      Unlike dentures, they don’t slip or require adhesives and
                      help prevent bone loss in the jaw.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q5" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Is the dental implant procedure painful?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      The procedure is done under anesthesia, so you’ll be
                      comfortable throughout. Most patients report minimal
                      discomfort afterward and are surprised by how easy the
                      process feels.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          <div className="features-section">
            {/* <Fade direction="up" duration={1000}> */}
            <h2 className="features-heading">
              Ready to Restore Your Smile with Dental Implants in Maplewood, NJ?
            </h2>
            <p className="features-description">
              Let Tulip Dental help you smile confidently again with
              high-quality, long-lasting dental implants. We’re here to guide
              you from consultation to complete restoration—compassionately and
              expertly.
            </p>
            {/* </Fade> */}
          </div>

          <BookCallBtn />
        </div>
      </main>
    </div>
  );
}
