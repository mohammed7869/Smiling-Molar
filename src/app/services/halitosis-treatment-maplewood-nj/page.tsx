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
  "halitosis-treatment-maplewood-nj",
  "/Images/halitosis.avif"
);

export default function Page() {
  const features = [
    {
      icon: "/Images/icons/Immediate Pain Relief.png",
      title: "Professional Cleanings & Hygiene Support",
      description: "",
      points: [
        "Deep removal of plaque and odor-causing bacteria",
        "Prevents gum irritation and buildup",
        "Helps maintain fresh breath between visits",
        "Strengthens your daily hygiene routine",
      ],
    },
    {
      icon: "/Images/icons/Smart Treatment Decisions Under Pressure.png",
      title: "Gum Disease & Periodontal Therapy",
      description: "",
      points: [
        "Treatment for gingivitis and periodontal infection",
        "Scaling and root planing to clean below the gums",
        "Reduces inflammation and bacterial activity",
        "Prevents future oral health issues that cause bad breath",
      ],
    },
    {
      icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
      title: "Restorative & Preventive Dental Care",
      description: "",
      points: [
        "Repair of cavities and tooth decay contributing to odor",
        "Replacement of old or leaking fillings and crowns",
        "Preventive education for brushing, flossing, and diet",
        "Strategies to stop halitosis from recurring",
      ],
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <main className="details-page-container">
        <div className="details-page">
          <div className="details-page-header-section">
            <Fade direction="up" duration={1000}>
              <h1>Halitosis Treatment in Plainfield, NJ</h1>
            </Fade>
            <Fade direction="down" duration={1000}>
              <h2 className="text-center">
                Long-Lasting Fresh Breath Starts Here | Smiling Molar Dental
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
                    src="/Images/halitosis.avif"
                    alt="Halitosis treatment at Smiling Molar Dental in Plainfield"
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
              <div className="desc-text-subtitle">Halitosis</div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                Understanding Halitosis
              </h2>
              <p>
                Chronic bad breath, also known as halitosis, can affect your
                confidence and may signal underlying oral health problems. While
                mouthwash or breath mints offer temporary relief, they don’t
                address the root cause. At Smiling Molar Dental, we offer
                targeted halitosis treatments to eliminate odor-causing
                bacteria, treat gum disease, and restore a clean, healthy mouth.
              </p>
              <p>
                Patients from Plainfield (07060), North Plainfield (07062,
                07063), South Plainfield (07080), Scotch Plains (07076), and
                nearby communities trust our experienced team when searching for
                “bad breath dentist near me” for solutions that truly work.
              </p>
              {/* </Fade> */}
            </div>
          </div>
          <div className="wcu-section">
            <div className="wcu-text-section">
              {/* <Fade cascade direction="up" delay={1000} duration={600}> */}
              <div className="wcu-title">
                <h2>Why Choose Smiling Molar Dental for Halitosis Care</h2>
              </div>
              <div className="wcu-points-section">
                <ul className="wcu-points">
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> Thorough
                      Diagnostic Approach
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />{" "}
                      Personalized Treatment Plans
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> Solutions
                      That Go Beyond Masking Odor
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> Affordable,
                      Insurance-Friendly Options
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
                alt="Expert Team at Smiling Molar Dental in Plainfield"
              />
              {/* </Zoom> */}
            </div>
          </div>

          <div className="features-section">
            {/* <Fade direction="up" duration={1000}> */}
            <h2 className="features-heading">
              Halitosis Treatment Options at Smiling Molar Dental
            </h2>
            <p className="features-description">
              We combine professional in-office care with at-home strategies to
              ensure your breath stays fresh and your mouth stays healthy.
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
            <h2 className="faq-heading">Halitosis FAQs</h2>
            <div className="faq-acc-container">
              <Accordion type="single" className="w-full space-y-5">
                <AccordionItem value="q1" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      What are the most common causes of halitosis?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Gum disease, bacterial buildup on the tongue, tooth decay,
                      dry mouth, and poor oral hygiene are the most frequent
                      causes.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q2" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Can halitosis go away on its own?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      No - persistent bad breath typically requires professional
                      dental treatment to address the root cause.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q3" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      How do dentists treat halitosis?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Depending on the cause, treatment may involve deep
                      cleanings, gum therapy, cavity repair, or replacing old
                      dental work.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q4" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Does bad breath always mean gum disease?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Not always. While gum issues are common culprits, dry
                      mouth, diet, or oral infections may also play a role.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q5" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Will insurance cover halitosis treatment?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      If halitosis is linked to gum disease or tooth decay, many
                      insurance plans cover related procedures. We’ll review
                      your benefits before treatment begins.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          <div className="features-section">
            {/* <Fade direction="up" duration={1000}> */}
            <h2 className="features-heading">
              Struggling with Bad Breath in Plainfield, NJ?
            </h2>
            <p className="features-description">
              Don’t let halitosis hold you back from speaking, laughing, or
              smiling with confidence. At Smiling Molar Dental, we offer
              comprehensive bad breath treatment to restore freshness and
              protect your oral health for the long run.
              <br />
              Patients from Plainfield, North Plainfield, South Plainfield,
              Scotch Plains, and surrounding neighborhoods rely on our team for
              compassionate, effective care that delivers real results.
            </p>
            {/* </Fade> */}
          </div>

          <BookCallBtn />
        </div>
      </main>
    </div>
  );
}
