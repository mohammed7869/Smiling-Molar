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

export default function PainlessTreatmentPage() {
  const features = [
    {
      icon: "/Images/icons/Immediate Pain Relief.png",
      title: "Preventive Care That Stops Problems Early",
      description:
        "Routine checkups and gentle cleanings to avoid major treatments later with early detection of issues.",
      points: [
        "Routine checkups and gentle cleanings to avoid major treatments later",
        "Fluoride and sealants to protect against cavities",
        "Early detection of issues with digital X-rays",
        "Education to build confidence and good oral habits at home",
      ],
    },
    {
      icon: "/Images/icons/Smart Treatment Decisions Under Pressure.png",
      title: "Gentle Restorative Dentistry",
      description:
        "Tooth-colored fillings placed precisely with minimal drilling and modern techniques to preserve natural tooth structure.",
      points: [
        "Tooth-colored fillings placed precisely with minimal drilling",
        "Crowns and bridges crafted for a comfortable fit",
        "Modern techniques to preserve natural tooth structure",
        "Numbing methods that ensure you stay pain-free throughout treatment",
      ],
    },
    {
      icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
      title: "Comfortable Procedures with Modern Techniques",
      description:
        "Tooth extractions performed with care and step-by-step guidance with technology that makes procedures faster and more precise.",
      points: [
        "Tooth extractions performed with care and step-by-step guidance",
        "Root canal therapy designed to relieve pain, not cause it",
        "Technology that makes procedures faster and more precise",
        "Clear aftercare instructions to support smooth recovery",
      ],
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <main className="details-page-container">
        <div className="details-page">
          <div className="details-page-header-section">
            <Fade direction="up" duration={1000}>
              <h1>Painless Dentistry in Plainfield, NJ</h1>
            </Fade>
            <Fade direction="down" duration={1000}>
              <h2 className="text-center">
                Comfortable, Fear-Free Dental Care | Smiling Molar Dental
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
                    src="/Images/painless-treatment.avif"
                    alt="Painless Dentistry at Smiling Molar Dental in Plainfield"
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
              <div className="desc-text-subtitle">Painless Dentistry</div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                Understanding Painless Dentistry
              </h2>
              <p>
                Many patients put off visiting the dentist because they fear
                pain - but it doesn't have to be that way. At Smiling Molar
                Dental, our goal is to make every appointment comfortable,
                relaxing, and stress-free, whether it's a routine checkup or a
                more complex procedure.
              </p>
              <p>
                Using modern dental technology, gentle techniques, and a
                compassionate approach, we ensure that children and adults alike
                receive the care they need without discomfort. Patients from
                Plainfield (07060), North Plainfield (07062, 07063), South
                Plainfield (07080), Scotch Plains (07076), and surrounding areas
                frequently choose us when searching for "gentle dentist near me"
                because they trust us to prioritize their comfort every step of
                the way.
              </p>
              {/* </Fade> */}
            </div>
          </div>
          <div className="wcu-section">
            <div className="wcu-text-section">
              {/* <Fade cascade direction="up" delay={1000} duration={600}> */}
              <div className="wcu-title">
                <h2>
                  Why Choose Smiling Molar Dental for Gentle, Painless Dentistry
                </h2>
              </div>
              <div className="wcu-points-section">
                <ul className="wcu-points">
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> A Gentle
                      Touch for Every Patient
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> Advanced
                      Technology for Pain-Free Precision
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> Preventive
                      Approach to Minimize Future Discomfort
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />{" "}
                      Insurance-Friendly, Affordable Options
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> Convenient
                      Location in Plainfield, NJ
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
              Painless Dentistry Services at Smiling Molar Dental
            </h2>
            <p className="features-description">
              We combine modern dental care with a compassionate chairside
              approach to keep every procedure as comfortable as possible.
              Here's how we put your comfort first:
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
            <h2 className="faq-heading">Painless Dentistry FAQs</h2>
            <div className="faq-acc-container">
              <Accordion type="single" className="w-full space-y-5">
                <AccordionItem value="q1" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      How do you make dental treatments pain-free?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      We use gentle techniques, advanced tools, and local
                      anesthesia to make treatments virtually painless from
                      start to finish.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q2" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Can kids really have pain-free dental visits?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Yes! We specialize in making children feel comfortable
                      with a patient, kind approach that builds trust and
                      positive dental habits for life.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q3" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      What if I've avoided the dentist because of fear?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      You're not alone - many patients feel this way. Our
                      painless dentistry is designed to help you overcome that
                      fear and receive care comfortably.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q4" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Are extractions or root canals painful?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      No - with modern methods, these procedures are typically
                      painless. Many patients are surprised by how easy their
                      experience is.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q5" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Is painless dentistry more expensive?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      No. It typically costs the same as standard care, and most
                      treatments are covered by insurance. We work with you to
                      make it affordable.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          <div className="features-section">
            {/* <Fade direction="up" duration={1000}> */}
            <h2 className="features-heading">
              Looking for a Gentle, Pain-Free Dentist in Plainfield, NJ?
            </h2>
            <p className="features-description">
              At Smiling Molar Dental, your comfort is our priority. From
              routine cleanings to more advanced treatments, our painless
              dentistry approach ensures you'll receive the care you need
              without fear or stress.
              <br />
              <br />
              Patients from Plainfield, North Plainfield, South Plainfield, and
              Scotch Plains trust our friendly team to make their dental
              experience smooth and anxiety-free - so they can smile with
              confidence again.
            </p>
            {/* </Fade> */}
          </div>

          <BookCallBtn />
        </div>
      </main>
    </div>
  );
}
